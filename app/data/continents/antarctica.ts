import { Continent, Country } from './types';

export const antarcticaCountries: Country[] = [
  {
    id: "aq",
    iso2: "aq",
    name: "Antarctica",
    officialName: "Antarctic Treaty Territory",
    capital: "South Pole Station (Amundsen-Scott)",
    population: "~1,000 to 5,000 (Scientists & Researchers)",
    languages: ["English", "Spanish", "Russian", "Global scientific teams"],
    currency: "Antarctic Research Credits / Global currencies",
    flagUrl: "https://flagcdn.com/w320/aq.png",
    uniqueness: "Coldest, driest, and windiest continent on Earth! Contains 90% of the world's ice and 70% of all planetary freshwater, with zero native human inhabitants!",
    recordFact: "The lowest temperature ever recorded on Earth was -89.2°C (-128.6°F) at Vostok Station in Antarctica in 1983.",
    description: "Antarctica is Earth's southernmost continent, dedicated entirely to peaceful scientific research under the historic Antarctic Treaty of 1959. Covered by an ice sheet averaging 2 kilometers thick, it is home to emperor penguins, blue whales, wandering albatrosses, and brilliant Aurora Australis (Southern Lights).",
    interestingFacts: [
      "Antarctica is technically the largest desert on Earth because it receives less than 2 inches of precipitation each year!",
      "Emperor penguins can dive over 500 meters deep and stay underwater for up to 20 minutes.",
      "Because all longitude lines converge at the South Pole, Antarctica sits in all time zones simultaneously.",
      "Underneath the massive ice sheet lie over 400 hidden subglacial liquid lakes that have been sealed for millions of years."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Emperor penguins gathering on an Antarctic blue ice shelf",
    flagMeaning: {
      story: "The Graham Bartram / True South flag features the white silhouette of the Antarctic continent centered on a cold blue field, symbolizing neutral international scientific cooperation and peace.",
      elements: ["White silhouette of the Antarctic landmass centered on an oceanic blue field"],
      colors: [
        { name: "Oceanic Blue", colorClass: "bg-blue-700 text-white", symbol: "The Southern Ocean and international peace" },
        { name: "Ice White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Purity, snow, and massive glaciers" }
      ]
    },
    location: {
      region: "Polar Region / Southern Ocean",
      coordinatesText: "South Pole at 90°00′ S latitude",
      neighbors: "Surrounded by the Southern Ocean. Closest landmass is Cape Horn (South America) across Drake Passage.",
      surroundingWaters: ["Southern Ocean", "Weddell Sea", "Ross Sea", "Amundsen Sea"],
      adjacentCountries: [
        { name: "Argentina / Chile (Cape Horn)", flagUrl: "https://flagcdn.com/w160/ar.png", lat: -55.9833, lng: -67.2667, relationship: "North (1,000 km across Drake Passage)" },
        { name: "New Zealand", flagUrl: "https://flagcdn.com/w160/nz.png", lat: -41.2865, lng: 174.7762, relationship: "North (across Southern Ocean)" }
      ]
    },
    color: "bg-cyan-500",
    position: "top-[48%] left-[48%]",
    geo: { lat: -75.0, lng: 0.0, zoom: 3, capitalCoords: { lat: -90.0, lng: 0.0 } }
  }
];

export const antarcticaContinent: Continent = {
  id: "antarctica",
  name: "Antarctica",
  emoji: "❄️",
  bgGradient: "from-cyan-600 to-blue-800",
  mapBg: "bg-cyan-50 border-cyan-300",
  borderColor: "border-cyan-400",
  description: "Antarctica is the vast icy frozen wilderness at the bottom of the world, home to colonies of penguins, seals, icebergs, and global scientific research stations!",
  countries: antarcticaCountries
};
