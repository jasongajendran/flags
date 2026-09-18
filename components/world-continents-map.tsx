"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Compass, Info, Check, ArrowRight, Sparkles, Navigation, Layers, Star, Zap, MapPin, ChevronDown, ChevronUp, Map } from 'lucide-react';

export interface WorldContinentsMapProps {
  activeContinentFilter: string;
  onSelectContinent: (continentName: string) => void;
  onOpenAntarctica?: () => void;
}

interface ContinentInfo {
  id: string;
  name: string;
  filterName: string;
  emoji: string;
  cartoonTitle: string;
  cartoonBadge: string;
  sizeRank: string;
  color: string;
  accentBg: string;
  gradientFrom: string;
  gradientTo: string;
  hoverColor: string;
  textColor: string;
  borderStroke: string;
  countriesCount: number;
  population: string;
  area: string;
  oceans: string;
  funFact: string;
  keyFact: string;
}

export const CONTINENTS_INFO: Record<string, ContinentInfo> = {
  north_america: {
    id: 'north_america',
    name: 'North America',
    filterName: 'North America',
    emoji: '🦅',
    cartoonTitle: 'Canyons, Tundras & Islands!',
    cartoonBadge: '3rd Largest',
    sizeRank: '3rd Largest Continent',
    color: '#fbbf24',
    accentBg: '#78350f',
    gradientFrom: '#fde68a',
    gradientTo: '#f59e0b',
    hoverColor: '#f59e0b',
    textColor: '#78350f',
    borderStroke: '#d97706',
    countriesCount: 23,
    population: '~600 Million',
    area: '24.7 Million km²',
    oceans: 'Arctic, Atlantic, Pacific',
    funFact: 'Home to the world\'s largest island (Greenland) and all major climate zones!',
    keyFact: 'Spans from tropical Caribbean coral reefs to Arctic tundras of Canada and Greenland.'
  },
  south_america: {
    id: 'south_america',
    name: 'South America',
    filterName: 'South America',
    emoji: '🦜',
    cartoonTitle: 'Rainforests & Andes Peaks!',
    cartoonBadge: '4th Largest',
    sizeRank: '4th Largest Continent',
    color: '#fb7185',
    accentBg: '#881337',
    gradientFrom: '#fda4af',
    gradientTo: '#e11d48',
    hoverColor: '#f43f5e',
    textColor: '#881337',
    borderStroke: '#be123c',
    countriesCount: 12,
    population: '~430 Million',
    area: '17.8 Million km²',
    oceans: 'Pacific, Atlantic, Caribbean',
    funFact: 'The Amazon River carries more water than the next 7 largest rivers combined!',
    keyFact: 'Home to the Amazon Rainforest, Amazon River basin, and the 7,000 km Andes Mountain range.'
  },
  europe: {
    id: 'europe',
    name: 'Europe',
    filterName: 'Europe',
    emoji: '🏰',
    cartoonTitle: 'Castles & Historic Wonders!',
    cartoonBadge: '6th Largest',
    sizeRank: '6th Largest Continent',
    color: '#4ade80',
    accentBg: '#14532d',
    gradientFrom: '#86efac',
    gradientTo: '#16a34a',
    hoverColor: '#22c55e',
    textColor: '#14532d',
    borderStroke: '#15803d',
    countriesCount: 45,
    population: '~750 Million',
    area: '10.2 Million km²',
    oceans: 'Arctic, Atlantic, Mediterranean',
    funFact: 'Boasts over 400 UNESCO World Heritage sites and 45 sovereign nations!',
    keyFact: 'Comprises 45 sovereign nations, deeply rich in world heritage, culture, and architecture.'
  },
  africa: {
    id: 'africa',
    name: 'Africa',
    filterName: 'Africa',
    emoji: '🦁',
    cartoonTitle: 'The Wild Cradle of Life!',
    cartoonBadge: '2nd Largest',
    sizeRank: '2nd Largest Continent',
    color: '#a5b4fc',
    accentBg: '#312e81',
    gradientFrom: '#c7d2fe',
    gradientTo: '#6366f1',
    hoverColor: '#818cf8',
    textColor: '#312e81',
    borderStroke: '#4f46e5',
    countriesCount: 54,
    population: '~1.4 Billion',
    area: '30.3 Million km²',
    oceans: 'Atlantic, Indian, Mediterranean',
    funFact: 'Features the world\'s longest river (Nile) and the gigantic Sahara Desert!',
    keyFact: 'Cradle of humankind with the most sovereign nations of any continent (54) and Sahara Desert.'
  },
  asia: {
    id: 'asia',
    name: 'Asia',
    filterName: 'Asia',
    emoji: '🌏',
    cartoonTitle: 'The Colossal Mega-Continent!',
    cartoonBadge: '1st Largest',
    sizeRank: '1st Largest Continent',
    color: '#fed7aa',
    accentBg: '#7c2d12',
    gradientFrom: '#ffedd5',
    gradientTo: '#ea580c',
    hoverColor: '#fb923c',
    textColor: '#7c2d12',
    borderStroke: '#c2410c',
    countriesCount: 48,
    population: '~4.7 Billion',
    area: '44.6 Million km²',
    oceans: 'Arctic, Pacific, Indian',
    funFact: 'Contains Earth\'s highest mountain (Everest, 8,848m) and lowest land point (Dead Sea)!',
    keyFact: 'Largest continent by land and population, featuring Mount Everest, Himalayas, and ancient silk routes.'
  },
  oceania: {
    id: 'oceania',
    name: 'Australia & Oceania',
    filterName: 'Oceania',
    emoji: '🦘',
    cartoonTitle: 'Coral Atolls & Red Outback!',
    cartoonBadge: '7th Largest',
    sizeRank: '7th Largest (Smallest)',
    color: '#f472b6',
    accentBg: '#831843',
    gradientFrom: '#fbcfe8',
    gradientTo: '#db2777',
    hoverColor: '#ec4899',
    textColor: '#831843',
    borderStroke: '#be185d',
    countriesCount: 14,
    population: '~45 Million',
    area: '8.5 Million km²',
    oceans: 'Pacific, Indian, Southern',
    funFact: 'The Great Barrier Reef is so vast it can be seen by astronauts in space!',
    keyFact: 'Vast Australian Outback, Great Barrier Reef, New Zealand fjords, and thousands of Pacific atolls.'
  },
  antarctica: {
    id: 'antarctica',
    name: 'Antarctica',
    filterName: 'Antarctica',
    emoji: '🐧',
    cartoonTitle: 'The Frozen Giant of Ice!',
    cartoonBadge: '5th Largest',
    sizeRank: '5th Largest Continent',
    color: '#e0f2fe',
    accentBg: '#0369a1',
    gradientFrom: '#ffffff',
    gradientTo: '#bae6fd',
    hoverColor: '#ffffff',
    textColor: '#0369a1',
    borderStroke: '#38bdf8',
    countriesCount: 0,
    population: '~1,000 - 5,000 Scientists',
    area: '14.2 Million km²',
    oceans: 'Southern Ocean',
    funFact: 'Holds 90% of Earth\'s ice and 70% of the planet\'s freshwater reserves!',
    keyFact: 'Earth’s 7th continent! 90% of all ice on Earth, protected by the 1959 Antarctic Treaty for science.'
  }
};

