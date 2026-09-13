"use client";

import Image from 'next/image';
import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Square, 
  Volume2, 
  Globe, 
  MapPin, 
  Compass,
  Flag,
  Navigation,
  Sparkles,
  BookOpen,
  Search,
  Users,
  Coins,
  Languages,
  Award,
  Layers,
  ChevronRight,
  RefreshCw,
  Info,
  ArrowLeft
} from 'lucide-react';
import { 
  continentsData, 
  Continent, 
  Country, 
  getFullCountryGuideStory,
  getCountryOrGenerate 
} from '@/app/data/countries';
import { WORLD_ALL_FLAGS, WorldFlagItem } from '@/app/data/world-flags-catalog';
import { useAudioGuide } from '@/hooks/use-audio-guide';
import { ScrollToTop } from '@/components/scroll-to-top';
import { RealCountryMap } from '@/components/real-country-map';

type AudioSection = 'intro' | 'flag' | 'geography' | 'facts' | null;

export default function KidsApp() {
  const [mainView, setMainView] = useState<'world' | 'country'>('world');
  const [selectedCountry, setSelectedCountry] = useState<Country>(continentsData[0].countries[0]);
  const [activeContinent, setActiveContinent] = useState<Continent>(continentsData[0]);
  
  // All Flags Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [catalogContinentFilter, setCatalogContinentFilter] = useState('All');
  
  // Audio state tracking which section is being read
  const { play, stop, isPlaying } = useAudioGuide();
  const [activeAudioSection, setActiveAudioSection] = useState<AudioSection>(null);

  // Filtered world flags for the comprehensive catalog
  const filteredFlags = useMemo(() => {
    return WORLD_ALL_FLAGS.filter((item) => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.iso2.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesContinent = 
        catalogContinentFilter === 'All' || item.continent === catalogContinentFilter;
      
      return matchesSearch && matchesContinent;
    });
  }, [searchQuery, catalogContinentFilter]);

  const handleSelectCountry = (country: Country, continent?: Continent) => {
    stop();
    setActiveAudioSection(null);
    if (continent && continent.id !== activeContinent.id) {
      setActiveContinent(continent);
    }
    setSelectedCountry(country);
    setMainView('country');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const playSection = (section: NonNullable<AudioSection>) => {
    if (isPlaying && activeAudioSection === section) {
      stop();
      setActiveAudioSection(null);
    } else {
      stop(); // Stop anything currently playing
      setActiveAudioSection(section);
      const text = getFullCountryGuideStory(selectedCountry, section);
      play(text, () => setActiveAudioSection(null));
    }
  };

  const getSectionHighlight = (section: NonNullable<AudioSection>) => {
    return isPlaying && activeAudioSection === section 
      ? 'ring-4 ring-amber-400 bg-amber-400/10 shadow-lg shadow-amber-500/20 transform scale-[1.01] transition-all duration-300' 
      : 'border-slate-800 transition-all duration-300';
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-32 font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Top Global Header */}
      <header className="bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-6 px-4 sm:px-6 relative overflow-hidden shadow-2xl z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-indigo-600 to-amber-500 rounded-xl text-white shadow-xl shadow-indigo-950/50 flex-shrink-0 cursor-pointer" onClick={() => { stop(); setMainView('world'); }}>
              <Globe size={32} className="animate-spin-slow" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight cursor-pointer" onClick={() => { stop(); setMainView('world'); }}>
                World Flags &amp; Country Explorer 🌍
              </h1>
              <p className="text-sm text-slate-400 font-medium max-w-2xl">
                195 Sovereign Nations • Real Geography • Audio Stories
              </p>
            </div>
          </div>
          
          {mainView === 'country' && (
            <button
              onClick={() => {
                stop();
                setActiveAudioSection(null);
                setMainView('world');
              }}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all cursor-pointer border border-slate-700"
            >
              <ArrowLeft size={18} />
              <span>Back to World Atlas</span>
            </button>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 space-y-12">
        
        {/* ============================================================== */}
        {/* VIEW 1: WORLD DIRECTORY                                        */}
        {/* ============================================================== */}
        {mainView === 'world' && (
          <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-12">
              
              

              {/* ALL 195 FLAGS DIRECTORY */}
              <section className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      The 195 Sovereign Countries Catalog
                    </h2>
                    <p className="text-slate-400 text-sm mt-1 max-w-3xl">
                      Explore the official national flags, capitals, and populations of every universally recognized sovereign nation.
                    </p>
                  </div>

                  {/* Search input */}
                  <div className="w-full md:w-80 relative shrink-0">
                    <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search countries, capitals..."
                      className="w-full pl-9 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>

                {/* Continent Filter Chips */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'All', label: 'All 195 Countries', count: 195 },
                    { name: 'Africa', label: '🌍 Africa', count: 54 },
                    { name: 'Asia', label: '🌏 Asia', count: 48 },
                    { name: 'Europe', label: '🏰 Europe', count: 45 },
                    { name: 'North America', label: '🗽 North America', count: 23 },
                    { name: 'Oceania', label: '🏝️ Oceania', count: 14 },
                    { name: 'South America', label: '🏔️ South America', count: 12 },
                  ].map((filter) => (
                    <button
                      key={filter.name}
                      onClick={() => setCatalogContinentFilter(filter.name)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                        catalogContinentFilter === filter.name
                          ? 'bg-amber-500 text-slate-950 font-black shadow-md ring-2 ring-amber-400/40'
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                      }`}
                    >
                      <span>{filter.label}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                        catalogContinentFilter === filter.name
                          ? 'bg-slate-950/20 text-slate-950'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {filter.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Showing search result count */}
                <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                  <span>Showing <strong>{filteredFlags.length}</strong> matches</span>
                </div>

                {/* Flag Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
                  {filteredFlags.map((flagItem) => (
                    <div
                      key={flagItem.id}
                      onClick={() => {
                        let matchedContinent = continentsData.find(
                          c => c.name.toLowerCase() === flagItem.continent.toLowerCase() ||
                               c.id.toLowerCase() === flagItem.continent.toLowerCase().replace(/\s+/g, '-')
                        ) || continentsData[0];
                        const countryObj = getCountryOrGenerate(flagItem);
                        handleSelectCountry(countryObj, matchedContinent);
                      }}
                      className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col items-center text-center transition-all duration-200 cursor-pointer group hover:-translate-y-1 hover:border-indigo-500 shadow-md"
                    >
                      <div className="relative w-full aspect-3/2 rounded-lg overflow-hidden border border-slate-700 shadow-sm mb-3 group-hover:ring-2 group-hover:ring-indigo-400">
                        <Image
                          src={flagItem.flagUrl}
                          alt={`Flag of ${flagItem.name}`}
                          fill
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className="font-bold text-white text-sm line-clamp-1 group-hover:text-indigo-300 mb-1">
                        {flagItem.name}
                      </span>
                      <span className="text-[11px] text-slate-400 line-clamp-1 mb-2">
                        {flagItem.capital}
                      </span>
                      <div className="mt-auto flex items-center gap-1.5 w-full justify-center">
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-amber-300/90 border border-slate-700 truncate max-w-[80%]">
                          {flagItem.population}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </motion.div>
          </AnimatePresence>
        )}

        {/* ============================================================== */}
        {/* VIEW 2: UNIFIED COUNTRY PROFILE                                */}
        {/* ============================================================== */}
        {mainView === 'country' && (
          <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-8">
              
              {/* Country Hero Header (Intro) */}
              <section className={`bg-slate-950 border rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden ${getSectionHighlight('intro')}`}>
                <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
                  <div className="relative w-48 sm:w-64 aspect-3/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700 shrink-0">
                    <Image
                      src={selectedCountry.flagUrl}
                      alt={`Flag of ${selectedCountry.name}`}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 space-y-4 text-center lg:text-left">
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                      <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider rounded-full border border-indigo-500/30">
                        {selectedCountry.location.region}
                      </span>
                      <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full border border-amber-500/30">
                        Capital: {selectedCountry.capital}
                      </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {selectedCountry.name}
                    </h2>
                    <p className="text-lg font-medium text-slate-300">
                      {selectedCountry.officialName}
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm">
                      <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                        <Users size={16} className="text-indigo-400" />
                        <strong>Pop:</strong> {selectedCountry.population}
                      </span>
                      <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                        <Languages size={16} className="text-emerald-400" />
                        <strong>Language:</strong> {selectedCountry.languages[0]}
                      </span>
                      <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                        <Coins size={16} className="text-amber-400" />
                        <strong>Currency:</strong> {selectedCountry.currency}
                      </span>
                    </div>
                  </div>

                  {/* Intro Play Button */}
                  <div className="shrink-0 flex flex-col gap-2 w-full lg:w-auto">
                    <button
                      onClick={() => playSection('intro')}
                      className={`flex items-center justify-center gap-2 px-6 py-4 font-bold rounded-2xl shadow-xl transition-all cursor-pointer ${
                        activeAudioSection === 'intro'
                          ? 'bg-rose-600 hover:bg-rose-500 text-white animate-pulse'
                          : 'bg-emerald-600 hover:bg-emerald-500 text-white hover:scale-105'
                      }`}
                    >
                      {activeAudioSection === 'intro' ? <Square size={20} fill="currentColor" /> : <Volume2 size={20} />}
                      <span>{activeAudioSection === 'intro' ? 'Stop Reading' : 'Listen to Intro'}</span>
                    </button>
                  </div>
                </div>

                <div className="mt-8 p-5 bg-slate-900 border border-slate-800 rounded-2xl text-slate-300 text-lg leading-relaxed shadow-inner">
                  {getFullCountryGuideStory(selectedCountry, 'intro')}
                </div>
              </section>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Real Map & Geography Section */}
                <section className={`bg-slate-950 border rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col h-full ${getSectionHighlight('geography')}`}>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      <MapPin size={24} className="text-emerald-400" />
                      <span>Real Map &amp; Geography</span>
                    </h3>
                    <button
                      onClick={() => playSection('geography')}
                      className={`p-3 rounded-xl transition-all cursor-pointer shadow-md ${
                        activeAudioSection === 'geography'
                          ? 'bg-rose-600 text-white animate-pulse'
                          : 'bg-slate-800 text-emerald-400 hover:bg-emerald-600 hover:text-white'
                      }`}
                    >
                      {activeAudioSection === 'geography' ? <Square size={20} fill="currentColor" /> : <Volume2 size={20} />}
                    </button>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-6">
                    {getFullCountryGuideStory(selectedCountry, 'geography')}
                  </p>

                  <div className="flex-grow min-h-[400px] w-full rounded-2xl overflow-hidden border-2 border-slate-800 relative z-0">
                    <RealCountryMap
                      selectedCountry={selectedCountry}
                      activeContinent={activeContinent}
                      onSelectNeighbor={(neighborName) => {
                        let matchedContinent: Continent | undefined;
                        let matchedCountry: Country | undefined;
                        for (const cont of continentsData) {
                          const found = cont.countries.find(
                            c => c.name.toLowerCase() === neighborName.toLowerCase() ||
                                 c.id.toLowerCase() === neighborName.toLowerCase().replace(/\s+/g, '-')
                          );
                          if (found) {
                            matchedContinent = cont;
                            matchedCountry = found;
                            break;
                          }
                        }
                        if (matchedCountry) {
                          handleSelectCountry(matchedCountry, matchedContinent);
                        }
                      }}
                    />
                  </div>
                </section>

                {/* Flag & Fascinating Facts Column */}
                <div className="space-y-8 flex flex-col h-full">
                  
                  {/* Flag Symbolism Section */}
                  <section className={`bg-slate-950 border rounded-3xl p-6 sm:p-8 shadow-xl ${getSectionHighlight('flag')}`}>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Flag size={24} className="text-indigo-400" />
                        <span>Flag Symbolism</span>
                      </h3>
                      <button
                        onClick={() => playSection('flag')}
                        className={`p-3 rounded-xl transition-all cursor-pointer shadow-md ${
                          activeAudioSection === 'flag'
                            ? 'bg-rose-600 text-white animate-pulse'
                            : 'bg-slate-800 text-indigo-400 hover:bg-indigo-600 hover:text-white'
                        }`}
                      >
                        {activeAudioSection === 'flag' ? <Square size={20} fill="currentColor" /> : <Volume2 size={20} />}
                      </button>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-6">
                      {getFullCountryGuideStory(selectedCountry, 'flag')}
                    </p>

                    <div className="space-y-3">
                      {selectedCountry.flagMeaning.colors.map((color, idx) => (
                        <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                          <span className={`px-4 py-1.5 rounded-lg font-bold text-xs shrink-0 inline-block text-center sm:text-left ${color.colorClass}`}>
                            {color.name}
                          </span>
                          <span className="text-sm font-medium text-slate-300 text-center sm:text-left">
                            {color.symbol}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Facts Section */}
                  <section className={`bg-slate-950 border rounded-3xl p-6 sm:p-8 shadow-xl flex-grow flex flex-col ${getSectionHighlight('facts')}`}>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Sparkles size={24} className="text-amber-400" />
                        <span>Fascinating Facts</span>
                      </h3>
                      <button
                        onClick={() => playSection('facts')}
                        className={`p-3 rounded-xl transition-all cursor-pointer shadow-md ${
                          activeAudioSection === 'facts'
                            ? 'bg-rose-600 text-white animate-pulse'
                            : 'bg-slate-800 text-amber-400 hover:bg-amber-600 hover:text-white'
                        }`}
                      >
                        {activeAudioSection === 'facts' ? <Square size={20} fill="currentColor" /> : <Volume2 size={20} />}
                      </button>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-6">
                      {getFullCountryGuideStory(selectedCountry, 'facts')}
                    </p>

                    <div className="space-y-3 flex-grow">
                      {selectedCountry.interestingFacts.map((fact, idx) => (
                        <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-start gap-4 shadow-sm">
                          <span className="flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold text-xs mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-sm text-slate-300 leading-relaxed">
                            {fact}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </main>

      <ScrollToTop />
    </div>
  );
}
