"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Compass, Info, Check, ArrowRight, ExternalLink } from 'lucide-react';
import { Continent, Country, continentsData } from '@/app/data/countries';

export interface WorldContinentsMapProps {
  activeContinentFilter: string;
  onSelectContinent: (continentName: string) => void;
  onOpenAntarctica?: () => void;
}

interface ContinentInfo {
  id: string;
  name: string;
  filterName: string;
  color: string;
  hoverColor: string;
  textColor: string;
  borderStroke: string;
  countriesCount: number;
  population: string;
  area: string;
  oceans: string;
  keyFact: string;
}

export const CONTINENTS_INFO: Record<string, ContinentInfo> = {
  north_america: {
    id: 'north_america',
    name: 'North America',
    filterName: 'North America',
    color: '#fbbf24', // Amber/Yellow like image
    hoverColor: '#f59e0b',
    textColor: '#78350f',
    borderStroke: '#d97706',
    countriesCount: 23,
    population: '~600 Million',
    area: '24.7 Million km² (3rd largest)',
    oceans: 'Arctic, Atlantic, Pacific',
    keyFact: 'Spans from tropical Caribbean islands to Arctic tundras of Canada and Greenland.'
  },
  south_america: {
    id: 'south_america',
    name: 'South America',
    filterName: 'South America',
    color: '#f87171', // Coral Red like image
    hoverColor: '#ef4444',
    textColor: '#7f1d1d',
    borderStroke: '#dc2626',
    countriesCount: 12,
    population: '~430 Million',
    area: '17.8 Million km² (4th largest)',
    oceans: 'Pacific, Atlantic, Caribbean',
    keyFact: 'Home to the Amazon Rainforest, Amazon River, and longest mountain range (Andes).'
  },
  europe: {
    id: 'europe',
    name: 'Europe',
    filterName: 'Europe',
    color: '#22c55e', // Green like image
    hoverColor: '#16a34a',
    textColor: '#14532d',
    borderStroke: '#15803d',
    countriesCount: 45,
    population: '~750 Million',
    area: '10.2 Million km² (6th largest)',
    oceans: 'Arctic, Atlantic, Mediterranean',
    keyFact: 'Divided into 45 sovereign nations, deeply rich in world history and architecture.'
  },
  africa: {
    id: 'africa',
    name: 'Africa',
    filterName: 'Africa',
    color: '#818cf8', // Violet/Purple like image
    hoverColor: '#6366f1',
    textColor: '#312e81',
    borderStroke: '#4f46e5',
    countriesCount: 54,
    population: '~1.4 Billion',
    area: '30.3 Million km² (2nd largest)',
    oceans: 'Atlantic, Indian, Mediterranean',
    keyFact: 'Most sovereign nations of any continent (54), cradle of humankind.'
  },
  asia: {
    id: 'asia',
    name: 'Asia',
    filterName: 'Asia',
    color: '#fed7aa', // Warm Peach/Sand like image
    hoverColor: '#fdba74',
    textColor: '#7c2d12',
    borderStroke: '#ea580c',
    countriesCount: 48,
    population: '~4.7 Billion (60% of Earth)',
    area: '44.6 Million km² (Largest)',
    oceans: 'Arctic, Pacific, Indian',
    keyFact: 'Largest continent by both land area and population, with Earth’s highest peak (Everest).'
  },
  oceania: {
    id: 'oceania',
    name: 'Australia & Oceania',
    filterName: 'Oceania',
    color: '#f472b6', // Pink/Magenta like image
    hoverColor: '#ec4899',
    textColor: '#831843',
    borderStroke: '#db2777',
    countriesCount: 14,
    population: '~45 Million',
    area: '8.5 Million km² (Smallest land)',
    oceans: 'Pacific, Indian, Southern',
    keyFact: 'Thousands of Pacific coral atolls, Great Barrier Reef, and vast Australian Outback.'
  },
  antarctica: {
    id: 'antarctica',
    name: 'Antarctica',
    filterName: 'Antarctica',
    color: '#f1f5f9', // Ice white/silver like image
    hoverColor: '#e2e8f0',
    textColor: '#0f172a',
    borderStroke: '#94a3b8',
    countriesCount: 0,
    population: '~1,000 - 5,000 (Scientists)',
    area: '14.2 Million km² (5th largest)',
    oceans: 'Southern Ocean',
    keyFact: 'Earth’s 7th continent! 90% of all ice, protected by the 1959 Antarctic Treaty for peace & science.'
  }
};

