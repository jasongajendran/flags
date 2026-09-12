"use client";

import { motion } from 'motion/react';
import { 
  Compass, 
  MapPin, 
  Waves, 
  Navigation, 
  Globe, 
  Sparkles, 
  Building,
  Radio
} from 'lucide-react';
import { Country, Continent } from '@/app/data/countries';

interface VisualCountryMapProps {
  country: Country;
  continent: Continent;
  onFocusMainMap?: () => void;
}

interface MapVisualData {
  capitalCoords: { top: string; left: string };
  seas: { name: string; position: string; direction: string; bg?: string }[];
  neighbors: { name: string; flag?: string; position: string; direction: string }[];
  geographicType: string; // e.g. "Island Nation", "Coastal Peninsula", "Inland Landmass"
  flightFact?: string;
  coordinates: string;
}

// Map visuals mapping for countries
const countryMapVisuals: Record<string, MapVisualData> = {
  uk: {
    geographicType: "🏝️ Island Nation (Archipelago)",
    coordinates: "55.3781° N, 3.4360° W",
    capitalCoords: { top: "68%", left: "62%" },
    flightFact: "✈️ London to Paris is only a ~1 hour flight or 2 hour high-speed train through the Channel Tunnel under the English Channel!",
    seas: [
      { name: "Atlantic Ocean", position: "top-2 left-2", direction: "Northwest", bg: "bg-blue-600/90" },
      { name: "North Sea", position: "top-4 right-4", direction: "East", bg: "bg-cyan-600/90" },
      { name: "English Channel", position: "bottom-3 right-8", direction: "South", bg: "bg-indigo-600/90" },
      { name: "Irish Sea", position: "top-1/2 left-1/4 -translate-y-1/2", direction: "West", bg: "bg-sky-600/80" }
    ],
    neighbors: [
      { name: "France", flag: "https://flagcdn.com/w160/fr.png", position: "bottom-2 right-2", direction: "South (across English Channel)" },
      { name: "Ireland", flag: "https://flagcdn.com/w160/ie.png", position: "top-1/3 left-2", direction: "West (across Irish Sea)" },
      { name: "Netherlands & Germany", flag: "https://flagcdn.com/w160/de.png", position: "top-1/3 right-2", direction: "East (across North Sea)" }
    ]
  },
  france: {
    geographicType: "🏰 Western European Mainland & Coasts",
    coordinates: "46.2276° N, 2.2137° E",
    capitalCoords: { top: "35%", left: "50%" },
    flightFact: "✈️ Paris is connected to London via the underwater Channel Tunnel!",
    seas: [
      { name: "English Channel", position: "top-2 left-1/3", direction: "North", bg: "bg-indigo-600/90" },
      { name: "Atlantic Ocean (Bay of Biscay)", position: "top-1/2 left-2", direction: "West", bg: "bg-blue-600/90" },
      { name: "Mediterranean Sea", position: "bottom-2 right-1/4", direction: "South", bg: "bg-sky-600/90" }
    ],
    neighbors: [
      { name: "United Kingdom", flag: "https://flagcdn.com/w160/gb.png", position: "top-2 left-4", direction: "North" },
      { name: "Spain", flag: "https://flagcdn.com/w160/es.png", position: "bottom-2 left-2", direction: "Southwest" },
      { name: "Germany & Italy", flag: "https://flagcdn.com/w160/de.png", position: "top-1/3 right-2", direction: "East" }
    ]
  },
  germany: {
    geographicType: "🥨 Central European Heartboard",
    coordinates: "51.1657° N, 10.4515° E",
    capitalCoords: { top: "30%", left: "75%" },
    flightFact: "✈️ Germany borders 9 different European countries!",
    seas: [
      { name: "North Sea", position: "top-2 left-4", direction: "Northwest", bg: "bg-cyan-600/90" },
      { name: "Baltic Sea", position: "top-2 right-6", direction: "Northeast", bg: "bg-blue-600/90" }
    ],
    neighbors: [
      { name: "France", flag: "https://flagcdn.com/w160/fr.png", position: "bottom-1/3 left-2", direction: "West" },
      { name: "Poland", flag: "https://flagcdn.com/w160/pl.png", position: "top-1/3 right-2", direction: "East" },
      { name: "Switzerland & Alps", flag: "https://flagcdn.com/w160/ch.png", position: "bottom-2 left-1/3", direction: "South" }
    ]
  },
  italy: {
    geographicType: "👢 Boot-Shaped Peninsula",
    coordinates: "41.8719° N, 12.5674° E",
    capitalCoords: { top: "52%", left: "50%" },
    flightFact: "✈️ Italy looks like a giant boot kicking the island of Sicily!",
    seas: [
      { name: "Tyrrhenian Sea", position: "bottom-1/3 left-4", direction: "West", bg: "bg-blue-600/90" },
      { name: "Adriatic Sea", position: "top-1/3 right-4", direction: "East", bg: "bg-cyan-600/90" },
      { name: "Mediterranean Sea", position: "bottom-2 right-1/3", direction: "South", bg: "bg-sky-600/90" }
    ],
    neighbors: [
      { name: "France & Switzerland", flag: "https://flagcdn.com/w160/fr.png", position: "top-2 left-4", direction: "North" },
      { name: "Greece", flag: "https://flagcdn.com/w160/gr.png", position: "bottom-2 right-2", direction: "Southeast" }
    ]
  },
  spain: {
    geographicType: "☀️ Iberian Peninsula",
    coordinates: "40.4637° N, 3.7492° W",
    capitalCoords: { top: "48%", left: "48%" },
    flightFact: "✈️ Spain is separated from Africa by only 14 km (8.7 miles) at the Strait of Gibraltar!",
    seas: [
      { name: "Atlantic Ocean", position: "top-1/3 left-2", direction: "West", bg: "bg-blue-600/90" },
      { name: "Bay of Biscay", position: "top-2 left-1/3", direction: "North", bg: "bg-cyan-600/90" },
      { name: "Mediterranean Sea", position: "bottom-3 right-4", direction: "East & South", bg: "bg-sky-600/90" }
    ],
    neighbors: [
      { name: "Portugal", flag: "https://flagcdn.com/w160/pt.png", position: "top-1/2 left-2", direction: "West" },
      { name: "France", flag: "https://flagcdn.com/w160/fr.png", position: "top-2 right-4", direction: "Northeast" },
      { name: "Morocco (Africa)", flag: "https://flagcdn.com/w160/ma.png", position: "bottom-2 left-1/2", direction: "South" }
    ]
  },
  greece: {
    geographicType: "🏛️ Aegean Archipelago & Peninsula",
    coordinates: "39.0742° N, 21.8243° E",
    capitalCoords: { top: "65%", left: "60%" },
    flightFact: "✈️ Greece includes over 2,000 islands in the Mediterranean!",
    seas: [
      { name: "Ionian Sea", position: "top-1/2 left-2", direction: "West", bg: "bg-blue-600/90" },
      { name: "Aegean Sea", position: "top-1/3 right-4", direction: "East", bg: "bg-cyan-600/90" },
      { name: "Mediterranean Sea", position: "bottom-2 left-1/3", direction: "South", bg: "bg-sky-600/90" }
    ],
    neighbors: [
      { name: "Italy", flag: "https://flagcdn.com/w160/it.png", position: "top-2 left-2", direction: "West" },
      { name: "Turkey", flag: "https://flagcdn.com/w160/tr.png", position: "top-2 right-2", direction: "Northeast" }
    ]
  },
  japan: {
    geographicType: "🌸 East Asian Island Arc",
    coordinates: "36.2048° N, 138.2529° E",
    capitalCoords: { top: "58%", left: "65%" },
    flightFact: "✈️ Japan is composed of 4 main giant islands and 6,800 smaller islands!",
    seas: [
      { name: "Pacific Ocean", position: "top-1/3 right-2", direction: "East", bg: "bg-blue-600/90" },
      { name: "Sea of Japan", position: "top-1/3 left-2", direction: "West", bg: "bg-cyan-600/90" },
      { name: "East China Sea", position: "bottom-2 left-4", direction: "Southwest", bg: "bg-teal-600/90" }
    ],
    neighbors: [
      { name: "South Korea", flag: "https://flagcdn.com/w160/kr.png", position: "top-1/2 left-2", direction: "West" },
      { name: "China", flag: "https://flagcdn.com/w160/cn.png", position: "bottom-2 left-2", direction: "Southwest" }
    ]
  },
  usa: {
    geographicType: "🗽 North American Continent",
    coordinates: "37.0902° N, 95.7129° W",
    capitalCoords: { top: "45%", left: "80%" },
    flightFact: "✈️ The USA stretches 4,500 km from New York on the Atlantic to Los Angeles on the Pacific!",
    seas: [
      { name: "Atlantic Ocean", position: "top-1/3 right-2", direction: "East", bg: "bg-blue-600/90" },
      { name: "Pacific Ocean", position: "top-1/3 left-2", direction: "West", bg: "bg-indigo-600/90" },
      { name: "Gulf of Mexico", position: "bottom-2 left-1/2", direction: "South", bg: "bg-teal-600/90" }
    ],
    neighbors: [
      { name: "Canada", flag: "https://flagcdn.com/w160/ca.png", position: "top-2 left-1/3", direction: "North" },
      { name: "Mexico", flag: "https://flagcdn.com/w160/mx.png", position: "bottom-2 left-4", direction: "South" }
    ]
  },
  canada: {
    geographicType: "🍁 Northern Snow & Lakes Expanse",
    coordinates: "56.1304° N, 106.3468° W",
    capitalCoords: { top: "72%", left: "75%" },
    flightFact: "✈️ Canada has the longest coastline of any nation in the world!",
    seas: [
      { name: "Atlantic Ocean", position: "top-1/2 right-2", direction: "East", bg: "bg-blue-600/90" },
      { name: "Pacific Ocean", position: "top-1/2 left-2", direction: "West", bg: "bg-indigo-600/90" },
      { name: "Arctic Ocean", position: "top-2 left-1/3", direction: "North", bg: "bg-cyan-700/90" }
    ],
    neighbors: [
      { name: "United States", flag: "https://flagcdn.com/w160/us.png", position: "bottom-2 left-1/3", direction: "South" }
    ]
  },
  egypt: {
    geographicType: "🏺 North African Nile Gateway",
    coordinates: "26.8206° N, 30.8025° E",
    capitalCoords: { top: "25%", left: "68%" },
    flightFact: "✈️ Egypt connects Africa and Asia via the famous man-made Suez Canal!",
    seas: [
      { name: "Mediterranean Sea", position: "top-2 left-1/3", direction: "North", bg: "bg-sky-600/90" },
      { name: "Red Sea", position: "top-1/3 right-2", direction: "East", bg: "bg-blue-600/90" }
    ],
    neighbors: [
      { name: "Libya", flag: "https://flagcdn.com/w160/ly.png", position: "top-1/2 left-2", direction: "West" },
      { name: "Sudan", flag: "https://flagcdn.com/w160/sd.png", position: "bottom-2 left-1/3", direction: "South" }
    ]
  },
  australia: {
    geographicType: "🦘 Continent & Island Nation",
    coordinates: "25.2744° S, 133.7751° E",
    capitalCoords: { top: "78%", left: "78%" },
    flightFact: "✈️ Australia is the only country that governs an entire continent!",
    seas: [
      { name: "Indian Ocean", position: "top-1/2 left-2", direction: "West", bg: "bg-blue-600/90" },
      { name: "Pacific Ocean / Coral Sea", position: "top-1/3 right-2", direction: "East", bg: "bg-cyan-600/90" },
      { name: "Southern Ocean", position: "bottom-2 left-1/3", direction: "South", bg: "bg-indigo-700/90" }
    ],
    neighbors: [
      { name: "New Zealand", flag: "https://flagcdn.com/w160/nz.png", position: "bottom-2 right-2", direction: "Southeast" },
      { name: "Indonesia", flag: "https://flagcdn.com/w160/id.png", position: "top-2 left-1/3", direction: "North" }
    ]
  },
  brazil: {
    geographicType: "🐆 Amazon & Atlantic South America",
    coordinates: "14.2350° S, 51.9253° W",
    capitalCoords: { top: "52%", left: "62%" },
    flightFact: "✈️ Brazil is so large it shares land borders with nearly every South American country!",
    seas: [
      { name: "Atlantic Ocean", position: "top-1/3 right-2", direction: "East", bg: "bg-blue-600/90" }
    ],
    neighbors: [
      { name: "Argentina", flag: "https://flagcdn.com/w160/ar.png", position: "bottom-2 left-1/3", direction: "South" },
      { name: "Peru", flag: "https://flagcdn.com/w160/pe.png", position: "top-1/2 left-2", direction: "West" }
    ]
  }
};

