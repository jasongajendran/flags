"use client";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Square, 
  Video, 
  Volume2, 
  Globe, 
  MapPin, 
  CheckCircle, 
  Subtitles, 
  Compass,
  Flag,
  ImageIcon,
  Navigation,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { continentsData, Continent, Country } from '@/app/data/countries';
import { useAudioGuide } from '@/hooks/use-audio-guide';
import { HighlightText } from '@/components/highlight-text';
import { ScrollToTop } from '@/components/scroll-to-top';
import { VisualCountryMap } from '@/components/visual-country-map';

export default function KidsApp() {
  const [activeContinent, setActiveContinent] = useState<Continent>(continentsData[0]);
  const [selectedCountry, setSelectedCountry] = useState<Country>(continentsData[0].countries[0]);
  const [activeTab, setActiveTab] = useState<'memory' | 'flag' | 'location'>('memory');
  const [videoMode, setVideoMode] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(true);
  
  const { play, stop, isPlaying, charIndex } = useAudioGuide();
  const countryDataRef = useRef(continentsData[0].countries);
  const mainMapRef = useRef<HTMLDivElement>(null);

  const scrollToMainMap = () => {
    mainMapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const getAudioText = (country: Country) => 
    `${country.uniqueness} ${country.description} Flag Story: ${country.flagMeaning.story}`;

  const handleContinentChange = (continent: Continent) => {
    setVideoMode(false);
    stop();
    setActiveContinent(continent);
    setSelectedCountry(continent.countries[0]);
    countryDataRef.current = continent.countries;
  };

  // Handle Video Mode automated progression
  useEffect(() => {
    if (videoMode && !isPlaying) {
      const currentIndex = countryDataRef.current.findIndex(c => c.id === selectedCountry.id);
      const nextIndex = currentIndex + 1;
      
      if (nextIndex < countryDataRef.current.length) {
        const timer = setTimeout(() => {
          const nextCountry = countryDataRef.current[nextIndex];
          setSelectedCountry(nextCountry);
          play(getAudioText(nextCountry));
        }, 1800);
        return () => clearTimeout(timer);
      } else {
        setVideoMode(false);
      }
    }
  }, [videoMode, isPlaying, selectedCountry, play]);

  const handleCountryClick = (country: Country) => {
    setVideoMode(false);
    setSelectedCountry(country);
    play(getAudioText(country));
  };

  const handleStartVideoTour = () => {
    const firstCountry = activeContinent.countries[0];
    setSelectedCountry(firstCountry);
    setVideoMode(true);
    play(getAudioText(firstCountry));
  };

  const handleStop = () => {
    setVideoMode(false);
    stop();
  };

  return (
    <div className="min-h-screen bg-sky-50 pb-32 font-sans selection:bg-yellow-300">
      {/* Top Banner & Header */}
      <header className="bg-white rounded-b-[3rem] shadow-lg pt-8 pb-8 px-4 sm:px-6 border-b-8 border-yellow-400 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="p-4 bg-indigo-600 rounded-3xl text-white shadow-lg shadow-indigo-200 rotate-3 flex-shrink-0">
              <Globe size={44} className="animate-pulse" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-950 tracking-tight">
                Kids World Flags! <span className="inline-block animate-bounce">🌍</span>
              </h1>
              <p className="text-base sm:text-lg text-sky-700 font-bold mt-1">
                Explore <span className="underline decoration-yellow-400 decoration-4">{activeContinent.name}</span> ({activeContinent.countries.length} Countries) &amp; Flag Stories!
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 items-center justify-center">
            {videoMode || isPlaying ? (
              <button 
                onClick={handleStop}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3.5 rounded-full font-extrabold text-base sm:text-lg shadow-[0_5px_0_#991b1b] active:shadow-[0_0px_0_#991b1b] active:translate-y-1 transition-all"
              >
                <Square size={22} fill="currentColor" />
                Stop Tour
              </button>
            ) : (
              <button 
                onClick={handleStartVideoTour}
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3.5 rounded-full font-extrabold text-base sm:text-lg shadow-[0_5px_0_#065f46] active:shadow-[0_0px_0_#065f46] active:translate-y-1 transition-all"
              >
                <Video size={22} fill="currentColor" />
                Start Continent Tour!
              </button>
            )}
            
            <button 
              onClick={() => setShowSubtitles(!showSubtitles)}
              className={`flex items-center gap-2 px-5 py-3.5 rounded-full font-extrabold text-base sm:text-lg transition-all ${
                showSubtitles 
                ? 'bg-purple-100 text-purple-800 shadow-[0_5px_0_#d8b4fe] active:shadow-[0_0px_0_#d8b4fe]' 
                : 'bg-slate-200 text-slate-600 shadow-[0_5px_0_#cbd5e1] active:shadow-[0_0px_0_#cbd5e1]'
              } active:translate-y-1`}
            >
              <Subtitles size={22} />
              {showSubtitles ? "CC On" : "CC Off"}
            </button>
          </div>
        </div>

        {/* 7 Continents Selector Tabs */}
        <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-3">
            <Compass size={20} className="text-indigo-600" />
            <span className="text-slate-500 font-extrabold text-xs uppercase tracking-wider">
              Select Continent (All 7 Continents):
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 pt-1 scrollbar-thin">
            {continentsData.map((continent) => {
              const isActive = activeContinent.id === continent.id;
              return (
                <button
                  key={continent.id}
                  onClick={() => handleContinentChange(continent)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-extrabold text-sm sm:text-base whitespace-nowrap transition-all transform ${
                    isActive
                      ? `bg-indigo-600 text-white shadow-md scale-105 ring-4 ring-indigo-200`
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-102'
                  }`}
                >
                  <span className="text-lg">{continent.emoji}</span>
                  <span>{continent.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-indigo-800 text-yellow-300' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {continent.countries.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-6xl mx-auto mt-8 px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Interactive Map Board */}
        <div ref={mainMapRef} className="lg:col-span-6 flex flex-col gap-4">
          <div className="bg-white rounded-[2.5rem] p-5 shadow-lg border-4 border-slate-100 flex flex-col gap-3">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{activeContinent.emoji}</span>
                <h2 className="text-xl font-extrabold text-slate-900">
                  {activeContinent.name} Map
                </h2>
              </div>
              <span className="text-xs font-bold bg-sky-100 text-sky-800 px-3 py-1 rounded-full flex items-center gap-1">
                <MapPin size={14} /> Tap a flag to explore
              </span>
            </div>

            {/* Map Canvas */}
            <div className={`rounded-[2rem] p-4 relative aspect-[4/3] border-4 transition-colors duration-500 overflow-hidden shadow-inner ${activeContinent.mapBg}`}>
              {/* Subtle map pattern backdrop */}
              <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              {/* Ocean & Sea Water Visual Labels */}
              {activeContinent.id === 'europe' && (
                <>
                  <div className="absolute top-2 left-3 bg-blue-600/80 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs border border-white/40 pointer-events-none">
                    🌊 Atlantic Ocean
                  </div>
                  <div className="absolute top-3 right-3 bg-cyan-600/80 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs border border-white/40 pointer-events-none">
                    🌊 North Sea
                  </div>
                  <div className="absolute bottom-2 left-1/3 bg-indigo-600/80 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs border border-white/40 pointer-events-none">
                    🌊 Mediterranean Sea
                  </div>
                </>
              )}
              {activeContinent.id === 'asia' && (
                <>
                  <div className="absolute top-3 right-3 bg-blue-600/80 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs border border-white/40 pointer-events-none">
                    🌊 Pacific Ocean
                  </div>
                  <div className="absolute bottom-3 left-4 bg-teal-600/80 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs border border-white/40 pointer-events-none">
                    🌊 Indian Ocean
                  </div>
                </>
              )}
              {activeContinent.id === 'africa' && (
                <>
                  <div className="absolute top-2 left-4 bg-sky-600/80 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs border border-white/40 pointer-events-none">
                    🌊 Mediterranean Sea
                  </div>
                  <div className="absolute top-1/2 left-2 bg-blue-600/80 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs border border-white/40 pointer-events-none">
                    🌊 Atlantic Ocean
                  </div>
                  <div className="absolute bottom-6 right-3 bg-amber-600/80 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs border border-white/40 pointer-events-none">
                    🌊 Indian Ocean
                  </div>
                </>
              )}
              {activeContinent.id === 'northamerica' && (
                <>
                  <div className="absolute top-2 left-1/3 bg-cyan-700/80 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs border border-white/40 pointer-events-none">
                    🌊 Arctic Ocean
                  </div>
                  <div className="absolute top-1/3 left-2 bg-indigo-600/80 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs border border-white/40 pointer-events-none">
                    🌊 Pacific Ocean
                  </div>
                  <div className="absolute top-1/3 right-2 bg-blue-600/80 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs border border-white/40 pointer-events-none">
                    🌊 Atlantic Ocean
                  </div>
                </>
              )}
              {activeContinent.id === 'southamerica' && (
                <>
                  <div className="absolute top-1/3 left-2 bg-indigo-600/80 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs border border-white/40 pointer-events-none">
                    🌊 Pacific Ocean
                  </div>
                  <div className="absolute top-1/3 right-2 bg-blue-600/80 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs border border-white/40 pointer-events-none">
                    🌊 Atlantic Ocean
                  </div>
                </>
              )}
              {activeContinent.id === 'oceania' && (
                <>
                  <div className="absolute top-1/3 left-2 bg-blue-600/80 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs border border-white/40 pointer-events-none">
                    🌊 Indian Ocean
                  </div>
                  <div className="absolute top-1/3 right-2 bg-cyan-600/80 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs border border-white/40 pointer-events-none">
                    🌊 Pacific Ocean
                  </div>
                </>
              )}
              {activeContinent.id === 'antarctica' && (
                <div className="absolute top-2 left-1/3 bg-indigo-800/80 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs border border-white/40 pointer-events-none">
                  🌊 Southern Icy Ocean
                </div>
              )}

              {activeContinent.countries.map((country) => {
                const isSelected = selectedCountry.id === country.id;
                return (
                  <motion.button
                    key={country.id}
                    onClick={() => handleCountryClick(country)}
                    className={`absolute ${country.position} w-20 h-20 sm:w-28 sm:h-28 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] transition-transform z-10 ${
                      country.color
                    } ${
                      isSelected ? 'ring-8 ring-yellow-300 scale-110 z-20 shadow-2xl' : 'hover:scale-110 shadow-md hover:z-20 opacity-90 hover:opacity-100'
                    }`}
                    animate={isSelected ? {
                      rotate: [0, 4, -4, 0],
                      scale: [1.1, 1.13, 1.1],
                      transition: { duration: 1.2, repeat: Infinity, repeatType: "reverse" }
                    } : { rotate: 0 }}
                    aria-label={`Select ${country.name}`}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-1">
                      {/* Flag Image */}
                      <img 
                        src={country.flagUrl} 
                        alt={`Flag of ${country.name}`} 
                        referrerPolicy="no-referrer"
                        className="w-9 h-9 sm:w-11 sm:h-11 object-cover rounded-full border-2 border-white shadow-md mb-1" 
                      />
                      <span className="bg-white/95 text-slate-900 font-extrabold px-1.5 py-0.5 rounded-full text-[10px] sm:text-xs shadow-sm backdrop-blur-sm text-center line-clamp-1 max-w-full">
                        {country.name}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <p className="text-xs text-slate-500 text-center font-medium italic">
              {activeContinent.description}
            </p>
          </div>

          {/* Quick Continent Country Grid */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border-2 border-slate-100">
            <h3 className="text-sm font-extrabold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
              <BookOpen size={16} className="text-indigo-600" />
              Countries in {activeContinent.name}:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {activeContinent.countries.map((country) => {
                const isSelected = selectedCountry.id === country.id;
                return (
                  <button
                    key={country.id}
                    onClick={() => handleCountryClick(country)}
                    className={`flex items-center gap-2 p-2 rounded-xl text-left font-bold text-xs sm:text-sm transition-all border ${
                      isSelected 
                        ? 'bg-indigo-50 border-indigo-400 text-indigo-900 shadow-sm' 
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <img 
                      src={country.flagUrl} 
                      alt="" 
                      referrerPolicy="no-referrer"
                      className="w-6 h-4 object-cover rounded shadow-xs" 
                    />
                    <span className="truncate">{country.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Learning Explorer */}
        <div className="lg:col-span-6 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCountry.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-[2.5rem] shadow-xl border-4 border-indigo-100 p-6 sm:p-8 flex-1 flex flex-col relative"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b-2 border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      {selectedCountry.location.region}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    {selectedCountry.name}
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 font-bold flex items-center gap-2 mt-1">
                    <MapPin size={20} className="text-pink-500 flex-shrink-0" />
                    Capital: <span className="text-pink-600 font-extrabold">{selectedCountry.capital}</span>
                  </p>
                </div>

                {/* Big Flag Display */}
                <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border-2 border-slate-200 self-start sm:self-auto">
                  <img 
                    src={selectedCountry.flagUrl} 
                    alt={`Flag of ${selectedCountry.name}`} 
                    referrerPolicy="no-referrer"
                    className="w-20 h-14 sm:w-24 sm:h-16 object-cover rounded-xl shadow-md border-2 border-white transform hover:scale-105 transition-transform"
                  />
                </div>
              </div>

              {/* Learning Explorer Tabs */}
              <div className="flex items-center gap-2 mt-5 mb-5 bg-slate-100 p-1.5 rounded-2xl">
                <button
                  onClick={() => setActiveTab('memory')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-extrabold text-xs sm:text-sm transition-all ${
                    activeTab === 'memory'
                      ? 'bg-white text-indigo-900 shadow-sm border border-indigo-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <ImageIcon size={16} className="text-amber-500" />
                  <span>Memory Picture</span>
                </button>
                <button
                  onClick={() => setActiveTab('flag')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-extrabold text-xs sm:text-sm transition-all ${
                    activeTab === 'flag'
                      ? 'bg-white text-indigo-900 shadow-sm border border-indigo-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Flag size={16} className="text-red-500" />
                  <span>Flag Story</span>
                </button>
                <button
                  onClick={() => setActiveTab('location')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-extrabold text-xs sm:text-sm transition-all ${
                    activeTab === 'location'
                      ? 'bg-white text-indigo-900 shadow-sm border border-indigo-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Navigation size={16} className="text-emerald-500" />
                  <span>Map &amp; Location</span>
                </button>
              </div>

              {/* Tab Content 1: Memory Picture & Fact */}
              {activeTab === 'memory' && (
                <div className="space-y-4">
                  {/* Photo of the fact for visual memorization */}
                  <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-slate-200 aspect-[16/9] group">
                    <img 
                      src={selectedCountry.factImageUrl} 
                      alt={selectedCountry.factImageCaption} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                      <p className="text-white text-xs sm:text-sm font-bold flex items-center gap-1.5">
                        <Sparkles size={16} className="text-yellow-300 flex-shrink-0" />
                        {selectedCountry.factImageCaption}
                      </p>
                    </div>
                  </div>

                  {/* Fun Fact Card */}
                  <div className={`rounded-2xl p-4 border-2 transition-all duration-300 ${
                    isPlaying 
                      ? 'bg-yellow-100 border-yellow-400 ring-2 ring-yellow-300 shadow-md' 
                      : 'bg-amber-50 border-amber-200 shadow-sm'
                  }`}>
                    <h3 className="font-extrabold text-amber-900 flex items-center gap-2 mb-1 text-sm sm:text-base">
                      <CheckCircle size={18} className="text-amber-600" />
                      Uniqueness &amp; Memory Tip:
                    </h3>
                    <p className="text-slate-800 font-bold text-sm sm:text-base leading-snug">
                      {selectedCountry.uniqueness}
                    </p>
                  </div>
                </div>
              )}

              {/* Tab Content 2: Flag Significance & Meaning */}
              {activeTab === 'flag' && (
                <div className="space-y-4">
                  {/* Why Flag Was Chosen */}
                  <div className="bg-red-50/80 rounded-2xl p-4 border-2 border-red-200">
                    <h3 className="font-extrabold text-red-900 flex items-center gap-2 mb-2 text-sm sm:text-base">
                      <Flag size={18} className="text-red-600" />
                      Why This Flag Was Chosen:
                    </h3>
                    <p className="text-slate-800 text-sm sm:text-base font-medium leading-relaxed">
                      {selectedCountry.flagMeaning.story}
                    </p>
                  </div>

                  {/* What's In The Flag (Elements) */}
                  <div className="bg-slate-50 rounded-2xl p-4 border-2 border-slate-200">
                    <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wider mb-2">
                      What is on the Flag?
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedCountry.flagMeaning.elements.map((element, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-bold text-slate-700">
                          <span className="text-indigo-500 font-black">•</span>
                          {element}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Color Symbolism */}
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wider mb-2">
                      Color Meanings &amp; Symbolism:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedCountry.flagMeaning.colors.map((colorItem, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                          <span className={`w-5 h-5 rounded-full flex-shrink-0 shadow-xs ${colorItem.colorClass}`} />
                          <div>
                            <span className="font-black text-xs text-slate-900 block">{colorItem.name}</span>
                            <span className="text-[11px] text-slate-600 font-medium leading-tight block">{colorItem.symbol}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content 3: Geographical Location & Interactive Visual Map */}
              {activeTab === 'location' && (
                <VisualCountryMap 
                  country={selectedCountry} 
                  continent={activeContinent} 
                  onFocusMainMap={scrollToMainMap} 
                />
              )}

              {/* Audio Guide & Subtitles Box */}
              <div className="mt-6 pt-5 border-t-2 border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-black text-indigo-950 flex items-center gap-2">
                    <Volume2 size={22} className="text-indigo-600" /> 
                    Listen &amp; Learn Story
                  </h3>
                  
                  {!isPlaying ? (
                    <button 
                      onClick={() => play(getAudioText(selectedCountry))}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-[0_3px_0_#3730a3] active:shadow-[0_0px_0_#3730a3] active:translate-y-0.5 transition-all"
                      aria-label="Play Audio"
                    >
                      <Play size={18} fill="currentColor" />
                      Listen Now
                    </button>
                  ) : (
                    <button 
                      onClick={handleStop}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-[0_3px_0_#991b1b] active:shadow-[0_0px_0_#991b1b] active:translate-y-0.5 transition-all"
                      aria-label="Stop Audio"
                    >
                      <Square size={18} fill="currentColor" />
                      Stop Audio
                    </button>
                  )}
                </div>

                <div className={`bg-slate-50 rounded-2xl p-4 border-2 border-slate-200 text-slate-800 ${!showSubtitles ? 'flex items-center justify-center' : ''}`}>
                  {showSubtitles ? (
                    <HighlightText 
                      text={selectedCountry.description} 
                      charIndex={charIndex} 
                      active={isPlaying} 
                    />
                  ) : (
                    <p className="text-slate-400 italic font-medium text-xs sm:text-sm text-center">
                      Subtitles hidden. Click &quot;CC On&quot; to read along!
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <ScrollToTop />
    </div>
  );
}
