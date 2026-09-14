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
  ArrowLeft,
  ArrowRight,
  Camera,
  Landmark,
  Maximize2,
  Maximize,
  Minimize,
  Sun,
  Power
} from 'lucide-react';
import { 
  continentsData, 
  Continent, 
  Country, 
  LandmarkPhoto,
  getFullCountryGuideStory,
  getCountryOrGenerate,
  formatPopulation 
} from '@/app/data/countries';
import { WORLD_ALL_FLAGS, WorldFlagItem } from '@/app/data/world-flags-catalog';
import { useAudioGuide } from '@/hooks/use-audio-guide';
import { useFullscreenWakelock } from '@/hooks/use-fullscreen-wakelock';
import { ScrollToTop } from '@/components/scroll-to-top';
import { WorldContinentsMap } from '@/components/world-continents-map';
import { RealCountryMap } from '@/components/real-country-map';
import { ErrorBoundary } from '@/components/error-boundary';

type AudioSection = 'intro' | 'flag' | 'geography' | 'facts' | null;

export default function KidsApp() {
  const [mainView, setMainView] = useState<'world' | 'country'>('world');
  const [selectedCountry, setSelectedCountry] = useState<Country>(continentsData[0].countries[0]);
  const [activeContinent, setActiveContinent] = useState<Continent>(continentsData[0]);
  const [activePhotoModal, setActivePhotoModal] = useState<LandmarkPhoto | null>(null);

  // Screen awake & Fullscreen management (optimised for all Android & mobile devices)
  const {
    isFullScreen,
    toggleFullScreen,
    keepAwake,
    toggleKeepAwake,
    wakeLockActive
  } = useFullscreenWakelock();
  
  // All Flags Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [catalogContinentFilter, setCatalogContinentFilter] = useState('All');
  
  // Audio state tracking which section is being read
  const { play, stop, isPlaying } = useAudioGuide();
  const [activeAudioSection, setActiveAudioSection] = useState<AudioSection>(null);
  const [isReadAll, setIsReadAll] = useState(false);
  const readAllActiveRef = useRef(false);
  const readAllTimerRef = useRef<NodeJS.Timeout | null>(null);

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

  // Sibling countries navigation state (Previous / Next within continent)
  const currentContinent = useMemo(() => {
    return continentsData.find(
      c => c.countries.some(country => country.id === selectedCountry.id)
    ) || activeContinent;
  }, [selectedCountry, activeContinent]);

  const siblingCountries = useMemo(() => {
    return currentContinent.countries;
  }, [currentContinent]);

  const currentIndex = useMemo(() => {
    return siblingCountries.findIndex(c => c.id === selectedCountry.id);
  }, [siblingCountries, selectedCountry]);

  const prevCountry = useMemo(() => {
    if (siblingCountries.length === 0) return selectedCountry;
    const idx = (currentIndex - 1 + siblingCountries.length) % siblingCountries.length;
    return siblingCountries[idx];
  }, [siblingCountries, currentIndex, selectedCountry]);

  const nextCountry = useMemo(() => {
    if (siblingCountries.length === 0) return selectedCountry;
    const idx = (currentIndex + 1) % siblingCountries.length;
    return siblingCountries[idx];
  }, [siblingCountries, currentIndex, selectedCountry]);

  const stopAllAudio = () => {
    readAllActiveRef.current = false;
    if (readAllTimerRef.current) {
      clearTimeout(readAllTimerRef.current);
      readAllTimerRef.current = null;
    }
    setIsReadAll(false);
    setActiveAudioSection(null);
    stop();
  };

  const playReadAllSequence = (stepIndex = 0) => {
    const sequence: NonNullable<AudioSection>[] = ['intro', 'geography', 'flag', 'facts'];
    
    if (stepIndex >= sequence.length || !readAllActiveRef.current) {
      readAllActiveRef.current = false;
      setIsReadAll(false);
      setActiveAudioSection(null);
      return;
    }

    const currentSection = sequence[stepIndex];
    setActiveAudioSection(currentSection);

    // Smoothly scroll and shift focus to the section being read
    const elem = document.getElementById(`section-${currentSection}`);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    const text = getFullCountryGuideStory(selectedCountry, currentSection);
    play(text, () => {
      // Proceed to the next section if Read All is still active
      if (readAllActiveRef.current) {
        readAllTimerRef.current = setTimeout(() => {
          if (readAllActiveRef.current) {
            playReadAllSequence(stepIndex + 1);
          }
        }, 500);
      }
    });
  };

  const toggleReadAll = () => {
    if (isReadAll) {
      // Stop in between
      stopAllAudio();
    } else {
      stop();
      readAllActiveRef.current = true;
      setIsReadAll(true);
      playReadAllSequence(0);
    }
  };

  const playSection = (section: NonNullable<AudioSection>) => {
    // Clicking the component currently being read stops it immediately
    if (isPlaying && activeAudioSection === section) {
      stopAllAudio();
      return;
    }

    // Immediately stop whatever was playing (individual section or Read All) and start the clicked one
    stopAllAudio();

    // Start playing the clicked section immediately
    setActiveAudioSection(section);
    const elem = document.getElementById(`section-${section}`);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    const text = getFullCountryGuideStory(selectedCountry, section);
    play(text, () => {
      setActiveAudioSection(null);
    });
  };

  // Recover gracefully if browser holds stale chunks after rebuilds
  useEffect(() => {
    function handleChunkLoadError(event: ErrorEvent) {
      const msg = event?.message || '';
      if (
        msg.includes('ChunkLoadError') ||
        msg.includes('Loading chunk') ||
        event?.error?.name === 'ChunkLoadError'
      ) {
        console.warn('ChunkLoadError detected by page listener. Reloading with fresh assets...');
        window.location.reload();
      }
    }
    window.addEventListener('error', handleChunkLoadError);
    return () => window.removeEventListener('error', handleChunkLoadError);
  }, []);

  const handleSelectCountry = (country: Country, continent?: Continent) => {
    stopAllAudio();
    if (continent && continent.id !== activeContinent.id) {
      setActiveContinent(continent);
    }
    setSelectedCountry(country);
    setMainView('country');
    
    // Smooth scroll to top, reinforced with a deferred frame call to counter React re-render layout shifts
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 60);
  };

  const getSectionHighlight = (section: NonNullable<AudioSection>) => {
    return isPlaying && activeAudioSection === section 
      ? 'ring-4 ring-amber-400 bg-amber-400/10 shadow-lg shadow-amber-500/20 transform scale-[1.01] transition-all duration-300' 
      : 'border-slate-800 transition-all duration-300';
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-32 font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Top Global Header - Simple & Clean */}
      <header className="bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3.5 px-4 sm:px-6 sticky top-0 z-30 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-indigo-600 to-amber-500 rounded-xl text-white shadow-lg shadow-indigo-950/50 shrink-0 cursor-pointer" onClick={() => { stopAllAudio(); setMainView('world'); }}>
              <Globe size={22} className="animate-spin-slow" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-black text-white tracking-tight cursor-pointer" onClick={() => { stopAllAudio(); setMainView('world'); }}>
                World Flags &amp; Country Explorer 🌍
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {mainView === 'country' && (
              <button
                onClick={() => {
                  stopAllAudio();
                  setMainView('world');
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer border border-slate-700"
              >
                <ArrowLeft size={15} />
                <span>Atlas</span>
              </button>
            )}

            {/* Subtle, compact Screen Awake icon toggle (always active by default) */}
            <button
              type="button"
              onClick={toggleKeepAwake}
              aria-label={keepAwake ? "Screen Awake is Active" : "Screen Awake is Inactive"}
              title={keepAwake ? "Screen Awake: Active (Prevents Android & mobile sleep)" : "Screen Awake: Off"}
              className={`p-2 rounded-xl transition-all cursor-pointer border ${
                keepAwake
                  ? 'bg-emerald-950/50 border-emerald-600/70 text-amber-400 hover:bg-emerald-900/60 shadow-sm'
                  : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'
              }`}
            >
              <Sun size={17} className={keepAwake ? 'text-amber-400' : 'text-slate-500'} />
            </button>

            {/* Compact Fullscreen icon toggle */}
            <button
              type="button"
              onClick={toggleFullScreen}
              aria-label={isFullScreen ? "Exit Full Screen" : "Enter Full Screen"}
              title={isFullScreen ? "Exit Full Screen" : "Enter Full Screen"}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer border border-slate-800"
            >
              {isFullScreen ? <Minimize size={17} /> : <Maximize size={17} />}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 space-y-10">
        
        {/* ============================================================== */}
        {/* VIEW 1: WORLD DIRECTORY                                        */}
        {/* ============================================================== */}
        {mainView === 'world' && (
          <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
              
              {/* World Continents Reference Map (Gauge where each continent is across Earth) */}
              <WorldContinentsMap
                activeContinentFilter={catalogContinentFilter}
                onSelectContinent={(continentName) => {
                  setCatalogContinentFilter(continentName);
                  const catalogElem = document.getElementById('countries-catalog-section');
                  if (catalogElem && continentName !== 'All') {
                    catalogElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                onOpenAntarctica={() => {
                  const antarcticaCont = continentsData.find(c => c.id === 'antarctica') || continentsData[6];
                  const antarcticaCountry = antarcticaCont?.countries[0];
                  if (antarcticaCountry) {
                    handleSelectCountry(antarcticaCountry, antarcticaCont);
                  }
                }}
              />

              {/* ALL 196 FLAGS & 7 CONTINENTS DIRECTORY */}
              <section id="countries-catalog-section" className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                      <span>196 Nations &amp; Territories</span>
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Explore 196 flags across Earth&apos;s 7 continents (195 sovereign nations + Antarctica).
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

                {/* Continent Filter Chips (All 7 Continents) */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'All', label: 'All (196)', count: 196 },
                    { name: 'Africa', label: '🌍 Africa', count: 54 },
                    { name: 'Asia', label: '🌏 Asia', count: 48 },
                    { name: 'Europe', label: '🏰 Europe', count: 45 },
                    { name: 'North America', label: '🗽 North America', count: 23 },
                    { name: 'Oceania', label: '🏝️ Oceania', count: 14 },
                    { name: 'South America', label: '🏔️ South America', count: 12 },
                    { name: 'Antarctica', label: '❄️ Antarctica', count: 1 },
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

                {/* Explanatory Banner for Antarctica (Why it is the 7th continent and its treaty status) */}
                {catalogContinentFilter === 'Antarctica' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-cyan-950/50 border border-cyan-800/80 text-cyan-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg"
                  >
                    <div className="space-y-1 max-w-3xl">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-cyan-800/80 text-cyan-200 text-[10px] font-black uppercase tracking-wider">
                          Geography Fact
                        </span>
                        <h4 className="text-sm font-black text-white">
                          Why is Antarctica the 7th continent without a sovereign country?
                        </h4>
                      </div>
                      <p className="text-xs text-cyan-200/90 leading-relaxed">
                        Geographically, Antarctica is Earth&apos;s 5th-largest continent (14.2 million km²). Under the historic <strong>1959 Antarctic Treaty</strong> signed by 56 nations, the continent is governed as a global scientific commons dedicated exclusively to peaceful scientific research, nature protection, and penguins, with no sovereign government or permanent native human population.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        const antarcticaCont = continentsData.find(c => c.id === 'antarctica') || continentsData[6];
                        const antarcticaCountry = antarcticaCont?.countries[0];
                        if (antarcticaCountry) {
                          handleSelectCountry(antarcticaCountry, antarcticaCont);
                        }
                      }}
                      className="shrink-0 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-black rounded-xl transition-all cursor-pointer shadow-md flex items-center gap-1.5"
                    >
                      <span>Explore Antarctica Story</span>
                      <ChevronRight size={14} />
                    </button>
                  </motion.div>
                )}

                {/* Showing search result count */}
                <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                  <span>Showing <strong>{filteredFlags.length}</strong> {catalogContinentFilter === 'Antarctica' ? 'polar territory' : 'nations'}</span>
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
                      <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden border border-slate-700 shadow-sm mb-3 group-hover:ring-2 group-hover:ring-indigo-400">
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
                          {formatPopulation(flagItem.population)}
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
              <section id="section-intro" className={`bg-slate-950 border rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden scroll-mt-8 ${getSectionHighlight('intro')}`}>
                <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
                  <div className="relative w-48 sm:w-64 aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700 shrink-0">
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
                        <strong>Population:</strong> {formatPopulation(selectedCountry.population)}
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

                  {/* Actions: Read All and Section Audio Toggle */}
                  <div className="shrink-0 flex items-center gap-3 w-full lg:w-auto justify-center lg:justify-end">
                    {/* Read All Button */}
                    <button
                      id="btn-read-all"
                      onClick={toggleReadAll}
                      title={isReadAll ? "Stop narration" : "Read all sections in sequence"}
                      className={`flex items-center justify-center gap-2.5 px-6 py-3.5 font-bold rounded-2xl shadow-xl transition-all cursor-pointer ${
                        isReadAll
                          ? 'bg-rose-600 hover:bg-rose-500 text-white animate-pulse'
                          : 'bg-emerald-600 hover:bg-emerald-500 text-white hover:scale-105'
                      }`}
                    >
                      {isReadAll ? <Square size={20} fill="currentColor" /> : <Volume2 size={20} />}
                      <span>{isReadAll ? 'Stop' : 'Read All'}</span>
                    </button>

                    {/* Intro Audio Icon Indicator Only */}
                    <button
                      id="btn-audio-intro"
                      onClick={() => playSection('intro')}
                      title="Listen to Intro"
                      aria-label="Listen to Intro"
                      className={`p-3.5 rounded-2xl transition-all cursor-pointer shadow-md flex items-center justify-center border ${
                        activeAudioSection === 'intro'
                          ? 'bg-rose-600 text-white animate-pulse border-rose-500'
                          : 'bg-slate-800 text-emerald-400 hover:bg-emerald-600 hover:text-white border-slate-700'
                      }`}
                    >
                      {activeAudioSection === 'intro' ? <Square size={20} fill="currentColor" /> : <Volume2 size={20} />}
                    </button>
                  </div>
                </div>

                <div className="mt-8 p-5 bg-slate-900 border border-slate-800 rounded-2xl text-slate-300 text-lg leading-relaxed shadow-inner">
                  {selectedCountry.description} {selectedCountry.uniqueness && selectedCountry.uniqueness !== selectedCountry.description ? selectedCountry.uniqueness : ''}
                </div>
              </section>

              {/* Real Map & Geography Section - Full Width Showcase */}
              <section id="section-geography" className={`bg-slate-950 border rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col scroll-mt-8 ${getSectionHighlight('geography')}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-2xl border border-emerald-500/30">
                      <MapPin size={26} />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                        <span>Real Map &amp; Geography</span>
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm font-medium mt-0.5">
                        High-definition topographic terrain, color-coded neighbors, adjacent seas, and major waterways
                      </p>
                    </div>
                  </div>

                  <button
                    id="btn-audio-geography"
                    onClick={() => playSection('geography')}
                    title="Listen to Geography"
                    aria-label="Listen to Geography"
                    className={`p-3 rounded-xl transition-all cursor-pointer shadow-md border self-start sm:self-auto ${
                      activeAudioSection === 'geography'
                        ? 'bg-rose-600 text-white animate-pulse border-rose-500'
                        : 'bg-slate-800 text-emerald-400 hover:bg-emerald-600 hover:text-white border-slate-700'
                    }`}
                  >
                    {activeAudioSection === 'geography' ? <Square size={20} fill="currentColor" /> : <Volume2 size={20} />}
                  </button>
                </div>

                <div className="mb-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-slate-300">
                  <div className="text-xs sm:text-sm leading-relaxed">
                    <span className="text-slate-400 font-semibold">Location:</span>{' '}
                    <span className="text-white font-bold">{selectedCountry.location.region}</span>
                    <span className="mx-2 text-slate-600">•</span>
                    <span className="text-slate-400 font-semibold">Capital:</span>{' '}
                    <span className="text-amber-400 font-bold">★ {selectedCountry.capital}</span>
                    <span className="mx-2 text-slate-600">•</span>
                    <span className="text-slate-400 font-semibold">Borders:</span>{' '}
                    <span className="text-slate-200">{selectedCountry.location.neighbors}</span>
                  </div>
                </div>

                <div className="w-full relative z-0">
                  <ErrorBoundary fallbackTitle="Geographic Map Preview" fallbackDescription="The interactive map is loading or updating. Click below if you wish to reload.">
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
                  </ErrorBoundary>
                </div>
              </section>

              {/* Flag Symbolism & Fascinating Facts Side-by-Side Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Flag Symbolism Section */}
                <section id="section-flag" className={`bg-slate-950 border rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col scroll-mt-8 ${getSectionHighlight('flag')}`}>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Flag size={24} className="text-indigo-400" />
                        <span>Flag Symbolism</span>
                      </h3>
                      <button
                        id="btn-audio-flag"
                        onClick={() => playSection('flag')}
                        title="Listen to Flag Symbolism"
                        aria-label="Listen to Flag Symbolism"
                        className={`p-3 rounded-xl transition-all cursor-pointer shadow-md border ${
                          activeAudioSection === 'flag'
                            ? 'bg-rose-600 text-white animate-pulse border-rose-500'
                            : 'bg-slate-800 text-indigo-400 hover:bg-indigo-600 hover:text-white border-slate-700'
                        }`}
                      >
                        {activeAudioSection === 'flag' ? <Square size={20} fill="currentColor" /> : <Volume2 size={20} />}
                      </button>
                    </div>

                    {/* Flag Visual Reference Thumbnail */}
                    <div className="flex items-center gap-4 mb-5 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-inner">
                      <div className="relative w-20 sm:w-28 aspect-[3/2] rounded-xl overflow-hidden shadow-md border border-slate-700 shrink-0 bg-slate-950">
                        <Image
                          src={selectedCountry.flagUrl}
                          alt={`${selectedCountry.name} Flag`}
                          fill
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5 truncate">
                          <span>{selectedCountry.name} Flag</span>
                        </div>
                        {selectedCountry.flagMeaning.elements && selectedCountry.flagMeaning.elements.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-1.5">
                            {selectedCountry.flagMeaning.elements.slice(0, 3).map((elem, i) => (
                              <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-indigo-300 border border-slate-700/80 truncate">
                                {elem}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-6">
                      {selectedCountry.flagMeaning.story}
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
                  <section id="section-facts" className={`bg-slate-950 border rounded-3xl p-6 sm:p-8 shadow-xl flex-grow flex flex-col scroll-mt-8 ${getSectionHighlight('facts')}`}>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Sparkles size={24} className="text-amber-400" />
                        <span>Fascinating Facts</span>
                      </h3>
                      <button
                        id="btn-audio-facts"
                        onClick={() => playSection('facts')}
                        title="Listen to Fascinating Facts"
                        aria-label="Listen to Fascinating Facts"
                        className={`p-3 rounded-xl transition-all cursor-pointer shadow-md border ${
                          activeAudioSection === 'facts'
                            ? 'bg-rose-600 text-white animate-pulse border-rose-500'
                            : 'bg-slate-800 text-amber-400 hover:bg-amber-600 hover:text-white border-slate-700'
                        }`}
                      >
                        {activeAudioSection === 'facts' ? <Square size={20} fill="currentColor" /> : <Volume2 size={20} />}
                      </button>
                    </div>

                    <div className="space-y-3 flex-grow">
                      {Array.from(new Set(selectedCountry.interestingFacts || [])).filter(Boolean).map((fact, idx) => (
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

                    {/* Quick Preview of Popular Pictures */}
                    {selectedCountry.landmarks && selectedCountry.landmarks.length > 0 && (
                      <div className="mt-6 pt-5 border-t border-slate-800/90">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                            <Camera size={14} className="text-sky-400" />
                            <span>Popular Sights Preview</span>
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              const el = document.getElementById('section-landmarks');
                              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                            className="text-xs text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1 cursor-pointer"
                          >
                            <span>View all pictures</span>
                            <ChevronRight size={12} />
                          </button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
                          {selectedCountry.landmarks.map((photo, pIdx) => (
                            <button
                              key={pIdx}
                              type="button"
                              onClick={() => setActivePhotoModal(photo)}
                              className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-800 hover:border-sky-400/80 transition-all cursor-pointer text-left shadow-sm"
                              title={photo.title}
                            >
                              <Image
                                src={photo.url}
                                alt={photo.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                              <span className="absolute bottom-1.5 left-1.5 right-1.5 text-[10px] font-bold text-white truncate block drop-shadow">
                                {photo.title}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </section>
              </div>

              {/* Popular Landmarks, Geography & Wildlife Gallery */}
              {selectedCountry.landmarks && selectedCountry.landmarks.length > 0 && (
                <section id="section-landmarks" className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl scroll-mt-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Landmark size={24} className="text-sky-400" />
                        <span>Landmarks, Geography &amp; Wildlife</span>
                      </h3>
                      <p className="text-sm text-slate-400 mt-1">
                        Important landmarks, scenic geographic wonders, and native wildlife of {selectedCountry.name}
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 text-sky-300 border border-slate-800 self-start sm:self-auto">
                      {selectedCountry.landmarks.length} Highlights
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
                    {selectedCountry.landmarks.map((photo, pIdx, arr) => {
                      const total = arr.length;
                      const isWildlife = pIdx === total - 1;
                      const isGeography = pIdx === total - 2;
                      const badgeLabel = isWildlife 
                        ? 'Native Wildlife' 
                        : isGeography 
                        ? 'Unique Geography' 
                        : `Iconic Landmark #${pIdx + 1}`;
                      const badgeClass = isWildlife 
                        ? 'bg-amber-600 text-amber-50 border-amber-500/40' 
                        : isGeography 
                        ? 'bg-emerald-600 text-emerald-50 border-emerald-500/40' 
                        : 'bg-sky-600 text-sky-50 border-sky-500/40';

                      return (
                        <div 
                          key={pIdx}
                          onClick={() => setActivePhotoModal(photo)}
                          className="group bg-slate-900 border border-slate-800 hover:border-sky-500/60 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
                        >
                          <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                            <Image
                              src={photo.url}
                              alt={photo.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                            <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-900/80 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow">
                              <Maximize2 size={16} />
                            </div>
                            <div className="absolute bottom-3 left-3 right-3">
                              <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border mb-1 shadow ${badgeClass}`}>
                                {badgeLabel}
                              </span>
                              <h4 className="text-sm sm:text-base font-bold text-white leading-snug drop-shadow-md line-clamp-1">
                                {photo.title}
                              </h4>
                            </div>
                          </div>
                          <div className="p-3.5 sm:p-4 flex-grow flex flex-col justify-between">
                            <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                              {photo.caption}
                            </p>
                            <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-sky-400 font-medium">
                              <span>Enlarge photo</span>
                              <ChevronRight size={13} className="transition-transform group-hover:translate-x-1" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Sibling Country Navigation (Previous / Next within Continent) */}
                  <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => handleSelectCountry(prevCountry, currentContinent)}
                      className="w-full sm:w-auto group flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-800/60 hover:border-indigo-500/30 text-left transition-all cursor-pointer shadow-md"
                    >
                      <ArrowLeft size={18} className="text-indigo-400 shrink-0 transition-transform group-hover:-translate-x-1" />
                      <div className="min-w-0">
                        <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                          Previous Country
                        </span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <div className="relative w-6 h-4 rounded overflow-hidden border border-slate-700/60 shrink-0">
                            <Image
                              src={prevCountry.flagUrl}
                              alt={prevCountry.name}
                              fill
                              className="object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <span className="font-bold text-sm text-slate-200 group-hover:text-indigo-300 transition-colors truncate">
                            {prevCountry.name}
                          </span>
                        </div>
                      </div>
                    </button>

                    <div className="text-xs font-semibold text-slate-500 px-4 py-1.5 bg-slate-900/60 rounded-full border border-slate-800 shrink-0 flex items-center gap-2">
                      <span>🌍</span>
                      <span className="text-slate-300">{currentContinent.name} Guide</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSelectCountry(nextCountry, currentContinent)}
                      className="w-full sm:w-auto group flex items-center justify-between sm:justify-start gap-3 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-800/60 hover:border-indigo-500/30 text-right transition-all cursor-pointer shadow-md"
                    >
                      <div className="min-w-0 text-left sm:text-right">
                        <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                          Next Country
                        </span>
                        <div className="flex items-center sm:justify-end gap-2 mt-0.5">
                          <div className="relative w-6 h-4 rounded overflow-hidden border border-slate-700/60 shrink-0 order-first sm:order-last">
                            <Image
                              src={nextCountry.flagUrl}
                              alt={nextCountry.name}
                              fill
                              className="object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <span className="font-bold text-sm text-slate-200 group-hover:text-indigo-300 transition-colors truncate">
                            {nextCountry.name}
                          </span>
                        </div>
                      </div>
                      <ArrowRight size={18} className="text-indigo-400 shrink-0 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </section>
              )}

            </motion.div>
          </AnimatePresence>
        )}
      </main>

      {/* Lightbox Modal for Full Size Photo Preview */}
      {activePhotoModal && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActivePhotoModal(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-slate-950">
              <Image
                src={activePhotoModal.url}
                alt={activePhotoModal.title}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() => setActivePhotoModal(null)}
                className="absolute top-4 right-4 h-9 w-9 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 flex items-center justify-center border border-slate-700 backdrop-blur-sm cursor-pointer shadow-lg text-sm font-bold"
                aria-label="Close photo preview"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-semibold">
                  {selectedCountry.name}
                </span>
                <h3 className="text-xl font-bold text-white">{activePhotoModal.title}</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mt-2">{activePhotoModal.caption}</p>
            </div>
          </div>
        </div>
      )}

      <ScrollToTop />
    </div>
  );
}
