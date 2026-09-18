"use client";

import Image from 'next/image';
import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import L from 'leaflet';
import { 
  Compass, 
  MapPin, 
  Layers, 
  Maximize2, 
  Minimize2, 
  RotateCcw, 
  Globe, 
  Waves, 
  Droplets,
  Sparkles,
  X,
  Check,
  ExternalLink,
  Eye,
  EyeOff,
  Navigation
} from 'lucide-react';
import { Country, Continent } from '@/app/data/countries';
import { GEO_DATA } from '@/app/data/geo-dataset';
import { WORLD_ALL_FLAGS } from '@/app/data/world-flags-catalog';
import { getVerifiedCountryGeography } from '@/app/data/verified-country-geography';
import { 
  getCountryWaterBodies, 
  getCountryRivers, 
  WaterBodyFeature, 
  RiverFeature 
} from '@/app/data/country-geography-features';

export type MapStyle = 'natgeo' | 'satellite';

interface NeighborData {
  id?: string;
  name: string;
  flagUrl: string;
  lat: number;
  lng: number;
  relationship: string;
}

interface RealCountryMapProps {
  country?: Country;
  continent?: Continent;
  selectedCountry?: Country;
  activeContinent?: Continent;
  onSelectNeighbor?: (neighborName: string) => void;
}

const MAP_STYLES: { id: MapStyle; label: string; icon: string; title: string }[] = [
  { id: 'natgeo', label: 'World Map (English)', icon: '🗺️', title: 'National Geographic authoritative world reference map with all labels in English' },
  { id: 'satellite', label: 'HD Satellite', icon: '🛰️', title: 'High-resolution satellite imagery with English place names overlay' },
];

function getDirectionBadge(rel: string): { arrow: string; label: string } {
  const lower = (rel || '').toLowerCase();
  if (lower.includes('northwest')) return { arrow: '↖', label: 'NW' };
  if (lower.includes('northeast')) return { arrow: '↗', label: 'NE' };
  if (lower.includes('southwest')) return { arrow: '↙', label: 'SW' };
  if (lower.includes('southeast')) return { arrow: '↘', label: 'SE' };
  if (lower.includes('north')) return { arrow: '↑', label: 'N' };
  if (lower.includes('south')) return { arrow: '↓', label: 'S' };
  if (lower.includes('east')) return { arrow: '→', label: 'E' };
  if (lower.includes('west')) return { arrow: '←', label: 'W' };
  return { arrow: '●', label: 'Border' };
}

