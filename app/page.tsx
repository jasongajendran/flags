"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Square, Video, Volume2, Globe, MapPin, CheckCircle, Subtitles, Compass } from 'lucide-react';
import { continentsData, Continent, Country } from '@/app/data/countries';
import { useAudioGuide } from '@/hooks/use-audio-guide';
import { HighlightText } from '@/components/highlight-text';
import { ScrollToTop } from '@/components/scroll-to-top';

export default function KidsApp() {
  const [activeContinent, setActiveContinent] = useState<Continent>(continentsData[0]);
  const [selectedCountry, setSelectedCountry] = useState<Country>(continentsData[0].countries[0]);
  const [videoMode, setVideoMode] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(true);
  
  const { play, stop, isPlaying, charIndex, currentText } = useAudioGuide();
  const countryDataRef = useRef(continentsData[0].countries);

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
      // Find current index in active continent
      const currentIndex = countryDataRef.current.findIndex(c => c.id === selectedCountry.id);
      const nextIndex = currentIndex + 1;
      
      if (nextIndex < countryDataRef.current.length) {
        // Move to next country after a small delay
        const timer = setTimeout(() => {
          const nextCountry = countryDataRef.current[nextIndex];
          setSelectedCountry(nextCountry);
          play(nextCountry.description);
        }, 1500); // 1.5 seconds pause between countries
        return () => clearTimeout(timer);
      } else {
        // Reached the end of continent tour
        setVideoMode(false);
      }
    }
  }, [videoMode, isPlaying, selectedCountry, play]);

  const handleCountryClick = (country: Country) => {
    setVideoMode(false); // Cancel video mode if manually interrupted
    setSelectedCountry(country);
    play(country.description);
  };

  const handleStartVideoTour = () => {
    const firstCountry = activeContinent.countries[0];
    setSelectedCountry(firstCountry);
    setVideoMode(true);
    play(firstCountry.description);
  };

  const handleStop = () => {
    setVideoMode(false);
    stop();
  };

  return (
    <div className="min-h-screen bg-sky-50 pb-32 font-sans selection:bg-yellow-300">
      {/* Header */}
      <header className="bg-white rounded-b-[3rem] shadow-md pt-8 pb-8 px-6 border-b-8 border-yellow-400 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-indigo-500 rounded-2xl text-white shadow-inner shadow-indigo-700 rotate-3">
              <Globe size={40} className="animate-pulse" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-900 tracking-tight">
                Kids World Flags! <span className="inline-block animate-bounce">🌍</span>
              </h1>
              <p className="text-base sm:text-lg text-sky-700 font-semibold mt-1">
                Explore <span className="underline decoration-yellow-400 decoration-4">{activeContinent.name}</span> &amp; its flags!
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 items-center justify-center">
            {videoMode || isPlaying ? (
              <button 
                onClick={handleStop}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3.5 rounded-full font-bold text-base sm:text-lg shadow-[0_5px_0_#991b1b] active:shadow-[0_0px_0_#991b1b] active:translate-y-1 transition-all"
              >
                <Square size={22} fill="currentColor" />
                Stop Exploring
              </button>
            ) : (
              <button 
                onClick={handleStartVideoTour}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full font-bold text-base sm:text-lg shadow-[0_5px_0_#166534] active:shadow-[0_0px_0_#166534] active:translate-y-1 transition-all"
              >
                <Video size={22} fill="currentColor" />
                Start Tour!
              </button>
            )}
            
            <button 
              onClick={() => setShowSubtitles(!showSubtitles)}
              className={`flex items-center gap-2 px-5 py-3.5 rounded-full font-bold text-base sm:text-lg transition-all ${
                showSubtitles 
                ? 'bg-purple-100 text-purple-700 shadow-[0_5px_0_#d8b4fe] active:shadow-[0_0px_0_#d8b4fe]' 
                : 'bg-gray-200 text-gray-500 shadow-[0_5px_0_#d1d5db] active:shadow-[0_0px_0_#d1d5db]'
              } active:translate-y-1`}
            >
              <Subtitles size={22} />
              {showSubtitles ? "CC On" : "CC Off"}
            </button>
          </div>
        </div>

        {/* Continent Selector Tabs */}
        <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-slate-100 flex items-center justify-center sm:justify-start gap-2 sm:gap-4 overflow-x-auto pb-2">
          <span className="text-slate-400 font-bold text-sm hidden sm:flex items-center gap-1 uppercase tracking-wider">
            <Compass size={18} /> Continents:
          </span>
          {continentsData.map((continent) => {
            const isActive = activeContinent.id === continent.id;
            return (
              <button
                key={continent.id}
                onClick={() => handleContinentChange(continent)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-extrabold text-base sm:text-lg transition-all transform ${
                  isActive
                    ? `bg-indigo-600 text-white shadow-lg scale-105 border-2 ${continent.borderColor}`
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:scale-105'
                }`}
              >
                <span className="text-xl">{continent.emoji}</span>
                {continent.name}
              </button>
            );
          })}
        </div>
        
        {/* Decorative background clouds */}
        <div className="absolute top-4 left-10 w-24 h-8 bg-sky-100 rounded-full opacity-60"></div>
        <div className="absolute top-10 right-20 w-32 h-10 bg-sky-100 rounded-full opacity-60"></div>
      </header>

      <main className="max-w-6xl mx-auto mt-8 px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Interactive "Island" Map */}
        <div className="lg:col-span-7">
          <div className={`rounded-[3rem] p-6 shadow-xl relative aspect-square md:aspect-[4/3] border-8 transition-colors duration-500 overflow-hidden group ${activeContinent.mapBg}`}>
            {/* Water / Terrain ripples */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_transparent_50%,_white_120%)]"></div>
            
            <div className="absolute top-4 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full font-black text-slate-800 text-sm shadow-md flex items-center gap-2">
              <span>{activeContinent.emoji}</span> {activeContinent.name} Map
            </div>

            {activeContinent.countries.map((country) => {
              const isSelected = selectedCountry.id === country.id;
              return (
                <motion.button
                  key={country.id}
                  onClick={() => handleCountryClick(country)}
                  className={`absolute ${country.position} w-24 h-24 sm:w-32 sm:h-32 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] transition-transform z-10 ${
                    country.color
                  } ${
                    isSelected ? 'ring-8 ring-white scale-110 z-20 shadow-2xl' : 'hover:scale-110 shadow-lg hover:z-20'
                  }`}
                  animate={isSelected ? {
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" }
                  } : { rotate: 0 }}
                  aria-label={`Select ${country.name}`}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-1">
                    <img 
                      src={country.flagUrl} 
                      alt={`Flag of ${country.name}`} 
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full border-4 border-white shadow-md mb-1" 
                    />
                    <span className="bg-white/95 text-slate-900 font-extrabold px-2 py-0.5 rounded-full text-xs sm:text-sm shadow-sm backdrop-blur-sm text-center line-clamp-1 max-w-full">
                      {country.name}
                    </span>
                  </div>
                </motion.button>
              );
            })}
            
            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-sky-800 shadow-md flex items-center gap-2">
              <MapPin size={18} /> Tap any flag!
            </div>
          </div>
        </div>

        {/* Right Column: Details Panel */}
        <div className="lg:col-span-5 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCountry.id}
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white rounded-[2.5rem] shadow-2xl border-4 border-indigo-100 p-8 flex-1 relative overflow-hidden"
            >
              {/* Decorative top corner */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6 gap-4">
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-2">
                      {selectedCountry.name}
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-500 font-bold flex items-center gap-2">
                      <MapPin size={22} className="text-pink-500" /> Capital: <span className="text-pink-600">{selectedCountry.capital}</span>
                    </p>
                  </div>
                  <img 
                    src={selectedCountry.flagUrl} 
                    alt={`Flag of ${selectedCountry.name}`} 
                    className="w-24 h-16 object-cover rounded-xl shadow-lg border-2 border-slate-100 transform rotate-3 flex-shrink-0"
                  />
                </div>

                <div className="bg-yellow-50 rounded-2xl p-5 mb-8 border-2 border-yellow-200 shadow-sm">
                  <h3 className="font-bold text-yellow-800 flex items-center gap-2 mb-2 text-lg">
                    <CheckCircle size={20} className="text-yellow-600" />
                    Fun Fact!
                  </h3>
                  <p className="text-slate-700 text-lg font-medium leading-snug">
                    {selectedCountry.uniqueness}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-indigo-900 flex items-center gap-2">
                      <Volume2 size={24} className="text-indigo-500" /> 
                      Listen &amp; Learn
                    </h3>
                    
                    {!isPlaying ? (
                      <button 
                        onClick={() => play(selectedCountry.description)}
                        className="bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-full shadow-[0_4px_0_#3730a3] active:shadow-[0_0px_0_#3730a3] active:translate-y-1 transition-all"
                        aria-label="Play Audio"
                      >
                        <Play size={24} fill="currentColor" className="ml-1" />
                      </button>
                    ) : (
                      <button 
                        onClick={handleStop}
                        className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-[0_4px_0_#991b1b] active:shadow-[0_0px_0_#991b1b] active:translate-y-1 transition-all"
                        aria-label="Stop Audio"
                      >
                        <Square size={24} fill="currentColor" />
                      </button>
                    )}
                  </div>

                  <div className={`bg-slate-50 rounded-2xl p-6 border-2 border-slate-100 min-h-[12rem] text-slate-800 ${!showSubtitles ? 'flex items-center justify-center' : ''}`}>
                    {showSubtitles ? (
                      <HighlightText 
                        text={selectedCountry.description} 
                        charIndex={charIndex} 
                        active={isPlaying && currentText === selectedCountry.description} 
                      />
                    ) : (
                      <p className="text-slate-400 italic font-medium text-lg">
                        Subtitles are disabled. Click &quot;CC On&quot; to read along!
                      </p>
                    )}
                  </div>
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
