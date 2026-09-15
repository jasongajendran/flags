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
import { 
  getCountryWaterBodies, 
  getCountryRivers, 
  WaterBodyFeature, 
  RiverFeature 
} from '@/app/data/country-geography-features';

export type MapStyle = 'natgeo' | 'street' | 'topo' | 'satellite' | 'physical';

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
  { id: 'street', label: 'Global Streets', icon: '🧭', title: 'World street cartography with international place names in English' },
  { id: 'topo', label: 'Topographic Relief', icon: '🏔️', title: 'World elevation contours and terrain with English labels' },
  { id: 'satellite', label: 'HD Satellite', icon: '🛰️', title: 'High-resolution satellite imagery with English place names overlay' },
  { id: 'physical', label: 'Physical Biomes', icon: '🌍', title: 'Physical landforms, biomes, and mountain ranges in English' },
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

  // Layer Visibility Controls (Layer 0 = Base Country, Layer 1 = Neighbors, Layer 2 = Waters, Layer 3 = Rivers, Layer 4 = Capital)
  const [layers, setLayers] = useState({
    baseCountry: true, // Layer 0: Actual Selected Country
    neighbors: true,   // Layer 1: Adjacent Neighbors
    waters: true,      // Layer 2: Seas & Oceans
    rivers: true,      // Layer 3: Major Rivers
    capital: true,     // Layer 4: Capital City
  });

  const getTileUrl = (style: MapStyle): string => {
    switch (style) {
      case 'natgeo':
        return 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}';
      case 'street':
        return 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';
      case 'topo':
        return 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}';
      case 'satellite':
        return 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
      case 'physical':
        return 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}';
      default:
        return 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}';
    }
  };

  const getTileOptions = (style: MapStyle) => {
    return {
      maxZoom: 18,
      attribution: style === 'natgeo'
        ? 'Tiles &copy; Esri &mdash; National Geographic, DeLorme, NAVTEQ, USGS'
        : style === 'street'
        ? 'Tiles &copy; Esri &mdash; World Street Map'
        : style === 'topo'
        ? 'Tiles &copy; Esri &mdash; World Topographic Map'
        : style === 'satellite'
        ? 'Tiles &copy; Esri &mdash; DigitalGlobe, GeoEye, Earthstar Geographics'
        : 'Tiles &copy; Esri &mdash; US National Park Service, USGS, NOAA',
      detectRetina: true,
    };
  };

  const geo = useMemo(() => {
    const geoInfo = GEO_DATA[country.iso2.toLowerCase()] || {};
    return {
      lat: country.geo?.lat ?? geoInfo.lat ?? 51.5,
      lng: country.geo?.lng ?? geoInfo.lng ?? 0,
      zoom: country.geo?.zoom ?? geoInfo.zoom ?? 5,
      capitalCoords: country.geo?.capitalCoords ?? geoInfo.capitalCoords ?? { lat: 51.5, lng: 0 },
      neighbors: (country.location?.adjacentCountries && country.location.adjacentCountries.length > 0) 
        ? country.location.adjacentCountries 
        : (geoInfo.neighborsIso2 || []).map((iso: string) => {
            const nGeo = GEO_DATA[iso] || {};
            const catalogItem = WORLD_ALL_FLAGS.find(f => f.iso2.toLowerCase() === iso);
            return {
              name: catalogItem ? catalogItem.name : iso.toUpperCase(),
              flagUrl: catalogItem ? catalogItem.flagUrl : "https://flagcdn.com/w160/" + iso + ".png",
              lat: nGeo.lat ?? 0,
              lng: nGeo.lng ?? 0,
              relationship: "Bordering Country"
            };
          }),
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
          map.setView([geo.lat, geo.lng], map.getZoom() || geo.zoom, { animate: false });
        }
      };
      triggerResize();
      const delays = [20, 60, 120, 250, 450, 800, 1200];
      const timers = delays.map(delay => setTimeout(triggerResize, delay));
      return () => timers.forEach(clearTimeout);
    }
  }, [isEnlarged, geo.lat, geo.lng, geo.zoom]);

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

    // Helper to wrap longitudes consistently around country center (prevents antimeridian jumps across 180°/-180°)
    const normalizeLng = (targetLng: number, baseLng: number): number => {
      let delta = targetLng - baseLng;
      while (delta > 180) delta -= 360;
      while (delta < -180) delta += 360;
      return baseLng + delta;
    };

    // -------------------------------------------------------------
    // LAYER 0: Actual Selected Country (Base Layer - Foundation)
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

      // National Center Pin (Layer 0 Base Focus)
      const centerMarkup = `
        <div class="flex flex-col items-center group cursor-pointer">
          <div class="relative flex items-center justify-center">
            <div class="absolute w-12 h-12 rounded-full bg-indigo-500/40 animate-ping"></div>
            <div class="relative bg-indigo-600 text-white p-1 rounded-2xl shadow-2xl border-2 border-white ring-4 ring-indigo-400/80 flex items-center gap-1.5">
              <img src="${country.flagUrl}" class="w-7 h-5 object-cover rounded shadow-xs" alt="${country.name}" />
              <span class="text-xs font-black text-white pr-1.5">${country.name}</span>
            </div>
          </div>
          <div class="w-1 h-3 bg-indigo-500 shadow-sm"></div>
          <div class="w-2.5 h-1.5 rounded-full bg-indigo-700 shadow-sm"></div>
        </div>
      `;

      const centerIcon = L.divIcon({
        html: centerMarkup,
        className: 'custom-map-indicator',
        iconSize: [130, 60],
        iconAnchor: [65, 50],
      });

      L.marker([geo.lat, geo.lng], { icon: centerIcon, zIndexOffset: 100 })
        .addTo(markersLayer)
        .bindPopup(`
          <div style="text-align: center; min-width: 150px; padding: 2px;">
            <div style="display: inline-block; margin-bottom: 4px; font-size: 9px; background: #e0e7ff; color: #3730a3; padding: 2px 8px; border-radius: 9999px; font-weight: 800;">
              LAYER 0 • SELECTED NATION
            </div>
            <h4 style="font-weight: 900; margin: 0; font-size: 14px; color: #0f172a;">${country.name}</h4>
            <p style="margin: 3px 0 0; font-size: 11px; font-weight: 700; color: #475569;">⭐ Capital: ${country.capital}</p>
            <span style="display: inline-block; margin-top: 4px; font-size: 10px; background: #f1f5f9; color: #475569; padding: 2px 8px; border-radius: 9999px; font-weight: 700;">${continent.name}</span>
          </div>
        `);
    }

    // -------------------------------------------------------------
    // LAYER 1: Neighboring Countries (Stacked on Base Layer)
    // -------------------------------------------------------------
    if (layers.neighbors && geo.neighbors.length > 0) {
      geo.neighbors.forEach((neighbor: any) => {
        const dir = getDirectionBadge(neighbor.relationship);
        const normNeighborLng = normalizeLng(neighbor.lng, geo.lng);

        const neighborMarkup = `
          <div class="group relative flex flex-col items-center cursor-pointer transition-transform hover:scale-125" data-neighbor-name="${neighbor.name}">
            <div class="relative flex items-center justify-center">
              <div class="absolute w-8 h-8 rounded-full bg-emerald-400/40 animate-ping"></div>
              <div class="relative w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 shadow-lg border-2 border-white ring-2 ring-emerald-400 flex items-center justify-center overflow-hidden">
                <img src="${neighbor.flagUrl}" class="w-full h-full object-cover" alt="${neighbor.name}" />
              </div>
              <div class="absolute -bottom-1 -right-1 bg-emerald-700 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-white shadow">
                ${dir.arrow}
              </div>
            </div>
            <div class="bg-emerald-950/90 backdrop-blur-xs text-emerald-200 font-black text-[9px] px-1.5 py-0.5 rounded-full shadow mt-0.5 border border-emerald-500/50 whitespace-nowrap">
              ${neighbor.name}
            </div>
          </div>
        `;

        const neighborIcon = L.divIcon({
          html: neighborMarkup,
          className: 'custom-map-indicator',
          iconSize: [80, 48],
          iconAnchor: [40, 24]
        });

        L.marker([neighbor.lat, normNeighborLng], { icon: neighborIcon, zIndexOffset: 250 })
          .addTo(markersLayer)
          .bindPopup(`
            <div style="min-width: 170px; padding: 4px;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                <img src="${neighbor.flagUrl}" style="width: 28px; height: 18px; object-fit: cover; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.2);" />
                <div>
                  <span style="font-size: 9px; font-weight: 800; color: #059669; display: block;">LAYER 1 • BORDERING NEIGHBOR</span>
                  <h4 style="margin: 0; font-size: 13px; font-weight: 900; color: #0f172a;">${neighbor.name}</h4>
                  <span style="font-size: 10px; font-weight: 700; color: #059669;">🟢 ${neighbor.relationship}</span>
                </div>
              </div>
              <button data-neighbor-name="${neighbor.name}" style="width: 100%; padding: 6px 10px; background: #059669; color: white; border: none; border-radius: 8px; font-size: 11px; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <span>🧭 Explore ${neighbor.name}</span>
              </button>
            </div>
          `);
      });
    }

    // -------------------------------------------------------------
    // LAYER 2: Adjacent Oceans & Seas (Deep Azure Ripple Indicator)
    // -------------------------------------------------------------
    if (layers.waters && waterBodies.length > 0) {
      waterBodies.forEach((water) => {
        const normWaterLng = normalizeLng(water.lng, geo.lng);
        const directionSnippet = water.direction ? water.direction.split('(')[0].trim() : '';

        const waterMarkup = `
          <div class="group relative flex flex-col items-center cursor-pointer transition-transform hover:scale-125">
            <div class="relative flex items-center justify-center">
              <div class="absolute w-9 h-9 rounded-full bg-sky-400/40 animate-ping"></div>
              <div class="relative w-8 h-8 rounded-full bg-gradient-to-tr from-sky-600 to-blue-700 text-white shadow-lg border-2 border-white ring-2 ring-sky-300 flex items-center justify-center text-xs">
                🌊
              </div>
            </div>
            <div class="bg-blue-950/95 backdrop-blur-xs text-sky-200 font-black text-[9px] px-2 py-0.5 rounded-full shadow mt-0.5 border border-sky-400/60 whitespace-nowrap flex items-center gap-1">
              <span>${water.name}</span>
              ${directionSnippet ? `<span class="text-[8px] text-sky-300 font-medium">(${directionSnippet})</span>` : ''}
            </div>
          </div>
        `;

        const waterIcon = L.divIcon({
          html: waterMarkup,
          className: 'custom-map-indicator',
          iconSize: [110, 48],
          iconAnchor: [55, 24]
        });

        L.marker([water.lat, normWaterLng], { icon: waterIcon, zIndexOffset: 200 })
          .addTo(markersLayer)
          .bindPopup(`
            <div style="min-width: 180px; padding: 4px; text-align: center;">
              <span style="display: inline-block; background: #e0f2fe; color: #0369a1; font-size: 9px; font-weight: 900; padding: 2px 8px; border-radius: 9999px; margin-bottom: 4px;">
                LAYER 2 • ADJACENT ${water.type.toUpperCase()}
              </span>
              <h4 style="margin: 0 0 3px; font-size: 14px; font-weight: 900; color: #0f172a;">${water.name}</h4>
              ${water.direction ? `<p style="margin: 0 0 4px; font-size: 11px; color: #0284c7; font-weight: 700;">🧭 ${water.direction}</p>` : ''}
              <p style="margin: 0 0 4px; font-size: 11px; color: #475569; font-weight: 600;">
                ${water.description || `Major marine body of water adjacent to ${country.name}`}
              </p>
              <span style="font-size: 9px; color: #64748b; font-weight: 600;">📍 ${water.lat.toFixed(2)}°, ${water.lng.toFixed(2)}°</span>
            </div>
          `);
      });
    }

    // -------------------------------------------------------------
    // LAYER 3: Major Rivers & Waterways (Cyan Streaming Indicator)
    // -------------------------------------------------------------
    if (layers.rivers && majorRivers.length > 0) {
      majorRivers.forEach((river) => {
        const normRiverLng = normalizeLng(river.lng, geo.lng);

        const riverMarkup = `
          <div class="group relative flex flex-col items-center cursor-pointer transition-transform hover:scale-125">
            <div class="relative flex items-center justify-center">
              <div class="absolute w-7 h-7 rounded-full bg-cyan-400/40 animate-ping"></div>
              <div class="relative w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-teal-500 text-white shadow-md border-2 border-white ring-2 ring-cyan-300 flex items-center justify-center text-[11px] font-black">
                💧
              </div>
            </div>
            <div class="bg-teal-950/90 backdrop-blur-xs text-cyan-200 font-black text-[9px] px-1.5 py-0.5 rounded-full shadow mt-0.5 border border-cyan-400/50 whitespace-nowrap">
              ${river.name}
            </div>
          </div>
        `;

        const riverIcon = L.divIcon({
          html: riverMarkup,
          className: 'custom-map-indicator',
          iconSize: [80, 44],
          iconAnchor: [40, 14]
        });

        L.marker([river.lat, normRiverLng], { icon: riverIcon, zIndexOffset: 350 })
          .addTo(markersLayer)
          .bindPopup(`
            <div style="min-width: 180px; padding: 4px;">
              <span style="display: inline-block; background: #ccfbf1; color: #0f766e; font-size: 9px; font-weight: 900; padding: 2px 8px; border-radius: 9999px; margin-bottom: 4px;">
                LAYER 3 • MAJOR RIVER &amp; WATERWAY
              </span>
              <h4 style="margin: 0 0 3px; font-size: 13px; font-weight: 900; color: #0f172a;">${river.name}</h4>
              <p style="margin: 0 0 4px; font-size: 11px; color: #334155; font-weight: 600;">${river.description || ''}</p>
              ${river.significance ? `<p style="margin: 0 0 4px; font-size: 10px; color: #0d9488; font-weight: 700;">★ ${river.significance}</p>` : ''}
              <span style="font-size: 9px; color: #64748b; font-weight: 600;">📍 ${river.lat.toFixed(4)}°, ${river.lng.toFixed(4)}°</span>
            </div>
          `);
      });
    }

    // -------------------------------------------------------------
    // LAYER 4: Capital City Marker (Gold Star Top Accent)
    // -------------------------------------------------------------
    if (layers.capital && geo.capitalCoords) {
      const isSameAsCenter = Math.abs(geo.capitalCoords.lat - geo.lat) < 0.01 && Math.abs(geo.capitalCoords.lng - geo.lng) < 0.01;
      const capLat = isSameAsCenter ? geo.lat + 0.35 : geo.capitalCoords.lat;
      const rawCapLng = isSameAsCenter ? geo.lng - 0.35 : geo.capitalCoords.lng;
      const capLng = normalizeLng(rawCapLng, geo.lng);

      const capitalMarkup = `
        <div class="group relative flex flex-col items-center cursor-pointer transition-transform hover:scale-125">
          <div class="relative w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 font-black text-xs flex items-center justify-center shadow-lg border-2 border-white ring-2 ring-amber-400/90">
            ★
          </div>
          <div class="bg-slate-900/90 backdrop-blur-xs text-amber-300 font-black text-[9px] px-2 py-0.5 rounded-full shadow mt-0.5 border border-amber-400/60 whitespace-nowrap">
            ${country.capital}
          </div>
        </div>
      `;

      const capitalIcon = L.divIcon({
        html: capitalMarkup,
        className: 'custom-map-indicator',
        iconSize: [80, 40],
        iconAnchor: [40, 20]
      });

      L.marker([capLat, capLng], { icon: capitalIcon, zIndexOffset: 500 })
        .addTo(markersLayer)
        .bindPopup(`
          <div style="text-align: center; min-width: 150px; padding: 4px;">
            <span style="display: inline-block; background: #fef3c7; color: #92400e; font-size: 9px; font-weight: 900; padding: 2px 8px; border-radius: 9999px; margin-bottom: 3px;">
              LAYER 4 • NATIONAL CAPITAL
            </span>
            <h4 style="margin: 0 0 2px; font-size: 14px; font-weight: 900; color: #0f172a;">${country.capital}</h4>
            <p style="margin: 0; font-size: 11px; color: #64748b; font-weight: 600;">Seat of government of ${country.name}</p>
          </div>
        `);
    }

  }, [country, continent, geo, layers, waterBodies, majorRivers]);

  // Update Markers when Country or Layers change
  useEffect(() => {
    if (!mapInstanceRef.current || !mapLoaded) return;
    renderMarkers();
    mapInstanceRef.current.map.flyTo([geo.lat, geo.lng], geo.zoom, { duration: 1.2 });
  }, [country.id, geo.lat, geo.lng, geo.zoom, mapLoaded, layers, renderMarkers]);

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
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.map.flyTo([geo.lat, geo.lng], geo.zoom, { duration: 0.8 });
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
              <h4 className="font-extrabold text-xs sm:text-base text-slate-900 dark:text-white leading-tight truncate">
                {country.name}
              </h4>
              <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 text-[10px] font-black px-2 py-0.5 rounded-full shrink-0">
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
                className={`px-2 py-1 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center gap-1 ${
                  mapStyle === style.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-700'
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
            className={`min-h-[38px] px-3 py-1.5 rounded-xl font-black text-xs transition-all shadow-xs flex items-center gap-1.5 cursor-pointer ${
              isEnlarged 
                ? 'bg-rose-600 hover:bg-rose-700 text-white ring-2 ring-rose-300' 
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
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

        {/* Floating Interactive Legend with Layer Filters (Collapsed by default to maximize map view) */}
        <div className="absolute top-3 left-3 z-[400] max-w-[280px] sm:max-w-xs">
          {!showLegend ? (
            <button
              onClick={() => setShowLegend(true)}
              className="bg-slate-950/90 hover:bg-slate-900 backdrop-blur-md px-3 py-2 rounded-2xl border border-slate-700 text-slate-200 shadow-2xl flex items-center gap-2 cursor-pointer transition-all select-none"
              title="Expand map indicators and layers"
            >
              <Compass size={15} className="text-indigo-400" />
              <span className="text-xs font-black">Map Layers (5)</span>
              <span className="text-[10px] bg-indigo-500/30 text-indigo-300 font-bold px-1.5 py-0.5 rounded-md">
                Filters
              </span>
              <Eye size={13} className="text-slate-400 ml-0.5" />
            </button>
          ) : (
            <div className="bg-slate-950/95 backdrop-blur-md rounded-2xl border border-slate-700 text-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
              {/* Legend Header */}
              <div 
                onClick={() => setShowLegend(false)}
                className="px-3 py-2 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between cursor-pointer select-none hover:bg-slate-850"
                title="Collapse map layers"
              >
                <div className="flex items-center gap-1.5 text-xs font-black text-slate-200">
                  <Compass size={15} className="text-indigo-400" />
                  <span>Map Indicators &amp; Layers</span>
                </div>
                <button className="text-slate-400 hover:text-white p-0.5">
                  <EyeOff size={14} />
                </button>
              </div>

              {/* Collapsible Layer Toggles with Layer 0 at the base */}
              <div className="p-2.5 space-y-1.5 text-[11px] font-bold">
                {/* LAYER 0: Actual Selected Country (Base) */}
                <button
                  onClick={() => toggleLayer('baseCountry')}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl border transition-all cursor-pointer ${
                    layers.baseCountry 
                      ? 'bg-indigo-950/70 border-indigo-500/60 text-indigo-200' 
                      : 'bg-slate-900/40 border-slate-800 text-slate-500 line-through'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black bg-indigo-500 text-white px-1.5 py-0.2 rounded-md shadow-xs">
                      L0
                    </span>
                    <span className="truncate">{country.name} (Base Focus)</span>
                  </div>
                  <span className="text-[10px] bg-indigo-500/20 px-1.5 py-0.5 rounded-md text-indigo-300">
                    Primary
                  </span>
                </button>

                {/* LAYER 1: Neighboring Countries */}
                <button
                  onClick={() => toggleLayer('neighbors')}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl border transition-all cursor-pointer ${
                    layers.neighbors 
                      ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-200' 
                      : 'bg-slate-900/40 border-slate-800 text-slate-500 line-through'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black bg-emerald-600 text-white px-1.5 py-0.2 rounded-md shadow-xs">
                      L1
                    </span>
                    <span>Neighboring Countries</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded-md text-emerald-300">
                    {geo.neighbors.length}
                  </span>
                </button>

                {/* LAYER 2: Oceans & Seas */}
                <button
                  onClick={() => toggleLayer('waters')}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl border transition-all cursor-pointer ${
                    layers.waters 
                      ? 'bg-sky-950/60 border-sky-500/50 text-sky-200' 
                      : 'bg-slate-900/40 border-slate-800 text-slate-500 line-through'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black bg-sky-600 text-white px-1.5 py-0.2 rounded-md shadow-xs">
                      L2
                    </span>
                    <span>Adjacent Seas &amp; Oceans</span>
                  </div>
                  <span className="text-[10px] bg-sky-500/20 px-1.5 py-0.5 rounded-md text-sky-300">
                    {waterBodies.length > 0 ? waterBodies.length : '0 (Landlocked)'}
                  </span>
                </button>

                {/* LAYER 3: Rivers & Waterways */}
                <button
                  onClick={() => toggleLayer('rivers')}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl border transition-all cursor-pointer ${
                    layers.rivers 
                      ? 'bg-teal-950/60 border-teal-500/50 text-teal-200' 
                      : 'bg-slate-900/40 border-slate-800 text-slate-500 line-through'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black bg-teal-600 text-white px-1.5 py-0.2 rounded-md shadow-xs">
                      L3
                    </span>
                    <span>Major Rivers &amp; Waterways</span>
                  </div>
                  <span className="text-[10px] bg-teal-500/20 px-1.5 py-0.5 rounded-md text-teal-300">
                    {majorRivers.length}
                  </span>
                </button>

                {/* LAYER 4: Capital City */}
                <button
                  onClick={() => toggleLayer('capital')}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl border transition-all cursor-pointer ${
                    layers.capital 
                      ? 'bg-amber-950/60 border-amber-500/50 text-amber-200' 
                      : 'bg-slate-900/40 border-slate-800 text-slate-500 line-through'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black bg-amber-500 text-slate-950 px-1.5 py-0.2 rounded-md shadow-xs">
                      L4
                    </span>
                    <span>National Capital</span>
                  </div>
                  <span className="text-[10px] bg-amber-500/20 px-1.5 py-0.5 rounded-md text-amber-300">
                    {country.capital}
                  </span>
                </button>
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
          <div className="flex items-center gap-1.5 text-xs font-black">
            <span className="text-white">{country.name}</span>
            <span className="text-amber-400">★ {country.capital}</span>
          </div>
        </div>
      </div>

      {/* Color-Coded Geographic Details Overview (Neighbors, Waters, Rivers) - Rendered in standard mode */}
      {!isEnlarged && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          
          {/* 🟢 Bordering / Adjacent Countries Card */}
          <div className="bg-emerald-50/90 dark:bg-emerald-950/20 rounded-2xl p-4 border-2 border-emerald-200 dark:border-emerald-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-extrabold text-emerald-950 dark:text-emerald-300 text-xs sm:text-sm flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>Adjacent Neighbors ({geo.neighbors.length})</span>
                </h5>
                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded-full">
                  🟢 Layer 1
                </span>
              </div>
              
              <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                {geo.neighbors.length > 0 ? (
                  geo.neighbors.map((neighbor: any, idx: number) => {
                    const dir = getDirectionBadge(neighbor.relationship);
                    return (
                      <div 
                        key={idx}
                        onClick={() => onSelectNeighbor && onSelectNeighbor(neighbor.name)}
                        className="bg-white/95 dark:bg-slate-900/90 hover:bg-emerald-100/70 dark:hover:bg-emerald-900/40 transition-all rounded-xl p-2 border border-emerald-200/80 dark:border-emerald-800 flex items-center justify-between gap-2 shadow-2xs cursor-pointer group"
                        title={`Click to view ${neighbor.name}`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="relative w-6 h-4 rounded overflow-hidden shadow-2xs shrink-0">
                            <Image 
                              src={neighbor.flagUrl} 
                              alt={neighbor.name} 
                              fill
                              className="object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <span className="text-xs font-black text-slate-800 dark:text-slate-200 group-hover:text-emerald-900 dark:group-hover:text-emerald-300 truncate">
                            {neighbor.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <span className="text-[10px] font-black text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/70 px-2 py-0.5 rounded-full">
                            {dir.arrow} {neighbor.relationship}
                          </span>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="bg-white/90 dark:bg-slate-900/90 rounded-xl p-3 border border-emerald-200 text-center">
                    <span className="text-xs font-bold text-emerald-900 dark:text-emerald-300">
                      🏝️ Island Nation — Bordered by surrounding maritime waters
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 🔵 Surrounding Oceans & Seas Card */}
          <div className="bg-sky-50/90 dark:bg-sky-950/20 rounded-2xl p-4 border-2 border-sky-200 dark:border-sky-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-extrabold text-sky-950 dark:text-sky-300 text-xs sm:text-sm flex items-center gap-1.5">
                  <Waves size={16} className="text-sky-600 dark:text-sky-400" />
                  <span>Adjacent Seas &amp; Oceans ({waterBodies.length})</span>
                </h5>
                <span className="text-[10px] font-bold text-sky-700 dark:text-sky-400 bg-sky-100 dark:bg-sky-900/60 px-2 py-0.5 rounded-full">
                  🔵 Layer 2
                </span>
              </div>

              {waterBodies.length > 0 ? (
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {waterBodies.map((water, idx) => (
                    <button
                      key={idx}
                      onClick={() => panToLocation(water.lat, water.lng, 6)}
                      className="bg-white dark:bg-slate-900 hover:bg-sky-100 dark:hover:bg-sky-900/60 transition-colors text-sky-900 dark:text-sky-200 text-xs font-black px-2.5 py-1.5 rounded-xl border border-sky-300 dark:border-sky-700 shadow-2xs flex items-center gap-1.5 cursor-pointer"
                      title={`Click to focus on ${water.name}${water.direction ? ` (${water.direction})` : ''}`}
                    >
                      <span>🌊 {water.name}</span>
                      {water.direction && (
                        <span className="text-[10px] text-sky-600 dark:text-sky-400 font-bold bg-sky-100/70 dark:bg-sky-950 px-1.5 py-0.5 rounded">
                          {water.direction.split('(')[0].trim()}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="bg-white/90 dark:bg-slate-900/90 rounded-xl p-3 border border-sky-200 dark:border-sky-800 text-center mb-2.5">
                  <span className="text-xs font-bold text-sky-900 dark:text-sky-300">
                    🏔️ Landlocked Country — Entirely surrounded by land, no direct marine coastline or adjacent open seas.
                  </span>
                </div>
              )}
            </div>

            <div className="bg-white/80 dark:bg-slate-900/80 p-2.5 rounded-xl border border-sky-200 dark:border-sky-800">
              <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 leading-snug block">
                🗺️ {country.location.neighbors}
              </span>
            </div>
          </div>

          {/* 💧 Major Rivers & Waterways Card */}
          <div className="bg-teal-50/90 dark:bg-teal-950/20 rounded-2xl p-4 border-2 border-teal-200 dark:border-teal-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-extrabold text-teal-950 dark:text-teal-300 text-xs sm:text-sm flex items-center gap-1.5">
                  <Droplets size={16} className="text-teal-600 dark:text-teal-400" />
                  <span>Major Rivers &amp; Waterways ({majorRivers.length})</span>
                </h5>
                <span className="text-[10px] font-bold text-teal-700 dark:text-teal-400 bg-teal-100 dark:bg-teal-900/60 px-2 py-0.5 rounded-full">
                  💧 Layer 3
                </span>
              </div>

              {majorRivers.length > 0 ? (
                <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                  {majorRivers.map((river, idx) => (
                    <div 
                      key={idx}
                      onClick={() => panToLocation(river.lat, river.lng, 8.5)}
                      className="bg-white/95 dark:bg-slate-900/90 hover:bg-teal-100/70 dark:hover:bg-teal-900/40 cursor-pointer transition-all rounded-xl p-2.5 border border-teal-200/80 dark:border-teal-800 shadow-2xs group"
                      title={`Click to focus on ${river.name}`}
                    >
                      <div className="flex items-center justify-between gap-1.5 mb-1">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="text-teal-600 dark:text-teal-400 font-bold">💧</span>
                          <h6 className="text-xs font-black text-slate-900 dark:text-slate-100 group-hover:text-teal-900 dark:group-hover:text-teal-200 truncate">
                            {river.name}
                          </h6>
                        </div>
                        <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded shrink-0">
                          {river.lat.toFixed(2)}°, {river.lng.toFixed(2)}°
                        </span>
                      </div>
                      {river.description && (
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium leading-tight mb-1">
                          {river.description}
                        </p>
                      )}
                      {river.significance && (
                        <span className="inline-block text-[10px] font-bold text-teal-800 dark:text-teal-300 bg-teal-100 dark:bg-teal-900/50 px-2 py-0.5 rounded-md">
                          ★ {river.significance}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white/90 dark:bg-slate-900/90 rounded-xl p-3 border border-teal-200 dark:border-teal-800 text-center">
                  <span className="text-xs font-bold text-teal-950 dark:text-teal-300 leading-relaxed block">
                    🏜️ No permanent surface river network — Relies on deep aquifers, seasonal wadis, catchments, or desalination.
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