// Fallback generator for any country not explicitly listed above
function getFallbackMapVisual(country: Country, continent: Continent): MapVisualData {
  return {
    geographicType: `📍 ${continent.name} Regional Country`,
    coordinates: `${country.location.region}`,
    capitalCoords: { top: "45%", left: "55%" },
    flightFact: `✈️ ${country.name} is situated in ${country.location.region} in ${continent.name}.`,
    seas: [
      { name: "Regional Ocean / Sea", position: "top-2 right-2", direction: "Nearby Waters", bg: "bg-blue-600/90" }
    ],
    neighbors: [
      { name: country.location.neighbors, position: "bottom-2 left-2", direction: "Neighboring Borders" }
    ]
  };
}

export function VisualCountryMap({ country, continent, onFocusMainMap }: VisualCountryMapProps) {
  const mapData = countryMapVisuals[country.id] || getFallbackMapVisual(country, continent);

  return (
    <div className="space-y-4">
      {/* Top Banner info */}
      <div className="bg-sky-900 text-white rounded-2xl p-4 shadow-md border-2 border-sky-700 relative overflow-hidden">
        {/* Ambient wave pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]"></div>
        
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-yellow-400 text-slate-900 font-extrabold text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                <Navigation size={12} /> {mapData.geographicType}
              </span>
              <span className="bg-sky-800 text-sky-200 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full">
                {mapData.coordinates}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
              <Globe size={22} className="text-yellow-300 animate-spin-slow" />
              Where is {country.name}?
            </h3>
          </div>

          {onFocusMainMap && (
            <button 
              onClick={onFocusMainMap}
              className="bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-sm active:scale-95 transition-all self-end sm:self-auto"
            >
              <MapPin size={15} />
              Show on Main Board
            </button>
          )}
        </div>
      </div>

      {/* Main Visual Interactive Regional Map Card */}
      <div className="bg-gradient-to-b from-sky-200 via-sky-100 to-indigo-100 rounded-3xl p-4 sm:p-5 border-4 border-sky-300 shadow-lg relative min-h-[320px] sm:min-h-[360px] flex flex-col justify-between overflow-hidden">
        
        {/* Water Texture Overlay */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:16px_16px]"></div>

        {/* Compass Rose (Top Right) */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-2xl border-2 border-sky-300 shadow-md z-20 flex items-center gap-1.5 text-xs font-black text-slate-800">
          <Compass size={22} className="text-indigo-600 animate-spin-slow" />
          <div className="flex flex-col text-[10px] leading-tight font-extrabold text-slate-600">
            <span>N</span>
            <div className="flex gap-2">
              <span>W</span>
              <span>E</span>
            </div>
            <span>S</span>
          </div>
        </div>

        {/* Surrounding Seas Badges (Floating on map) */}
        {mapData.seas.map((sea, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className={`absolute ${sea.position} z-10`}
          >
            <div className={`${sea.bg || 'bg-blue-600/90'} text-white text-[11px] sm:text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md backdrop-blur-xs border border-white/40 flex items-center gap-1.5 animate-pulse`}>
              <Waves size={14} className="text-cyan-200" />
              <span>{sea.name}</span>
            </div>
          </motion.div>
        ))}

        {/* Central Map Canvas - Featured Country Box */}
        <div className="my-auto relative py-12 flex flex-col items-center justify-center z-10">
          
          {/* Pulsing Radar Ring around Country */}
          <motion.div 
            className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border-4 border-yellow-400/60 bg-yellow-300/20 -z-10"
            animate={{ scale: [0.95, 1.1, 0.95], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Country Central Card */}
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-5 border-4 border-indigo-500 shadow-2xl flex flex-col items-center text-center max-w-[260px] sm:max-w-[300px] relative"
          >
            {/* Country Flag & Pin */}
            <div className="relative mb-2">
              <img 
                src={country.flagUrl} 
                alt={country.name} 
                referrerPolicy="no-referrer"
                className="w-16 h-11 sm:w-20 sm:h-14 object-cover rounded-xl border-2 border-white shadow-md"
              />
              <div className="absolute -top-3 -right-3 bg-red-500 text-white p-1.5 rounded-full shadow-md animate-bounce">
                <MapPin size={18} fill="currentColor" />
              </div>
            </div>

            {/* Country Name & Region */}
            <h4 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-tight">
              {country.name}
            </h4>
            <span className="text-[11px] font-extrabold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full mt-1 border border-indigo-200">
              {continent.emoji} {continent.name} • {country.location.region}
            </span>

            {/* Capital Marker */}
            <div className="mt-3 pt-2 border-t border-slate-200 w-full flex items-center justify-center gap-1.5 text-xs font-black text-pink-600">
              <Building size={14} />
              <span>Capital: <span className="underline decoration-pink-300">{country.capital}</span> ★</span>
            </div>
          </motion.div>
        </div>

        {/* Neighboring Lands/Countries Floating Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 z-10">
          {mapData.neighbors.map((neighbor, idx) => (
            <div 
              key={idx}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-2.5 border-2 border-slate-200 shadow-xs flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2 min-w-0">
                {neighbor.flag && (
                  <img 
                    src={neighbor.flag} 
                    alt="" 
                    referrerPolicy="no-referrer"
                    className="w-6 h-4 object-cover rounded shadow-xs flex-shrink-0" 
                  />
                )}
                <span className="font-extrabold text-xs text-slate-900 truncate">
                  {neighbor.name}
                </span>
              </div>
              <span className="text-[10px] font-black bg-indigo-100 text-indigo-900 px-2 py-0.5 rounded-full flex-shrink-0">
                {neighbor.direction}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Text Context Breakdown */}
      <div className="bg-white rounded-2xl p-4 border-2 border-slate-200 space-y-2 text-xs sm:text-sm">
        <div className="flex items-start gap-2">
          <Radio size={18} className="text-indigo-600 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-extrabold text-slate-900 block">Exact Location Description:</span>
            <p className="text-slate-700 font-bold leading-relaxed">{country.location.coordinatesText}</p>
          </div>
        </div>

        <div className="flex items-start gap-2 pt-2 border-t border-slate-100">
          <Waves size={18} className="text-sky-600 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-extrabold text-slate-900 block">Surrounding Neighbors &amp; Seas:</span>
            <p className="text-slate-700 font-bold leading-relaxed">{country.location.neighbors}</p>
          </div>
        </div>

        {mapData.flightFact && (
          <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-amber-950 text-xs font-bold flex items-center gap-2 mt-2">
            <Sparkles size={16} className="text-amber-500 flex-shrink-0" />
            <span>{mapData.flightFact}</span>
          </div>
        )}
      </div>
    </div>
  );
}
