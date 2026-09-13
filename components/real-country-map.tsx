"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Layers, 
  Maximize2, 
  RotateCcw, 
  Navigation,
  Globe,
  Waves,
  Sparkles
} from 'lucide-react';
import { Country, Continent } from '@/app/data/countries';
import { GEO_DATA } from '@/app/data/geo-dataset';
import { WORLD_ALL_FLAGS } from '@/app/data/world-flags-catalog';

interface NeighborData {
  id?: string;
  name: string;
  flagUrl: string;
  lat: number;
  lng: number;
  relationship: string; // e.g., "South (across English Channel)", "West border"
}

interface GeographicDetails {
  lat: number;
  lng: number;
  zoom: number;
  capitalCoords: { lat: number; lng: number };
  neighbors: NeighborData[];
  waterBodies: string[];
}

interface RealCountryMapProps {
  country?: Country;
  continent?: Continent;
  selectedCountry?: Country;
  activeContinent?: Continent;
  onSelectNeighbor?: (neighborName: string) => void;
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
  const [mapStyle, setMapStyle] = useState<'satellite' | 'topo'>('topo');
  const [mapLoaded, setMapLoaded] = useState(false);

  const getTileUrl = (style: 'satellite' | 'topo') => {
    if (style === 'satellite') {
      return 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
    }
    // Topographic default: Esri World Topo Map with clean global relief and English labels
    return 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}';
  };

      const geoInfo = GEO_DATA[country.iso2.toLowerCase()] || {};
  const geo = {
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
    waterBodies: country.location?.surroundingWaters || []
  };

  // Initialize Map Once
  useEffect(() => {
    let isMounted = true;

    async function initLeaflet() {
      if (typeof window === 'undefined' || !mapContainerRef.current) return;
      const L = (await import('leaflet')).default;

      if (!mapInstanceRef.current && mapContainerRef.current) {
        const map = L.map(mapContainerRef.current, {
          center: [geo.lat, geo.lng],
          zoom: geo.zoom,
          zoomControl: false,
          attributionControl: false,
          scrollWheelZoom: true,
        });

        // Add standard zoom control top-right
        L.control.zoom({ position: 'topright' }).addTo(map);

        // Tile layer without any API keys required
        const tileLayer = L.tileLayer(getTileUrl(mapStyle), {
          maxZoom: 19,
          subdomains: 'abcd',
          attribution: '© OpenStreetMap contributors | CARTO | Esri',
        }).addTo(map);

        const markersLayer = L.layerGroup().addTo(map);

        mapInstanceRef.current = { map, tileLayer, L };
        markersLayerRef.current = markersLayer;
        if (isMounted) setMapLoaded(true);
      }
    }

    initLeaflet();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.map.remove();
        mapInstanceRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update Tile Layer when style changes
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const { map, tileLayer, L } = mapInstanceRef.current;
    
    map.removeLayer(tileLayer);

    const newTileLayer = L.tileLayer(getTileUrl(mapStyle), {
      maxZoom: 19,
      subdomains: 'abcd',
      attribution: '© OpenStreetMap contributors | CARTO | Esri',
    }).addTo(map);

    mapInstanceRef.current.tileLayer = newTileLayer;
  }, [mapStyle]);

  // Update Markers and Center when Country Changes
  useEffect(() => {
    if (!mapInstanceRef.current || !markersLayerRef.current) return;
    const { map, L } = mapInstanceRef.current;
    const markersLayer = markersLayerRef.current;

    // Clear old markers
    markersLayer.clearLayers();

    // Fly to current country coordinates
    map.flyTo([geo.lat, geo.lng], geo.zoom, { duration: 1.2 });

    // 0. Add Glowing Visual Spotlight Circle around country location
    L.circle([geo.lat, geo.lng], {
      radius: Math.max(70000, 220000 / (geo.zoom || 5)),
      color: '#f59e0b',
      weight: 3,
      opacity: 0.95,
      fillColor: '#fbbf24',
      fillOpacity: 0.35,
      dashArray: '6, 6'
    }).addTo(markersLayer);

    L.circle([geo.lat, geo.lng], {
      radius: Math.max(120000, 380000 / (geo.zoom || 5)),
      color: '#3b82f6',
      weight: 2,
      opacity: 0.6,
      fillColor: '#60a5fa',
      fillOpacity: 0.15
    }).addTo(markersLayer);

    // 1. Create Main Selected Country Pin
    const mainCountryMarkup = `
      <div class="flex flex-col items-center group cursor-pointer">
        <div class="relative flex items-center justify-center">
          <div class="absolute w-16 h-16 rounded-full bg-amber-400/50 animate-ping"></div>
          <div class="relative bg-amber-400 p-1.5 rounded-2xl shadow-2xl border-2 border-white ring-4 ring-amber-400/80 flex items-center gap-1.5">
            <img src="${country.flagUrl}" class="w-8 h-6 object-cover rounded shadow-xs" alt="${country.name}" />
            <span class="text-xs font-black text-slate-950 pr-1">${country.name}</span>
          </div>
        </div>
        <div class="w-1 h-3 bg-amber-500 shadow-sm"></div>
        <div class="w-3 h-1.5 rounded-full bg-amber-600 shadow-sm"></div>
      </div>
    `;

    const mainIcon = L.divIcon({
      html: mainCountryMarkup,
      className: 'custom-flag-marker',
      iconSize: [140, 70],
      iconAnchor: [70, 55],
    });

    const mainMarker = L.marker([geo.lat, geo.lng], { icon: mainIcon })
      .addTo(markersLayer)
      .bindPopup(`
        <div style="text-align: center; min-width: 140px;">
          <h4 style="font-weight: 900; margin: 0; font-size: 14px; color: #0f172a;">${country.name}</h4>
          <p style="margin: 2px 0 0; font-size: 11px; font-weight: 700; color: #475569;">⭐ Capital: ${country.capital}</p>
          <span style="display: inline-block; margin-top: 4px; font-size: 10px; background: #e0e7ff; color: #3730a3; padding: 2px 8px; border-radius: 9999px; font-weight: 800;">${continent.name}</span>
        </div>
      `);
    
    // Auto-open popup after slight delay
    setTimeout(() => {
      mainMarker.openPopup();
    }, 400);

    // 2. Add Capital City Marker if coordinates differ from center
    if (geo.capitalCoords) {
      const isSameAsCenter = Math.abs(geo.capitalCoords.lat - geo.lat) < 0.01 && Math.abs(geo.capitalCoords.lng - geo.lng) < 0.01;
      const capLat = isSameAsCenter ? geo.lat + 0.3 : geo.capitalCoords.lat;
      const capLng = isSameAsCenter ? geo.lng - 0.3 : geo.capitalCoords.lng;

      const capitalMarkup = `
        <div class="bg-slate-900 text-white text-[10px] font-black px-2.5 py-1 rounded-full border-2 border-amber-400 shadow-lg flex items-center gap-1.5 whitespace-nowrap">
          <span class="text-amber-300">★</span> ${country.capital}
        </div>
      `;
      const capitalIcon = L.divIcon({
        html: capitalMarkup,
        className: 'custom-flag-marker',
        iconSize: [90, 26],
        iconAnchor: [45, 13]
      });

      L.marker([capLat, capLng], { icon: capitalIcon })
        .addTo(markersLayer)
        .bindPopup(`<b>★ Capital City:</b> ${country.capital}`);
    }

    // 3. Add Real Neighboring Country Flags & Pins
    geo.neighbors.forEach((neighbor: any) => {
      const neighborMarkup = `
        <div class="flex flex-col items-center opacity-95 hover:opacity-100 transition-transform hover:scale-110 cursor-pointer">
          <div class="bg-white/95 backdrop-blur-xs p-1 rounded-xl shadow-lg border border-slate-300 flex items-center gap-1">
            <img src="${neighbor.flagUrl}" class="w-5 h-3.5 object-cover rounded shadow-2xs" alt="${neighbor.name}" />
            <span class="text-[10px] font-extrabold text-slate-800 pr-1 whitespace-nowrap">${neighbor.name}</span>
          </div>
          <div class="w-0.5 h-2 bg-slate-400"></div>
        </div>
      `;

      const neighborIcon = L.divIcon({
        html: neighborMarkup,
        className: 'custom-flag-marker',
        iconSize: [100, 36],
        iconAnchor: [50, 30]
      });

      L.marker([neighbor.lat, neighbor.lng], { icon: neighborIcon })
        .addTo(markersLayer)
        .bindPopup(`
          <div style="min-width: 140px;">
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
              <img src="${neighbor.flagUrl}" style="width: 24px; height: 16px; object-fit: cover; border-radius: 3px;" />
              <b style="font-size: 13px; color: #0f172a;">${neighbor.name}</b>
            </div>
            <p style="margin: 0; font-size: 11px; color: #64748b; font-weight: 600;">
              📍 Position: ${neighbor.relationship}
            </p>
          </div>
        `);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country.id, geo.lat, geo.lng, geo.zoom, mapLoaded]);

  const handleRecenter = () => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.map.flyTo([geo.lat, geo.lng], geo.zoom, { duration: 0.8 });
  };

  return (
    <div className="space-y-4">
      {/* Real Map Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-50 p-2.5 rounded-2xl border border-slate-200">
        <div className="flex items-center gap-2">
          <span className="bg-indigo-600 text-white p-1.5 rounded-xl shadow-xs">
            <Globe size={16} />
          </span>
          <div>
            <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-tight">
              Real Geographic Map of {country.name}
            </h4>
            <span className="text-[10px] text-slate-500 font-bold block">
              Showing real borders, coastlines, capital, and adjacent neighbors
            </span>
          </div>
        </div>

        {/* Map Tile Switcher & Reset */}
        <div className="flex items-center gap-1.5">
          <div className="bg-white p-1 rounded-xl border border-slate-200 flex items-center gap-1 shadow-2xs">
            <button
              onClick={() => setMapStyle('topo')}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-black transition-all cursor-pointer ${
                mapStyle === 'topo'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🏔️ Topographic (Default)
            </button>
            <button
              onClick={() => setMapStyle('satellite')}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-black transition-all cursor-pointer ${
                mapStyle === 'satellite'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🛰️ Satellite
            </button>
          </div>

          <button
            onClick={handleRecenter}
            title="Re-center on country"
            className="p-1.5 bg-white text-slate-700 hover:text-indigo-600 rounded-xl border border-slate-200 shadow-2xs hover:bg-slate-50 transition-all"
          >
            <RotateCcw size={15} />
          </button>
        </div>
      </div>

      {/* Real Interactive Leaflet Map Viewport */}
      <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden border-4 border-slate-200 shadow-md bg-sky-100">
        <div ref={mapContainerRef} className="w-full h-full" />

        {/* Map Floating Badge */}
        <div className="absolute bottom-3 left-3 z-[400] bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/30 text-white shadow-lg flex items-center gap-2">
          <div className="relative w-5 h-3.5 rounded overflow-hidden shadow-2xs">
            <Image 
              src={country.flagUrl} 
              alt={country.name} 
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-[11px] font-black text-yellow-300">
            {country.name} (★ {country.capital})
          </span>
        </div>

        {/* Compass Needle */}
        <div className="absolute top-3 left-3 z-[400] bg-white/90 backdrop-blur-xs p-1.5 rounded-xl border border-slate-200 shadow-sm pointer-events-none">
          <Compass size={18} className="text-indigo-600" />
        </div>
      </div>

      {/* Adjacent Neighbors & Surrounding Seas Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Bordering / Adjacent Countries Card */}
        <div className="bg-amber-50 rounded-2xl p-3.5 border-2 border-amber-200/80">
          <h5 className="font-extrabold text-amber-950 text-xs sm:text-sm flex items-center gap-1.5 mb-2">
            <span>🤝</span> Adjacent &amp; Neighboring Countries:
          </h5>
          <div className="space-y-1.5">
            {geo.neighbors.length > 0 ? (
              geo.neighbors.map((neighbor: any, idx: number) => (
                <div 
                  key={idx}
                  onClick={() => onSelectNeighbor && onSelectNeighbor(neighbor.name)}
                  className="bg-white/90 hover:bg-amber-100/60 transition-all rounded-xl p-2 border border-amber-200 flex items-center justify-between gap-2 shadow-2xs cursor-pointer group"
                  title={`Click to view ${neighbor.name}`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="relative w-5 h-3.5 rounded overflow-hidden shadow-2xs shrink-0">
                      <Image 
                        src={neighbor.flagUrl} 
                        alt={neighbor.name} 
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-xs font-black text-slate-800 group-hover:text-amber-900 truncate">
                      {neighbor.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded-full shrink-0">
                    {neighbor.relationship}
                  </span>
                </div>
              ))
            ) : (
              <div className="bg-white/90 rounded-xl p-2.5 border border-amber-200 text-center">
                <span className="text-xs font-bold text-amber-900">
                  🏝️ Island Nation — Bordered by surrounding oceans
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Surrounding Seas & Water Bodies Card */}
        <div className="bg-sky-50 rounded-2xl p-3.5 border-2 border-sky-200/80">
          <h5 className="font-extrabold text-sky-950 text-xs sm:text-sm flex items-center gap-1.5 mb-2">
            <Waves size={16} className="text-sky-600" /> Surrounding Oceans &amp; Seas:
          </h5>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {geo.waterBodies.map((water, idx) => (
              <span 
                key={idx}
                className="bg-white text-sky-900 text-xs font-black px-2.5 py-1 rounded-xl border border-sky-300 shadow-2xs flex items-center gap-1"
              >
                🌊 {water}
              </span>
            ))}
          </div>

          <div className="bg-white/80 p-2.5 rounded-xl border border-sky-200">
            <span className="text-[11px] font-bold text-slate-700 leading-snug block">
              💡 {country.location.neighbors}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