export function WorldContinentsMap({
  activeContinentFilter,
  onSelectContinent,
  onOpenAntarctica
}: WorldContinentsMapProps) {
  // Default to collapsed after initial page load or refresh to avoid distraction
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const [hoveredContinent, setHoveredContinent] = useState<string | null>(null);

  const getActiveContinentId = () => {
    switch (activeContinentFilter) {
      case 'North America': return 'north_america';
      case 'South America': return 'south_america';
      case 'Europe': return 'europe';
      case 'Africa': return 'africa';
      case 'Asia': return 'asia';
      case 'Oceania': return 'oceania';
      case 'Antarctica': return 'antarctica';
      default: return null;
    }
  };

  const selectedId = getActiveContinentId();
  const highlightedInfo = hoveredContinent 
    ? CONTINENTS_INFO[hoveredContinent] 
    : selectedId 
    ? CONTINENTS_INFO[selectedId] 
    : null;

  const handleContinentClick = (info: ContinentInfo) => {
    if (activeContinentFilter === info.filterName) {
      onSelectContinent('All');
    } else {
      onSelectContinent(info.filterName);
      // Auto-collapse map when a continent is selected so user can see country list
      setIsCollapsed(true);
    }
  };

  // Smart opposite positioning: ensures pop-up NEVER overlaps the user's cursor or continent under inspection!
  const getPopupPositionClass = (id?: string) => {
    if (!id) return 'top-4 left-4';
    if (id === 'asia' || id === 'oceania') {
      return 'top-3 left-3 sm:top-4 sm:left-4'; // Place in northwest when inspecting eastern continents
    }
    if (id === 'north_america' || id === 'south_america') {
      return 'top-3 right-3 sm:top-4 sm:right-4'; // Place in northeast when inspecting western continents
    }
    if (id === 'antarctica') {
      return 'top-3 left-1/2 -translate-x-1/2 sm:top-4'; // Top center for Antarctica
    }
    // Europe & Africa: placed on top-left
    return 'top-3 left-3 sm:top-4 sm:left-4';
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-4 sm:p-5 shadow-2xl overflow-hidden transition-all duration-300">
      {/* Header Bar with Collapse/Expand Toggle */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${!isCollapsed ? 'mb-4 pb-3 border-b border-slate-800/80' : ''}`}>
        <div>
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="p-1.5 bg-indigo-500/15 text-indigo-400 rounded-lg border border-indigo-500/25">
              <Globe size={18} />
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-100">
              World Continents Reference Map
            </h2>
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-900 text-sky-300 border border-slate-700/70">
              {activeContinentFilter !== 'All' ? `Filtered: ${activeContinentFilter}` : 'All 7 Continents'}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1 font-normal leading-relaxed">
            {isCollapsed 
              ? 'Map collapsed for streamlined browsing. Expand anytime to inspect Earth’s 7 continents interactively.' 
              : 'Tap or hover any continent to gauge where it sits on Earth, view size rankings & bordering oceans.'}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {activeContinentFilter !== 'All' && (
            <button
              type="button"
              onClick={() => onSelectContinent('All')}
              className="text-xs px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-medium border border-slate-700 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Show All Nations</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-xs px-3.5 py-2 rounded-xl bg-indigo-950/80 hover:bg-indigo-900 text-indigo-200 font-bold border border-indigo-700/60 shadow-sm transition-all cursor-pointer flex items-center gap-2 hover:scale-[1.02] active:scale-95"
          >
            <Map size={14} className="text-indigo-400" />
            <span>{isCollapsed ? 'Expand World Map' : 'Collapse Map'}</span>
            {isCollapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
          </button>
        </div>
      </div>

      {!isCollapsed && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* SVG Map Canvas Container */}
      <div className="relative w-full aspect-[16/9] max-h-[520px] bg-gradient-to-b from-sky-950 via-slate-950 to-slate-950 rounded-2xl overflow-hidden border border-sky-900/60 shadow-inner select-none">
        
        {/* SVG Graphic */}
        <svg 
          viewBox="0 0 1000 520" 
          className="w-full h-full object-contain"
          style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.5))' }}
        >
          <defs>
            {/* Deep Rich Ocean Gradient */}
            <radialGradient id="oceanDeepGrad" cx="50%" cy="50%" r="68%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="45%" stopColor="#0369a1" />
              <stop offset="80%" stopColor="#075985" />
              <stop offset="100%" stopColor="#0c4a6e" />
            </radialGradient>

            {/* Continent 3D Elevation Drop Shadow Filter */}
            <filter id="landShadow" x="-10%" y="-10%" width="125%" height="125%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#021424" floodOpacity="0.75" />
            </filter>

            {/* Continent Specific Gradients */}
            <linearGradient id="gradNA" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="gradGreenland" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#fde047" />
            </linearGradient>

            <linearGradient id="gradSA" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fda4af" />
              <stop offset="50%" stopColor="#fb7185" />
              <stop offset="100%" stopColor="#e11d48" />
            </linearGradient>

            <linearGradient id="gradEU" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#86efac" />
              <stop offset="50%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#16a34a" />
            </linearGradient>

            <linearGradient id="gradAF" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c7d2fe" />
              <stop offset="50%" stopColor="#a5b4fc" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>

            <linearGradient id="gradAS" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fed7aa" />
              <stop offset="50%" stopColor="#fdba74" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>

            <linearGradient id="gradOC" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbcfe8" />
              <stop offset="50%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>

            <linearGradient id="gradAN" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#f0f9ff" />
              <stop offset="80%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#bae6fd" />
            </linearGradient>
          </defs>

          {/* Outer Map Border Frame & Bezel */}
          <rect x="0" y="0" width="1000" height="520" fill="#031322" />

          {/* Ocean Background Canvas (Elliptical Global Projection) */}
          <ellipse 
            cx="500" 
            cy="260" 
            rx="492" 
            ry="252" 
            fill="url(#oceanDeepGrad)" 
            stroke="#0284c7" 
            strokeWidth="2.5"
          />

          {/* Concentric subtle ocean depth rings */}
          <ellipse cx="500" cy="260" rx="420" ry="215" fill="none" stroke="#38bdf8" strokeWidth="0.75" opacity="0.18" />
          <ellipse cx="500" cy="260" rx="340" ry="175" fill="none" stroke="#38bdf8" strokeWidth="0.75" opacity="0.14" />
          <ellipse cx="500" cy="260" rx="240" ry="120" fill="none" stroke="#38bdf8" strokeWidth="0.75" opacity="0.12" />

          {/* Graticule Grid Lines */}
          <g stroke="#e0f2fe" strokeWidth="0.75" opacity="0.28" fill="none" pointerEvents="none">
            <path d="M 100,90 Q 500,60 900,90" strokeDasharray="3 3" />
            <path d="M 35,148 Q 500,118 965,148" />
            <path d="M 15,198 Q 500,175 985,198" stroke="#fde047" strokeWidth="1" strokeDasharray="4 3" opacity="0.75" />
            <path d="M 8,260 L 992,260" stroke="#fde047" strokeWidth="1.8" opacity="0.85" />
            <path d="M 15,322 Q 500,345 985,322" stroke="#fde047" strokeWidth="1" strokeDasharray="4 3" opacity="0.75" />
            <path d="M 35,372 Q 500,402 965,372" />
            <path d="M 100,430 Q 500,460 900,430" strokeDasharray="3 3" />

            <path d="M 500,8 L 500,512" stroke="#fde047" strokeWidth="1.4" opacity="0.7" />
            <path d="M 500,8 Q 180,260 500,512" strokeDasharray="2 3" opacity="0.4" />
            <path d="M 500,8 Q 340,260 500,512" />
            <path d="M 500,8 Q 660,260 500,512" />
            <path d="M 500,8 Q 820,260 500,512" strokeDasharray="2 3" opacity="0.4" />
          </g>

          {/* Reference Geographic Labels */}
          <g fontSize="9" fontFamily="sans-serif" fill="#f8fafc" fontWeight="500" opacity="0.75" pointerEvents="none">
            <text x="504" y="254" fill="#fde047" fontSize="8.5" fontWeight="700">Equator (0°)</text>
            <text x="504" y="22" fill="#fde047" fontSize="8.5" fontWeight="700">0° Prime Meridian</text>
            <text x="130" y="142" opacity="0.6">45° N</text>
            <text x="870" y="142" opacity="0.6">45° N</text>
            <text x="130" y="380" opacity="0.6">45° S</text>
            <text x="870" y="380" opacity="0.6">45° S</text>
            <text x="28" y="208" fill="#fde047" opacity="0.65" fontSize="7.5">Tropic of Cancer</text>
            <text x="28" y="332" fill="#fde047" opacity="0.65" fontSize="7.5">Tropic of Capricorn</text>
          </g>

          {/* Bordering Oceans Labels */}
          <g fontFamily="sans-serif" fontWeight="700" textAnchor="middle" fill="#082f49" opacity="0.95" pointerEvents="none">
            <text x="500" y="44" fontSize="12" letterSpacing="2" fill="#0369a1" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.4)' }}>
              ARCTIC OCEAN
            </text>
            
            <g transform="translate(390, 185) rotate(-15)">
              <text x="0" y="0" fontSize="10.5" letterSpacing="1.5" fill="#0c4a6e" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.3)' }}>
                NORTH ATLANTIC
              </text>
              <text x="0" y="12" fontSize="9" letterSpacing="1.2" fill="#0c4a6e">
                OCEAN
              </text>
            </g>

            <g transform="translate(435, 360) rotate(-10)">
              <text x="0" y="0" fontSize="10.5" letterSpacing="1.5" fill="#0c4a6e" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.3)' }}>
                SOUTH ATLANTIC
              </text>
              <text x="0" y="12" fontSize="9" letterSpacing="1.2" fill="#0c4a6e">
                OCEAN
              </text>
            </g>

            <text x="705" y="340" fontSize="11" letterSpacing="1.5" fill="#0c4a6e" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.3)' }}>
              INDIAN OCEAN
            </text>

            <text x="95" y="215" fontSize="9.5" letterSpacing="1" fill="#0c4a6e">NORTH PACIFIC</text>
            <text x="95" y="227" fontSize="8.5" letterSpacing="0.8" fill="#0c4a6e">OCEAN</text>

            <text x="915" y="215" fontSize="9.5" letterSpacing="1" fill="#0c4a6e">NORTH PACIFIC</text>
            <text x="915" y="227" fontSize="8.5" letterSpacing="0.8" fill="#0c4a6e">OCEAN</text>

            <text x="110" y="365" fontSize="9.5" letterSpacing="1" fill="#0c4a6e">SOUTH PACIFIC</text>
            <text x="110" y="377" fontSize="8.5" letterSpacing="0.8" fill="#0c4a6e">OCEAN</text>

            <text x="930" y="365" fontSize="9.5" letterSpacing="1" fill="#0c4a6e">SOUTH PACIFIC</text>
            <text x="930" y="377" fontSize="8.5" letterSpacing="0.8" fill="#0c4a6e">OCEAN</text>

            <text x="470" y="462" fontSize="10.5" letterSpacing="2" fill="#0369a1" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.4)' }}>
              SOUTHERN OCEAN
            </text>
          </g>

          {/* ============================================================== */}
          {/* CONTINENTS SVG GROUPS                                          */}
          {/* ============================================================== */}

          {/* 1. NORTH AMERICA */}
          <g 
            className="cursor-pointer transition-all duration-300"
            onClick={() => handleContinentClick(CONTINENTS_INFO.north_america)}
            onMouseEnter={() => setHoveredContinent('north_america')}
            onMouseLeave={() => setHoveredContinent(null)}
            filter="url(#landShadow)"
          >
            <path
              d="M 110,85 
                 C 120,70 145,55 175,55 
                 C 195,55 210,65 230,60 
                 C 255,50 280,55 315,62 
                 C 340,68 365,65 375,85 
                 C 365,105 345,115 335,130 
                 C 320,150 310,175 295,190 
                 C 280,205 270,225 255,245 
                 C 240,265 225,270 215,255 
                 C 205,240 210,215 190,195 
                 C 175,180 155,165 140,140 
                 C 125,120 115,100 110,85 Z"
              fill={hoveredContinent === 'north_america' || selectedId === 'north_america' ? '#f59e0b' : 'url(#gradNA)'}
              stroke={selectedId === 'north_america' ? '#ffffff' : '#d97706'}
              strokeWidth={selectedId === 'north_america' ? '3.5' : '1.5'}
            />
            <path
              d="M 110,85 C 95,95 80,105 65,115 C 80,110 95,100 115,95 Z"
              fill={hoveredContinent === 'north_america' || selectedId === 'north_america' ? '#f59e0b' : 'url(#gradNA)'}
              stroke="#d97706"
              strokeWidth="1.2"
            />
            <path
              d="M 240,40 C 265,35 285,45 280,55 C 260,55 245,50 240,40 Z"
              fill="url(#gradNA)"
              stroke="#d97706"
              strokeWidth="1"
            />
            <circle cx="310" cy="45" r="5" fill="#fde68a" stroke="#d97706" strokeWidth="0.8" />
            <circle cx="330" cy="42" r="4" fill="#fde68a" stroke="#d97706" strokeWidth="0.8" />

            <path
              d="M 370,45 
                 C 390,30 435,25 455,45 
                 C 465,65 450,95 430,105 
                 C 405,110 385,95 375,70 Z"
              fill={hoveredContinent === 'north_america' || selectedId === 'north_america' ? '#fde047' : 'url(#gradGreenland)'}
              stroke={selectedId === 'north_america' ? '#ffffff' : '#d97706'}
              strokeWidth={selectedId === 'north_america' ? '2.5' : '1.2'}
            />

            <path
              d="M 225,260 C 240,270 255,285 268,295 C 260,298 245,285 220,265 Z"
              fill="#d97706"
              stroke="#b45309"
              strokeWidth="1"
            />

            <circle cx="288" cy="242" r="4.5" fill="#ef4444" stroke="#ffffff" strokeWidth="0.5" />
            <circle cx="304" cy="246" r="4" fill="#ef4444" stroke="#ffffff" strokeWidth="0.5" />
            <circle cx="318" cy="252" r="3.5" fill="#ef4444" stroke="#ffffff" strokeWidth="0.5" />

            <g transform="translate(240, 145)" pointerEvents="none">
              <rect x="-65" y="-18" width="130" height="38" rx="8" fill="#1e293b" fillOpacity="0.85" stroke="#fbbf24" strokeWidth="1" />
              <text x="0" y="-1" fontFamily="sans-serif" fontSize="13" fontWeight="800" fill="#fef08a" textAnchor="middle">
                North America
              </text>
              <text x="0" y="13" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#cbd5e1" textAnchor="middle">
                23 Nations
              </text>
            </g>
          </g>

          {/* 2. SOUTH AMERICA */}
          <g 
            className="cursor-pointer transition-all duration-300"
            onClick={() => handleContinentClick(CONTINENTS_INFO.south_america)}
            onMouseEnter={() => setHoveredContinent('south_america')}
            onMouseLeave={() => setHoveredContinent(null)}
            filter="url(#landShadow)"
          >
            <path
              d="M 268,295 
                 C 290,285 325,290 350,310 
                 C 380,335 385,365 375,395 
                 C 365,425 345,455 325,480 
                 C 310,495 295,485 295,465 
                 C 290,430 280,395 265,360 
                 C 255,335 255,310 268,295 Z"
              fill={hoveredContinent === 'south_america' || selectedId === 'south_america' ? '#f43f5e' : 'url(#gradSA)'}
              stroke={selectedId === 'south_america' ? '#ffffff' : '#be123c'}
              strokeWidth={selectedId === 'south_america' ? '3.5' : '1.5'}
            />

            <circle cx="308" cy="495" r="3.5" fill="#e11d48" stroke="#ffffff" strokeWidth="0.5" />
            <circle cx="316" cy="492" r="3" fill="#e11d48" stroke="#ffffff" strokeWidth="0.5" />
            <circle cx="230" cy="320" r="2.5" fill="#fb7185" />

            <g transform="translate(320, 385)" pointerEvents="none">
              <rect x="-65" y="-18" width="130" height="38" rx="8" fill="#1e293b" fillOpacity="0.85" stroke="#fb7185" strokeWidth="1" />
              <text x="0" y="-1" fontFamily="sans-serif" fontSize="13" fontWeight="800" fill="#fda4af" textAnchor="middle">
                South America
              </text>
              <text x="0" y="13" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#cbd5e1" textAnchor="middle">
                12 Nations
              </text>
            </g>
          </g>

          {/* 3. EUROPE */}
          <g 
            className="cursor-pointer transition-all duration-300"
            onClick={() => handleContinentClick(CONTINENTS_INFO.europe)}
            onMouseEnter={() => setHoveredContinent('europe')}
            onMouseLeave={() => setHoveredContinent(null)}
            filter="url(#landShadow)"
          >
            <path
              d="M 525,60 
                 C 545,45 575,45 595,55 
                 C 605,75 585,110 565,115 
                 C 550,115 535,95 525,60 Z"
              fill={hoveredContinent === 'europe' || selectedId === 'europe' ? '#22c55e' : 'url(#gradEU)'}
              stroke="#15803d"
              strokeWidth="1.2"
            />
            
            <path
              d="M 495,115 
                 C 525,110 570,110 615,100 
                 C 630,120 625,155 595,170 
                 C 560,175 530,170 505,180 
                 C 485,180 480,145 495,115 Z"
              fill={hoveredContinent === 'europe' || selectedId === 'europe' ? '#22c55e' : 'url(#gradEU)'}
              stroke={selectedId === 'europe' ? '#ffffff' : '#15803d'}
              strokeWidth={selectedId === 'europe' ? '3.5' : '1.5'}
            />

            <path
              d="M 465,160 C 495,160 495,190 475,195 C 460,190 455,175 465,160 Z"
              fill="url(#gradEU)"
              stroke="#15803d"
              strokeWidth="1.2"
            />

            <path
              d="M 465,110 C 478,100 482,125 470,135 C 460,130 458,118 465,110 Z"
              fill="url(#gradEU)"
              stroke="#15803d"
              strokeWidth="1"
            />
            <circle cx="456" cy="122" r="4.5" fill="#4ade80" stroke="#15803d" strokeWidth="0.8" />

            <path
              d="M 525,165 C 535,175 540,195 535,200 C 528,198 522,185 525,165 Z"
              fill="url(#gradEU)"
              stroke="#15803d"
              strokeWidth="1"
            />
            <circle cx="528" cy="204" r="3" fill="#4ade80" stroke="#15803d" strokeWidth="0.5" />
            <circle cx="515" cy="180" r="2.5" fill="#4ade80" />

            <g transform="translate(560, 138)" pointerEvents="none">
              <rect x="-50" y="-16" width="100" height="34" rx="7" fill="#1e293b" fillOpacity="0.85" stroke="#4ade80" strokeWidth="1" />
              <text x="0" y="-1" fontFamily="sans-serif" fontSize="12" fontWeight="800" fill="#86efac" textAnchor="middle">
                Europe
              </text>
              <text x="0" y="11" fontFamily="sans-serif" fontSize="8.5" fontWeight="600" fill="#cbd5e1" textAnchor="middle">
                45 Nations
              </text>
            </g>
          </g>

          {/* 4. AFRICA */}
          <g 
            className="cursor-pointer transition-all duration-300"
            onClick={() => handleContinentClick(CONTINENTS_INFO.africa)}
            onMouseEnter={() => setHoveredContinent('africa')}
            onMouseLeave={() => setHoveredContinent(null)}
            filter="url(#landShadow)"
          >
            <path
              d="M 460,200 
                 C 500,190 545,195 580,220 
                 C 625,245 640,285 620,335 
                 C 600,380 580,420 555,425 
                 C 535,420 520,385 515,335 
                 C 505,295 465,275 445,240 
                 C 440,220 445,205 460,200 Z"
              fill={hoveredContinent === 'africa' || selectedId === 'africa' ? '#818cf8' : 'url(#gradAF)'}
              stroke={selectedId === 'africa' ? '#ffffff' : '#4f46e5'}
              strokeWidth={selectedId === 'africa' ? '3.5' : '1.5'}
            />

            <path
              d="M 628,345 C 642,340 640,385 628,390 C 620,380 622,355 628,345 Z"
              fill="url(#gradAF)"
              stroke="#4f46e5"
              strokeWidth="1.2"
            />

            <g transform="translate(545, 305)" pointerEvents="none">
              <rect x="-55" y="-18" width="110" height="38" rx="8" fill="#1e293b" fillOpacity="0.85" stroke="#818cf8" strokeWidth="1" />
              <text x="0" y="-1" fontFamily="sans-serif" fontSize="13" fontWeight="800" fill="#c7d2fe" textAnchor="middle">
                Africa
              </text>
              <text x="0" y="13" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#cbd5e1" textAnchor="middle">
                54 Nations
              </text>
            </g>
          </g>

          {/* 5. ASIA & MIDDLE EAST */}
          <g 
            className="cursor-pointer transition-all duration-300"
            onClick={() => handleContinentClick(CONTINENTS_INFO.asia)}
            onMouseEnter={() => setHoveredContinent('asia')}
            onMouseLeave={() => setHoveredContinent(null)}
            filter="url(#landShadow)"
          >
            {/* Asia Giant Landmass */}
            <path
              d="M 615,95 
                 C 670,55 750,45 840,65 
                 C 885,95 875,150 835,185 
                 C 810,215 780,245 745,265 
                 C 720,275 690,265 675,235 
                 C 660,210 635,200 615,190 
                 C 605,150 605,120 615,95 Z"
              fill={hoveredContinent === 'asia' || selectedId === 'asia' ? '#fb923c' : 'url(#gradAS)'}
              stroke={selectedId === 'asia' ? '#ffffff' : '#c2410c'}
              strokeWidth={selectedId === 'asia' ? '3.5' : '1.5'}
            />

            {/* Arabian Peninsula & Middle East */}
            <path
              d="M 580,200 C 625,195 645,215 635,255 C 610,265 590,245 580,200 Z"
              fill={hoveredContinent === 'asia' || selectedId === 'asia' ? '#f97316' : '#fb923c'}
              stroke="#ea580c"
              strokeWidth="1.2"
            />

            {/* Indian Subcontinent */}
            <path
              d="M 680,215 C 725,225 730,250 710,285 C 690,265 680,240 680,215 Z"
              fill={hoveredContinent === 'asia' || selectedId === 'asia' ? '#fb923c' : 'url(#gradAS)'}
              stroke="#ea580c"
              strokeWidth="1.2"
            />
            <circle cx="715" cy="295" r="3.5" fill="#f97316" stroke="#c2410c" strokeWidth="0.6" />

            {/* Indochina & Southeast Asia */}
            <path
              d="M 740,245 C 770,245 780,280 760,295 C 745,285 740,265 740,245 Z"
              fill={hoveredContinent === 'asia' || selectedId === 'asia' ? '#fb923c' : 'url(#gradAS)'}
              stroke="#ea580c"
              strokeWidth="1"
            />

            {/* Japanese Archipelago */}
            <path
              d="M 865,135 C 878,155 870,185 858,195"
              stroke={hoveredContinent === 'asia' || selectedId === 'asia' ? '#ffffff' : '#ea580c'}
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Korean Peninsula */}
            <path
              d="M 825,170 L 835,190"
              stroke={hoveredContinent === 'asia' || selectedId === 'asia' ? '#ffffff' : '#ea580c'}
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Malay Archipelago & Indonesian Islands */}
            <circle cx="770" cy="305" r="4" fill="#f97316" stroke="#ffffff" strokeWidth="0.5" />
            <circle cx="795" cy="315" r="4.5" fill="#f97316" stroke="#ffffff" strokeWidth="0.5" />
            <circle cx="820" cy="310" r="4" fill="#f97316" stroke="#ffffff" strokeWidth="0.5" />
            <circle cx="805" cy="275" r="3.5" fill="#f97316" stroke="#ffffff" strokeWidth="0.5" />

            {/* Cartographic Typography Pill */}
            <g transform="translate(745, 145)" pointerEvents="none">
              <rect x="-55" y="-18" width="110" height="38" rx="8" fill="#1e293b" fillOpacity="0.85" stroke="#fb923c" strokeWidth="1" />
              <text x="0" y="-1" fontFamily="sans-serif" fontSize="14" fontWeight="800" fill="#ffedd5" textAnchor="middle">
                Asia
              </text>
              <text x="0" y="13" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#fed7aa" textAnchor="middle">
                48 Nations
              </text>
            </g>
          </g>

          {/* 6. AUSTRALIA & OCEANIA */}
          <g 
            className="cursor-pointer transition-all duration-300"
            onClick={() => handleContinentClick(CONTINENTS_INFO.oceania)}
            onMouseEnter={() => setHoveredContinent('oceania')}
            onMouseLeave={() => setHoveredContinent(null)}
            filter="url(#landShadow)"
          >
            <path
              d="M 795,340 
                 C 835,325 875,325 900,355 
                 C 910,385 895,420 860,430 
                 C 820,435 790,415 785,375 
                 C 785,355 790,345 795,340 Z"
              fill={hoveredContinent === 'oceania' || selectedId === 'oceania' ? '#ec4899' : 'url(#gradOC)'}
              stroke={selectedId === 'oceania' ? '#ffffff' : '#be185d'}
              strokeWidth={selectedId === 'oceania' ? '3.5' : '1.5'}
            />

            <circle cx="865" cy="445" r="3.5" fill="#db2777" stroke="#ffffff" strokeWidth="0.5" />

            <path
              d="M 925,415 L 940,445"
              stroke="#db2777"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />

            <path
              d="M 830,315 C 855,310 870,320 855,330 Z"
              fill="url(#gradOC)"
              stroke="#be185d"
              strokeWidth="1"
            />

            <circle cx="915" cy="330" r="2.5" fill="#f472b6" />
            <circle cx="945" cy="340" r="2" fill="#f472b6" />

            <g transform="translate(845, 385)" pointerEvents="none">
              <rect x="-60" y="-18" width="120" height="38" rx="8" fill="#1e293b" fillOpacity="0.85" stroke="#f472b6" strokeWidth="1" />
              <text x="0" y="-1" fontFamily="sans-serif" fontSize="12" fontWeight="800" fill="#fbcfe8" textAnchor="middle">
                Oceania
              </text>
              <text x="0" y="13" fontFamily="sans-serif" fontSize="8.5" fontWeight="600" fill="#cbd5e1" textAnchor="middle">
                14 Nations
              </text>
            </g>
          </g>

          {/* 7. ANTARCTICA */}
          <g 
            className="cursor-pointer transition-all duration-300"
            onClick={() => handleContinentClick(CONTINENTS_INFO.antarctica)}
            onMouseEnter={() => setHoveredContinent('antarctica')}
            onMouseLeave={() => setHoveredContinent(null)}
            filter="url(#landShadow)"
          >
            <path
              d="M 120,490 
                 C 220,465 320,455 380,450 
                 C 420,440 460,455 520,448 
                 C 620,440 750,455 880,485 
                 L 860,515 L 140,515 Z"
              fill={hoveredContinent === 'antarctica' || selectedId === 'antarctica' ? '#ffffff' : 'url(#gradAN)'}
              stroke={selectedId === 'antarctica' ? '#38bdf8' : '#7dd3fc'}
              strokeWidth={selectedId === 'antarctica' ? '3.5' : '1.5'}
            />
            <path
              d="M 375,455 C 360,435 345,420 338,410 C 348,425 365,445 385,452 Z"
              fill="#ffffff"
              stroke="#7dd3fc"
              strokeWidth="1.5"
            />

            <path d="M 200,495 Q 400,480 600,490" stroke="#0284c7" strokeWidth="0.75" opacity="0.3" fill="none" />
            <path d="M 620,490 Q 750,485 840,500" stroke="#0284c7" strokeWidth="0.75" opacity="0.3" fill="none" />

            <g transform="translate(500, 492)" pointerEvents="none">
              <rect x="-105" y="-14" width="210" height="28" rx="7" fill="#0f172a" fillOpacity="0.9" stroke="#38bdf8" strokeWidth="1" />
              <text x="0" y="4" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#e0f2fe" textAnchor="middle">
                ❄️ Antarctica (7th Continent)
              </text>
            </g>
          </g>

          {/* Compass Rose */}
          <g transform="translate(75, 75)" pointerEvents="none">
            <circle cx="0" cy="0" r="24" fill="#031d34" stroke="#38bdf8" strokeWidth="1" opacity="0.85" />
            <circle cx="0" cy="0" r="19" fill="none" stroke="#fde047" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.6" />
            
            <polygon points="0,-18 4,-5 18,0 4,5 0,18 -4,5 -18,0 -4,-5" fill="#fde047" stroke="#b45309" strokeWidth="0.5" />
            <polygon points="0,-18 4,-5 0,0 -4,-5" fill="#ef4444" />
            <polygon points="18,0 5,4 0,0 5,-4" fill="#ef4444" />
            
            <text x="0" y="-8" fontSize="7.5" fontWeight="800" fill="#ffffff" textAnchor="middle">N</text>
            <text x="0" y="14" fontSize="6.5" fontWeight="700" fill="#cbd5e1" textAnchor="middle">S</text>
            <text x="11" y="2.5" fontSize="6.5" fontWeight="700" fill="#cbd5e1" textAnchor="middle">E</text>
            <text x="-11" y="2.5" fontSize="6.5" fontWeight="700" fill="#cbd5e1" textAnchor="middle">W</text>
          </g>

        </svg>

        {/* ============================================================== */}
        {/* CARTOON-STYLED EXPLORER POP-UP CARD                            */}
        {/* ============================================================== */}
        <AnimatePresence>
          {highlightedInfo && (
            <motion.div
              key={highlightedInfo.id}
              initial={{ opacity: 0, scale: 0.88, y: -8, rotate: -1.5 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -6, transition: { duration: 0.15 } }}
              transition={{ type: "spring", stiffness: 360, damping: 24 }}
              className={`absolute ${getPopupPositionClass(highlightedInfo.id)} w-[calc(100%-1.5rem)] sm:w-auto sm:max-w-xs md:max-w-sm z-30 pointer-events-none select-none`}
            >
              {/* Comic-style Outer Container with 3D Pop Shadow */}
              <div 
                className="bg-slate-900/98 backdrop-blur-xl p-3.5 sm:p-4 rounded-3xl border-3 shadow-[0_12px_32px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.15)] relative overflow-hidden pointer-events-none"
                style={{ borderColor: highlightedInfo.color }}
              >
                {/* Decorative Top Cartoon Accent Ribbon */}
                <div 
                  className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-20 blur-xl pointer-events-none"
                  style={{ backgroundColor: highlightedInfo.color }}
                />

                {/* Cartoon Header: Mascot + Title + Size Rank Badge */}
                <div className="flex items-start gap-3 mb-2.5">
                  {/* Cartoon Mascot Avatar Bubble */}
                  <div 
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shrink-0 shadow-md border-2 border-white/30 transform -rotate-3 hover:rotate-3 transition-transform"
                    style={{ 
                      background: `linear-gradient(135deg, ${highlightedInfo.gradientFrom}, ${highlightedInfo.gradientTo})` 
                    }}
                  >
                    <span>{highlightedInfo.emoji}</span>
                  </div>

                  {/* Title & Size Rank Badge */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1.5 flex-wrap">
                      <h3 className="text-base sm:text-lg font-black text-white tracking-tight flex items-center gap-1.5">
                        <span>{highlightedInfo.name}</span>
                        <Sparkles size={14} className="text-amber-300 shrink-0 animate-pulse" />
                      </h3>
                      <span 
                        className="text-[10px] font-black px-2 py-0.5 rounded-full text-slate-950 uppercase tracking-wider shadow-xs"
                        style={{ backgroundColor: highlightedInfo.color }}
                      >
                        {highlightedInfo.sizeRank}
                      </span>
                    </div>

                    <p className="text-[11px] font-bold text-amber-300/90 truncate mt-0.5">
                      {highlightedInfo.cartoonTitle}
                    </p>
                  </div>
                </div>

                {/* Comic Speech Bubble / "Did You Know?" Fun Fact */}
                <div className="relative bg-slate-950/80 rounded-2xl p-2.5 border border-slate-800 mb-2.5 shadow-inner">
                  <div className="flex items-start gap-1.5 text-[11px] text-slate-200 leading-relaxed font-normal">
                    <span className="text-amber-400 font-bold shrink-0">💡 Fact:</span>
                    <span>{highlightedInfo.funFact}</span>
                  </div>
                </div>

                {/* Cartoon Stats Grid (Chunky colorful stickers) */}
                <div className="grid grid-cols-2 gap-1.5 mb-2.5 text-[11px]">
                  <div className="bg-slate-800/80 rounded-xl p-2 border border-slate-700/60 flex items-center gap-2">
                    <span className="text-base">👥</span>
                    <div className="min-w-0">
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Population</span>
                      <span className="text-slate-100 font-extrabold truncate block">{highlightedInfo.population}</span>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 rounded-xl p-2 border border-slate-700/60 flex items-center gap-2">
                    <span className="text-base">📐</span>
                    <div className="min-w-0">
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Land Area</span>
                      <span className="text-slate-100 font-extrabold truncate block">{highlightedInfo.area}</span>
                    </div>
                  </div>
                </div>

                {/* Oceans & Sovereign Nations Bar */}
                <div className="flex items-center justify-between gap-1 text-[10px] text-sky-300 font-medium bg-sky-950/60 border border-sky-800/50 px-2.5 py-1.5 rounded-xl mb-2.5">
                  <span className="truncate flex items-center gap-1">
                    <span>🌊</span>
                    <span><strong>Oceans:</strong> {highlightedInfo.oceans}</span>
                  </span>
                  <span className="shrink-0 text-slate-300 font-bold">
                    {highlightedInfo.countriesCount > 0 ? `${highlightedInfo.countriesCount} Nations` : 'Preserve'}
                  </span>
                </div>

                {/* Click Guidance Status Banner (No jump button) */}
                <div 
                  className="w-full py-2 px-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 text-center transition-all border"
                  style={{
                    backgroundColor: `${highlightedInfo.color}20`,
                    borderColor: `${highlightedInfo.color}60`,
                    color: highlightedInfo.color
                  }}
                >
                  <MapPin size={13} className="shrink-0 animate-bounce" />
                  <span>
                    {activeContinentFilter === highlightedInfo.filterName 
                      ? `Active: Filtering ${highlightedInfo.name}` 
                      : `Click continent on map to filter`}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 7 Continents Color Key & Quick Filter Buttons */}
      <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-normal text-slate-400 mr-1">Continent Keys:</span>
          {Object.values(CONTINENTS_INFO).map((info) => {
            const isSelected = activeContinentFilter === info.filterName;
            return (
              <button
                key={info.id}
                type="button"
                onClick={() => handleContinentClick(info)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-normal transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-slate-800 border-amber-400 text-white ring-2 ring-amber-400/30 shadow-sm'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850 hover:text-white'
                }`}
              >
                <span className="text-xs">{info.emoji}</span>
                <span>{info.name}</span>
                {isSelected && <Check size={12} className="text-amber-400 ml-0.5" />}
              </button>
            );
          })}
        </div>

        {/* Antarctica Informational Explainer */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-800 font-normal">
            <Info size={13} className="text-cyan-400 shrink-0" />
            <span>
              <strong>Antarctica (7th continent)</strong> has no sovereign country under the 1959 Antarctic Treaty.
            </span>
          </div>
        </div>
      </div>
        </motion.div>
      )}
    </div>
  );
}
