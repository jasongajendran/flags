import { Continent, Country } from './types';

export const oceaniaCountries: Country[] = [
  {
    id: "au",
    iso2: "au",
    name: "Australia",
    officialName: "Commonwealth of Australia",
    capital: "Canberra",
    population: "26.7 Million",
    languages: ["English"],
    currency: "Australian Dollar (A$)",
    flagUrl: "https://flagcdn.com/w320/au.png",
    uniqueness: "Home to the Great Barrier Reef (largest coral reef system on Earth), kangaroos, koalas, and the sacred red rock monolith Uluru.",
    recordFact: "The Great Barrier Reef is so massive (over 2,300 km long) that it can be seen distinctly from outer space.",
    description: "Australia is both a sovereign country and the smallest continental landmass on Earth. It features the rugged Outback desert, dense eucalyptus forests, and famous coastal landmarks like the Sydney Opera House.",
    interestingFacts: [
      "Australia is home to unique egg-laying mammals (monotremes) like the duck-billed platypus and echidna.",
      "Uluru (Ayers Rock) is an ancient sandstone monolith over 500 million years old, sacred to Anangu Aboriginal people.",
      "Australia has more than 10,000 pristine beaches—you could visit a new beach every day for over 27 years!",
      "The Sydney Opera House roof is covered with over 1 million self-cleaning ceramic Swedish tiles."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The iconic Sydney Opera House and Harbour Bridge at sunset",
    flagMeaning: {
      story: "Chosen through a public design competition in 1901 upon the federation of the Australian colonies.",
      elements: ["British Union Jack in the canton", "Large seven-pointed Commonwealth Star", "Five stars of the Southern Cross constellation"],
      colors: [
        { name: "Royal Blue Field", colorClass: "bg-blue-800 text-white", symbol: "Oceanic waters surrounding the island continent" },
        { name: "Commonwealth Star", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "The six Australian states and territories" },
        { name: "Southern Cross", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "The Southern celestial hemisphere" }
      ]
    },
    location: {
      region: "Oceania / Indo-Pacific",
      coordinatesText: "25°16′ S, 133°46′ E",
      neighbors: "Surrounded entirely by the Indian and Pacific Oceans. Nearest island neighbors include Papua New Guinea, Indonesia, and New Zealand.",
      surroundingWaters: ["Pacific Ocean", "Indian Ocean", "Coral Sea", "Tasman Sea", "Southern Ocean"],
      adjacentCountries: [
        { name: "New Zealand", flagUrl: "https://flagcdn.com/w160/nz.png", lat: -41.2865, lng: 174.7762, relationship: "East (across Tasman Sea)" },
        { name: "Papua New Guinea", flagUrl: "https://flagcdn.com/w160/pg.png", lat: -9.4438, lng: 147.1803, relationship: "North (across Torres Strait)" },
        { name: "Indonesia", flagUrl: "https://flagcdn.com/w160/id.png", lat: -6.2088, lng: 106.8456, relationship: "Northwest (across Timor Sea)" }
      ]
    },
    color: "bg-amber-500",
    position: "top-[50%] left-[30%]",
    geo: { lat: -25.2744, lng: 133.7751, zoom: 4, capitalCoords: { lat: -35.2809, lng: 149.1300 } }
  },
  {
    id: "fj",
    iso2: "fj",
    name: "Fiji",
    officialName: "Republic of Fiji",
    capital: "Suva",
    population: "936 Thousand",
    languages: ["English", "iTaukei (Fijian)", "Hindi"],
    currency: "Fijian Dollar (FJ$)",
    flagUrl: "https://flagcdn.com/w320/fj.png",
    uniqueness: "Archipelago of over 330 tropical islands, world-renowned for warm hospitality ('Bula!'), rugby sevens, and coral reefs.",
    recordFact: "Fiji's national rugby sevens team won the nation's first ever Olympic gold medals in Rio 2016 and Tokyo 2020.",
    description: "Fiji is an island nation in Melanesia, featuring turquoise lagoons, swaying palm trees, volcanic mountain peaks, and rich customary traditions like the kava ceremony.",
    interestingFacts: [
      "The traditional Fijian greeting 'Bula' means 'Life' and wishing you good health and happiness.",
      "Fiji is composed of 333 volcanic islands, of which about 110 are permanently inhabited.",
      "The Great Astrolabe Reef surrounding Kadavu island is one of the premier dive spots on Earth to see manta rays.",
      "Traditional Fijian feasts called 'Lovo' are cooked in underground earth ovens using heated volcanic stones."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Crystal clear turquoise lagoons and overwater villas in Fiji",
    flagMeaning: {
      story: "Adopted in 1970, retaining the light blue field representing the Pacific Ocean and the British Union Jack.",
      elements: ["Cyan blue field", "Union Jack in canton", "Fijian coat of arms with a British lion holding a cocoa pod, sugarcane, coconut palm, dove of peace, and bananas"],
      colors: [
        { name: "Cyan Blue", colorClass: "bg-sky-400 text-slate-900", symbol: "The vast blue Pacific Ocean" },
        { name: "Agricultural Arms", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Sugar, bananas, coconuts, and peace" }
      ]
    },
    location: {
      region: "Melanesia / South Pacific",
      coordinatesText: "17°43′ S, 178°0′ E",
      neighbors: "Island nation in the South Pacific Ocean, northeast of New Zealand and east of Vanuatu.",
      surroundingWaters: ["South Pacific Ocean", "Koro Sea"],
      adjacentCountries: [
        { name: "Vanuatu", flagUrl: "https://flagcdn.com/w160/vu.png", lat: -17.7333, lng: 168.3273, relationship: "West" },
        { name: "Tonga", flagUrl: "https://flagcdn.com/w160/to.png", lat: -21.1789, lng: -175.1982, relationship: "Southeast" },
        { name: "Samoa", flagUrl: "https://flagcdn.com/w160/ws.png", lat: -13.8333, lng: -171.7667, relationship: "Northeast" }
      ]
    },
    color: "bg-sky-400",
    geo: { lat: -17.7134, lng: 178.0650, zoom: 7, capitalCoords: { lat: -18.1416, lng: 178.4419 } }
  },
  {
    id: "ki",
    iso2: "ki",
    name: "Kiribati",
    officialName: "Republic of Kiribati",
    capital: "South Tarawa",
    population: "133 Thousand",
    languages: ["English", "Gilbertese"],
    currency: "Kiribati Dollar / Australian Dollar",
    flagUrl: "https://flagcdn.com/w320/ki.png",
    uniqueness: "Only country in the world situated in all four hemispheres (Northern, Southern, Eastern, and Western)! First country to welcome each new calendar year.",
    recordFact: "Kiribati's Millennium Island (Caroline Atoll) is the first inhabited place on Earth to see the sunrise on New Year's Day.",
    description: "Kiribati is an island nation comprising 33 coral atolls and reef islands spread across 3.5 million square kilometers of the central Pacific Ocean.",
    interestingFacts: [
      "The country's name is pronounced 'KEE-ree-bahss' in the local Gilbertese language.",
      "Kiritimati (Christmas Island) is the world's largest coral atoll by land area.",
      "The Phoenix Islands Protected Area is one of the largest marine conservation reserves on Earth.",
      "Kiribati straddles the equator and sits right along the International Date Line."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Tropical coral atolls and turquoise waters in South Tarawa, Kiribati",
    flagMeaning: {
      story: "Adopted in 1979, the flag depicts a golden frigatebird flying over a rising sun and ocean waves.",
      elements: ["Frigatebird soaring in gold", "Rising golden sun with 17 rays", "Alternating blue and white wavy stripes representing the Pacific Ocean"],
      colors: [
        { name: "Frigatebird", colorClass: "bg-amber-400 text-slate-900", symbol: "Command of the sea, power, and freedom" },
        { name: "Rising Sun", colorClass: "bg-amber-500 text-slate-900", symbol: "Bright future and the 16 Gilbert Islands plus Banaba" },
        { name: "Ocean Waves", colorClass: "bg-blue-600 text-white", symbol: "The 3 island groups (Gilbert, Line, and Phoenix Islands)" }
      ]
    },
    location: {
      region: "Micronesia / Central Pacific",
      coordinatesText: "1°52′ N, 157°22′ W",
      neighbors: "Isolated Pacific atolls surrounded by the vast Pacific Ocean.",
      surroundingWaters: ["Pacific Ocean"],
      adjacentCountries: [
        { name: "Tuvalu", flagUrl: "https://flagcdn.com/w160/tv.png", lat: -8.5167, lng: 179.2167, relationship: "South" },
        { name: "Marshall Islands", flagUrl: "https://flagcdn.com/w160/mh.png", lat: 7.1315, lng: 171.1845, relationship: "Northwest" }
      ]
    },
    color: "bg-red-500",
    geo: { lat: -3.3704, lng: -168.7340, zoom: 4, capitalCoords: { lat: 1.3291, lng: 172.9790 } }
  },
  {
    id: "mh",
    iso2: "mh",
    name: "Marshall Islands",
    officialName: "Republic of the Marshall Islands",
    capital: "Majuro",
    population: "42 Thousand",
    languages: ["Marshallese", "English"],
    currency: "United States Dollar ($)",
    flagUrl: "https://flagcdn.com/w320/mh.png",
    uniqueness: "Nation of 29 coral atolls and over 1,100 islands; famous for traditional wave navigation stick charts and Bikini Atoll.",
    recordFact: "Ancient Marshallese sailors created stick charts made of coconut fronds and shells to navigate ocean swell patterns long before GPS!",
    description: "The Marshall Islands is a Micronesian nation situated near the equator in the Pacific Ocean, renowned for marine life, scuba diving wrecks, and atoll lagoons.",
    interestingFacts: [
      "Majuro Atoll has a land area of only 9.7 square kilometers but encloses a giant lagoon of 295 square kilometers.",
      "The Marshallese stick charts are among the most sophisticated indigenous navigation devices ever created.",
      "The country established the world's largest shark sanctuary in 2011, banning commercial shark fishing.",
      "Traditional outrigger sailing canoes called 'proas' are still hand-built and raced today."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Vibrant coral reefs and atolls of the Marshall Islands",
    flagMeaning: {
      story: "Designed by Emlain Kabua (First Lady of the republic) and adopted upon self-government in 1979.",
      elements: ["Deep blue field", "Diagonal orange and white expanding rays", "Large 24-pointed white star"],
      colors: [
        { name: "Deep Blue", colorClass: "bg-blue-800 text-white", symbol: "The Pacific Ocean" },
        { name: "Orange Ray", colorClass: "bg-amber-500 text-slate-900", symbol: "The Ralik (Sunset) chain of islands and bravery" },
        { name: "White Ray", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "The Ratak (Sunrise) chain of islands and peace" },
        { name: "24-Point Star", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "The 24 municipal districts with 4 main rays for the compass" }
      ]
    },
    location: {
      region: "Micronesia / North Pacific",
      coordinatesText: "7°08′ N, 171°23′ E",
      neighbors: "Island nation in Micronesia, northeast of the Federated States of Micronesia and north of Kiribati.",
      surroundingWaters: ["North Pacific Ocean"],
      adjacentCountries: [
        { name: "Micronesia", flagUrl: "https://flagcdn.com/w160/fm.png", lat: 6.9172, lng: 158.1589, relationship: "West" },
        { name: "Kiribati", flagUrl: "https://flagcdn.com/w160/ki.png", lat: 1.3291, lng: 172.9790, relationship: "Southeast" }
      ]
    },
    color: "bg-blue-600",
    geo: { lat: 7.1315, lng: 171.1845, zoom: 6, capitalCoords: { lat: 7.0897, lng: 171.3803 } }
  },
  {
    id: "fm",
    iso2: "fm",
    name: "Micronesia",
    officialName: "Federated States of Micronesia",
    capital: "Palikir",
    population: "115 Thousand",
    languages: ["English", "Chuukese", "Pohnpeian", "Yapese", "Kosraean"],
    currency: "United States Dollar ($)",
    flagUrl: "https://flagcdn.com/w320/fm.png",
    uniqueness: "Home to Nan Madol, the ancient ruined 'Venice of the Pacific' built on artificial basalt islets atop a coral reef over 800 years ago.",
    recordFact: "The island of Yap in Micronesia is famous for 'Rai stones'—giant doughnut-shaped carved limestone discs used as traditional currency!",
    description: "The Federated States of Micronesia consists of four distinct island states: Yap, Chuuk, Pohnpei, and Kosrae, spread across 600 islands in the western Pacific Ocean.",
    interestingFacts: [
      "Nan Madol on Pohnpei was constructed using massive basalt columnar stones weighing up to 50 tons each.",
      "Chuuk Lagoon is one of the world's greatest wreck diving locations, containing a submerged fleet from World War II.",
      "Rai stones on Yap can be up to 3.6 meters in diameter and remain culturally valued even when left in place.",
      "Kosrae is nicknamed the 'Island of the Sleeping Lady' due to the distinctive silhouette of its mountain peaks."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Ancient megalithic basalt stone ruins of Nan Madol in Micronesia",
    flagMeaning: {
      story: "Adopted in 1978, inspired by the UN Trust Territory flag, featuring four stars representing its four constituent states.",
      elements: ["Light blue field", "Four five-pointed white stars arranged in a diamond pattern"],
      colors: [
        { name: "Pacific Blue", colorClass: "bg-sky-500 text-white", symbol: "The surrounding Pacific Ocean" },
        { name: "Four White Stars", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "The four states: Chuuk, Pohnpei, Yap, and Kosrae" }
      ]
    },
    location: {
      region: "Micronesia / Western Pacific",
      coordinatesText: "6°55′ N, 158°09′ E",
      neighbors: "Island nation in the western Pacific Ocean, northeast of Papua New Guinea and east of the Philippines.",
      surroundingWaters: ["Pacific Ocean", "Philippine Sea"],
      adjacentCountries: [
        { name: "Palau", flagUrl: "https://flagcdn.com/w160/pw.png", lat: 7.5004, lng: 134.6243, relationship: "West" },
        { name: "Marshall Islands", flagUrl: "https://flagcdn.com/w160/mh.png", lat: 7.1315, lng: 171.1845, relationship: "East" },
        { name: "Papua New Guinea", flagUrl: "https://flagcdn.com/w160/pg.png", lat: -9.4438, lng: 147.1803, relationship: "South" }
      ]
    },
    color: "bg-sky-500",
    geo: { lat: 7.4256, lng: 150.5508, zoom: 5, capitalCoords: { lat: 6.9172, lng: 158.1589 } }
  },
  {
    id: "nr",
    iso2: "nr",
    name: "Nauru",
    officialName: "Republic of Nauru",
    capital: "Yaren (De facto / Administrative)",
    population: "12.8 Thousand",
    languages: ["Nauruan", "English"],
    currency: "Australian Dollar (A$)",
    flagUrl: "https://flagcdn.com/w320/nr.png",
    uniqueness: "Third smallest country in the world by area (21 sq km) and smallest independent island republic on Earth; has no official capital city!",
    recordFact: "You can drive or cycle all the way around the entire perimeter of Nauru on its 19-kilometer coastal ring road in under 30 minutes.",
    description: "Nauru is an isolated oval-shaped raised coral limestone island located in Micronesia, just 42 kilometers south of the equator in the central Pacific.",
    interestingFacts: [
      "Nauru has no military forces; Australia provides for its national defense.",
      "The island has a central plateau called 'Topside' surrounded by a lush coastal ring of coconut palms and pandanus.",
      "Australian Rules football and powerlifting are the two most popular sports on the island.",
      "Anibare Bay features a dramatic white coral sand beach and crystal-clear swimming waters."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Coastal ring road and limestone coral pinnacles in Nauru",
    flagMeaning: {
      story: "Adopted upon independence in 1968, the flag portrays Nauru's geographic location just south of the equator.",
      elements: ["Blue field representing the ocean", "Horizontal yellow line representing the equator", "12-pointed white star representing the 12 original indigenous tribes"],
      colors: [
        { name: "Royal Blue", colorClass: "bg-blue-900 text-white", symbol: "The vast Pacific Ocean" },
        { name: "Equator Gold", colorClass: "bg-amber-400 text-slate-900", symbol: "The Earth's Equator" },
        { name: "12-Pointed Star", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Nauru's position south of the equator and its 12 historic tribes" }
      ]
    },
    location: {
      region: "Micronesia / Central Pacific",
      coordinatesText: "0°32′ S, 166°55′ E",
      neighbors: "Isolated Pacific island, south of the Marshall Islands and west of Kiribati (Banaba Island).",
      surroundingWaters: ["Central Pacific Ocean"],
      adjacentCountries: [
        { name: "Kiribati", flagUrl: "https://flagcdn.com/w160/ki.png", lat: 1.3291, lng: 172.9790, relationship: "East (300 km to Banaba)" },
        { name: "Solomon Islands", flagUrl: "https://flagcdn.com/w160/sb.png", lat: -9.4456, lng: 159.9729, relationship: "South" }
      ]
    },
    color: "bg-blue-800",
    geo: { lat: -0.5228, lng: 166.9315, zoom: 12, capitalCoords: { lat: -0.5477, lng: 166.9209 } }
  },
  {
    id: "nz",
    iso2: "nz",
    name: "New Zealand",
    officialName: "New Zealand (Aotearoa)",
    capital: "Wellington",
    population: "5.2 Million",
    languages: ["English", "Māori", "NZ Sign Language"],
    currency: "New Zealand Dollar (NZ$)",
    flagUrl: "https://flagcdn.com/w320/nz.png",
    uniqueness: "Known as Aotearoa ('Land of the Long White Cloud'); home to the flightless Kiwi bird, Maori Haka dance, and filming location for The Lord of the Rings.",
    recordFact: "New Zealand was the very first self-governing country in the world to give all women the right to vote in 1893.",
    description: "New Zealand comprises two main islands (North and South Island) packed with snow-capped Southern Alps, active geothermal geysers in Rotorua, glowworm caves in Waitomo, and majestic fiords like Milford Sound.",
    interestingFacts: [
      "The kiwi is a nocturnal, flightless bird with nostrils at the tip of its long beak that lays huge eggs.",
      "Milford Sound was described by Rudyard Kipling as the 'Eighth Wonder of the World'.",
      "Wellington is the southernmost national capital city on Earth.",
      "The national rugby team, the All Blacks, performs the legendary Maori Ka Mate Haka before every international test match."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The breathtaking fiord peaks of Milford Sound in New Zealand",
    flagMeaning: {
      story: "Adopted in 1902, featuring the British Union Jack and four red stars with white borders representing the Southern Cross constellation.",
      elements: ["Royal blue ensign", "Union Jack in canton", "Four red stars of the Southern Cross with white borders"],
      colors: [
        { name: "Ocean Blue", colorClass: "bg-blue-800 text-white", symbol: "The vast blue Pacific and clear Southern skies" },
        { name: "Southern Cross Stars", colorClass: "bg-red-600 text-white", symbol: "The Southern celestial constellation and geographic location" }
      ]
    },
    location: {
      region: "Polynesia / South Pacific",
      coordinatesText: "40°54′ S, 174°53′ E",
      neighbors: "Island nation in the southwestern Pacific Ocean, southeast of Australia across the Tasman Sea.",
      surroundingWaters: ["South Pacific Ocean", "Tasman Sea", "Cook Strait"],
      adjacentCountries: [
        { name: "Australia", flagUrl: "https://flagcdn.com/w160/au.png", lat: -35.2809, lng: 149.1300, relationship: "Northwest (across Tasman Sea)" },
        { name: "Fiji", flagUrl: "https://flagcdn.com/w160/fj.png", lat: -18.1416, lng: 178.4419, relationship: "North" },
        { name: "Tonga", flagUrl: "https://flagcdn.com/w160/to.png", lat: -21.1789, lng: -175.1982, relationship: "Northeast" }
      ]
    },
    color: "bg-indigo-600",
    geo: { lat: -40.9006, lng: 174.8860, zoom: 5, capitalCoords: { lat: -41.2865, lng: 174.7762 } }
  },
  {
    id: "pw",
    iso2: "pw",
    name: "Palau",
    officialName: "Republic of Palau",
    capital: "Ngerulmud",
    population: "18 Thousand",
    languages: ["Palauan", "English"],
    currency: "United States Dollar ($)",
    flagUrl: "https://flagcdn.com/w320/pw.png",
    uniqueness: "Home to the Rock Islands Southern Lagoon and Jellyfish Lake where millions of golden jellyfish have evolved without stingers!",
    recordFact: "Palau created the world's first 'Pledge for Eco-Tourism' stamped into every visitor's passport to protect its fragile island ecosystems.",
    description: "Palau is an archipelago of over 340 coral and volcanic islands in the western Pacific. It is famous for mushroom-shaped emerald limestone islets, manta ray cleaning stations, and pristine marine life.",
    interestingFacts: [
      "In Jellyfish Lake, visitors can safely swim among millions of harmless, non-stinging golden jellyfish.",
      "The Rock Islands Southern Lagoon is a UNESCO World Heritage site featuring 445 uninhabited limestone islands.",
      "Ngerulmud is the least populous national capital of any sovereign country on Earth.",
      "Palau established the Palau National Marine Sanctuary, protecting 80% of its exclusive economic zone."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Emerald limestone Rock Islands and azure lagoons of Palau",
    flagMeaning: {
      story: "Adopted in 1981, depicting the full golden moon over the blue Pacific Ocean.",
      elements: ["Light blue field", "Golden yellow circle placed slightly off-center toward the hoist"],
      colors: [
        { name: "Ocean Blue", colorClass: "bg-sky-500 text-white", symbol: "The Pacific Ocean and national freedom" },
        { name: "Golden Moon", colorClass: "bg-amber-400 text-slate-900", symbol: "The full moon, symbolizing peace, tranquility, and love" }
      ]
    },
    location: {
      region: "Micronesia / Western Pacific",
      coordinatesText: "7°30′ N, 134°37′ E",
      neighbors: "Island nation in the western Pacific, east of the Philippines and north of Indonesia.",
      surroundingWaters: ["Pacific Ocean", "Philippine Sea"],
      adjacentCountries: [
        { name: "Philippines", flagUrl: "https://flagcdn.com/w160/ph.png", lat: 14.5995, lng: 120.9842, relationship: "West (800 km)" },
        { name: "Indonesia", flagUrl: "https://flagcdn.com/w160/id.png", lat: -6.2088, lng: 106.8456, relationship: "South" },
        { name: "Micronesia", flagUrl: "https://flagcdn.com/w160/fm.png", lat: 6.9172, lng: 158.1589, relationship: "East" }
      ]
    },
    color: "bg-sky-400",
    geo: { lat: 7.5150, lng: 134.5825, zoom: 8, capitalCoords: { lat: 7.5004, lng: 134.6243 } }
  },
  {
    id: "pg",
    iso2: "pg",
    name: "Papua New Guinea",
    officialName: "Independent State of Papua New Guinea",
    capital: "Port Moresby",
    population: "10.3 Million",
    languages: ["Tok Pisin", "English", "Hiri Motu", "Over 840 Indigenous Languages"],
    currency: "Papua New Guinean Kina (K)",
    flagUrl: "https://flagcdn.com/w320/pg.png",
    uniqueness: "The most linguistically diverse country on Earth with over 840 distinct living indigenous languages; home to colorful Birds of Paradise.",
    recordFact: "Accounts for over 12% of all spoken languages on the planet despite having less than 0.2% of the world's population!",
    description: "Papua New Guinea occupies the eastern half of the island of New Guinea and numerous offshore islands in Melanesia. It features impenetrable highland rainforests, active volcanoes, and ancient tribal traditions.",
    interestingFacts: [
      "Over 30 species of spectacular Birds of Paradise, known for elaborate courtship dances, are native to PNG.",
      "The Kokoda Track is a famous 96-kilometer mountainous hiking trail through rugged jungle terrain.",
      "Tribal Sing-Sing festivals gather hundreds of tribes in traditional feather headdresses, face paint, and kundu drums.",
      "The Highland valleys were discovered by the outside world only in the 1930s, home to thriving agricultural civilizations."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Traditional Sing-Sing tribal cultural dancers in Papua New Guinea",
    flagMeaning: {
      story: "Designed by 15-year-old schoolgirl Susan Karike in 1971, winning a nationwide flag design competition.",
      elements: ["Diagonally divided into black and red triangles", "Yellow Raggiana bird-of-paradise in silhouette", "Five white stars of the Southern Cross constellation"],
      colors: [
        { name: "Black & Red", colorClass: "bg-slate-900 text-white", symbol: "Traditional colors of indigenous tribal art" },
        { name: "Bird of Paradise", colorClass: "bg-amber-400 text-slate-900", symbol: "National bird and the emergence of PNG as a nation" },
        { name: "Southern Cross", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "The Southern Skies" }
      ]
    },
    location: {
      region: "Melanesia / Southwestern Pacific",
      coordinatesText: "6°18′ S, 147°11′ E",
      neighbors: "Shares a land border with Indonesia (Papua province) to the west, with Australia across the Torres Strait to the south.",
      surroundingWaters: ["Pacific Ocean", "Coral Sea", "Solomon Sea", "Bismarck Sea"],
      adjacentCountries: [
        { name: "Indonesia", flagUrl: "https://flagcdn.com/w160/id.png", lat: -2.5337, lng: 140.7181, relationship: "West border (New Guinea Island)" },
        { name: "Australia", flagUrl: "https://flagcdn.com/w160/au.png", lat: -10.5900, lng: 142.2186, relationship: "South (across Torres Strait)" },
        { name: "Solomon Islands", flagUrl: "https://flagcdn.com/w160/sb.png", lat: -9.4456, lng: 159.9729, relationship: "East" }
      ]
    },
    color: "bg-red-600",
    geo: { lat: -6.3149, lng: 143.9555, zoom: 5, capitalCoords: { lat: -9.4438, lng: 147.1803 } }
  },
  {
    id: "ws",
    iso2: "ws",
    name: "Samoa",
    officialName: "Independent State of Samoa",
    capital: "Apia",
    population: "225 Thousand",
    languages: ["Samoan", "English"],
    currency: "Samoan Tālā (T)",
    flagUrl: "https://flagcdn.com/w320/ws.png",
    uniqueness: "The 'Cradle of Polynesia'; famous for Fa'a Samoa (The Samoan Way of Life), the To Sua Ocean Trench, and traditional Tatau tattooing.",
    recordFact: "To Sua Ocean Trench is a stunning 30-meter-deep natural volcanic swimming sinkhole filled with crystal turquoise seawater and lush ferns.",
    description: "Samoa is an idyllic Polynesian island country consisting of two main islands (Upolu and Savai'i) and several small islets, renowned for coral reefs, waterfalls, and hospitable Polynesian culture.",
    interestingFacts: [
      "Fa'a Samoa is the 3,000-year-old traditional code of behavior focusing on family, elders, and community cooperation.",
      "Traditional Samoan male body tattooing ('Pe'a') covers from the waist to the knees and takes weeks of hand-tapping with bone tools.",
      "Author Robert Louis Stevenson spent his final years in Samoa, where he was warmly called 'Tusitala' (Teller of Tales).",
      "Samoa skipped an entire day on December 30, 2011, by moving across the International Date Line to align trading with Australia and NZ."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The emerald jungle and turquoise waters of To Sua Ocean Trench in Samoa",
    flagMeaning: {
      story: "Adopted in 1949 and modified in 1962 upon independence, honoring bravery, purity, and freedom.",
      elements: ["Red field", "Blue canton with the five stars of the Southern Cross constellation in white"],
      colors: [
        { name: "Patriot Red", colorClass: "bg-red-600 text-white", symbol: "Courage and sacrifice" },
        { name: "Navy Blue", colorClass: "bg-blue-800 text-white", symbol: "Freedom and the Pacific Ocean" },
        { name: "White Stars", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Purity and the Southern Cross" }
      ]
    },
    location: {
      region: "Polynesia / South Pacific",
      coordinatesText: "13°45′ S, 172°10′ W",
      neighbors: "Island nation in Polynesia, northwest of American Samoa and northeast of Fiji.",
      surroundingWaters: ["South Pacific Ocean"],
      adjacentCountries: [
        { name: "Tonga", flagUrl: "https://flagcdn.com/w160/to.png", lat: -21.1789, lng: -175.1982, relationship: "South" },
        { name: "Fiji", flagUrl: "https://flagcdn.com/w160/fj.png", lat: -18.1416, lng: 178.4419, relationship: "Southwest" }
      ]
    },
    color: "bg-red-500",
    geo: { lat: -13.7590, lng: -172.1046, zoom: 8, capitalCoords: { lat: -13.8333, lng: -171.7667 } }
  },
  {
    id: "sb",
    iso2: "sb",
    name: "Solomon Islands",
    officialName: "Solomon Islands",
    capital: "Honiara",
    population: "740 Thousand",
    languages: ["English", "Solomons Pijin", "120 Indigenous Languages"],
    currency: "Solomon Islands Dollar (SI$)",
    flagUrl: "https://flagcdn.com/w320/sb.png",
    uniqueness: "Archipelago of nearly 1,000 tropical islands, home to Marovo Lagoon (world's largest double barrier lagoon) and sunken WWII wrecks in Iron Bottom Sound.",
    recordFact: "Marovo Lagoon is the largest saltwater double-barrier reef lagoon on Earth, covering over 700 square kilometers.",
    description: "The Solomon Islands is a sprawling island nation in Melanesia, east of Papua New Guinea, covered in dense tropical rainforests, coral reefs, and volcanic peaks.",
    interestingFacts: [
      "Ironbottom Sound near Guadalcanal is named for the dozens of warships and airplanes sunk during historic WWII naval battles.",
      "Traditional shell money ('Tafuliae') made from polished marine shells is still woven into valuable ceremonial necklaces.",
      "Kavachi is one of the most active submarine volcanoes in the Pacific, nicknamed the 'Sharkcano' because sharks live in its crater!",
      "The Solomon Islands has some of the highest marine biodiversity on the planet within the Coral Triangle."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Turquoise lagoons and barrier reefs in the Solomon Islands",
    flagMeaning: {
      story: "Adopted in 1977 prior to independence from the UK, symbolizing land, water, sunshine, and the five original provinces.",
      elements: ["Divided diagonally by a thin yellow stripe", "Upper blue triangle with five white stars", "Lower green triangle"],
      colors: [
        { name: "Ocean Blue", colorClass: "bg-blue-600 text-white", symbol: "The surrounding Pacific Ocean and water resources" },
        { name: "Sunshine Yellow", colorClass: "bg-amber-400 text-slate-900", symbol: "Warm sunshine and prosperity" },
        { name: "Forest Green", colorClass: "bg-emerald-600 text-white", symbol: "Lush fertile islands and agriculture" },
        { name: "Five Stars", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "The five original administrative districts" }
      ]
    },
    location: {
      region: "Melanesia / South Pacific",
      coordinatesText: "9°26′ S, 160°01′ E",
      neighbors: "Island chain east of Papua New Guinea and northwest of Vanuatu.",
      surroundingWaters: ["Solomon Sea", "Pacific Ocean", "Coral Sea"],
      adjacentCountries: [
        { name: "Papua New Guinea", flagUrl: "https://flagcdn.com/w160/pg.png", lat: -9.4438, lng: 147.1803, relationship: "West" },
        { name: "Vanuatu", flagUrl: "https://flagcdn.com/w160/vu.png", lat: -17.7333, lng: 168.3273, relationship: "Southeast" }
      ]
    },
    color: "bg-blue-500",
    geo: { lat: -9.6457, lng: 160.1562, zoom: 6, capitalCoords: { lat: -9.4456, lng: 159.9729 } }
  },
  {
    id: "to",
    iso2: "to",
    name: "Tonga",
    officialName: "Kingdom of Tonga",
    capital: "Nukuʻalofa",
    population: "107 Thousand",
    languages: ["Tongan", "English"],
    currency: "Tongan Paʻanga (T$)",
    flagUrl: "https://flagcdn.com/w320/to.png",
    uniqueness: "Known as the 'Friendly Islands'; the only sovereign monarchy in the Pacific and only Pacific nation never to have lost its indigenous governance to a foreign power.",
    recordFact: "Tonga was named the 'Friendly Islands' by Captain James Cook in 1773 due to the warm reception and hospitable feast he received upon arrival.",
    description: "Tonga comprises 171 islands (about 45 inhabited) across 800 kilometers in Polynesia. It is famous for swimming with humpback whales, dramatic coral blowholes, and ancient royal megaliths.",
    interestingFacts: [
      "Every year from July to October, thousands of humpback whales migrate from Antarctica to Tonga's warm waters to nurse their calves.",
      "The Mapu 'a Vaea blowholes shoot sea spray up to 30 meters high along a 5-kilometer stretch of coastal coral rock.",
      "The Ha'amonga 'a Maui is a giant 13th-century stone trilithon gateway weighing over 40 tons.",
      "Tonga is the only Pacific island nation that maintained continuous self-governing indigenous monarchy throughout history."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Humpback whales breaching in the clear tropical waters of Tonga",
    flagMeaning: {
      story: "Adopted in 1875 by King George Tupou I, protected by the Tongan constitution never to be altered.",
      elements: ["Red field", "White canton in the upper hoist with a red Greek cross"],
      colors: [
        { name: "Royal Red", colorClass: "bg-red-600 text-white", symbol: "The blood of Christ shed during the crucifixion" },
        { name: "White Canton", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Purity and peace" },
        { name: "Red Cross", colorClass: "bg-red-600 text-white", symbol: "Christianity, the core faith of Tonga" }
      ]
    },
    location: {
      region: "Polynesia / South Pacific",
      coordinatesText: "21°10′ S, 175°12′ W",
      neighbors: "Island kingdom in Polynesia, south of Samoa and east of Fiji.",
      surroundingWaters: ["South Pacific Ocean"],
      adjacentCountries: [
        { name: "Fiji", flagUrl: "https://flagcdn.com/w160/fj.png", lat: -18.1416, lng: 178.4419, relationship: "West" },
        { name: "Samoa", flagUrl: "https://flagcdn.com/w160/ws.png", lat: -13.8333, lng: -171.7667, relationship: "North" },
        { name: "New Zealand", flagUrl: "https://flagcdn.com/w160/nz.png", lat: -41.2865, lng: 174.7762, relationship: "South (across ocean)" }
      ]
    },
    color: "bg-red-600",
    geo: { lat: -21.1789, lng: -175.1982, zoom: 7, capitalCoords: { lat: -21.1394, lng: -175.2049 } }
  },
  {
    id: "tv",
    iso2: "tv",
    name: "Tuvalu",
    officialName: "Tuvalu",
    capital: "Funafuti",
    population: "11.3 Thousand",
    languages: ["Tuvaluan", "English"],
    currency: "Tuvaluan Dollar / Australian Dollar",
    flagUrl: "https://flagcdn.com/w320/tv.png",
    uniqueness: "Fourth-smallest country in the world (26 sq km); famous for its narrow atoll airstrip where locals play sports when planes aren't landing, and the '.tv' internet domain.",
    recordFact: "Tuvalu generated millions of dollars by licensing its top-level country code internet domain '.tv' to global streaming and television companies.",
    description: "Tuvalu comprises three reef islands and six coral atolls situated midway between Hawaii and Australia in Polynesia, with maximum land elevations of only 4.6 meters.",
    interestingFacts: [
      "Funafuti runway serves as the town's social center where children play soccer and volleyball in the evenings.",
      "Tuvalu means 'Eight Standing Together', referring to the eight historically inhabited islands of the nation.",
      "Funafuti Conservation Area encompasses 33 square kilometers of reef, lagoon, and islets teeming with sea turtles.",
      "Traditional Tuvaluan dance called 'Fatele' is performed seated and standing to the beat of wooden boxes."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The narrow turquoise ribbon atolls and crystal lagoon of Funafuti, Tuvalu",
    flagMeaning: {
      story: "Adopted in 1978 upon independence, featuring nine yellow stars representing the nine islands of the archipelago.",
      elements: ["Light blue field", "British Union Jack in the canton", "Nine yellow five-pointed stars arranged in their geographic orientation"],
      colors: [
        { name: "Sky Blue", colorClass: "bg-sky-400 text-slate-900", symbol: "The Pacific Ocean and clear skies" },
        { name: "Nine Stars", colorClass: "bg-amber-400 text-slate-900", symbol: "The nine atolls and islands of Tuvalu" }
      ]
    },
    location: {
      region: "Polynesia / South Pacific",
      coordinatesText: "7°30′ S, 178°0′ E",
      neighbors: "Isolated Pacific atolls south of Kiribati and north of Fiji.",
      surroundingWaters: ["Pacific Ocean"],
      adjacentCountries: [
        { name: "Kiribati", flagUrl: "https://flagcdn.com/w160/ki.png", lat: 1.3291, lng: 172.9790, relationship: "North" },
        { name: "Fiji", flagUrl: "https://flagcdn.com/w160/fj.png", lat: -18.1416, lng: 178.4419, relationship: "South" }
      ]
    },
    color: "bg-sky-500",
    geo: { lat: -7.1095, lng: 177.6493, zoom: 7, capitalCoords: { lat: -8.5167, lng: 179.2167 } }
  },
  {
    id: "vu",
    iso2: "vu",
    name: "Vanuatu",
    officialName: "Republic of Vanuatu",
    capital: "Port Vila",
    population: "335 Thousand",
    languages: ["Bislama", "English", "French"],
    currency: "Vanuatu Vatu (VT)",
    flagUrl: "https://flagcdn.com/w320/vu.png",
    uniqueness: "Birthplace of modern bungee jumping (ancient land diving on Pentecost Island); home to Mount Yasur, the world's most accessible active volcano.",
    recordFact: "Ancient 'Nagol' (land diving) on Pentecost Island inspired modern bungee jumping: men leap from 30-meter wooden towers with only jungle vines tied to their ankles!",
    description: "Vanuatu is a Y-shaped archipelago of 83 volcanic islands in Melanesia, famous for glowing magma lakes, blue water holes in Espiritu Santo, and rich customary traditions.",
    interestingFacts: [
      "Mount Yasur on Tanna Island has been erupting almost continuously for over 800 years, allowing visitors to stand safely right at the crater rim.",
      "Vanuatu has the world's only underwater post office located 3 meters beneath the surface in Hideaway Island Marine Sanctuary.",
      "Espiritu Santo is famous for stunning natural sapphire-blue freshwater springs called 'Blue Holes'.",
      "Bislama, an English-based Melanesian creole, is the beloved national lingua franca spoken across all islands."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Glowing lava bursts from the crater rim of Mount Yasur volcano in Vanuatu",
    flagMeaning: {
      story: "Adopted in 1980 upon independence, featuring a Y-shape representing the geography of the islands and a boar's tusk.",
      elements: ["Horizontal red and green stripes separated by a black and gold Y-shape", "Boar's tusk encircling crossed namele palm fronds"],
      colors: [
        { name: "Blood Red", colorClass: "bg-red-600 text-white", symbol: "Unity and the power of tradition" },
        { name: "Lush Green", colorClass: "bg-emerald-600 text-white", symbol: "The richness of the islands and agriculture" },
        { name: "Melanesian Black", colorClass: "bg-slate-900 text-white", symbol: "The ni-Vanuatu people" },
        { name: "Golden Y & Tusk", colorClass: "bg-amber-400 text-slate-900", symbol: "Prosperity and peace" }
      ]
    },
    location: {
      region: "Melanesia / South Pacific",
      coordinatesText: "17°45′ S, 168°18′ E",
      neighbors: "Y-shaped archipelago east of Australia, west of Fiji, and south of Solomon Islands.",
      surroundingWaters: ["South Pacific Ocean", "Coral Sea"],
      adjacentCountries: [
        { name: "Fiji", flagUrl: "https://flagcdn.com/w160/fj.png", lat: -18.1416, lng: 178.4419, relationship: "East" },
        { name: "Solomon Islands", flagUrl: "https://flagcdn.com/w160/sb.png", lat: -9.4456, lng: 159.9729, relationship: "Northwest" }
      ]
    },
    color: "bg-emerald-600",
    geo: { lat: -15.3767, lng: 166.9592, zoom: 6, capitalCoords: { lat: -17.7333, lng: 168.3273 } }
  }
];

export const oceaniaContinent: Continent = {
  id: "oceania",
  name: "Oceania & Australia",
  emoji: "🏝️",
  bgGradient: "from-amber-600 to-orange-700",
  mapBg: "bg-amber-100 border-amber-400",
  borderColor: "border-amber-400",
  description: "Oceania is home to the Great Barrier Reef, coral atolls, kiwi birds, kangaroos, Polynesian voyagers, and turquoise Pacific lagoons!",
  countries: oceaniaCountries
};