export function RealCountryMap({ 
  country: propCountry, 
  continent: propContinent,
  selectedCountry,
  activeContinent,
  onSelectNeighbor
}: RealCountryMapProps) {
  const country = selectedCountry || propCountry!;
  const continent = activeContinent || propContinent!;
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersLayerRef = useRef<any>(null);
  
  // 100% English, clean watermark-free global map styles
  const [mapStyle, setMapStyle] = useState<MapStyle>('natgeo');
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [showLegend, setShowLegend] = useState(false);

  // Map Indicators Visibility (Base Territory, Capital City, Neighboring Nations)
  const [layers, setLayers] = useState({
    baseCountry: true, // Selected Country Boundary & Focus
    capital: true,     // National Capital
    neighbors: true,   // Adjacent Neighboring Countries
  });

  const getTileUrl = (style: MapStyle): string => {
    switch (style) {
      case 'natgeo':
        return 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}';
      case 'satellite':
        return 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
      default:
        return 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}';
    }
  };

  const getTileOptions = (style: MapStyle) => {
    return {
      maxZoom: 18,
      attribution: style === 'natgeo'
        ? 'Tiles &copy; Esri &mdash; National Geographic, DeLorme, NAVTEQ, USGS'
        : 'Tiles &copy; Esri &mdash; DigitalGlobe, GeoEye, Earthstar Geographics',
      detectRetina: true,
    };
  };

  const geo = useMemo(() => {
    const verified = getVerifiedCountryGeography(country.iso2, WORLD_ALL_FLAGS);
    return {
      lat: country.geo?.lat ?? verified.lat,
      lng: country.geo?.lng ?? verified.lng,
      zoom: country.geo?.zoom ?? verified.zoom,
      capitalCoords: country.geo?.capitalCoords ?? verified.capitalCoords,
      neighbors: (country.location?.adjacentCountries && country.location.adjacentCountries.length > 0) 
        ? country.location.adjacentCountries 
        : verified.adjacentCountries,
      rawWaters: country.location?.surroundingWaters || []
    };
  }, [country]);

  // Compute rich geographic features
  const waterBodies: WaterBodyFeature[] = useMemo(() => {
    return getCountryWaterBodies(
      country.iso2,
      geo.lat,
      geo.lng,
      geo.rawWaters
    );
  }, [country.iso2, geo.lat, geo.lng, geo.rawWaters]);

  const majorRivers: RiverFeature[] = useMemo(() => {
    return getCountryRivers(
      country.iso2,
      geo.lat,
      geo.lng,
      country.name
    );
  }, [country.iso2, country.name, geo.lat, geo.lng]);

  // Initialize Map safely
  useEffect(() => {
    if (typeof window === 'undefined' || !mapContainerRef.current) return;

    if (!mapInstanceRef.current && mapContainerRef.current) {
      try {
        const map = L.map(mapContainerRef.current, {
          center: [geo.lat, geo.lng],
          zoom: geo.zoom,
          zoomControl: false,
          attributionControl: false,
          scrollWheelZoom: true,
        });

        // Standard zoom control top-right
        L.control.zoom({ position: 'topright' }).addTo(map);

        // Tile layer with high-definition retina support
        const tileLayer = L.tileLayer(getTileUrl(mapStyle), getTileOptions(mapStyle)).addTo(map);
        let overlayLayer: L.TileLayer | null = null;

        if (mapStyle === 'satellite') {
          overlayLayer = L.tileLayer(
            'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
            { maxZoom: 18, detectRetina: true }
          ).addTo(map);
        }

        const markersLayer = L.layerGroup().addTo(map);

        mapInstanceRef.current = { map, tileLayer, L, overlayLayer };
        markersLayerRef.current = markersLayer;

        map.whenReady(() => {
          setMapLoaded(true);
        });
      } catch (err) {
        console.error('Failed to initialize map:', err);
      }
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.map.remove();
        mapInstanceRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle Tile Style changes with English layers
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const { map, tileLayer, L, overlayLayer } = mapInstanceRef.current;
    
    if (tileLayer) map.removeLayer(tileLayer);
    if (overlayLayer) map.removeLayer(overlayLayer);

    const newTileLayer = L.tileLayer(getTileUrl(mapStyle), getTileOptions(mapStyle)).addTo(map);
    mapInstanceRef.current.tileLayer = newTileLayer;

    if (mapStyle === 'satellite') {
      const newOverlay = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 18, detectRetina: true }
      ).addTo(map);
      mapInstanceRef.current.overlayLayer = newOverlay;
    } else {
      mapInstanceRef.current.overlayLayer = null;
    }
  }, [mapStyle]);

  // Helper to wrap longitudes consistently around country center (prevents antimeridian jumps across 180°/-180°)
  const normalizeLng = useCallback((targetLng: number, baseLng: number): number => {
    let delta = targetLng - baseLng;
    while (delta > 180) delta -= 360;
    while (delta < -180) delta += 360;
    return baseLng + delta;
  }, []);

  // Compute adaptive bounding box or zoom level to ensure country center is focused and neighboring countries are in view
  const focusCountryWithNeighbors = useCallback((animate = true) => {
    if (!mapInstanceRef.current?.map) return;
    const { map, L } = mapInstanceRef.current;

    if (geo.neighbors && geo.neighbors.length > 0) {
      // Build points with country center, capital, and neighboring centroids
      const points: [number, number][] = [
        [geo.lat, geo.lng],
      ];

      if (geo.capitalCoords) {
        points.push([geo.capitalCoords.lat, normalizeLng(geo.capitalCoords.lng, geo.lng)]);
      }

      geo.neighbors.forEach((n: any) => {
        points.push([n.lat, normalizeLng(n.lng, geo.lng)]);
      });

      const bounds = L.latLngBounds(points);
      
      // Calculate zoom needed to display neighbors within viewport
      const fitZoom = map.getBoundsZoom(bounds, false, [40, 40]);
      // Balance zoom so the dealt country stays centered and neighbors are seen (partially or fully based on size)
      const targetZoom = Math.min(geo.zoom, Math.max(3, fitZoom));

      if (animate) {
        map.flyTo([geo.lat, geo.lng], targetZoom, { duration: 1.1 });
      } else {
        map.setView([geo.lat, geo.lng], targetZoom, { animate: false });
      }
    } else {
      // Island or isolated nation: focus country center with default geographic zoom
      if (animate) {
        map.flyTo([geo.lat, geo.lng], geo.zoom, { duration: 1.1 });
      } else {
        map.setView([geo.lat, geo.lng], geo.zoom, { animate: false });
      }
    }
  }, [geo.lat, geo.lng, geo.zoom, geo.capitalCoords, geo.neighbors, normalizeLng]);

  // Lock background body scroll when map is enlarged (essential for mobile)
  useEffect(() => {
    if (isEnlarged) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isEnlarged]);

  // Handle container resizing when toggling enlarged view (multi-stage pulse for mobile viewport transitions)
  useEffect(() => {
    if (mapInstanceRef.current?.map) {
      const map = mapInstanceRef.current.map;
      const triggerResize = () => {
        if (mapInstanceRef.current?.map) {
          map.invalidateSize({ animate: false });
          focusCountryWithNeighbors(false);
        }
      };
      triggerResize();
      const delays = [20, 60, 120, 250, 450, 800, 1200];
      const timers = delays.map(delay => setTimeout(triggerResize, delay));
      return () => timers.forEach(clearTimeout);
    }
  }, [isEnlarged, focusCountryWithNeighbors]);

  // ResizeObserver guarantees Leaflet re-computes dimensions upon screen rotate or layout shifts
  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => {
      if (mapInstanceRef.current?.map) {
        mapInstanceRef.current.map.invalidateSize({ animate: false });
      }
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Handle ESC key to exit enlarged mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isEnlarged) {
        setIsEnlarged(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEnlarged]);

  // Render Markers on Country or Filter Changes
  const renderMarkers = useCallback(() => {
    if (!mapInstanceRef.current || !markersLayerRef.current) return;
    const { map, L } = mapInstanceRef.current;
    const markersLayer = markersLayerRef.current;

    markersLayer.clearLayers();

    // -------------------------------------------------------------
    // Selected Country Base Focus & Territory
    // -------------------------------------------------------------
    if (layers.baseCountry) {
      // Base Visual Spotlight / Territory Radius
      L.circle([geo.lat, geo.lng], {
        radius: Math.max(80000, 240000 / (geo.zoom || 5)),
        color: '#6366f1',
        weight: 2.5,
        opacity: 0.9,
        fillColor: '#818cf8',
        fillOpacity: 0.18,
        dashArray: '5, 5'
      }).addTo(markersLayer);

      // National Center Pin (Base Focus)
      const centerMarkup = `
        <div class="flex flex-col items-center group cursor-pointer transition-transform hover:scale-105">
          <div class="flex items-center gap-1.5 bg-indigo-600/95 text-white px-2 py-1 rounded-xl shadow-lg border border-white/90">
            <img src="${country.flagUrl}" class="w-5 h-3.5 object-cover rounded-xs shadow-xs" alt="${country.name}" />
            <span class="text-xs font-semibold text-white whitespace-nowrap">${country.name}</span>
          </div>
          <div class="w-1.5 h-1.5 rotate-45 bg-indigo-600 -mt-1 shadow-xs"></div>
        </div>
      `;

      const centerIcon = L.divIcon({
        html: centerMarkup,
        className: 'custom-map-indicator',
        iconSize: [110, 36],
        iconAnchor: [55, 30],
      });

      L.marker([geo.lat, geo.lng], { icon: centerIcon, zIndexOffset: 100 })
        .addTo(markersLayer)
        .bindPopup(`
          <div style="text-align: center; min-width: 140px; padding: 2px;">
            <h4 style="font-weight: 700; margin: 0; font-size: 13px; color: #0f172a;">${country.name}</h4>
            <p style="margin: 2px 0 0; font-size: 11px; font-weight: 500; color: #475569;">★ Capital: ${country.capital}</p>
            <span style="display: inline-block; margin-top: 3px; font-size: 10px; background: #f1f5f9; color: #475569; padding: 1px 6px; border-radius: 9999px; font-weight: 500;">${continent.name}</span>
          </div>
        `);
    }

    // -------------------------------------------------------------
    // Capital City Marker (Clean Golden Star)
    // -------------------------------------------------------------
    if (layers.capital && geo.capitalCoords) {
      const isSameAsCenter = Math.abs(geo.capitalCoords.lat - geo.lat) < 0.01 && Math.abs(geo.capitalCoords.lng - geo.lng) < 0.01;
      const capLat = isSameAsCenter ? geo.lat + 0.35 : geo.capitalCoords.lat;
      const rawCapLng = isSameAsCenter ? geo.lng - 0.35 : geo.capitalCoords.lng;
      const capLng = normalizeLng(rawCapLng, geo.lng);

      const capitalMarkup = `
        <div class="group relative flex flex-col items-center cursor-pointer transition-transform hover:scale-110">
          <div class="text-base text-amber-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] select-none">★</div>
          <div class="bg-slate-900/90 backdrop-blur-xs text-amber-300 font-medium text-[9px] px-1.5 py-0.5 rounded-md shadow-xs border border-amber-400/40 whitespace-nowrap mt-0.5">
            ${country.capital}
          </div>
        </div>
      `;

      const capitalIcon = L.divIcon({
        html: capitalMarkup,
        className: 'custom-map-indicator',
        iconSize: [70, 32],
        iconAnchor: [35, 16]
      });

      L.marker([capLat, capLng], { icon: capitalIcon, zIndexOffset: 500 })
        .addTo(markersLayer)
        .bindPopup(`
          <div style="text-align: center; min-width: 130px; padding: 2px;">
            <h4 style="margin: 0; font-size: 12px; font-weight: 700; color: #0f172a;">★ ${country.capital}</h4>
            <p style="margin: 1px 0 0; font-size: 10px; color: #64748b; font-weight: 500;">National Capital of ${country.name}</p>
          </div>
        `);
    }

    // -------------------------------------------------------------
    // Neighboring Countries
    // -------------------------------------------------------------
    if (layers.neighbors && geo.neighbors.length > 0) {
      geo.neighbors.forEach((neighbor: any) => {
        const dir = getDirectionBadge(neighbor.relationship);
        const normNeighborLng = normalizeLng(neighbor.lng, geo.lng);

        const neighborMarkup = `
          <div class="group relative flex flex-col items-center cursor-pointer transition-transform hover:scale-110" data-neighbor-name="${neighbor.name}">
            <div class="flex items-center gap-1 bg-slate-900/90 text-emerald-200 px-2 py-0.5 rounded-lg shadow-md border border-emerald-500/40 text-[10px] font-medium whitespace-nowrap">
              <img src="${neighbor.flagUrl}" class="w-4 h-2.5 object-cover rounded-xs" alt="${neighbor.name}" />
              <span>${dir.arrow} ${neighbor.name}</span>
            </div>
          </div>
        `;

        const neighborIcon = L.divIcon({
          html: neighborMarkup,
          className: 'custom-map-indicator',
          iconSize: [80, 28],
          iconAnchor: [40, 14]
        });

        L.marker([neighbor.lat, normNeighborLng], { icon: neighborIcon, zIndexOffset: 250 })
          .addTo(markersLayer)
          .bindPopup(`
            <div style="min-width: 150px; padding: 4px;">
              <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
                <img src="${neighbor.flagUrl}" style="width: 24px; height: 16px; object-fit: cover; border-radius: 3px;" />
                <div>
                  <h4 style="margin: 0; font-size: 12px; font-weight: 700; color: #0f172a;">${neighbor.name}</h4>
                  <span style="font-size: 10px; font-weight: 500; color: #059669;">${neighbor.relationship}</span>
                </div>
              </div>
              <button data-neighbor-name="${neighbor.name}" style="width: 100%; padding: 5px 8px; background: #059669; color: white; border: none; border-radius: 6px; font-size: 11px; font-weight: 600; cursor: pointer;">
                Explore ${neighbor.name}
              </button>
            </div>
          `);
      });
    }

  }, [country, continent, geo, layers, normalizeLng]);

  // Update Markers and adjust focus when Country or Layers change
  useEffect(() => {
    if (!mapInstanceRef.current || !mapLoaded) return;
    renderMarkers();
    focusCountryWithNeighbors(true);
  }, [country.id, mapLoaded, layers, renderMarkers, focusCountryWithNeighbors]);

  // Handle Delegate clicks from Leaflet popups
  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return;

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-neighbor-name]') as HTMLElement | null;
      if (target) {
        const neighborName = target.getAttribute('data-neighbor-name');
        if (neighborName && onSelectNeighbor) {
          onSelectNeighbor(neighborName);
        }
      }
    };

    container.addEventListener('click', handleClick);
    return () => container.removeEventListener('click', handleClick);
  }, [onSelectNeighbor]);

  const handleRecenter = () => {
    focusCountryWithNeighbors(true);
  };

  const panToLocation = (lat: number, lng: number, zoomLevel = 8) => {
    if (!mapInstanceRef.current) return;
    let delta = lng - geo.lng;
    while (delta > 180) delta -= 360;
    while (delta < -180) delta += 360;
    const normLng = geo.lng + delta;
    mapInstanceRef.current.map.flyTo([lat, normLng], zoomLevel, { duration: 1.0 });
  };

  const toggleLayer = (key: keyof typeof layers) => {
    setLayers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Lock body scroll on mobile/desktop when enlarged
  useEffect(() => {
    if (isEnlarged) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isEnlarged]);

  return (
    <div 
      className={isEnlarged 
        ? 'fixed inset-0 top-0 left-0 w-screen h-screen min-h-[100dvh] max-h-[100dvh] z-[9999999] bg-slate-950 p-2 sm:p-4 flex flex-col overflow-hidden' 
        : 'space-y-4'
      }
      style={isEnlarged ? { height: '100dvh', width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: 9999999 } : undefined}
    >
      
      {/* Real Map Header Controls */}
      <div className={`flex items-center justify-between gap-2 p-2 sm:p-3 rounded-2xl border shadow-xs shrink-0 ${
        isEnlarged 
          ? 'bg-slate-900/95 border-slate-800 text-white' 
          : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800'
      }`}>
        <div className="flex items-center gap-2 min-w-0">
          <div className="relative w-7 sm:w-8 h-4.5 sm:h-5 rounded-md overflow-hidden shadow-xs border border-slate-300 shrink-0">
            <Image 
              src={country.flagUrl} 
              alt={country.name} 
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h4 className="font-bold text-xs sm:text-base text-slate-900 dark:text-white leading-tight truncate">
                {country.name}
              </h4>
              <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded-full shrink-0">
                ★ {country.capital}
              </span>
            </div>
          </div>
        </div>

        {/* Map Tile Switcher, Enlarge & Action Controls */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* Tile Styles Selector */}
          <div className="bg-white dark:bg-slate-800 p-0.5 sm:p-1 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-0.5 sm:gap-1 shadow-2xs">
            {MAP_STYLES.map(style => (
              <button
                key={style.id}
                onClick={() => setMapStyle(style.id)}
                title={style.title}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1 ${
                  mapStyle === style.id
                    ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <span>{style.icon}</span>
                <span className="hidden md:inline">{style.label}</span>
              </button>
            ))}
          </div>

          {/* Re-center Button */}
          <button
            onClick={handleRecenter}
            title="Re-center view on country"
            className="p-1.5 sm:p-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-indigo-600 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer"
          >
            <RotateCcw size={16} />
          </button>

          {/* Provision to Enlarge the Map (Fullscreen Theater Mode) */}
          <button
            onClick={() => setIsEnlarged(!isEnlarged)}
            title={isEnlarged ? "Exit enlarged view (Esc)" : "Enlarge map to full view"}
            className={`min-h-[38px] px-3.5 py-1.5 rounded-xl font-medium text-xs transition-all shadow-xs flex items-center gap-1.5 cursor-pointer ${
              isEnlarged 
                ? 'bg-rose-600 hover:bg-rose-700 text-white font-semibold ring-2 ring-rose-300' 
                : 'bg-indigo-600 hover:bg-indigo-700 text-white font-semibold'
            }`}
          >
            {isEnlarged ? (
              <>
                <Minimize2 size={15} />
                <span className="inline">Exit Enlarge</span>
              </>
            ) : (
              <>
                <Maximize2 size={15} />
                <span className="hidden sm:inline">Enlarge Map</span>
                <span className="sm:hidden">Enlarge</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Interactive Map Viewport */}
      <div 
        className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-slate-300 dark:border-slate-700 shadow-xl bg-slate-900 ${
          isEnlarged ? 'flex-1 min-h-0 w-full h-full' : 'h-[520px] sm:h-[600px] lg:h-[680px]'
        }`}
        style={isEnlarged ? { flex: '1 1 0%', minHeight: 0, height: '100%' } : undefined}
      >
        <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} className="absolute inset-0 w-full h-full" />

        {/* Mobile floating close button when in enlarged mode */}
        {isEnlarged && (
          <button
            onClick={() => setIsEnlarged(false)}
            title="Exit enlarged view"
            className="sm:hidden absolute top-3 right-3 z-[500] px-3.5 py-2 bg-rose-600 active:bg-rose-700 text-white text-xs font-black rounded-xl shadow-2xl border border-rose-400 flex items-center gap-1.5 cursor-pointer"
          >
            <Minimize2 size={15} />
            <span>Close Map</span>
          </button>
        )}

        {/* Loading Overlay */}
        {!mapLoaded && (
          <div className="absolute inset-0 z-[300] bg-slate-900/90 backdrop-blur-xs flex items-center justify-center text-slate-300 font-bold text-sm">
            <div className="flex items-center gap-3 bg-slate-950/80 px-4 py-3 rounded-2xl border border-slate-700 shadow-2xl">
              <div className="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
              <span>Loading English Map...</span>
            </div>
          </div>
        )}

        {/* Innovative Floating Map Legend & Guide (Sleek HUD) */}
        <div className="absolute top-3 left-3 z-[400] max-w-[280px] sm:max-w-xs">
          {!showLegend ? (
            <button
              onClick={() => setShowLegend(true)}
              className="bg-slate-950/90 hover:bg-slate-900 backdrop-blur-md px-3 py-2 rounded-2xl border border-slate-700 text-slate-200 shadow-2xl flex items-center gap-2 cursor-pointer transition-all select-none group"
              title="View Map Guide & Legend"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-amber-400 text-xs">★</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
              <span className="text-xs font-semibold">Map Guide</span>
              <Eye size={13} className="text-slate-400 group-hover:text-slate-200 ml-0.5" />
            </button>
          ) : (
            <div className="bg-slate-950/95 backdrop-blur-md rounded-2xl border border-slate-700 text-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
              {/* Legend Header */}
              <div 
                onClick={() => setShowLegend(false)}
                className="px-3 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between cursor-pointer select-none hover:bg-slate-850"
                title="Collapse map guide"
              >
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
                  <Compass size={15} className="text-indigo-400" />
                  <span>Map Guide &amp; Key</span>
                </div>
                <button className="text-slate-400 hover:text-white p-0.5">
                  <EyeOff size={14} />
                </button>
              </div>

              {/* Minimalist Legend Items */}
              <div className="p-3 space-y-2 text-xs font-medium">
                {/* Capital City Marker Indicator */}
                <div 
                  onClick={() => toggleLayer('capital')}
                  className={`flex items-center justify-between p-2 rounded-xl border transition-all cursor-pointer ${
                    layers.capital 
                      ? 'bg-amber-950/40 border-amber-500/40 text-amber-200' 
                      : 'bg-slate-900/40 border-slate-800 text-slate-500 line-through'
                  }`}
                  title="Toggle capital city marker"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 text-sm">★</span>
                    <div>
                      <span className="font-semibold block text-slate-100">{country.capital}</span>
                      <span className="text-[10px] text-amber-300/80">National Capital</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-amber-500/20 px-2 py-0.5 rounded-full text-amber-300 font-semibold">
                    {layers.capital ? 'Shown' : 'Hidden'}
                  </span>
                </div>

                {/* Country Boundary Focus Indicator */}
                <div 
                  onClick={() => toggleLayer('baseCountry')}
                  className={`flex items-center justify-between p-2 rounded-xl border transition-all cursor-pointer ${
                    layers.baseCountry 
                      ? 'bg-indigo-950/40 border-indigo-500/40 text-indigo-200' 
                      : 'bg-slate-900/40 border-slate-800 text-slate-500 line-through'
                  }`}
                  title="Toggle country boundary focus"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shrink-0"></span>
                    <div>
                      <span className="font-semibold block text-slate-100">{country.name}</span>
                      <span className="text-[10px] text-indigo-300/80">Territory Center</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-indigo-500/20 px-2 py-0.5 rounded-full text-indigo-300 font-semibold">
                    {layers.baseCountry ? 'Shown' : 'Hidden'}
                  </span>
                </div>

                {/* Adjacent Neighbors Indicator */}
                <div 
                  onClick={() => toggleLayer('neighbors')}
                  className={`flex items-center justify-between p-2 rounded-xl border transition-all cursor-pointer ${
                    layers.neighbors 
                      ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200' 
                      : 'bg-slate-900/40 border-slate-800 text-slate-500 line-through'
                  }`}
                  title="Toggle neighboring countries markers"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
                    <div>
                      <span className="font-semibold block text-slate-100">Adjacent Neighbors</span>
                      <span className="text-[10px] text-emerald-300/80">{geo.neighbors.length} Bordering Nations</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded-full text-emerald-300 font-semibold">
                    {geo.neighbors.length}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Map Floating Bottom Badge */}
        <div className="absolute bottom-3 left-3 z-[400] bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/30 text-white shadow-xl flex items-center gap-2.5">
          <div className="relative w-6 h-4 rounded overflow-hidden shadow-xs">
            <Image 
              src={country.flagUrl} 
              alt={country.name} 
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium">
            <span className="text-white font-semibold">{country.name}</span>
            <span className="text-amber-300 font-medium">★ {country.capital}</span>
          </div>
        </div>
      </div>

      {/* Geographic Details Cards (Neighbors & Waterways) - Balanced 2-Column Responsive Layout */}
      {!isEnlarged && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Bordering / Adjacent Countries Card */}
          <div className="bg-slate-900/90 rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-md flex flex-col justify-between min-h-[240px]">
            <div>
              <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-slate-800/80">
                <h5 className="font-bold text-slate-100 text-sm flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>Adjacent Neighbors</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {geo.neighbors.length}
                  </span>
                </h5>
              </div>
              
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {geo.neighbors.length > 0 ? (
                  geo.neighbors.map((neighbor: any, idx: number) => {
                    const dir = getDirectionBadge(neighbor.relationship);
                    return (
                      <div 
                        key={idx}
                        onClick={() => onSelectNeighbor && onSelectNeighbor(neighbor.name)}
                        className="bg-slate-950/80 hover:bg-emerald-950/40 transition-all rounded-xl p-2.5 border border-slate-800 hover:border-emerald-600/50 flex items-center justify-between gap-2 shadow-xs cursor-pointer group"
                        title={`Click to explore ${neighbor.name}`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="relative w-7 h-4.5 rounded overflow-hidden shadow-xs shrink-0 border border-slate-700">
                            <Image 
                              src={neighbor.flagUrl} 
                              alt="" 
                              aria-hidden="true"
                              fill
                              className="object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <span className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300 truncate">
                            {neighbor.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <span className="text-xs font-medium text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-800/60">
                            {dir.arrow} {neighbor.relationship}
                          </span>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800 text-center flex items-center justify-center min-h-[120px]">
                    <span className="text-xs font-medium text-slate-400">
                      🏝️ Island Nation — Surrounded entirely by maritime waters
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Combined Adjacent Seas, Oceans & Major Rivers Card */}
          <div className="bg-slate-900/90 rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-md flex flex-col justify-between min-h-[240px] space-y-4">
            
            {/* Adjacent Seas & Oceans Section */}
            <div>
              <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-800/80">
                <h5 className="font-bold text-slate-100 text-sm flex items-center gap-2">
                  <Waves size={16} className="text-sky-400 shrink-0" />
                  <span>Adjacent Seas &amp; Oceans</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                    {waterBodies.length}
                  </span>
                </h5>
              </div>

              {waterBodies.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {waterBodies.map((water, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-950/80 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-xl border border-sky-800/50 shadow-xs flex items-center gap-1.5"
                    >
                      <span className="text-sky-400">🌊</span>
                      <span className="font-semibold text-slate-100">{water.name}</span>
                      {water.direction && (
                        <span className="text-[10px] text-sky-300 bg-sky-950 px-1.5 py-0.5 rounded border border-sky-800/40">
                          {water.direction.split('(')[0].trim()}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-slate-950/60 rounded-xl p-2.5 border border-slate-800 text-center">
                  <span className="text-xs font-medium text-slate-400">
                    🏔️ Landlocked — No direct oceanic or sea shoreline
                  </span>
                </div>
              )}
            </div>

            {/* Major Rivers & Waterways Section */}
            <div className="pt-2 border-t border-slate-800/80">
              <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-800/80">
                <h5 className="font-bold text-slate-100 text-sm flex items-center gap-2">
                  <Droplets size={16} className="text-teal-400 shrink-0" />
                  <span>Major Rivers &amp; Waterways</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    {majorRivers.length}
                  </span>
                </h5>
              </div>

              {majorRivers.length > 0 ? (
                <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto pr-1">
                  {majorRivers.map((river, idx) => (
                    <div 
                      key={idx}
                      className="bg-slate-950/80 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-xl border border-teal-800/50 shadow-xs flex items-center gap-1.5"
                    >
                      <span className="text-teal-400 font-bold">💧</span>
                      <span className="font-semibold text-slate-100">{river.name}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-slate-950/60 rounded-xl p-2.5 border border-slate-800 text-center">
                  <span className="text-xs font-medium text-slate-400">
                    🏜️ No permanent surface rivers
                  </span>
                </div>
              )}
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
