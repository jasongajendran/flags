"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  MapPin, 
  Globe, 
  Sparkles, 
  Layers, 
  Maximize2, 
  Navigation,
  Waves
} from 'lucide-react';
import { Country, Continent, continentsData } from '@/app/data/countries';

interface WorldMapProps {
  selectedCountry: Country;
  activeContinent: Continent;
  onSelectCountry: (country: Country, continent: Continent) => void;
}

// World Map percentage coordinates for all 26 countries in the app
export interface WorldPin {
  countryId: string;
  name: string;
  continentId: string;
  flagUrl: string;
  xPercent: number; // 0% to 100% horizontally on world map SVG
  yPercent: number; // 0% to 100% vertically on world map SVG
}

export const WORLD_PINS: Record<string, { x: number; y: number }> = {
  // EUROPE (Center-North)
  uk: { x: 47.5, y: 26 },
  france: { x: 49.0, y: 31 },
  germany: { x: 51.5, y: 28 },
  italy: { x: 52.5, y: 35 },
  spain: { x: 46.5, y: 36 },
  greece: { x: 55.5, y: 37 },

  // ASIA (East)
  japan: { x: 86.5, y: 36 },
  china: { x: 77.0, y: 38 },
  india: { x: 70.0, y: 48 },
  thailand: { x: 76.5, y: 53 },
  uae: { x: 62.5, y: 46 },

  // AFRICA (Center-South)
  egypt: { x: 56.5, y: 44 },
  kenya: { x: 58.5, y: 60 },
  southafrica: { x: 54.5, y: 78 },
  madagascar: { x: 62.5, y: 70 },
  morocco: { x: 45.5, y: 41 },

  // NORTH AMERICA (West-North)
  usa: { x: 23.0, y: 34 },
  canada: { x: 21.0, y: 20 },
  mexico: { x: 20.0, y: 46 },
  jamaica: { x: 26.5, y: 49 },

  // SOUTH AMERICA (West-South)
  brazil: { x: 34.0, y: 66 },
  argentina: { x: 30.5, y: 80 },
  peru: { x: 27.5, y: 63 },

  // OCEANIA (Southeast)
  australia: { x: 84.5, y: 74 },
  newzealand: { x: 94.0, y: 84 },

  // ANTARCTICA (Far South)
  antarctic_haven: { x: 50.0, y: 94 },
  penguin_haven: { x: 65.0, y: 95 }
};