export function WorldContinentsMap({
  activeContinentFilter,
  onSelectContinent,
  onOpenAntarctica
}: WorldContinentsMapProps) {
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
    }
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 bg-indigo-500/15 text-indigo-400 rounded-lg border border-indigo-500/25">
              <Globe size={18} />
            </span>
            <h2 className="text-base sm:text-lg font-normal text-slate-100">
              World Continents Reference Map
            </h2>
            <span className="text-[11px] font-normal px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-700/70">
              All 7 Continents
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1.5 font-normal leading-relaxed">
            Tap or hover any continent to gauge where it sits on Earth, view bordering oceans, and filter sovereign nations.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {activeContinentFilter !== 'All' && (
            <button
              type="button"
              onClick={() => onSelectContinent('All')}
              className="text-xs px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold border border-slate-700 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Show All Continents</span>
            </button>
          )}
        </div>
      </div>

      {/* SVG Map Canvas Container */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] bg-sky-500/90 rounded-2xl overflow-hidden border-2 border-sky-400 shadow-inner select-none">
        
        {/* SVG Graphic */}
        <svg 
          viewBox="0 0 1000 520" 
          className="w-full h-full object-contain"
          style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }}
        >
          <defs>
            {/* Ocean radial gradient */}
            <radialGradient id="oceanGrad" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="65%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#0284c7" />
            </radialGradient>

            {/* Subtle glow filter */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Ocean Background Canvas (Oval Robinson projection shape) */}
          <ellipse 
            cx="500" 
            cy="260" 
            rx="495" 
            ry="255" 
            fill="url(#oceanGrad)" 
            stroke="#0369a1" 
            strokeWidth="3"
          />

          {/* Graticule Grid Lines (Latitudes & Longitudes) */}
          <g stroke="#ffffff" strokeWidth="0.8" opacity="0.35" fill="none">
            {/* Parallels (Latitudes) */}
            {/* 60° N */}
            <path d="M 80,105 Q 500,70 920,105" />
            {/* 45° N */}
            <path d="M 30,150 Q 500,120 970,150" strokeDasharray="3 3" />
            {/* 30° N */}
            <path d="M 12,200 Q 500,180 988,200" />
            {/* Equator (0°) */}
            <path d="M 5,260 L 995,260" stroke="#fef08a" strokeWidth="1.8" opacity="0.75" />
            {/* 30° S */}
            <path d="M 12,320 Q 500,340 988,320" />
            {/* 45° S */}
            <path d="M 30,370 Q 500,400 970,370" strokeDasharray="3 3" />
            {/* 60° S */}
            <path d="M 80,415 Q 500,450 920,415" />

            {/* Meridians (Longitudes) */}
            {/* Prime Meridian (0°) */}
            <path d="M 500,5 L 500,515" stroke="#fef08a" strokeWidth="1.5" opacity="0.65" />
            {/* 90° W */}
            <path d="M 500,5 Q 260,260 500,515" strokeDasharray="3 3" />
            {/* 45° W */}
            <path d="M 500,5 Q 380,260 500,515" />
            {/* 45° E */}
            <path d="M 500,5 Q 620,260 500,515" />
            {/* 90° E */}
            <path d="M 500,5 Q 740,260 500,515" strokeDasharray="3 3" />
          </g>

          {/* Reference Geographic Labels on Ocean Grid */}
          <g fontSize="10" fontFamily="sans-serif" fill="#ffffff" fontWeight="600" opacity="0.85" pointerEvents="none">
            <text x="502" y="255" fill="#fef08a" fontSize="9">Equator (0°)</text>
            <text x="503" y="20" fill="#fef08a" fontSize="9">0° Prime Meridian</text>
            <text x="140" y="145" opacity="0.7">45° N</text>
            <text x="860" y="145" opacity="0.7">45° N</text>
            <text x="140" y="380" opacity="0.7">45° S</text>
            <text x="860" y="380" opacity="0.7">45° S</text>
            <text x="260" y="340" opacity="0.7">90° W</text>
            <text x="740" y="340" opacity="0.7">90° E</text>
          </g>

          {/* Oceans Labels (Bold and Clear like reference image) */}
          <g fontFamily="sans-serif" fontWeight="800" textAnchor="middle" fill="#0c4a6e" opacity="0.9" pointerEvents="none">
            {/* Arctic Ocean */}
            <text x="500" y="42" fontSize="13" letterSpacing="1">Arctic Ocean</text>
            
            {/* North Atlantic Ocean */}
            <text x="400" y="180" fontSize="11" letterSpacing="0.5">North Atlantic</text>
            <text x="400" y="195" fontSize="11" letterSpacing="0.5">Ocean</text>

            {/* South Atlantic Ocean */}
            <text x="440" y="355" fontSize="11" letterSpacing="0.5">South Atlantic</text>
            <text x="440" y="370" fontSize="11" letterSpacing="0.5">Ocean</text>

            {/* Indian Ocean */}
            <text x="705" y="335" fontSize="12" letterSpacing="0.5">Indian Ocean</text>

            {/* North Pacific Ocean */}
            <text x="925" y="210" fontSize="10" letterSpacing="0.5">North Pacific</text>
            <text x="925" y="224" fontSize="10" letterSpacing="0.5">Ocean</text>
            <text x="90" y="210" fontSize="10" letterSpacing="0.5">North Pacific</text>
            <text x="90" y="224" fontSize="10" letterSpacing="0.5">Ocean</text>

            {/* South Pacific Ocean */}
            <text x="100" y="360" fontSize="10" letterSpacing="0.5">South Pacific</text>
            <text x="100" y="375" fontSize="10" letterSpacing="0.5">Ocean</text>
            <text x="940" y="360" fontSize="10" letterSpacing="0.5">South Pacific</text>
            <text x="940" y="375" fontSize="10" letterSpacing="0.5">Ocean</text>

            {/* Southern Ocean (Above Antarctica) */}
            <text x="440" y="468" fontSize="11" letterSpacing="0.8">Southern Ocean</text>
          </g>

          {/* ============================================================== */}
          {/* CONTINENTS PATHS                                               */}
          {/* ============================================================== */}

          {/* 1. NORTH AMERICA (Yellow/Gold) */}
          <g 
            className="cursor-pointer transition-all duration-200"
            onClick={() => handleContinentClick(CONTINENTS_INFO.north_america)}
            onMouseEnter={() => setHoveredContinent('north_america')}
            onMouseLeave={() => setHoveredContinent(null)}
          >
            {/* Mainland NA & Alaska */}
            <path
              d="M 115,80 
                 L 145,55 L 220,55 L 260,70 L 315,60 L 360,65 L 340,110 L 310,125 
                 L 300,165 L 285,185 L 265,190 L 255,225 L 240,250 L 220,255 
                 L 210,230 L 195,215 L 180,180 L 140,140 L 125,115 Z"
              fill={hoveredContinent === 'north_america' || selectedId === 'north_america' ? '#f59e0b' : '#fbbf24'}
              stroke={selectedId === 'north_america' ? '#ffffff' : '#d97706'}
              strokeWidth={selectedId === 'north_america' ? '3' : '1.8'}
              filter={hoveredContinent === 'north_america' ? 'url(#glow)' : undefined}
            />
            {/* Greenland */}
            <path
              d="M 370,45 L 435,35 L 460,65 L 430,105 L 390,95 L 375,65 Z"
              fill={hoveredContinent === 'north_america' || selectedId === 'north_america' ? '#fde68a' : '#fef08a'}
              stroke="#d97706"
              strokeWidth="1.2"
            />
            {/* Central America connection strip */}
            <path
              d="M 220,255 L 245,260 L 255,285 L 268,295 L 258,298 L 240,275 Z"
              fill="#2563eb" // Deep blue contrast as in reference map
              stroke="#1d4ed8"
              strokeWidth="1"
            />
            {/* Caribbean Islands */}
            <circle cx="285" cy="245" r="4.5" fill="#ef4444" />
            <circle cx="300" cy="248" r="4" fill="#ef4444" />
            <circle cx="312" cy="254" r="3.5" fill="#ef4444" />

            {/* Text Label */}
            <text x="245" y="135" fontFamily="sans-serif" fontSize="18" fontWeight="900" fill="#78350f" textAnchor="middle">
              North
            </text>
            <text x="245" y="155" fontFamily="sans-serif" fontSize="18" fontWeight="900" fill="#78350f" textAnchor="middle">
              America
            </text>
            {/* Region tags */}
            <text x="335" y="235" fontFamily="sans-serif" fontSize="10" fontWeight="800" fill="#1e293b">
              Caribbean
            </text>
            <text x="180" y="275" fontFamily="sans-serif" fontSize="9" fontWeight="800" fill="#0f172a">
              Central America
            </text>
          </g>

          {/* 2. SOUTH AMERICA (Coral Red) */}
          <g 
            className="cursor-pointer transition-all duration-200"
            onClick={() => handleContinentClick(CONTINENTS_INFO.south_america)}
            onMouseEnter={() => setHoveredContinent('south_america')}
            onMouseLeave={() => setHoveredContinent(null)}
          >
            <path
              d="M 268,295 
                 L 305,290 L 340,315 L 375,340 L 370,385 L 345,430 L 320,465 
                 L 305,485 L 298,485 L 295,445 L 285,395 L 265,360 L 255,320 Z"
              fill={hoveredContinent === 'south_america' || selectedId === 'south_america' ? '#ef4444' : '#f87171'}
              stroke={selectedId === 'south_america' ? '#ffffff' : '#dc2626'}
              strokeWidth={selectedId === 'south_america' ? '3' : '1.8'}
              filter={hoveredContinent === 'south_america' ? 'url(#glow)' : undefined}
            />
            {/* Text Label */}
            <text x="315" y="375" fontFamily="sans-serif" fontSize="17" fontWeight="900" fill="#ffffff" textAnchor="middle" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))' }}>
              South
            </text>
            <text x="315" y="395" fontFamily="sans-serif" fontSize="17" fontWeight="900" fill="#ffffff" textAnchor="middle" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))' }}>
              America
            </text>
          </g>

          {/* 3. EUROPE (Green) */}
          <g 
            className="cursor-pointer transition-all duration-200"
            onClick={() => handleContinentClick(CONTINENTS_INFO.europe)}
            onMouseEnter={() => setHoveredContinent('europe')}
            onMouseLeave={() => setHoveredContinent(null)}
          >
            {/* European mainland & Scandinavia */}
            <path
              d="M 500,90 
                 L 535,70 L 565,65 L 610,65 L 630,95 L 625,145 L 590,165 
                 L 550,175 L 525,170 L 500,185 L 485,180 L 480,140 L 495,115 Z"
              fill={hoveredContinent === 'europe' || selectedId === 'europe' ? '#16a34a' : '#22c55e'}
              stroke={selectedId === 'europe' ? '#ffffff' : '#15803d'}
              strokeWidth={selectedId === 'europe' ? '3' : '1.8'}
              filter={hoveredContinent === 'europe' ? 'url(#glow)' : undefined}
            />
            {/* British Isles */}
            <path
              d="M 465,115 L 480,105 L 478,135 L 460,130 Z"
              fill={hoveredContinent === 'europe' || selectedId === 'europe' ? '#16a34a' : '#22c55e'}
              stroke="#15803d"
              strokeWidth="1.2"
            />
            {/* Iberian Peninsula */}
            <path
              d="M 470,165 L 500,165 L 495,195 L 465,190 Z"
              fill={hoveredContinent === 'europe' || selectedId === 'europe' ? '#16a34a' : '#22c55e'}
              stroke="#15803d"
              strokeWidth="1.2"
            />
            {/* Text Label */}
            <text x="560" y="125" fontFamily="sans-serif" fontSize="16" fontWeight="900" fill="#ffffff" textAnchor="middle" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))' }}>
              Europe
            </text>
          </g>

          {/* 4. AFRICA (Purple/Violet) */}
          <g 
            className="cursor-pointer transition-all duration-200"
            onClick={() => handleContinentClick(CONTINENTS_INFO.africa)}
            onMouseEnter={() => setHoveredContinent('africa')}
            onMouseLeave={() => setHoveredContinent(null)}
          >
            {/* Africa Mainland */}
            <path
              d="M 465,200 
                 L 535,195 L 585,225 L 635,260 L 615,315 L 585,380 L 565,420 
                 L 545,415 L 525,380 L 520,315 L 475,270 L 450,235 Z"
              fill={hoveredContinent === 'africa' || selectedId === 'africa' ? '#6366f1' : '#818cf8'}
              stroke={selectedId === 'africa' ? '#ffffff' : '#4f46e5'}
              strokeWidth={selectedId === 'africa' ? '3' : '1.8'}
              filter={hoveredContinent === 'africa' ? 'url(#glow)' : undefined}
            />
            {/* Madagascar */}
            <path
              d="M 625,350 L 638,345 L 632,385 L 620,380 Z"
              fill={hoveredContinent === 'africa' || selectedId === 'africa' ? '#6366f1' : '#818cf8'}
              stroke="#4f46e5"
              strokeWidth="1.2"
            />
            {/* Text Label */}
            <text x="550" y="295" fontFamily="sans-serif" fontSize="19" fontWeight="900" fill="#ffffff" textAnchor="middle" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))' }}>
              Africa
            </text>
          </g>

          {/* 5. ASIA & MIDDLE EAST (Warm Peach / Orange) */}
          <g 
            className="cursor-pointer transition-all duration-200"
            onClick={() => handleContinentClick(CONTINENTS_INFO.asia)}
            onMouseEnter={() => setHoveredContinent('asia')}
            onMouseLeave={() => setHoveredContinent(null)}
          >
            {/* Asia Great Landmass */}
            <path
              d="M 610,65 
                 L 660,50 L 740,45 L 830,65 L 860,110 L 840,165 L 795,195 
                 L 775,245 L 730,270 L 695,255 L 685,215 L 650,205 L 630,95 Z"
              fill={hoveredContinent === 'asia' || selectedId === 'asia' ? '#fdba74' : '#fed7aa'}
              stroke={selectedId === 'asia' ? '#ffffff' : '#ea580c'}
              strokeWidth={selectedId === 'asia' ? '3' : '1.8'}
              filter={hoveredContinent === 'asia' ? 'url(#glow)' : undefined}
            />
            {/* Middle East peninsula highlight */}
            <path
              d="M 585,200 L 650,195 L 680,240 L 650,265 L 610,240 Z"
              fill="#fb923c"
              stroke="#c2410c"
              strokeWidth="1.5"
            />
            {/* India Subcontinent */}
            <path
              d="M 685,215 L 730,230 L 710,285 L 685,245 Z"
              fill={hoveredContinent === 'asia' || selectedId === 'asia' ? '#fdba74' : '#fed7aa'}
              stroke="#ea580c"
              strokeWidth="1.2"
            />
            {/* Japan Arc */}
            <path
              d="M 850,140 Q 865,160 855,185"
              stroke="#ea580c"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Southeast Asia Islands */}
            <circle cx="770" cy="285" r="4.5" fill="#ea580c" />
            <circle cx="790" cy="300" r="5" fill="#ea580c" />
            <circle cx="815" cy="290" r="4.5" fill="#ea580c" />

            {/* Text Labels */}
            <text x="745" y="145" fontFamily="sans-serif" fontSize="22" fontWeight="900" fill="#7c2d12" textAnchor="middle">
              Asia
            </text>
            <text x="635" y="218" fontFamily="sans-serif" fontSize="11" fontWeight="900" fill="#9a3412" textAnchor="middle">
              Middle East
            </text>
          </g>

          {/* 6. AUSTRALIA & OCEANIA (Magenta/Pink) */}
          <g 
            className="cursor-pointer transition-all duration-200"
            onClick={() => handleContinentClick(CONTINENTS_INFO.oceania)}
            onMouseEnter={() => setHoveredContinent('oceania')}
            onMouseLeave={() => setHoveredContinent(null)}
          >
            {/* Australia Mainland */}
            <path
              d="M 795,340 
                 L 870,330 L 900,365 L 890,415 L 850,430 L 800,415 L 790,365 Z"
              fill={hoveredContinent === 'oceania' || selectedId === 'oceania' ? '#ec4899' : '#f472b6'}
              stroke={selectedId === 'oceania' ? '#ffffff' : '#db2777'}
              strokeWidth={selectedId === 'oceania' ? '3' : '1.8'}
              filter={hoveredContinent === 'oceania' ? 'url(#glow)' : undefined}
            />
            {/* New Zealand Islands */}
            <path
              d="M 915,415 L 935,445"
              stroke="#db2777"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Text Label */}
            <text x="845" y="380" fontFamily="sans-serif" fontSize="14" fontWeight="900" fill="#ffffff" textAnchor="middle" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))' }}>
              Australia
            </text>
            <text x="845" y="398" fontFamily="sans-serif" fontSize="12" fontWeight="900" fill="#ffffff" textAnchor="middle" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))' }}>
              &amp; Oceania
            </text>
          </g>

          {/* 7. ANTARCTICA (The 7th Continent! Ice White along entire southern border) */}
          <g 
            className="cursor-pointer transition-all duration-200"
            onClick={() => handleContinentClick(CONTINENTS_INFO.antarctica)}
            onMouseEnter={() => setHoveredContinent('antarctica')}
            onMouseLeave={() => setHoveredContinent(null)}
          >
            {/* Antarctica Landmass */}
            <path
              d="M 120,490 
                 Q 300,470 380,455 
                 Q 420,445 440,460 
                 Q 500,455 580,450 
                 Q 700,460 880,485 
                 L 850,515 L 150,515 Z"
              fill={hoveredContinent === 'antarctica' || selectedId === 'antarctica' ? '#ffffff' : '#f1f5f9'}
              stroke={selectedId === 'antarctica' ? '#38bdf8' : '#cbd5e1'}
              strokeWidth={selectedId === 'antarctica' ? '3.5' : '2'}
              filter={hoveredContinent === 'antarctica' ? 'url(#glow)' : undefined}
            />
            {/* Antarctic Peninsula reaching towards South America */}
            <path
              d="M 370,460 Q 350,440 340,430 Q 350,440 375,455"
              stroke="#e2e8f0"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            {/* Text Label */}
            <text x="500" y="495" fontFamily="sans-serif" fontSize="16" fontWeight="900" fill="#0f172a" textAnchor="middle">
              ❄️ Antarctica (7th Continent)
            </text>
          </g>

          {/* Compass Rose Accent */}
          <g transform="translate(60, 60)" pointerEvents="none">
            <circle cx="0" cy="0" r="22" fill="#0c4a6e" opacity="0.75" />
            <polygon points="0,-18 5,-5 18,0 5,5 0,18 -5,5 -18,0 -5,-5" fill="#facc15" />
            <polygon points="0,-18 5,-5 0,0 -5,-5" fill="#ef4444" />
            <text x="0" y="-8" fontSize="8" fontWeight="bold" fill="#ffffff" textAnchor="middle">N</text>
          </g>

        </svg>

        {/* Selected / Hovered Continent Floating Overlay Badge */}
        {highlightedInfo && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="absolute top-3 left-3 right-3 sm:left-auto sm:right-3 sm:max-w-xs bg-slate-950/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700 shadow-2xl z-20"
          >
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-2">
                <span 
                  className="w-3.5 h-3.5 rounded-full border border-white shrink-0" 
                  style={{ backgroundColor: highlightedInfo.color }}
                />
                <h3 className="text-sm font-black text-white">{highlightedInfo.name}</h3>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                {highlightedInfo.countriesCount > 0 ? `${highlightedInfo.countriesCount} Nations` : 'Scientific Preserve'}
              </span>
            </div>
            
            <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-2 mb-2">
              {highlightedInfo.keyFact}
            </p>

            <div className="grid grid-cols-2 gap-1.5 text-[10px] text-slate-400 border-t border-slate-800/80 pt-2 mb-2.5">
              <div>
                <span className="text-slate-500 block">Land Area:</span>
                <span className="text-slate-200 font-semibold">{highlightedInfo.area}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Population:</span>
                <span className="text-slate-200 font-semibold">{highlightedInfo.population}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleContinentClick(highlightedInfo)}
              className="w-full py-1.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>
                {activeContinentFilter === highlightedInfo.filterName 
                  ? 'Showing Countries Below' 
                  : `Explore ${highlightedInfo.name}`}
              </span>
              <ArrowRight size={13} />
            </button>
          </motion.div>
        )}
      </div>

      {/* 7 Continents Color Key & Quick Filter Buttons */}
      <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-slate-400 mr-1">Continent Keys:</span>
          {Object.values(CONTINENTS_INFO).map((info) => {
            const isSelected = activeContinentFilter === info.filterName;
            return (
              <button
                key={info.id}
                type="button"
                onClick={() => handleContinentClick(info)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-slate-800 border-amber-400 text-white ring-2 ring-amber-400/30 shadow-sm'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850 hover:text-white'
                }`}
              >
                <span 
                  className="w-2.5 h-2.5 rounded-full shrink-0 border border-slate-700" 
                  style={{ backgroundColor: info.color }}
                />
                <span>{info.name}</span>
                {isSelected && <Check size={12} className="text-amber-400 ml-0.5" />}
              </button>
            );
          })}
        </div>

        {/* Antarctica Informational Explainer Modal / Button */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
            <Info size={13} className="text-cyan-400 shrink-0" />
            <span>
              <strong>Antarctica (7th continent)</strong> has no sovereign country under the 1959 Antarctic Treaty.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
