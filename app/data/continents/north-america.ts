import { Continent, Country } from './types';

export const northAmericaCountries: Country[] = [
  {
    id: "us",
    iso2: "us",
    name: "United States",
    officialName: "United States of America",
    capital: "Washington, D.C.",
    population: "336.0 Million",
    languages: ["English", "Spanish"],
    currency: "US Dollar ($)",
    flagUrl: "https://flagcdn.com/w320/us.png",
    uniqueness: "Home to the Grand Canyon, NASA Moon landings, Hollywood, Silicon Valley, Yellowstone National Park, and the Statue of Liberty.",
    recordFact: "Yellowstone was established in 1872 as the first national park in the world, home to Old Faithful geyser and wild bison.",
    description: "The United States is a federal republic of 50 states spanning from the Atlantic to Pacific Oceans, plus Alaska in the Arctic and Hawaii in the tropical Pacific.",
    interestingFacts: [
      "The Grand Canyon in Arizona is over a mile deep (1,800 m) and 277 miles long, carved by the Colorado River.",
      "The US landed the first humans on the Moon during the Apollo 11 mission in July 1969.",
      "Alaska has more coastline than all the other 49 US states combined.",
      "The Library of Congress in Washington, D.C., is the largest library in the world, housing over 170 million items."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The Statue of Liberty standing tall in New York Harbor",
    flagMeaning: {
      story: "Known as 'The Stars and Stripes', adopted in 1777 and updated as new states joined the Union.",
      elements: ["50 white stars on a blue canton", "13 horizontal stripes (7 red, 6 white) representing the original 13 colonies"],
      colors: [
        { name: "Valor Red", colorClass: "bg-red-600 text-white", symbol: "Hardiness and valor" },
        { name: "Purity White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Purity and innocence" },
        { name: "Justice Blue", colorClass: "bg-blue-800 text-white", symbol: "Vigilance, perseverance, and justice" }
      ]
    },
    location: {
      region: "North America",
      coordinatesText: "37°09′ N, 95°42′ W",
      neighbors: "Bordered by Canada to the north and Mexico to the south, flanked by the Atlantic Ocean to the east and Pacific Ocean to the west.",
      surroundingWaters: ["Atlantic Ocean", "Pacific Ocean", "Gulf of Mexico", "Arctic Ocean (Alaska)"],
      adjacentCountries: [
        { name: "Canada", flagUrl: "https://flagcdn.com/w160/ca.png", lat: 45.4215, lng: -75.6972, relationship: "North border (longest undefended border)" },
        { name: "Mexico", flagUrl: "https://flagcdn.com/w160/mx.png", lat: 19.4326, lng: -99.1332, relationship: "South border (Rio Grande)" }
      ]
    },
    color: "bg-blue-600",
    position: "top-[40%] left-[50%]",
    geo: { lat: 37.0902, lng: -95.7129, zoom: 4, capitalCoords: { lat: 38.9072, lng: -77.0369 } }
  },
  {
    id: "ca",
    iso2: "ca",
    name: "Canada",
    officialName: "Canada",
    capital: "Ottawa",
    population: "40.1 Million",
    languages: ["English", "French"],
    currency: "Canadian Dollar (C$)",
    flagUrl: "https://flagcdn.com/w320/ca.png",
    uniqueness: "Second largest country on Earth by total area; has the longest coastline in the world (243,042 km) and more lakes than the rest of the world combined.",
    recordFact: "Canada contains over 2 million lakes, holding 20% of all planetary surface freshwater.",
    description: "Canada spans six time zones from the Atlantic to the Pacific and northward into the Arctic Ocean, famous for the Canadian Rockies, maple syrup, ice hockey, and Niagara Falls.",
    interestingFacts: [
      "Canada produces over 70% of the world's pure maple syrup, mainly in Quebec.",
      "The national animal is the beaver, chosen for its industrious role in early Canadian history.",
      "Churchill, Manitoba is known as the 'Polar Bear Capital of the World'.",
      "Canada has the longest highway in the world (Trans-Canada Highway, over 7,800 km)."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Turquoise alpine waters of Lake Louise in Banff National Park, Canada",
    flagMeaning: {
      story: "The Maple Leaf flag was officially inaugurated on February 15, 1965, after the Great Flag Debate.",
      elements: ["Red vertical bars on the sides", "White square in center with a stylized 11-pointed red maple leaf"],
      colors: [
        { name: "Maple Red", colorClass: "bg-red-600 text-white", symbol: "Sacrifice in World War I and Canadian heritage" },
        { name: "Winter White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "The snowy northern landscapes and peace" }
      ]
    },
    location: {
      region: "Northern North America",
      coordinatesText: "56°08′ N, 106°20′ W",
      neighbors: "Bordered by the United States to the south and northwest (Alaska), surrounded by three oceans.",
      surroundingWaters: ["Atlantic Ocean", "Pacific Ocean", "Arctic Ocean", "Hudson Bay"],
      adjacentCountries: [
        { name: "United States", flagUrl: "https://flagcdn.com/w160/us.png", lat: 38.9072, lng: -77.0369, relationship: "South and Northwest (Alaska) border" }
      ]
    },
    color: "bg-red-600",
    position: "top-[20%] left-[50%]",
    geo: { lat: 56.1304, lng: -106.3468, zoom: 3, capitalCoords: { lat: 45.4215, lng: -75.6972 } }
  },
  {
    id: "mx",
    iso2: "mx",
    name: "Mexico",
    officialName: "United Mexican States",
    capital: "Mexico City",
    population: "129.0 Million",
    languages: ["Spanish", "68 Indigenous Languages"],
    currency: "Mexican Peso ($)",
    flagUrl: "https://flagcdn.com/w320/mx.png",
    uniqueness: "Birthplace of chocolate, tacos, and the ancient Maya and Aztec civilizations; home to Chichén Itzá, one of the New 7 Wonders of the World.",
    recordFact: "The Great Pyramid of Cholula in Puebla, Mexico is the largest pyramid on Earth by base volume, larger than the Great Pyramid of Giza!",
    description: "Mexico is a vibrant bridge between North and Central America, boasting Caribbean turquoise beaches, Pacific surf, mountainous deserts, and rich culinary traditions.",
    interestingFacts: [
      "Mexico introduced chocolate, corn, vanilla, chili peppers, and avocados to the global kitchen.",
      "Mexico City is built on the ruins of the Aztec capital Tenochtitlan, atop an ancient lakebed.",
      "Chichén Itzá's El Castillo pyramid produces an acoustic serpent shadow during the spring and autumn equinoxes.",
      "Día de los Muertos (Day of the Dead) is a joyful UNESCO-recognized celebration honoring departed ancestors."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The ancient Mayan pyramid of Chichén Itzá in Mexico",
    flagMeaning: {
      story: "Adopted in 1821, the coat of arms depicts the Aztec legend of an eagle perched on a nopal cactus devouring a serpent.",
      elements: ["Vertical tricolor of green, white, red", "Centered Aztec coat of arms with eagle, serpent, and prickly pear cactus"],
      colors: [
        { name: "Hope Green", colorClass: "bg-emerald-600 text-white", symbol: "Hope and prosperity" },
        { name: "Unity White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Purity and unity" },
        { name: "Patriot Red", colorClass: "bg-red-600 text-white", symbol: "The blood shed by national heroes" }
      ]
    },
    location: {
      region: "Southern North America",
      coordinatesText: "23°38′ N, 102°33′ W",
      neighbors: "Bordered by the US to the north, and Guatemala and Belize to the southeast.",
      surroundingWaters: ["Pacific Ocean", "Gulf of Mexico", "Caribbean Sea", "Gulf of California"],
      adjacentCountries: [
        { name: "United States", flagUrl: "https://flagcdn.com/w160/us.png", lat: 38.9072, lng: -77.0369, relationship: "North border" },
        { name: "Guatemala", flagUrl: "https://flagcdn.com/w160/gt.png", lat: 14.6349, lng: -90.5069, relationship: "Southeast border" },
        { name: "Belize", flagUrl: "https://flagcdn.com/w160/bz.png", lat: 17.2510, lng: -88.7590, relationship: "Southeast border" }
      ]
    },
    color: "bg-emerald-600",
    position: "top-[60%] left-[45%]",
    geo: { lat: 23.6345, lng: -102.5528, zoom: 5, capitalCoords: { lat: 19.4326, lng: -99.1332 } }
  },
  {
    id: "ag",
    iso2: "ag",
    name: "Antigua and Barbuda",
    officialName: "Antigua and Barbuda",
    capital: "St. John's",
    population: "94 Thousand",
    languages: ["English"],
    currency: "East Caribbean Dollar (EC$)",
    flagUrl: "https://flagcdn.com/w320/ag.png",
    uniqueness: "Known as the 'Land of 365 Beaches'—one distinct pristine white and pink sandy beach for every day of the year!",
    recordFact: "Barbuda is home to the Frigate Bird Sanctuary, housing over 5,000 frigatebirds in the Codrington Lagoon.",
    description: "Antigua and Barbuda is a twin-island Caribbean nation famous for historic English Harbour, Nelson's Dockyard, turquoise bays, and sailing regattas.",
    interestingFacts: [
      "Nelson's Dockyard in English Harbour is the world's only continuously operating Georgian naval dockyard.",
      "Barbuda's beaches have unique pink-tinted sand created by crushed pink shells of microscopic foraminifera.",
      "Cricket is the national passion; legendary batsman Sir Vivian Richards was born here.",
      "The country has zero rivers or permanent natural lakes, relying on desalination and catchments."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Sailing yachts anchored in the azure bays of Antigua",
    flagMeaning: {
      story: "Designed by renowned artist Reginald Samuel in 1967, featuring a V-shape for victory.",
      elements: ["Red field with a central inverted V-shape", "Top black band with rising golden sun", "Middle blue band and bottom white band"],
      colors: [
        { name: "Red", colorClass: "bg-red-600 text-white", symbol: "The dynamism and energy of the people" },
        { name: "Black", colorClass: "bg-slate-900 text-white", symbol: "African heritage" },
        { name: "Golden Sun", colorClass: "bg-amber-400 text-slate-900", symbol: "The dawning of a new era of freedom" },
        { name: "Blue & White", colorClass: "bg-blue-600 text-white", symbol: "The Caribbean Sea and white sands" }
      ]
    },
    location: {
      region: "Caribbean / Leeward Islands",
      coordinatesText: "17°03′ N, 61°48′ W",
      neighbors: "Island nation in the eastern Caribbean Sea, north of Guadeloupe and east of Saint Kitts and Nevis.",
      surroundingWaters: ["Caribbean Sea", "Atlantic Ocean"],
      adjacentCountries: [
        { name: "Saint Kitts and Nevis", flagUrl: "https://flagcdn.com/w160/kn.png", lat: 17.3578, lng: -62.7830, relationship: "West" },
        { name: "Dominica", flagUrl: "https://flagcdn.com/w160/dm.png", lat: 15.3092, lng: -61.3794, relationship: "South" }
      ]
    },
    color: "bg-red-500",
    geo: { lat: 17.0608, lng: -61.7964, zoom: 9, capitalCoords: { lat: 17.1274, lng: -61.8468 } }
  },
  {
    id: "bs",
    iso2: "bs",
    name: "The Bahamas",
    officialName: "Commonwealth of the Bahamas",
    capital: "Nassau",
    population: "410 Thousand",
    languages: ["English", "Bahamian Creole"],
    currency: "Bahamian Dollar (B$)",
    flagUrl: "https://flagcdn.com/w320/bs.png",
    uniqueness: "Archipelago of 700 coral islands and 2,400 cays; home to the swimming pigs of Big Major Cay and Dean's Blue Hole (world's 2nd deepest marine sinkhole).",
    recordFact: "The water around the Bahamas is so clear that visibility can reach over 60 meters (200 feet) deep.",
    description: "The Bahamas stretches across 800 kilometers of the Atlantic Ocean, famed for pink sand beaches, coral reefs, pirate history, and vibrant Junkanoo street festivals.",
    interestingFacts: [
      "In the Exumas, friendly wild pigs swim out to meet visiting boats in crystal turquoise waters.",
      "Christopher Columbus made his very first landfall in the Americas on the Bahamian island of San Salvador in 1492.",
      "Dean's Blue Hole on Long Island plunges 202 meters into the ocean floor.",
      "Junkanoo is a vibrant Boxing Day and New Year's festival filled with cowbells, brass horns, and colorful crepe-paper costumes."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The pristine aquamarine sandbars and coral cays of the Bahamas",
    flagMeaning: {
      story: "Adopted in 1973 upon independence from the UK, symbolizing the sun, sand, sea, and strength of the Bahamian people.",
      elements: ["Black equilateral triangle at the hoist", "Three horizontal stripes of aquamarine, gold, and aquamarine"],
      colors: [
        { name: "Black Triangle", colorClass: "bg-slate-900 text-white", symbol: "The vigor and force of the Bahamian people" },
        { name: "Aquamarine", colorClass: "bg-cyan-500 text-white", symbol: "The sparkling Caribbean and Atlantic waters" },
        { name: "Golden Stripe", colorClass: "bg-amber-400 text-slate-900", symbol: "The glowing sun and golden sandy beaches" }
      ]
    },
    location: {
      region: "Caribbean / Lucayan Archipelago",
      coordinatesText: "25°02′ N, 77°24′ W",
      neighbors: "North of Cuba and Hispaniola, southeast of the US state of Florida.",
      surroundingWaters: ["Atlantic Ocean", "Tongue of the Ocean", "Florida Straits"],
      adjacentCountries: [
        { name: "United States (Florida)", flagUrl: "https://flagcdn.com/w160/us.png", lat: 25.7617, lng: -80.1918, relationship: "Northwest (80 km)" },
        { name: "Cuba", flagUrl: "https://flagcdn.com/w160/cu.png", lat: 23.1136, lng: -82.3666, relationship: "South" }
      ]
    },
    color: "bg-cyan-500",
    geo: { lat: 25.0343, lng: -77.3963, zoom: 6, capitalCoords: { lat: 25.0479, lng: -77.3554 } }
  },
  {
    id: "bb",
    iso2: "bb",
    name: "Barbados",
    officialName: "Barbados",
    capital: "Bridgetown",
    population: "282 Thousand",
    languages: ["English", "Bajan Creole"],
    currency: "Barbadian Dollar (Bds$)",
    flagUrl: "https://flagcdn.com/w320/bb.png",
    uniqueness: "Birthplace of rum (Mount Gay Rum since 1703), superstar Rihanna, flying fish cuisine, and historic Bridgetown Garrison.",
    recordFact: "Barbados is home to Mount Gay Rum, the world's oldest continuously produced commercial brand of rum, founded in 1703.",
    description: "Barbados is the easternmost Caribbean island, featuring coral limestone formations, Harrison's Cave with subterranean waterfalls, and legendary surf breaks like Soup Bowl.",
    interestingFacts: [
      "The national dish of Barbados is Cou-Cou and flying fish, served with spicy gravy.",
      "Harrison's Cave features crystallized limestone caverns with stalactites, stalagmites, and crystal pools.",
      "Green monkeys roam freely across the island in nature sanctuaries and mahogany woodlands.",
      "Crop Over is a historic 200-year-old summer festival celebrating the end of the sugar cane harvest."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Historic coastline and palm trees of Bridgetown, Barbados",
    flagMeaning: {
      story: "Adopted in 1966 upon independence, featuring the iconic broken trident of Neptune.",
      elements: ["Vertical triband of ultramarine, gold, ultramarine", "Centered black broken trident"],
      colors: [
        { name: "Ultramarine Blue", colorClass: "bg-blue-700 text-white", symbol: "The ocean and the sky" },
        { name: "Golden Yellow", colorClass: "bg-amber-400 text-slate-900", symbol: "The island's golden sandy shores" },
        { name: "Broken Trident", colorClass: "bg-slate-900 text-white", symbol: "Breaking away from colonial rule to sovereign democracy" }
      ]
    },
    location: {
      region: "Caribbean / Lesser Antilles",
      coordinatesText: "13°10′ N, 59°32′ W",
      neighbors: "Easternmost Caribbean island, east of Saint Vincent and the Grenadines and Saint Lucia.",
      surroundingWaters: ["Atlantic Ocean", "Caribbean Sea"],
      adjacentCountries: [
        { name: "Saint Lucia", flagUrl: "https://flagcdn.com/w160/lc.png", lat: 14.0101, lng: -60.9875, relationship: "West" },
        { name: "Saint Vincent and the Grenadines", flagUrl: "https://flagcdn.com/w160/vc.png", lat: 13.1600, lng: -61.2248, relationship: "West" }
      ]
    },
    color: "bg-blue-600",
    geo: { lat: 13.1939, lng: -59.5432, zoom: 10, capitalCoords: { lat: 13.1060, lng: -59.6132 } }
  },
  {
    id: "bz",
    iso2: "bz",
    name: "Belize",
    officialName: "Belize",
    capital: "Belmopan",
    population: "410 Thousand",
    languages: ["English", "Belizean Creole", "Spanish", "Maya"],
    currency: "Belize Dollar (BZ$)",
    flagUrl: "https://flagcdn.com/w320/bz.png",
    uniqueness: "Only English-speaking country in Central America; home to the Great Blue Hole (318-meter-wide marine sinkhole) and Belize Barrier Reef.",
    recordFact: "The Great Blue Hole was made world-famous by Jacques Cousteau, who declared it one of the top five scuba diving sites on the planet.",
    description: "Belize combines dense tropical jungles packed with ancient Mayan temples like Xunantunich and Caracol, with the Belize Barrier Reef—the second largest barrier reef system in the world.",
    interestingFacts: [
      "The Cockscomb Basin Wildlife Sanctuary in Belize was established as the world's very first jaguar reserve.",
      "The Great Blue Hole plunges 124 meters down into underwater caves filled with massive stalactites.",
      "Belize's motto 'Sub Umbra Floreo' means 'Under the Shade I Flourish', honoring its mahogany forestry roots.",
      "Actun Tunichil Muknal (ATM Cave) contains preserved Mayan sacrificial artifacts and the famous 'Crystal Maiden' skeleton."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Aerial view of the deep indigo Great Blue Hole in Belize",
    flagMeaning: {
      story: "Adopted in 1981, it is the only national flag to depict human figures in its primary coat of arms.",
      elements: ["Royal blue field with red stripes at top and bottom", "White circular disc with two woodcutters flanking a mahogany tree and the national coat of arms"],
      colors: [
        { name: "Royal Blue", colorClass: "bg-blue-700 text-white", symbol: "The People's United Party and the Caribbean skies" },
        { name: "Red Stripes", colorClass: "bg-red-600 text-white", symbol: "The United Democratic Party and national defense" },
        { name: "Woodcutters & Mahogany", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "The forestry and mahogany industry that built Belize" }
      ]
    },
    location: {
      region: "Central America",
      coordinatesText: "17°15′ N, 88°46′ W",
      neighbors: "Bordered by Mexico to the north, Guatemala to the west and south, and the Caribbean Sea to the east.",
      surroundingWaters: ["Caribbean Sea", "Gulf of Honduras"],
      adjacentCountries: [
        { name: "Mexico", flagUrl: "https://flagcdn.com/w160/mx.png", lat: 19.4326, lng: -99.1332, relationship: "North border" },
        { name: "Guatemala", flagUrl: "https://flagcdn.com/w160/gt.png", lat: 14.6349, lng: -90.5069, relationship: "West and South border" }
      ]
    },
    color: "bg-blue-600",
    geo: { lat: 17.1899, lng: -88.4976, zoom: 7, capitalCoords: { lat: 17.2510, lng: -88.7590 } }
  },
  {
    id: "cr",
    iso2: "cr",
    name: "Costa Rica",
    officialName: "Republic of Costa Rica",
    capital: "San José",
    population: "5.2 Million",
    languages: ["Spanish"],
    currency: "Costa Rican Colón (₡)",
    flagUrl: "https://flagcdn.com/w320/cr.png",
    uniqueness: "Has no standing military since 1948; houses 5% of all planetary biodiversity and powered 99%+ by clean renewable energy; home of 'Pura Vida!'.",
    recordFact: "Costa Rica constitutionally abolished its military in 1948 and redirected defense budgets into healthcare and universal education.",
    description: "Costa Rica is a peaceful Central American ecological wonderland featuring cloud forests in Monteverde, active Arenal Volcano, sloth sanctuaries, and world-class Pacific surfing.",
    interestingFacts: [
      "'Pura Vida' (Pure Life) is the country's national greeting, motto, and philosophy of gratitude and happiness.",
      "Over 25% of Costa Rica's entire land area is preserved in national parks and ecological reserves.",
      "Costa Rica is home to both two-toed and three-toed sloths, toucans, poison dart frogs, and sea turtles.",
      "The Arenal Volcano area features geothermal natural hot springs heated deep within the earth."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "A three-toed sloth hanging in the lush tropical canopy of Costa Rica",
    flagMeaning: {
      story: "Designed in 1848 by First Lady Pacífica Fernández, inspired by the French tricolor of liberty.",
      elements: ["Five horizontal stripes of blue, white, red (double width), white, blue", "National coat of arms on state ensigns"],
      colors: [
        { name: "Sky Blue", colorClass: "bg-blue-600 text-white", symbol: "The sky, opportunities, and perseverance" },
        { name: "Pure White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Peace, wisdom, and happiness" },
        { name: "Vibrant Red", colorClass: "bg-red-600 text-white", symbol: "The warmth of the people and blood spilled for freedom" }
      ]
    },
    location: {
      region: "Central America",
      coordinatesText: "9°44′ N, 83°45′ W",
      neighbors: "Bordered by Nicaragua to the north, Panama to the southeast, the Caribbean Sea to the east, and the Pacific Ocean to the west.",
      surroundingWaters: ["Pacific Ocean", "Caribbean Sea"],
      adjacentCountries: [
        { name: "Nicaragua", flagUrl: "https://flagcdn.com/w160/ni.png", lat: 12.1149, lng: -86.2362, relationship: "North border" },
        { name: "Panama", flagUrl: "https://flagcdn.com/w160/pa.png", lat: 8.9824, lng: -79.5199, relationship: "Southeast border" }
      ]
    },
    color: "bg-blue-600",
    geo: { lat: 9.7489, lng: -83.7534, zoom: 7, capitalCoords: { lat: 9.9281, lng: -84.0907 } }
  },
  {
    id: "cu",
    iso2: "cu",
    name: "Cuba",
    officialName: "Republic of Cuba",
    capital: "Havana",
    population: "11.2 Million",
    languages: ["Spanish"],
    currency: "Cuban Peso (₱)",
    flagUrl: "https://flagcdn.com/w320/cu.png",
    uniqueness: "Largest island in the Caribbean; famous for vintage 1950s American classic cars, salsa and son cubano music, hand-rolled cigars, and colonial Old Havana.",
    recordFact: "Cuba has over 60,000 vintage classic American cars from the 1940s and 50s still actively driving on its roads, lovingly maintained by local mechanics.",
    description: "Cuba is a long, crocodile-shaped island in the northern Caribbean known for cobblestone colonial plazas, Varadero white sand beaches, tobacco fields of Viñales, and vibrant music.",
    interestingFacts: [
      "Old Havana (Habana Vieja) is a UNESCO World Heritage site with hundreds of Spanish baroque and neoclassical buildings.",
      "Cuba has a 99.8% adult literacy rate and one of the highest doctor-to-patient ratios on Earth.",
      "The Bee Hummingbird (zunzuncito), found only in Cuba, is the smallest bird in the world, weighing less than a dime!",
      "Cuba's Viñales Valley is famous for dramatic limestone karsts called mogotes rising from green tobacco fields."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1500759285222-a95626b934cb?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Colorful vintage American classic car cruising down the streets of Havana, Cuba",
    flagMeaning: {
      story: "Designed in 1849 by Narciso López and poet Miguel Teurbe Tolón to rally support for Cuban liberation.",
      elements: ["Five alternating blue and white stripes", "Red equilateral triangle on the hoist", "White five-pointed Star of Independence"],
      colors: [
        { name: "Three Blue Stripes", colorClass: "bg-blue-700 text-white", symbol: "The three historical military departments of Cuba" },
        { name: "Two White Stripes", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "The purity of the patriot cause" },
        { name: "Red Triangle", colorClass: "bg-red-600 text-white", symbol: "Equality, fraternity, and blood shed for liberty" },
        { name: "Lone Star", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Total freedom and national sovereignty" }
      ]
    },
    location: {
      region: "Caribbean",
      coordinatesText: "21°31′ N, 77°46′ W",
      neighbors: "Located where the northern Caribbean Sea, Gulf of Mexico, and Atlantic Ocean meet. South of Florida and the Bahamas, west of Haiti.",
      surroundingWaters: ["Caribbean Sea", "Gulf of Mexico", "Atlantic Ocean", "Straits of Florida"],
      adjacentCountries: [
        { name: "United States (Florida)", flagUrl: "https://flagcdn.com/w160/us.png", lat: 25.7617, lng: -80.1918, relationship: "North (150 km across Straits of Florida)" },
        { name: "The Bahamas", flagUrl: "https://flagcdn.com/w160/bs.png", lat: 25.0479, lng: -77.3554, relationship: "Northeast" },
        { name: "Haiti", flagUrl: "https://flagcdn.com/w160/ht.png", lat: 18.5944, lng: -72.3074, relationship: "East (Windward Passage)" },
        { name: "Jamaica", flagUrl: "https://flagcdn.com/w160/jm.png", lat: 18.0179, lng: -76.8099, relationship: "South" }
      ]
    },
    color: "bg-blue-600",
    geo: { lat: 21.5218, lng: -77.7812, zoom: 6, capitalCoords: { lat: 23.1136, lng: -82.3666 } }
  },
  {
    id: "dm",
    iso2: "dm",
    name: "Dominica",
    officialName: "Commonwealth of Dominica",
    capital: "Roseau",
    population: "72 Thousand",
    languages: ["English", "Dominican French Creole"],
    currency: "East Caribbean Dollar (EC$)",
    flagUrl: "https://flagcdn.com/w320/dm.png",
    uniqueness: "Known as the 'Nature Isle of the Caribbean'; home to the world's second-largest Boiling Lake, 365 rivers, and the rare Sisserou Parrot.",
    recordFact: "Dominica's Boiling Lake is a flooded fumarole spanning 60 meters wide, with bubbling grayish-blue water heated by volcanic magma.",
    description: "Dominica is a rugged volcanic island covered in lush prehistoric rainforests, sulfur hot springs, emerald pools, cascading waterfalls like Trafalgar Falls, and resident sperm whales.",
    interestingFacts: [
      "Dominica is the only island in the Caribbean with a resident year-round population of sperm whales.",
      "The island has 365 freshwater rivers—one for every day of the calendar year.",
      "Dominica is home to the Kalinago Territory, the last remaining indigenous Carib community in the Caribbean.",
      "The Waitukubuli National Trail is the first long-distance hiking trail in the Caribbean, stretching 185 km across the island."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Lush tropical rainforest canopy and emerald waterfalls in Dominica",
    flagMeaning: {
      story: "Adopted in 1978, it is one of only three national flags in the world to feature the color purple, found on the breast of the Sisserou parrot.",
      elements: ["Green field with a tricolor cross of yellow, black, and white", "Red circular disc with ten green stars encircling a Sisserou parrot"],
      colors: [
        { name: "Forest Green", colorClass: "bg-emerald-700 text-white", symbol: "The lush vegetation and agriculture" },
        { name: "Cross", colorClass: "bg-amber-400 text-slate-900", symbol: "Christian faith and the Trinity" },
        { name: "Sisserou Parrot", colorClass: "bg-purple-600 text-white", symbol: "National bird and high aspirations" },
        { name: "Ten Stars", colorClass: "bg-emerald-500 text-white", symbol: "The ten parishes of Dominica" }
      ]
    },
    location: {
      region: "Caribbean / Windward Islands",
      coordinatesText: "15°25′ N, 61°20′ W",
      neighbors: "Island between Guadeloupe to the north and Martinique to the south in the eastern Caribbean.",
      surroundingWaters: ["Caribbean Sea", "Atlantic Ocean"],
      adjacentCountries: [
        { name: "Saint Lucia", flagUrl: "https://flagcdn.com/w160/lc.png", lat: 14.0101, lng: -60.9875, relationship: "South" },
        { name: "Antigua and Barbuda", flagUrl: "https://flagcdn.com/w160/ag.png", lat: 17.1274, lng: -61.8468, relationship: "North" }
      ]
    },
    color: "bg-emerald-700",
    geo: { lat: 15.4150, lng: -61.3710, zoom: 10, capitalCoords: { lat: 15.3092, lng: -61.3794 } }
  },
  {
    id: "do",
    iso2: "do",
    name: "Dominican Republic",
    officialName: "Dominican Republic",
    capital: "Santo Domingo",
    population: "11.3 Million",
    languages: ["Spanish"],
    currency: "Dominican Peso (RD$)",
    flagUrl: "https://flagcdn.com/w320/do.png",
    uniqueness: "Shares Hispaniola with Haiti; Santo Domingo was the first European settlement in the Americas (1496); birthplace of Merengue and Bachata music.",
    recordFact: "Home to Pico Duarte (3,098 meters), the highest mountain peak in the entire Caribbean, and Lake Enriquillo, the lowest point.",
    description: "The Dominican Republic is the most visited Caribbean destination, featuring Punta Cana's palm-fringed turquoise resorts, whale watching in Samaná Bay, and colonial architecture.",
    interestingFacts: [
      "The Colonial Zone of Santo Domingo contains the first cathedral, first castle, and first paved street in the Americas.",
      "Larimar, a rare sky-blue pectolite gemstone, is found nowhere else in the world except in the Dominican mountains.",
      "The Dominican Republic has produced legendary Major League Baseball superstars like David Ortiz and Pedro Martínez.",
      "Over 3,000 humpback whales migrate to Samaná Bay every winter to mate and give birth."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Turquoise palm-fringed coastline of Punta Cana, Dominican Republic",
    flagMeaning: {
      story: "Designed by founding father Juan Pablo Duarte in 1838, it is the only national flag in the world to feature a Bible on its coat of arms.",
      elements: ["White centered cross dividing four alternating blue and red rectangles", "Coat of arms with open Bible opened to John 8:32 ('The truth shall make you free')"],
      colors: [
        { name: "Ultramarine Blue", colorClass: "bg-blue-700 text-white", symbol: "Liberty and divine protection" },
        { name: "Vermilion Red", colorClass: "bg-red-600 text-white", symbol: "The blood of heroes shed for independence" },
        { name: "White Cross", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Salvation and peace" }
      ]
    },
    location: {
      region: "Caribbean / Greater Antilles",
      coordinatesText: "18°44′ N, 70°10′ W",
      neighbors: "Occupies the eastern two-thirds of the island of Hispaniola, bordered by Haiti to the west.",
      surroundingWaters: ["Atlantic Ocean", "Caribbean Sea", "Mona Passage"],
      adjacentCountries: [
        { name: "Haiti", flagUrl: "https://flagcdn.com/w160/ht.png", lat: 18.5944, lng: -72.3074, relationship: "West border (Hispaniola Island)" }
      ]
    },
    color: "bg-blue-600",
    geo: { lat: 18.7357, lng: -70.1627, zoom: 7, capitalCoords: { lat: 18.4861, lng: -69.9312 } }
  },
  {
    id: "sv",
    iso2: "sv",
    name: "El Salvador",
    officialName: "Republic of El Salvador",
    capital: "San Salvador",
    population: "6.4 Million",
    languages: ["Spanish"],
    currency: "United States Dollar ($) / Bitcoin",
    flagUrl: "https://flagcdn.com/w320/sv.png",
    uniqueness: "Known as the 'Land of Volcanoes'; smallest and most densely populated country in Central America; famous for Pupusas and world-class surf breaks.",
    recordFact: "El Salvador has over 20 volcanoes, several of which are actively venting steam, including Santa Ana and Izalco ('Lighthouse of the Pacific').",
    description: "El Salvador is situated along the Pacific coast of Central America, renowned for volcanic crater lakes like Coatepeque, cloud forest coffee farms, and surf spots like El Tunco.",
    interestingFacts: [
      "Pupusas—handmade thick corn tortillas stuffed with melted cheese, refried beans, and chicharrón—are the beloved national dish.",
      "Joya de Cerén is known as the 'Pompeii of the Americas', an ancient Mayan village preserved intact under volcanic ash.",
      "El Salvador was the first country in the world to adopt Bitcoin as legal tender in 2021.",
      "Lake Coatepeque is a stunning turquoise caldera lake surrounded by hills and thermal springs."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The emerald crater lake of Santa Ana Volcano in El Salvador",
    flagMeaning: {
      story: "Adopted in 1912, based on the flag of the Federal Republic of Central America.",
      elements: ["Horizontal triband of blue, white, blue", "National coat of arms with five volcanoes, Phrygian cap, and rainbow"],
      colors: [
        { name: "Cobalt Blue", colorClass: "bg-blue-700 text-white", symbol: "The Pacific Ocean and Caribbean Sea flanking Central America" },
        { name: "Pure White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Peace and concord" }
      ]
    },
    location: {
      region: "Central America",
      coordinatesText: "13°47′ N, 88°53′ W",
      neighbors: "Bordered by Guatemala to the northwest, Honduras to the northeast, and the Pacific Ocean to the south.",
      surroundingWaters: ["Pacific Ocean", "Gulf of Fonseca"],
      adjacentCountries: [
        { name: "Guatemala", flagUrl: "https://flagcdn.com/w160/gt.png", lat: 14.6349, lng: -90.5069, relationship: "Northwest border" },
        { name: "Honduras", flagUrl: "https://flagcdn.com/w160/hn.png", lat: 14.0723, lng: -87.1921, relationship: "Northeast border" }
      ]
    },
    color: "bg-blue-600",
    geo: { lat: 13.7942, lng: -88.8965, zoom: 8, capitalCoords: { lat: 13.6929, lng: -89.2182 } }
  },
  {
    id: "gd",
    iso2: "gd",
    name: "Grenada",
    officialName: "Grenada",
    capital: "St. George's",
    population: "126 Thousand",
    languages: ["English", "Grenadian Creole"],
    currency: "East Caribbean Dollar (EC$)",
    flagUrl: "https://flagcdn.com/w320/gd.png",
    uniqueness: "Known as the 'Spice Isle of the Caribbean'; world's second-largest exporter of fragrant nutmeg and home to the world's first underwater sculpture park.",
    recordFact: "The Molinere Underwater Sculpture Park in Grenada was the very first underwater sculpture gallery created in the world, doubling as an artificial coral reef.",
    description: "Grenada is a tri-island Caribbean nation (Grenada, Carriacou, and Petite Martinique) packed with spice plantations, Grand Anse beach, rainforest waterfalls, and volcanic crater lakes.",
    interestingFacts: [
      "Grenada supplies over 20% of the world's nutmeg, which is so iconic it is depicted right on the national flag!",
      "Grand Anse Beach is a world-famous 3-kilometer crescent of powdery white sand and turquoise water.",
      "The national dish is 'Oil Down', a hearty slow-cooked stew of breadfruit, salted meat, coconut milk, and turmeric.",
      "Underwater sculptures by Jason deCaires Taylor now support growing coral colonies and marine life."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The colorful horseshoe harbor of St. George's in Grenada",
    flagMeaning: {
      story: "Adopted in 1974 upon independence from the UK, featuring a nutmeg pod on the hoist.",
      elements: ["Red border with six yellow stars", "Central rectangle divided into four triangles of green and yellow", "Central red disc with a large yellow star", "Clove of nutmeg on hoist"],
      colors: [
        { name: "Red", colorClass: "bg-red-600 text-white", symbol: "Courage and vitality of the people" },
        { name: "Yellow", colorClass: "bg-amber-400 text-slate-900", symbol: "Wisdom and warm tropical sunshine" },
        { name: "Green", colorClass: "bg-emerald-600 text-white", symbol: "Fertile agricultural lands and spice crops" },
        { name: "Nutmeg", colorClass: "bg-red-500 text-white", symbol: "The Spice Isle identity" }
      ]
    },
    location: {
      region: "Caribbean / Windward Islands",
      coordinatesText: "12°07′ N, 61°40′ W",
      neighbors: "Island nation north of Trinidad and Tobago and southwest of Saint Vincent and the Grenadines.",
      surroundingWaters: ["Caribbean Sea", "Atlantic Ocean"],
      adjacentCountries: [
        { name: "Trinidad and Tobago", flagUrl: "https://flagcdn.com/w160/tt.png", lat: 10.6549, lng: -61.5019, relationship: "South" },
        { name: "Saint Vincent and the Grenadines", flagUrl: "https://flagcdn.com/w160/vc.png", lat: 13.1600, lng: -61.2248, relationship: "Northeast" }
      ]
    },
    color: "bg-amber-500",
    geo: { lat: 12.1165, lng: -61.6790, zoom: 10, capitalCoords: { lat: 12.0564, lng: -61.7485 } }
  },
  {
    id: "gt",
    iso2: "gt",
    name: "Guatemala",
    officialName: "Republic of Guatemala",
    capital: "Guatemala City",
    population: "18.1 Million",
    languages: ["Spanish", "22 Mayan Languages", "Garifuna", "Xinca"],
    currency: "Guatemalan Quetzal (Q)",
    flagUrl: "https://flagcdn.com/w320/gt.png",
    uniqueness: "Heart of the ancient Mayan civilization; home to the towering jungle ruins of Tikal, beautiful Lake Atitlán, and active Fuego Volcano.",
    recordFact: "Tikal's Temple IV rises 70 meters high, making it one of the tallest pre-Columbian structures ever built in the Americas.",
    description: "Guatemala is rich in indigenous Maya culture, vibrant handwoven textiles, dramatic volcanic landscapes, and colonial Antigua with its cobblestone streets and Arch of Santa Catalina.",
    interestingFacts: [
      "Lake Atitlán is a massive volcanic caldera lake surrounded by three towering volcanoes and traditional Maya villages.",
      "The national bird is the Resplendent Quetzal, famous for iridescent emerald-green feathers and long tail plumes.",
      "Guatemala invented the first instant coffee and produces some of the world's finest single-origin highland beans.",
      "Semuc Champey features natural limestone turquoise swimming pools cascading over a natural limestone bridge in the jungle."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The ancient Mayan pyramids of Tikal rising above the Guatemalan rainforest",
    flagMeaning: {
      story: "Adopted in 1871, featuring vertical stripes with the national coat of arms containing the Resplendent Quetzal.",
      elements: ["Vertical triband of sky blue, white, sky blue", "Coat of arms with crossed rifles, laurel wreath, parchment with Independence date, and a Quetzal bird"],
      colors: [
        { name: "Sky Blue", colorClass: "bg-sky-500 text-white", symbol: "The two bordering oceans (Pacific & Caribbean)" },
        { name: "Pure White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Peace, purity, and integrity" },
        { name: "Quetzal Bird", colorClass: "bg-emerald-500 text-white", symbol: "Liberty and indigenous sovereignty" }
      ]
    },
    location: {
      region: "Central America",
      coordinatesText: "15°46′ N, 90°14′ W",
      neighbors: "Bordered by Mexico to the north and west, Belize and the Caribbean Sea to the northeast, Honduras and El Salvador to the southeast, and the Pacific Ocean to the south.",
      surroundingWaters: ["Pacific Ocean", "Caribbean Sea (Gulf of Honduras)"],
      adjacentCountries: [
        { name: "Mexico", flagUrl: "https://flagcdn.com/w160/mx.png", lat: 19.4326, lng: -99.1332, relationship: "North & West border" },
        { name: "Belize", flagUrl: "https://flagcdn.com/w160/bz.png", lat: 17.2510, lng: -88.7590, relationship: "Northeast border" },
        { name: "Honduras", flagUrl: "https://flagcdn.com/w160/hn.png", lat: 14.0723, lng: -87.1921, relationship: "East border" },
        { name: "El Salvador", flagUrl: "https://flagcdn.com/w160/sv.png", lat: 13.6929, lng: -89.2182, relationship: "Southeast border" }
      ]
    },
    color: "bg-sky-500",
    geo: { lat: 15.7835, lng: -90.2308, zoom: 6, capitalCoords: { lat: 14.6349, lng: -90.5069 } }
  },
  {
    id: "ht",
    iso2: "ht",
    name: "Haiti",
    officialName: "Republic of Haiti",
    capital: "Port-au-Prince",
    population: "11.7 Million",
    languages: ["Haitian Creole", "French"],
    currency: "Haitian Gourde (G)",
    flagUrl: "https://flagcdn.com/w320/ht.png",
    uniqueness: "The first independent republic in Latin America and the Caribbean (1804); only nation in world history founded through a successful slave revolution; home to Citadelle Laferrière.",
    recordFact: "The Citadelle Laferrière, built atop the mountain Bonnet à l'Évêque, is the largest fortress in the entire Americas.",
    description: "Haiti occupies the mountainous western third of Hispaniola, renowned for vibrant folk art, gingerbread architecture, compas music, and rich revolutionary history.",
    interestingFacts: [
      "Haiti defeated Napoleon's army to declare independence on January 1, 1804.",
      "Soup Joumou (pumpkin soup) is eaten on New Year's Day to celebrate freedom and independence, recognized by UNESCO.",
      "The Citadelle Laferrière was armed with 365 cannons and thousands of cannonballs to defend against naval invasions.",
      "Bassin Bleu is a series of cobalt-blue jungle waterfalls and plunge pools hidden in the mountains near Jacmel."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The massive stone mountain fortress of Citadelle Laferrière in Haiti",
    flagMeaning: {
      story: "Created in 1803 by revolutionary leader Jean-Jacques Dessalines, tearing the white stripe out of the French tricolor.",
      elements: ["Horizontal bands of blue and red", "White central panel with coat of arms, royal palm, cannons, and Phrygian cap", "Motto: 'L'Union Fait La Force' (Unity Makes Strength)"],
      colors: [
        { name: "Blue", colorClass: "bg-blue-700 text-white", symbol: "Haiti's black citizens" },
        { name: "Red", colorClass: "bg-red-600 text-white", symbol: "Haiti's mixed-heritage citizens" },
        { name: "Palm & Cannons", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Independence and readiness to defend liberty" }
      ]
    },
    location: {
      region: "Caribbean / Greater Antilles",
      coordinatesText: "18°58′ N, 72°17′ W",
      neighbors: "Occupies western Hispaniola, bordered by the Dominican Republic to the east, Cuba across the Windward Passage to the west.",
      surroundingWaters: ["Caribbean Sea", "Atlantic Ocean", "Windward Passage", "Gulf of Gonâve"],
      adjacentCountries: [
        { name: "Dominican Republic", flagUrl: "https://flagcdn.com/w160/do.png", lat: 18.4861, lng: -69.9312, relationship: "East border (Hispaniola)" },
        { name: "Cuba", flagUrl: "https://flagcdn.com/w160/cu.png", lat: 23.1136, lng: -82.3666, relationship: "Northwest (across Windward Passage)" }
      ]
    },
    color: "bg-blue-600",
    geo: { lat: 18.9712, lng: -72.2852, zoom: 7, capitalCoords: { lat: 18.5944, lng: -72.3074 } }
  },
  {
    id: "hn",
    iso2: "hn",
    name: "Honduras",
    officialName: "Republic of Honduras",
    capital: "Tegucigalpa",
    population: "10.6 Million",
    languages: ["Spanish"],
    currency: "Honduran Lempira (L)",
    flagUrl: "https://flagcdn.com/w320/hn.png",
    uniqueness: "Home to the ancient Mayan ruins of Copán with the famous Hieroglyphic Stairway, Roatán's barrier reefs, and the Rio Plátano Biosphere Reserve.",
    recordFact: "The Hieroglyphic Stairway at Copán is the longest preserved carved Mayan hieroglyphic text in the Americas, with over 2,000 glyphs.",
    description: "Honduras is a mountainous Central American nation with extensive Caribbean coastline, tropical Bay Islands (Roatán and Utila), pine forests, and rich biodiversity.",
    interestingFacts: [
      "Utila is world-famous as one of the best and most affordable spots on Earth to swim alongside harmless giant whale sharks.",
      "The Yoro 'Lluvia de Peces' (Rain of Fish) is a legendary annual weather event where small fish reportedly fall from the sky during storms.",
      "The Scarlet Macaw (Guara Roja) is the vibrant national bird of Honduras, honored at Copán.",
      "Baleadas—warm flour tortillas folded with mashed beans, crema, and cheese—are the country's signature street food."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Ancient Mayan stone stelae and ruins at Copán, Honduras",
    flagMeaning: {
      story: "Adopted in 1866 and updated in 2022 to turquoise blue, symbolizing Central American brotherhood.",
      elements: ["Horizontal triband of turquoise blue, white, turquoise blue", "Five turquoise five-pointed stars arranged in an X pattern in the white band"],
      colors: [
        { name: "Turquoise Blue", colorClass: "bg-teal-500 text-white", symbol: "The Pacific Ocean, Caribbean Sea, and brotherly love" },
        { name: "Pure White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Peace, purity of thought, and integrity" },
        { name: "Five Stars", colorClass: "bg-teal-500 text-white", symbol: "The five Central American nations (Honduras, Guatemala, El Salvador, Nicaragua, Costa Rica)" }
      ]
    },
    location: {
      region: "Central America",
      coordinatesText: "14°30′ N, 86°40′ W",
      neighbors: "Bordered by Guatemala to the west, El Salvador to the southwest, Nicaragua to the southeast, and the Caribbean Sea to the north.",
      surroundingWaters: ["Caribbean Sea", "Gulf of Honduras", "Pacific Ocean (Gulf of Fonseca)"],
      adjacentCountries: [
        { name: "Guatemala", flagUrl: "https://flagcdn.com/w160/gt.png", lat: 14.6349, lng: -90.5069, relationship: "West border" },
        { name: "El Salvador", flagUrl: "https://flagcdn.com/w160/sv.png", lat: 13.6929, lng: -89.2182, relationship: "Southwest border" },
        { name: "Nicaragua", flagUrl: "https://flagcdn.com/w160/ni.png", lat: 12.1149, lng: -86.2362, relationship: "Southeast border" }
      ]
    },
    color: "bg-teal-500",
    geo: { lat: 15.2000, lng: -86.2419, zoom: 7, capitalCoords: { lat: 14.0723, lng: -87.1921 } }
  },
  {
    id: "jm",
    iso2: "jm",
    name: "Jamaica",
    officialName: "Jamaica",
    capital: "Kingston",
    population: "2.8 Million",
    languages: ["English", "Jamaican Patois"],
    currency: "Jamaican Dollar (J$)",
    flagUrl: "https://flagcdn.com/w320/jm.png",
    uniqueness: "Birthplace of Reggae music (Bob Marley), Blue Mountain Coffee, jerk spices, and the fastest sprinters in world history (Usain Bolt).",
    recordFact: "Jamaica is the only country in the world whose national flag contains neither red, white, nor blue colors.",
    description: "Jamaica is a lush tropical Caribbean island framed by the mist-covered Blue Mountains, cascading waterfalls like Dunn's River Falls, Negril's Seven Mile Beach, and warm cultural vibes.",
    interestingFacts: [
      "Usain Bolt holds the world records for both the 100-meter (9.58 seconds) and 200-meter sprint races.",
      "Jamaica Blue Mountain Coffee is one of the rarest, smoothest, and most prized gourmet coffees on Earth.",
      "Dunn's River Falls near Ocho Rios is a rare terraced travertine waterfall that cascades directly onto the beach and sea.",
      "Ian Fleming wrote all 14 original James Bond secret agent novels at his Goldeneye estate in Jamaica."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Terraced cascading waterfalls of Dunn's River Falls in Jamaica",
    flagMeaning: {
      story: "Adopted in 1962 upon independence, designed with the motto 'Hardships there are, but the land is green and the sun shineth'.",
      elements: ["Diagonal golden saltire cross dividing the flag into four triangles", "Two green triangles (top and bottom)", "Two black triangles (hoist and fly)"],
      colors: [
        { name: "Golden Saltire", colorClass: "bg-amber-400 text-slate-900", symbol: "The shining golden sunshine and natural mineral wealth" },
        { name: "Lush Green", colorClass: "bg-emerald-600 text-white", symbol: "The fertile green island and agricultural hope" },
        { name: "Black Triangles", colorClass: "bg-slate-900 text-white", symbol: "The strength, creativity, and resilience of the people" }
      ]
    },
    location: {
      region: "Caribbean / Greater Antilles",
      coordinatesText: "18°10′ N, 77°20′ W",
      neighbors: "Island in the Caribbean Sea, south of Cuba and west of Hispaniola.",
      surroundingWaters: ["Caribbean Sea"],
      adjacentCountries: [
        { name: "Cuba", flagUrl: "https://flagcdn.com/w160/cu.png", lat: 23.1136, lng: -82.3666, relationship: "North (140 km)" },
        { name: "Haiti", flagUrl: "https://flagcdn.com/w160/ht.png", lat: 18.5944, lng: -72.3074, relationship: "East" }
      ]
    },
    color: "bg-emerald-600",
    geo: { lat: 18.1096, lng: -77.2975, zoom: 8, capitalCoords: { lat: 18.0179, lng: -76.8099 } }
  },
  {
    id: "ni",
    iso2: "ni",
    name: "Nicaragua",
    officialName: "Republic of Nicaragua",
    capital: "Managua",
    population: "6.9 Million",
    languages: ["Spanish"],
    currency: "Nicaraguan Córdoba (C$)",
    flagUrl: "https://flagcdn.com/w320/ni.png",
    uniqueness: "Known as the 'Land of Lakes and Volcanoes'; home to Lake Nicaragua (largest lake in Central America) where freshwater bull sharks swim, and volcano boarding on Cerro Negro.",
    recordFact: "Cerro Negro is the only active volcano in the world where thrill-seekers can hike up and 'sandboard' down active black volcanic cinder slopes at 80 km/h!",
    description: "Nicaragua is the largest nation in Central America, featuring colonial cities like Granada and León, the volcanic island of Ometepe in Lake Nicaragua, and the idyllic Corn Islands in the Caribbean.",
    interestingFacts: [
      "Lake Nicaragua contains Ometepe, an hourglass-shaped island formed by two volcanoes: Concepción (active) and Maderas (dormant).",
      "Freshwater bull sharks adapted to living inside the freshwater waters of Lake Nicaragua.",
      "Granada, founded in 1524 on the shores of Lake Nicaragua, is one of the oldest colonial cities in the continental Americas.",
      "Nicaragua is home to the Bosawás Biosphere Reserve, the second largest rainforest in the Americas after the Amazon."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The dual volcanic peaks of Ometepe Island rising from Lake Nicaragua",
    flagMeaning: {
      story: "Adopted in 1908 and confirmed in 1971, based on the Federal Republic of Central America flag.",
      elements: ["Horizontal triband of cobalt blue, white, cobalt blue", "National coat of arms with an equilateral triangle, five volcanoes, rainbow, and Phrygian cap of liberty"],
      colors: [
        { name: "Cobalt Blue", colorClass: "bg-blue-600 text-white", symbol: "The Pacific Ocean and the Caribbean Sea" },
        { name: "Pure White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Peace, purity, and integrity" },
        { name: "Five Volcanoes", colorClass: "bg-emerald-600 text-white", symbol: "The five brotherhood nations of Central America" }
      ]
    },
    location: {
      region: "Central America",
      coordinatesText: "12°52′ N, 85°12′ W",
      neighbors: "Bordered by Honduras to the north, Costa Rica to the south, the Caribbean Sea to the east, and the Pacific Ocean to the west.",
      surroundingWaters: ["Pacific Ocean", "Caribbean Sea", "Lake Nicaragua", "Lake Managua"],
      adjacentCountries: [
        { name: "Honduras", flagUrl: "https://flagcdn.com/w160/hn.png", lat: 14.0723, lng: -87.1921, relationship: "North border" },
        { name: "Costa Rica", flagUrl: "https://flagcdn.com/w160/cr.png", lat: 9.9281, lng: -84.0907, relationship: "South border" }
      ]
    },
    color: "bg-blue-600",
    geo: { lat: 12.8654, lng: -85.2072, zoom: 6, capitalCoords: { lat: 12.1149, lng: -86.2362 } }
  },
  {
    id: "pa",
    iso2: "pa",
    name: "Panama",
    officialName: "Republic of Panama",
    capital: "Panama City",
    population: "4.4 Million",
    languages: ["Spanish", "English"],
    currency: "Panamanian Balboa (B/.) / US Dollar ($)",
    flagUrl: "https://flagcdn.com/w320/pa.png",
    uniqueness: "The 'Bridge of the World'; home to the engineering marvel Panama Canal connecting the Atlantic and Pacific Oceans; only place on Earth where you can see the sunrise on the Pacific and sunset on the Atlantic.",
    recordFact: "The Panama Canal cuts across 82 kilometers of the isthmus, allowing over 14,000 ships each year to bypass the dangerous 13,000 km voyage around Cape Horn.",
    description: "Panama connects North and South America, featuring a glittering high-rise capital skyline, the historic Casco Viejo, the San Blas archipelago governed by the indigenous Guna people, and dense Darién rainforest.",
    interestingFacts: [
      "Because of the S-shape of the isthmus, you can see the sunrise over the Pacific Ocean and sunset over the Atlantic Ocean in certain spots!",
      "The Panama Canal uses a system of massive gravity-fed water locks that lift container ships 26 meters above sea level to Gatun Lake.",
      "The indigenous Guna people of San Blas handcraft famous intricate layered textile artworks called 'Molas'.",
      "Panama City is the only capital city in the world that has a primary tropical rainforest within its city limits (Metropolitan Natural Park)."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "A container ship traversing the historic locks of the Panama Canal",
    flagMeaning: {
      story: "Designed in 1903 by María Ossa de Amador, dividing the flag into quarters to represent political peace between Conservatives and Liberals.",
      elements: ["Quartered into four rectangles", "Top-left: white with blue star; Top-right: plain red", "Bottom-left: plain blue; Bottom-right: white with red star"],
      colors: [
        { name: "Blue Quarter & Star", colorClass: "bg-blue-700 text-white", symbol: "The Conservative Party and civic honesty" },
        { name: "Red Quarter & Star", colorClass: "bg-red-600 text-white", symbol: "The Liberal Party and rule of law" },
        { name: "White Fields", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Peace and national unity" }
      ]
    },
    location: {
      region: "Central America / Isthmus",
      coordinatesText: "8°53′ N, 80°46′ W",
      neighbors: "Bordered by Costa Rica to the west and Colombia to the southeast across the Darién Gap.",
      surroundingWaters: ["Pacific Ocean", "Caribbean Sea", "Gulf of Panama", "Panama Canal"],
      adjacentCountries: [
        { name: "Costa Rica", flagUrl: "https://flagcdn.com/w160/cr.png", lat: 9.9281, lng: -84.0907, relationship: "West border" },
        { name: "Colombia", flagUrl: "https://flagcdn.com/w160/co.png", lat: 4.7110, lng: -74.0721, relationship: "Southeast border (Darién Gap)" }
      ]
    },
    color: "bg-blue-600",
    geo: { lat: 8.5379, lng: -80.7821, zoom: 7, capitalCoords: { lat: 8.9824, lng: -79.5199 } }
  },
  {
    id: "kn",
    iso2: "kn",
    name: "Saint Kitts and Nevis",
    officialName: "Federation of Saint Christopher and Nevis",
    capital: "Basseterre",
    population: "48 Thousand",
    languages: ["English", "Kittsian Creole"],
    currency: "East Caribbean Dollar (EC$)",
    flagUrl: "https://flagcdn.com/w320/kn.png",
    uniqueness: "Smallest sovereign country in the Americas by both land area and population; home to Brimstone Hill Fortress ('Gibraltar of the Caribbean').",
    recordFact: "Brimstone Hill Fortress National Park is one of the best-preserved historical military fortifications in the entire Western Hemisphere.",
    description: "Saint Kitts and Nevis is a two-island nation in the Leeward Islands, featuring dormant volcanic peaks like Mount Liamuiga, sugar cane train railways, and turquoise coves.",
    interestingFacts: [
      "The St. Kitts Scenic Railway is the last remaining passenger train in the Caribbean, originally built to transport sugar cane.",
      "Nevis Peak is an active dormant stratovolcano usually shrouded in fluffy white clouds that Columbus mistook for snow ('Las Nieves').",
      "Alexander Hamilton, founding father of the United States, was born on the island of Nevis in 1755 or 1757.",
      "The channel between St. Kitts and Nevis is only 3 kilometers wide and is named 'The Narrows'."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The massive stone ramparts of Brimstone Hill Fortress in Saint Kitts",
    flagMeaning: {
      story: "Designed by student Edrice Lewis in 1983 upon independence from the UK.",
      elements: ["Divided diagonally by a black band with yellow borders and two white stars", "Upper green triangle and lower red triangle"],
      colors: [
        { name: "Lush Green", colorClass: "bg-emerald-600 text-white", symbol: "Fertility of the land and agriculture" },
        { name: "Patriot Red", colorClass: "bg-red-600 text-white", symbol: "The struggle from slavery to freedom" },
        { name: "Black Band", colorClass: "bg-slate-900 text-white", symbol: "African heritage of the population" },
        { name: "Two White Stars", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Hope and liberty, representing Saint Kitts and Nevis" }
      ]
    },
    location: {
      region: "Caribbean / Leeward Islands",
      coordinatesText: "17°20′ N, 62°45′ W",
      neighbors: "Island nation in the Leeward Islands, west of Antigua and Barbuda and south of Sint Maarten.",
      surroundingWaters: ["Caribbean Sea", "Atlantic Ocean"],
      adjacentCountries: [
        { name: "Antigua and Barbuda", flagUrl: "https://flagcdn.com/w160/ag.png", lat: 17.1274, lng: -61.8468, relationship: "East" }
      ]
    },
    color: "bg-emerald-600",
    geo: { lat: 17.3578, lng: -62.7830, zoom: 10, capitalCoords: { lat: 17.3000, lng: -62.7333 } }
  },
  {
    id: "lc",
    iso2: "lc",
    name: "Saint Lucia",
    officialName: "Saint Lucia",
    capital: "Castries",
    population: "180 Thousand",
    languages: ["English", "Saint Lucian French Creole (Kwéyòl)"],
    currency: "East Caribbean Dollar (EC$)",
    flagUrl: "https://flagcdn.com/w320/lc.png",
    uniqueness: "Only country in the world named after a historical woman (Saint Lucy of Syracuse); home to the dramatic volcanic Gros Piton and Petit Piton twin spires.",
    recordFact: "Saint Lucia boasts the highest number of Nobel Prize laureates per capita in the world (Arthur Lewis for Economics and Derek Walcott for Literature).",
    description: "Saint Lucia is an emerald Caribbean jewel famous for the iconic UNESCO Pitons rising dramatically from the sea, drive-in volcano sulfur springs at Soufrière, and chocolate plantation heritage.",
    interestingFacts: [
      "The Pitons are two volcanic plugs (Gros Piton and Petit Piton) rising over 700 meters straight out of the turquoise ocean.",
      "Soufrière has the world's only 'drive-in' volcano where visitors can drive right up to bubbling volcanic sulfur mud pools.",
      "Saint Lucia changed ownership between Britain and France 14 times, earning the nickname 'Helen of the West Indies'.",
      "Cocoa has been grown here for centuries, and visitors can make handmade artisanal dark chocolate from tree to bar."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The iconic green volcanic peaks of the Pitons rising over the bay in Saint Lucia",
    flagMeaning: {
      story: "Designed by native artist Dunstan St. Omer in 1967, representing the twin Pitons rising from the Caribbean Sea.",
      elements: ["Cerulean blue field", "Central isosceles triangle composed of black and white borders", "Overlaid by a yellow equilateral triangle"],
      colors: [
        { name: "Cerulean Blue", colorClass: "bg-sky-500 text-white", symbol: "The Caribbean Sea and the Atlantic Ocean" },
        { name: "Yellow Triangle", colorClass: "bg-amber-400 text-slate-900", symbol: "Warm sunshine and prosperity" },
        { name: "Black & White Spire", colorClass: "bg-slate-900 text-white", symbol: "The twin Pitons and harmony between Black and White cultures" }
      ]
    },
    location: {
      region: "Caribbean / Windward Islands",
      coordinatesText: "13°54′ N, 60°58′ W",
      neighbors: "Island north of Saint Vincent and the Grenadines and south of Martinique.",
      surroundingWaters: ["Caribbean Sea", "Atlantic Ocean"],
      adjacentCountries: [
        { name: "Saint Vincent and the Grenadines", flagUrl: "https://flagcdn.com/w160/vc.png", lat: 13.1600, lng: -61.2248, relationship: "South" },
        { name: "Barbados", flagUrl: "https://flagcdn.com/w160/bb.png", lat: 13.1060, lng: -59.6132, relationship: "Southeast" },
        { name: "Dominica", flagUrl: "https://flagcdn.com/w160/dm.png", lat: 15.3092, lng: -61.3794, relationship: "North" }
      ]
    },
    color: "bg-sky-500",
    geo: { lat: 13.9094, lng: -60.9789, zoom: 10, capitalCoords: { lat: 14.0101, lng: -60.9875 } }
  },
  {
    id: "vc",
    iso2: "vc",
    name: "Saint Vincent and the Grenadines",
    officialName: "Saint Vincent and the Grenadines",
    capital: "Kingstown",
    population: "104 Thousand",
    languages: ["English", "Vincentian Creole"],
    currency: "East Caribbean Dollar (EC$)",
    flagUrl: "https://flagcdn.com/w320/vc.png",
    uniqueness: "Chain of 32 idyllic Grenadine islands; home to the active stratovolcano La Soufrière and Tobago Cays Marine Park with sea turtles.",
    recordFact: "The Saint Vincent Botanical Gardens, founded in 1765, is the oldest botanical garden in the Western Hemisphere.",
    description: "Saint Vincent and the Grenadines comprises volcanic mainland Saint Vincent and world-renowned sailing destinations like Bequia, Mustique, Canouan, and the turquoise Tobago Cays.",
    interestingFacts: [
      "Tobago Cays is an uninhabited archipelago of five islets surrounded by a horseshoe coral reef teeming with green sea turtles.",
      "The film franchise 'Pirates of the Caribbean: The Curse of the Black Pearl' filmed opening harbor scenes at Wallilabou Bay.",
      "Mustique is a world-famous exclusive private island hideaway for international royalty and musicians.",
      "Bequia is famous for traditional hand-carved wooden model sailing boats and boatbuilding."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Turquoise lagoons and coral reefs of Tobago Cays, Saint Vincent and the Grenadines",
    flagMeaning: {
      story: "Known as 'The Gems', adopted in 1985 and designed by Swiss graphic artist Julien van der Wal.",
      elements: ["Vertical triband of blue, gold (double width), and green", "Three green diamonds arranged in a 'V' for Vincent in the center"],
      colors: [
        { name: "Tropical Blue", colorClass: "bg-blue-600 text-white", symbol: "Clear skies and pristine surrounding waters" },
        { name: "Golden Sand", colorClass: "bg-amber-400 text-slate-900", symbol: "Warm sunshine and island sands" },
        { name: "Lush Green", colorClass: "bg-emerald-600 text-white", symbol: "Vibrant island vegetation" },
        { name: "Three Diamonds", colorClass: "bg-emerald-600 text-white", symbol: "The Gems of the Antilles forming a V for Vincent" }
      ]
    },
    location: {
      region: "Caribbean / Windward Islands",
      coordinatesText: "13°15′ N, 61°12′ W",
      neighbors: "Island chain south of Saint Lucia and north of Grenada, west of Barbados.",
      surroundingWaters: ["Caribbean Sea", "Atlantic Ocean"],
      adjacentCountries: [
        { name: "Saint Lucia", flagUrl: "https://flagcdn.com/w160/lc.png", lat: 14.0101, lng: -60.9875, relationship: "North" },
        { name: "Grenada", flagUrl: "https://flagcdn.com/w160/gd.png", lat: 12.0564, lng: -61.7485, relationship: "South" },
        { name: "Barbados", flagUrl: "https://flagcdn.com/w160/bb.png", lat: 13.1060, lng: -59.6132, relationship: "East" }
      ]
    },
    color: "bg-emerald-500",
    geo: { lat: 13.2528, lng: -61.1971, zoom: 9, capitalCoords: { lat: 13.1600, lng: -61.2248 } }
  },
  {
    id: "tt",
    iso2: "tt",
    name: "Trinidad and Tobago",
    officialName: "Republic of Trinidad and Tobago",
    capital: "Port of Spain",
    population: "1.5 Million",
    languages: ["English", "Trinidadian Creole", "Tobagonian Creole"],
    currency: "Trinidad and Tobago Dollar (TT$)",
    flagUrl: "https://flagcdn.com/w320/tt.png",
    uniqueness: "Birthplace of steelpan drums (the only acoustic musical instrument invented in the 20th century), Calypso and Soca music, and Pitch Lake (world's largest natural asphalt lake).",
    recordFact: "Pitch Lake in La Brea holds about 10 million tons of liquid natural pitch/asphalt—used to pave roads from London to New York!",
    description: "Trinidad and Tobago is a twin-island nation just off the coast of Venezuela, famous for world-famous Carnival celebrations, nesting giant leatherback sea turtles, and rich biodiversity.",
    interestingFacts: [
      "Steelpan drums were invented in the 1930s in Trinidad, crafted from discarded 55-gallon oil drums tuned to musical scales.",
      "The Trinidad Moruga Scorpion pepper was ranked the hottest chili pepper in the world in 2012.",
      "Main Ridge Forest Reserve in Tobago, established in 1776, is the oldest legally protected rainforest reserve in the Western Hemisphere.",
      "Trinidad's Carnival is known as 'The Greatest Show on Earth', featuring elaborate feathered masquerade bands and calypso competitions."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Vibrant costumed masqueraders dancing at Trinidad Carnival",
    flagMeaning: {
      story: "Designed by the Independence Committee in 1962 upon self-rule from the UK.",
      elements: ["Red field", "Black diagonal stripe with thin white borders running from upper hoist to lower fly"],
      colors: [
        { name: "Vital Red", colorClass: "bg-red-600 text-white", symbol: "The vitality of the land, courage, and warmth of the sun" },
        { name: "Black Stripe", colorClass: "bg-slate-900 text-white", symbol: "The dedication, strength, and unity of the people" },
        { name: "White Borders", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "The sea that surrounds the islands, purity, and equality" }
      ]
    },
    location: {
      region: "Caribbean / Southernmost Antilles",
      coordinatesText: "10°41′ N, 61°13′ W",
      neighbors: "Just 11 kilometers off the northeastern coast of Venezuela, south of Grenada.",
      surroundingWaters: ["Caribbean Sea", "Atlantic Ocean", "Gulf of Paria"],
      adjacentCountries: [
        { name: "Venezuela", flagUrl: "https://flagcdn.com/w160/ve.png", lat: 10.4806, lng: -66.9036, relationship: "West & South (11 km across Gulf of Paria)" },
        { name: "Grenada", flagUrl: "https://flagcdn.com/w160/gd.png", lat: 12.0564, lng: -61.7485, relationship: "North" }
      ]
    },
    color: "bg-red-600",
    geo: { lat: 10.6918, lng: -61.2225, zoom: 9, capitalCoords: { lat: 10.6549, lng: -61.5019 } }
  }
];

export const northAmericaContinent: Continent = {
  id: "north-america",
  name: "North America & Caribbean",
  emoji: "🗽",
  bgGradient: "from-sky-600 to-indigo-800",
  mapBg: "bg-sky-100 border-sky-400",
  borderColor: "border-sky-400",
  description: "North America features grand national parks, ancient Mayan temples, the Panama Canal, maple forests, and colorful Caribbean island cultures!",
  countries: northAmericaCountries
};