export function WorldMapView({ selectedCountry, activeContinent, onSelectCountry }: WorldMapProps) {
  const [mapMode, setMapMode] = useState<'world' | 'continent'>('world');

  // Find continent for a country ID
  const findCountryContinent = (countryId: string) => {
    for (const cont of continentsData) {
      const found = cont.countries.find(c => c.id === countryId);
      if (found) return { country: found, continent: cont };
    }
    return null;
  };

  const selectedPinCoords = WORLD_PINS[selectedCountry.id] || { x: 50, y: 50 };

  return (
    <div className="bg-white rounded-[2.5rem] p-5 shadow-lg border-4 border-indigo-100 flex flex-col gap-4">
      {/* World Map Header & View Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-2">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="bg-indigo-600 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
              <Globe size={13} className="animate-spin-slow" /> Authentic World Map
            </span>
            <span className="bg-yellow-100 text-yellow-900 text-xs font-bold px-2.5 py-0.5 rounded-full border border-yellow-300">
              📍 {selectedCountry.name} ({activeContinent.name})
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Interactive World Flag Map
          </h2>
        </div>

        {/* Toggle between Full World Map and Continent Detail View */}
        <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200 self-stretch sm:self-auto">
          <button
            onClick={() => setMapMode('world')}
            className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all ${
              mapMode === 'world'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Globe size={15} />
            Entire World Map
          </button>
          <button
            onClick={() => setMapMode('continent')}
            className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all ${
              mapMode === 'continent'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers size={15} />
            {activeContinent.name} Map
          </button>
        </div>
      </div>

      {/* Actual World Map View Canvas */}
      <div className="relative bg-gradient-to-b from-sky-400 via-sky-300 to-indigo-900 rounded-[2rem] p-2 border-4 border-sky-400 shadow-inner overflow-hidden aspect-[16/10] sm:aspect-[16/9]">
        
        {/* Geographic Grid Lines & Latitudes */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:10%_20%]"></div>
        
        {/* Equator & Prime Meridian Markers */}
        <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dashed border-yellow-300/40 pointer-events-none z-0">
          <span className="absolute left-2 -top-2.5 text-[9px] font-mono font-bold text-yellow-200 bg-sky-950/70 px-1 rounded">Equator (0°)</span>
        </div>
        <div className="absolute top-0 bottom-0 left-1/2 border-l-2 border-dashed border-yellow-300/30 pointer-events-none z-0">
          <span className="absolute top-2 left-1.5 text-[9px] font-mono font-bold text-yellow-200 bg-sky-950/70 px-1 rounded">Prime Meridian (0°)</span>
        </div>

        {/* Real World Ocean Labels */}
        <div className="absolute top-4 left-6 text-sky-100 text-[9px] sm:text-xs font-black tracking-widest opacity-80 uppercase pointer-events-none">
          🌊 Arctic Ocean
        </div>
        <div className="absolute top-1/3 left-[12%] text-sky-100 text-[10px] sm:text-xs font-black tracking-widest opacity-75 uppercase pointer-events-none">
          🌊 North Pacific Ocean
        </div>
        <div className="absolute top-1/3 left-[36%] text-sky-100 text-[10px] sm:text-xs font-black tracking-widest opacity-75 uppercase pointer-events-none">
          🌊 North Atlantic Ocean
        </div>
        <div className="absolute top-1/2 right-[18%] text-sky-100 text-[10px] sm:text-xs font-black tracking-widest opacity-75 uppercase pointer-events-none">
          🌊 Philippine &amp; East Sea
        </div>
        <div className="absolute bottom-1/4 left-[34%] text-sky-100 text-[10px] sm:text-xs font-black tracking-widest opacity-75 uppercase pointer-events-none">
          🌊 South Atlantic Ocean
        </div>
        <div className="absolute bottom-1/4 right-[28%] text-sky-100 text-[10px] sm:text-xs font-black tracking-widest opacity-75 uppercase pointer-events-none">
          🌊 Indian Ocean
        </div>
        <div className="absolute bottom-1/3 left-[8%] text-sky-100 text-[10px] sm:text-xs font-black tracking-widest opacity-75 uppercase pointer-events-none">
          🌊 South Pacific Ocean
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-cyan-200 text-[10px] sm:text-xs font-black tracking-widest opacity-90 uppercase pointer-events-none">
          🧊 Southern Ocean (Antarctica)
        </div>

        {/* SVG World Map Continent Landmasses Backdrop */}
        <svg 
          viewBox="0 0 1000 500" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-85"
        >
          {/* North America */}
          <path 
            d="M 120,40 Q 180,30 290,40 Q 340,60 330,120 Q 300,160 260,180 Q 230,220 180,240 Q 140,220 120,170 Q 100,120 120,40 Z" 
            fill="#22c55e" 
            opacity="0.75" 
            stroke="#15803d" 
            strokeWidth="3"
          />
          {/* Greenland */}
          <path 
            d="M 330,20 Q 390,15 410,40 Q 380,75 340,65 Z" 
            fill="#e0f2fe" 
            opacity="0.8" 
            stroke="#0284c7" 
            strokeWidth="2"
          />
          {/* South America */}
          <path 
            d="M 230,240 Q 320,250 380,300 Q 370,390 310,430 Q 280,420 250,340 Q 220,290 230,240 Z" 
            fill="#16a34a" 
            opacity="0.75" 
            stroke="#166534" 
            strokeWidth="3"
          />
          {/* Europe */}
          <path 
            d="M 430,90 Q 510,80 570,110 Q 560,180 500,200 Q 450,180 430,140 Z" 
            fill="#f59e0b" 
            opacity="0.75" 
            stroke="#b45309" 
            strokeWidth="3"
          />
          {/* British Isles / UK highlight */}
          <path 
            d="M 460,110 Q 480,110 480,135 Q 460,140 455,120 Z" 
            fill="#ef4444" 
            opacity="0.9" 
            stroke="#ffffff" 
            strokeWidth="2"
          />
          {/* Africa */}
          <path 
            d="M 440,190 Q 550,190 590,260 Q 580,380 520,420 Q 460,360 440,280 Z" 
            fill="#eab308" 
            opacity="0.75" 
            stroke="#a16207" 
            strokeWidth="3"
          />
          {/* Asia */}
          <path 
            d="M 570,70 Q 860,60 920,150 Q 900,260 760,280 Q 640,250 570,180 Z" 
            fill="#ec4899" 
            opacity="0.7" 
            stroke="#be185d" 
            strokeWidth="3"
          />
          {/* Japan Archipelago */}
          <path 
            d="M 860,150 Q 885,140 880,190 Q 860,180 860,150 Z" 
            fill="#ef4444" 
            opacity="0.9" 
            stroke="#ffffff" 
            strokeWidth="2"
          />
          {/* Australia & Oceania */}
          <path 
            d="M 770,330 Q 890,320 910,400 Q 850,440 770,410 Z" 
            fill="#8b5cf6" 
            opacity="0.75" 
            stroke="#6d28d9" 
            strokeWidth="3"
          />
          {/* New Zealand */}
          <path 
            d="M 925,400 Q 945,400 940,435 Q 920,430 925,400 Z" 
            fill="#a855f7" 
            opacity="0.8" 
            stroke="#ffffff" 
            strokeWidth="1.5"
          />
          {/* Antarctica */}
          <path 
            d="M 100,460 Q 500,440 900,460 Q 850,495 150,495 Z" 
            fill="#f1f5f9" 
            opacity="0.9" 
            stroke="#94a3b8" 
            strokeWidth="3"
          />
        </svg>

        {/* Selected Country Spotlight Beam & Banner */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCountry.id}
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute top-2 left-1/2 -translate-x-1/2 z-30 bg-slate-950/90 text-white backdrop-blur-md px-4 py-2 rounded-2xl border-2 border-yellow-400 shadow-xl flex items-center gap-3"
          >
            <img 
              src={selectedCountry.flagUrl} 
              alt="" 
              referrerPolicy="no-referrer"
              className="w-8 h-6 object-cover rounded shadow-md border border-white" 
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-yellow-400 font-extrabold text-xs sm:text-sm">
                  {selectedCountry.name}
                </span>
                <span className="text-[10px] bg-indigo-800 text-indigo-100 font-bold px-2 py-0.5 rounded-full">
                  {activeContinent.name}
                </span>
              </div>
              <span className="text-[11px] text-slate-300 font-medium block leading-tight">
                Capital: {selectedCountry.capital} • {selectedCountry.location.region}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pulsing Radar Ring on Selected Country Position */}
        <motion.div 
          className="absolute z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ 
            left: `${selectedPinCoords.x}%`, 
            top: `${selectedPinCoords.y}%` 
          }}
        >
          <motion.div 
            className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 border-yellow-300 bg-yellow-400/30"
            animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.7, 0.2, 0.7] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Interactive Country Flag Pins plotted on the World Map */}
        {continentsData.flatMap(continent => 
          continent.countries.map(country => {
            const coords = WORLD_PINS[country.id] || { x: 50, y: 50 };
            const isSelected = selectedCountry.id === country.id;

            return (
              <motion.button
                key={country.id}
                onClick={() => onSelectCountry(country, continent)}
                className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-transform ${
                  isSelected ? 'z-40 scale-125' : 'hover:scale-125 hover:z-30 opacity-90 hover:opacity-100'
                }`}
                style={{ 
                  left: `${coords.x}%`, 
                  top: `${coords.y}%` 
                }}
                animate={isSelected ? {
                  y: [-2, -8, -2],
                  transition: { duration: 1.2, repeat: Infinity, repeatType: "reverse" }
                } : { y: 0 }}
                aria-label={`Select ${country.name} on world map`}
              >
                <div className="flex flex-col items-center">
                  {/* Pin Flag Bubble */}
                  <div className={`p-1 rounded-xl shadow-lg border-2 transition-all flex items-center gap-1 ${
                    isSelected 
                      ? 'bg-yellow-400 border-white ring-4 ring-yellow-300/60 scale-110' 
                      : 'bg-white/90 border-slate-300 hover:bg-white'
                  }`}>
                    <img 
                      src={country.flagUrl} 
                      alt="" 
                      referrerPolicy="no-referrer"
                      className="w-6 h-4.5 sm:w-8 sm:h-5.5 object-cover rounded shadow-xs" 
                    />
                    {isSelected && (
                      <span className="text-[10px] sm:text-xs font-black text-slate-950 px-1 pr-1.5 whitespace-nowrap">
                        {country.name}
                      </span>
                    )}
                  </div>

                  {/* Pin Drop Needle */}
                  <div className={`w-1 h-3 shadow-xs ${isSelected ? 'bg-yellow-400' : 'bg-white/80'}`}></div>
                  <div className={`w-2 h-1 rounded-full ${isSelected ? 'bg-yellow-500' : 'bg-slate-700/60'}`}></div>
                </div>
              </motion.button>
            );
          })
        )}

        {/* Compass & Legend (Bottom Right) */}
        <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md p-2 rounded-2xl border border-sky-400 shadow-md z-20 flex items-center gap-2 text-white text-[10px] font-extrabold">
          <Compass size={18} className="text-yellow-300 animate-spin-slow" />
          <span>Tap any flag on the world map to explore!</span>
        </div>
      </div>

      {/* Quick World Continents Ribbon */}
      <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 pt-2 scrollbar-none">
        {continentsData.map(cont => {
          const isActive = activeContinent.id === cont.id;
          return (
            <button
              key={cont.id}
              onClick={() => onSelectCountry(cont.countries[0], cont)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span>{cont.emoji}</span>
              <span>{cont.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
