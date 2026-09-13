import { Continent, Country } from './types';

export const southAmericaCountries: Country[] = [
  {
    id: "ar",
    iso2: "ar",
    name: "Argentina",
    officialName: "Argentine Republic",
    capital: "Buenos Aires",
    population: "46.7 Million",
    languages: ["Spanish"],
    currency: "Argentine Peso ($)",
    flagUrl: "https://flagcdn.com/w320/ar.png",
    uniqueness: "Home to Mount Aconcagua (highest peak in the Americas), vast Pampas grasslands, Tango dance, and Iguazu Falls.",
    recordFact: "Home to Mount Aconcagua (6,961 meters), the highest mountain in both the Southern and Western Hemispheres.",
    description: "Argentina stretches from the tropical rainforests and cascading Iguazu Falls in the north down to the icy glaciers of Patagonia and Tierra del Fuego in the extreme south.",
    interestingFacts: [
      "Iguazu Falls has over 275 individual waterfalls and spans nearly 3 kilometers wide.",
      "The Argentine tango originated in the colorful port neighborhood of La Boca in Buenos Aires.",
      "Patagonia is famous for the Perito Moreno Glacier, one of the few glaciers in the world that is still advancing.",
      "Argentine paleontologists have discovered some of the largest dinosaur fossils ever found, including Argentinosaurus."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Majestic Perito Moreno Glacier in Argentine Patagonia",
    flagMeaning: {
      story: "Created by military leader Manuel Belgrano in 1812 during the Argentine War of Independence, featuring the radiant Sun of May.",
      elements: ["Triband of light blue and white", "Golden Sun of May with 32 alternating straight and wavy rays"],
      colors: [
        { name: "Sky Blue", colorClass: "bg-sky-400 text-slate-900", symbol: "Clear skies and patriotic independence" },
        { name: "Cloud White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Peace and purity" },
        { name: "Golden Sun", colorClass: "bg-amber-400 text-slate-900", symbol: "The Incan sun god Inti and the dawning of Argentine liberty" }
      ]
    },
    location: {
      region: "Southern South America",
      coordinatesText: "38°25′ S, 63°37′ W",
      neighbors: "Bordered by Chile to the west across the Andes, Bolivia and Paraguay to the north, Brazil and Uruguay to the northeast, and Atlantic Ocean to the east.",
      surroundingWaters: ["South Atlantic Ocean", "Río de la Plata", "Drake Passage"],
      adjacentCountries: [
        { name: "Chile", flagUrl: "https://flagcdn.com/w160/cl.png", lat: -33.4489, lng: -70.6693, relationship: "West border (Andes Mountains)" },
        { name: "Brazil", flagUrl: "https://flagcdn.com/w160/br.png", lat: -15.7975, lng: -47.8919, relationship: "Northeast border" },
        { name: "Uruguay", flagUrl: "https://flagcdn.com/w160/uy.png", lat: -34.9011, lng: -56.1645, relationship: "East across Rio de la Plata" },
        { name: "Bolivia", flagUrl: "https://flagcdn.com/w160/bo.png", lat: -16.5000, lng: -68.1500, relationship: "North border" },
        { name: "Paraguay", flagUrl: "https://flagcdn.com/w160/py.png", lat: -25.2637, lng: -57.5759, relationship: "North border" }
      ]
    },
    color: "bg-sky-500",
    position: "top-[70%] left-[40%]",
    geo: { lat: -38.4161, lng: -63.6167, zoom: 4, capitalCoords: { lat: -34.6037, lng: -58.3816 } }
  },
  {
    id: "bo",
    iso2: "bo",
    name: "Bolivia",
    officialName: "Plurinational State of Bolivia",
    capital: "Sucre (Constitutional) / La Paz (Seat of Gov)",
    population: "12.4 Million",
    languages: ["Spanish", "Quechua", "Aymara", "Guaraní"],
    currency: "Boliviano (Bs.)",
    flagUrl: "https://flagcdn.com/w320/bo.png",
    uniqueness: "Home to the Salar de Uyuni (largest salt flat on Earth) and Lake Titicaca (highest navigable lake).",
    recordFact: "Salar de Uyuni covers over 10,500 square kilometers and creates the world's largest natural mirror during the rainy season.",
    description: "Bolivia is a landlocked nation located in west-central South America. Its geography varies dramatically from the snow-capped Andes mountains and high-altitude Altiplano to the lush Amazon basin.",
    interestingFacts: [
      "La Paz sits at 3,640 meters altitude and is served by the world's largest urban cable car network (Mi Teleférico).",
      "Lake Titicaca is shared with Peru and is considered the cradle of the ancient Inca civilization.",
      "Bolivia has 37 official recognized languages, reflecting its vibrant indigenous heritage.",
      "Madidi National Park is one of the most biologically diverse protected areas on the planet."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The surreal Salar de Uyuni salt flats reflecting the sky",
    flagMeaning: {
      story: "Adopted in 1851, the Bolivian tricolor represents the nation's bravery, mineral wealth, and lush agricultural nature.",
      elements: ["Horizontal tricolor of red, yellow, green", "National coat of arms featuring Mount Potosí and an Andean condor"],
      colors: [
        { name: "Red", colorClass: "bg-red-600 text-white", symbol: "The valor of soldiers who fought for independence" },
        { name: "Yellow", colorClass: "bg-amber-400 text-slate-900", symbol: "Mineral wealth and natural resources" },
        { name: "Green", colorClass: "bg-emerald-600 text-white", symbol: "Vast biodiversity and agricultural prosperity" }
      ]
    },
    location: {
      region: "Central South America",
      coordinatesText: "16°17′ S, 63°35′ W",
      neighbors: "Bordered by Brazil to the north and east, Paraguay and Argentina to the south, and Chile and Peru to the west.",
      surroundingWaters: ["Landlocked (Lake Titicaca, Amazon River Basin)"],
      adjacentCountries: [
        { name: "Brazil", flagUrl: "https://flagcdn.com/w160/br.png", lat: -15.7975, lng: -47.8919, relationship: "North & East border" },
        { name: "Peru", flagUrl: "https://flagcdn.com/w160/pe.png", lat: -12.0464, lng: -77.0428, relationship: "West border" },
        { name: "Chile", flagUrl: "https://flagcdn.com/w160/cl.png", lat: -33.4489, lng: -70.6693, relationship: "Southwest border" },
        { name: "Argentina", flagUrl: "https://flagcdn.com/w160/ar.png", lat: -34.6037, lng: -58.3816, relationship: "South border" },
        { name: "Paraguay", flagUrl: "https://flagcdn.com/w160/py.png", lat: -25.2637, lng: -57.5759, relationship: "Southeast border" }
      ]
    },
    color: "bg-amber-500",
    geo: { lat: -16.2902, lng: -63.5887, zoom: 5, capitalCoords: { lat: -16.5000, lng: -68.1500 } }
  },
  {
    id: "br",
    iso2: "br",
    name: "Brazil",
    officialName: "Federative Republic of Brazil",
    capital: "Brasília",
    population: "216.4 Million",
    languages: ["Portuguese"],
    currency: "Brazilian Real (R$)",
    flagUrl: "https://flagcdn.com/w320/br.png",
    uniqueness: "Largest country in South America, home to the Amazon Rainforest, Christ the Redeemer, Samba, and five FIFA World Cup titles.",
    recordFact: "The Amazon Rainforest in Brazil produces 20% of Earth's oxygen and contains 1 in 10 known species on the planet.",
    description: "Brazil is the fifth-largest nation in the world by both area and population. Famous for its vibrant Carnival celebrations, golden Atlantic beaches like Copacabana, and incredible biodiversity.",
    interestingFacts: [
      "The Amazon River discharges more water than the next seven largest rivers combined.",
      "Brasília was designed from scratch in the late 1950s and shaped like a giant airplane from the air.",
      "Brazil is the only Portuguese-speaking country in the Americas.",
      "The Pantanal wetland in Brazil is the largest tropical wetland area in the world, home to wild jaguars."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Christ the Redeemer overlooking Rio de Janeiro's Guanabara Bay",
    flagMeaning: {
      story: "Adopted in 1889, the flag depicts the starry night sky over Rio de Janeiro on November 15, 1889, the day the Republic was proclaimed.",
      elements: ["Green field with a large yellow rhombus", "Blue celestial globe with 27 stars representing the 26 states plus the Federal District", "White motto band with 'Ordem e Progresso' (Order and Progress)"],
      colors: [
        { name: "Lush Green", colorClass: "bg-emerald-600 text-white", symbol: "The Amazon rainforest and rich flora" },
        { name: "Golden Yellow", colorClass: "bg-amber-400 text-slate-900", symbol: "Mineral abundance and wealth of the nation" },
        { name: "Celestial Blue", colorClass: "bg-blue-800 text-white", symbol: "The Southern constellations over Rio" }
      ]
    },
    location: {
      region: "Eastern & Central South America",
      coordinatesText: "14°14′ S, 51°55′ W",
      neighbors: "Borders every South American country except Chile and Ecuador, with a long eastern coastline along the Atlantic Ocean.",
      surroundingWaters: ["Atlantic Ocean", "Amazon River", "Paraná River Basin"],
      adjacentCountries: [
        { name: "Argentina", flagUrl: "https://flagcdn.com/w160/ar.png", lat: -34.6037, lng: -58.3816, relationship: "South border" },
        { name: "Colombia", flagUrl: "https://flagcdn.com/w160/co.png", lat: 4.7110, lng: -74.0721, relationship: "Northwest border" },
        { name: "Peru", flagUrl: "https://flagcdn.com/w160/pe.png", lat: -12.0464, lng: -77.0428, relationship: "West border" },
        { name: "Venezuela", flagUrl: "https://flagcdn.com/w160/ve.png", lat: 10.4806, lng: -66.9036, relationship: "North border" }
      ]
    },
    color: "bg-emerald-500",
    position: "top-[45%] left-[55%]",
    geo: { lat: -14.2350, lng: -51.9253, zoom: 4, capitalCoords: { lat: -15.7975, lng: -47.8919 } }
  },
  {
    id: "cl",
    iso2: "cl",
    name: "Chile",
    officialName: "Republic of Chile",
    capital: "Santiago",
    population: "19.6 Million",
    languages: ["Spanish"],
    currency: "Chilean Peso ($)",
    flagUrl: "https://flagcdn.com/w320/cl.png",
    uniqueness: "Longest and narrowest country in the world, spanning over 4,300 km from the driest Atacama Desert to glacial Patagonia.",
    recordFact: "The Atacama Desert in northern Chile is the driest non-polar desert on Earth, with some weather stations never having recorded a single drop of rain.",
    description: "Chile is a ribbons-shaped nation framed between the Pacific Ocean to the west and the Andes Mountains to the east. It includes Easter Island (Rapa Nui) with its iconic giant Moai stone statues.",
    interestingFacts: [
      "Chile has over 2,000 volcanoes, around 500 of which are considered geologically active.",
      "Easter Island, located 3,700 km off Chile's coast, has 887 monumental carved stone Moai.",
      "The clear, high-altitude skies of the Atacama Desert host over 40% of the world's major astronomical observatories.",
      "Torres del Paine National Park in Chilean Patagonia features dramatic granite spires and turquoise alpine lakes."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Granite horns and mountain lakes in Torres del Paine, Chile",
    flagMeaning: {
      story: "Adopted in 1817, known as 'La Estrella Solitaria' (The Lone Star), designed to represent independence, bravery, and natural beauty.",
      elements: ["Two equal horizontal bands of white and red", "Blue canton containing a centered white five-pointed star"],
      colors: [
        { name: "Sky Blue", colorClass: "bg-blue-600 text-white", symbol: "The vast blue skies and the Pacific Ocean" },
        { name: "Pure White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "The snow-capped peaks of the Andes Mountains" },
        { name: "Blood Red", colorClass: "bg-red-600 text-white", symbol: "The courage and sacrifice of patriots who fought for freedom" },
        { name: "Lone Star", colorClass: "bg-amber-300 text-slate-900", symbol: "Guidance, progress, and national unity" }
      ]
    },
    location: {
      region: "Southwestern South America",
      coordinatesText: "35°40′ S, 71°32′ W",
      neighbors: "Bordered by Peru to the north, Bolivia to the northeast, Argentina to the east across the Andes, and the South Pacific Ocean to the west.",
      surroundingWaters: ["South Pacific Ocean", "Strait of Magellan", "Drake Passage"],
      adjacentCountries: [
        { name: "Argentina", flagUrl: "https://flagcdn.com/w160/ar.png", lat: -34.6037, lng: -58.3816, relationship: "East (Andes boundary)" },
        { name: "Peru", flagUrl: "https://flagcdn.com/w160/pe.png", lat: -12.0464, lng: -77.0428, relationship: "North border" },
        { name: "Bolivia", flagUrl: "https://flagcdn.com/w160/bo.png", lat: -16.5000, lng: -68.1500, relationship: "Northeast border" }
      ]
    },
    color: "bg-red-500",
    geo: { lat: -35.6751, lng: -71.5430, zoom: 4, capitalCoords: { lat: -33.4489, lng: -70.6693 } }
  },
  {
    id: "co",
    iso2: "co",
    name: "Colombia",
    officialName: "Republic of Colombia",
    capital: "Bogotá",
    population: "52.2 Million",
    languages: ["Spanish"],
    currency: "Colombian Peso ($)",
    flagUrl: "https://flagcdn.com/w320/co.png",
    uniqueness: "Only South American nation with coastlines on both the Pacific Ocean and Caribbean Sea; world famous for coffee and emeralds.",
    recordFact: "Colombia is the second most biodiverse country in the world and ranks number one on Earth for bird and orchid species diversity.",
    description: "Colombia boasts dramatic Andean peaks, coffee plantations in the Zona Cafetera, colonial Caribbean towns like Cartagena, and vast untouched Amazon rainforest.",
    interestingFacts: [
      "Colombia produces some of the sweetest, highest quality Arabica coffee on the planet.",
      "Caño Cristales, known as 'The River of Five Colors' or the Liquid Rainbow, turns bright shades of red, yellow, and blue due to endemic aquatic plants.",
      "Colombia supplies over 70% of the world's finest emerald gemstones.",
      "Cartagena's historic walled city is a UNESCO World Heritage site filled with colonial cobblestone streets and flowering balconies."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Colorful colonial balconies in historic Cartagena, Colombia",
    flagMeaning: {
      story: "Originally designed by Francisco de Miranda in 1806, the yellow, blue, and red tricolor was adopted across Gran Colombia.",
      elements: ["Top yellow stripe occupying half the flag", "Middle blue and bottom red stripes occupying a quarter each"],
      colors: [
        { name: "Golden Yellow", colorClass: "bg-amber-400 text-slate-900", symbol: "Sovereignty, harmony, and gold and agricultural richness" },
        { name: "Ocean Blue", colorClass: "bg-blue-600 text-white", symbol: "The two bordering oceans (Pacific & Caribbean)" },
        { name: "Heroic Red", colorClass: "bg-red-600 text-white", symbol: "The valor and blood spilled for independence" }
      ]
    },
    location: {
      region: "Northwestern South America",
      coordinatesText: "4°34′ N, 74°17′ W",
      neighbors: "Bordered by Panama to the northwest, Venezuela and Brazil to the east, and Ecuador and Peru to the south.",
      surroundingWaters: ["Caribbean Sea", "Pacific Ocean", "Magdalena River"],
      adjacentCountries: [
        { name: "Panama", flagUrl: "https://flagcdn.com/w160/pa.png", lat: 8.9824, lng: -79.5199, relationship: "Northwest (Darién Gap)" },
        { name: "Venezuela", flagUrl: "https://flagcdn.com/w160/ve.png", lat: 10.4806, lng: -66.9036, relationship: "East border" },
        { name: "Ecuador", flagUrl: "https://flagcdn.com/w160/ec.png", lat: -0.1807, lng: -78.4678, relationship: "Southwest border" },
        { name: "Peru", flagUrl: "https://flagcdn.com/w160/pe.png", lat: -12.0464, lng: -77.0428, relationship: "South border" },
        { name: "Brazil", flagUrl: "https://flagcdn.com/w160/br.png", lat: -15.7975, lng: -47.8919, relationship: "Southeast border" }
      ]
    },
    color: "bg-yellow-500",
    geo: { lat: 4.5709, lng: -74.2973, zoom: 5, capitalCoords: { lat: 4.7110, lng: -74.0721 } }
  },
  {
    id: "ec",
    iso2: "ec",
    name: "Ecuador",
    officialName: "Republic of Ecuador",
    capital: "Quito",
    population: "18.2 Million",
    languages: ["Spanish", "Kichwa", "Shuar"],
    currency: "United States Dollar ($)",
    flagUrl: "https://flagcdn.com/w320/ec.png",
    uniqueness: "Named after the Earth's Equator; home to the Galápagos Islands where Charles Darwin developed the theory of evolution.",
    recordFact: "Because the Earth bulges at the Equator, the summit of Mount Chimborazo in Ecuador is the closest place on Earth to outer space and the sun!",
    description: "Ecuador is a compact South American nation packed with Andean volcanoes, the Amazon rainforest, Pacific surf towns, and the wildlife-rich Galápagos archipelago.",
    interestingFacts: [
      "Quito was the first city in the world to be named a UNESCO World Heritage Site in 1978.",
      "The Galápagos Islands are home to giant tortoises that can live over 150 years and marine iguanas that swim in the sea.",
      "Ecuador is one of the world's leading exporters of premium organic cacao and fine bananas.",
      "Panama hats were actually created in Ecuador, woven from the toquilla palm leaf."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "A giant Galápagos tortoise in the volcanic highlands of Ecuador",
    flagMeaning: {
      story: "Adopted in 1860, the flag bears the national coat of arms featuring an Andean condor, Mount Chimborazo, and the steamboat Guayas.",
      elements: ["Horizontal tricolor of yellow, blue, and red", "Coat of arms with an Andean condor perched atop"],
      colors: [
        { name: "Yellow", colorClass: "bg-amber-400 text-slate-900", symbol: "Sunshine, fertility, and rich farmland" },
        { name: "Blue", colorClass: "bg-blue-600 text-white", symbol: "Clear skies and the Pacific Ocean waters" },
        { name: "Red", colorClass: "bg-red-600 text-white", symbol: "Patriots' courage and sacrifice for liberty" }
      ]
    },
    location: {
      region: "Northwestern South America",
      coordinatesText: "1°50′ S, 78°11′ W",
      neighbors: "Bordered by Colombia to the north, Peru to the east and south, and the Pacific Ocean to the west.",
      surroundingWaters: ["Pacific Ocean", "Gulf of Guayaquil", "Galápagos Marine Reserve"],
      adjacentCountries: [
        { name: "Colombia", flagUrl: "https://flagcdn.com/w160/co.png", lat: 4.7110, lng: -74.0721, relationship: "North border" },
        { name: "Peru", flagUrl: "https://flagcdn.com/w160/pe.png", lat: -12.0464, lng: -77.0428, relationship: "East and South border" }
      ]
    },
    color: "bg-amber-500",
    geo: { lat: -1.8312, lng: -78.1834, zoom: 6, capitalCoords: { lat: -0.1807, lng: -78.4678 } }
  },
  {
    id: "gy",
    iso2: "gy",
    name: "Guyana",
    officialName: "Co-operative Republic of Guyana",
    capital: "Georgetown",
    population: "815 Thousand",
    languages: ["English", "Guyanese Creole"],
    currency: "Guyanese Dollar (G$)",
    flagUrl: "https://flagcdn.com/w320/gy.png",
    uniqueness: "Only English-speaking country in South America; home to Kaieteur Falls, the world's widest single-drop waterfall.",
    recordFact: "Kaieteur Falls drops 226 meters in a single sheer plunge—about five times higher than Niagara Falls!",
    description: "Guyana is nestled on South America's North Atlantic coast, covered by over 80% pristine dense rainforest, savannah grasslands, and meandering Amazonian riverways.",
    interestingFacts: [
      "Guyana is home to giant river otters, jaguars, harpy eagles, and the world's largest water lily, Victoria amazonica.",
      "The national flag is called 'The Golden Arrowhead' and was designed by famed vexillologist Whitney Smith.",
      "St. George's Cathedral in Georgetown is one of the tallest freestanding wooden churches on Earth.",
      "Cricket is the most popular sport, and Guyana competes as part of the West Indies cricket team."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The roaring single drop of Kaieteur Falls surrounded by jungle in Guyana",
    flagMeaning: {
      story: "Adopted in 1966, 'The Golden Arrowhead' symbolizes Guyana's forward journey into a prosperous future.",
      elements: ["Green field with a golden arrow pointing forward", "Red triangle at the hoist with black border"],
      colors: [
        { name: "Forest Green", colorClass: "bg-emerald-600 text-white", symbol: "Lush tropical rainforests and agriculture" },
        { name: "Golden Arrow", colorClass: "bg-amber-400 text-slate-900", symbol: "Mineral wealth and forward progress" },
        { name: "Red Triangle", colorClass: "bg-red-600 text-white", symbol: "Zeal and national sacrifice for nation-building" },
        { name: "Black Border", colorClass: "bg-slate-900 text-white", symbol: "Endurance and strength of the Guyanese people" }
      ]
    },
    location: {
      region: "Northern South America / Guianas",
      coordinatesText: "4°51′ N, 58°55′ W",
      neighbors: "Bordered by the Atlantic Ocean to the north, Brazil to the south and southwest, Venezuela to the west, and Suriname to the east.",
      surroundingWaters: ["North Atlantic Ocean", "Essequibo River", "Demerara River"],
      adjacentCountries: [
        { name: "Suriname", flagUrl: "https://flagcdn.com/w160/sr.png", lat: 5.8520, lng: -55.2038, relationship: "East border (Courantyne River)" },
        { name: "Brazil", flagUrl: "https://flagcdn.com/w160/br.png", lat: -15.7975, lng: -47.8919, relationship: "South & Southwest border" },
        { name: "Venezuela", flagUrl: "https://flagcdn.com/w160/ve.png", lat: 10.4806, lng: -66.9036, relationship: "West border" }
      ]
    },
    color: "bg-green-600",
    geo: { lat: 4.8604, lng: -58.9302, zoom: 6, capitalCoords: { lat: 6.8013, lng: -58.1551 } }
  },
  {
    id: "py",
    iso2: "py",
    name: "Paraguay",
    officialName: "Republic of Paraguay",
    capital: "Asunción",
    population: "6.9 Million",
    languages: ["Guaraní", "Spanish"],
    currency: "Paraguayan Guaraní (₲)",
    flagUrl: "https://flagcdn.com/w320/py.png",
    uniqueness: "Only national flag in the world with different emblems on the front (obverse) and back (reverse); powered 100% by clean hydroelectric energy.",
    recordFact: "The Itaipu Dam on the Paraná River between Paraguay and Brazil is one of the largest hydroelectric plants on Earth, generating almost all of Paraguay's electricity cleanly.",
    description: "Paraguay is known as the 'Heart of South America' due to its central inland location. It is famous for Jesuit ruins, mate tea (tereré), and indigenous Guaraní culture.",
    interestingFacts: [
      "Over 90% of the population speaks Guaraní, making it one of the only indigenous languages spoken by non-indigenous majorities.",
      "The reverse side of the flag features the Treasury Seal with a seated lion and the Phrygian cap of liberty.",
      "The Gran Chaco region in western Paraguay is a vast wilderness area rich in wildlife such as armadillos and tapirs.",
      "Drinking cold herbal yerba mate tea called 'tereré' is recognized by UNESCO as cultural intangible heritage."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Historic colonial architecture and plazas in Asunción, Paraguay",
    flagMeaning: {
      story: "Adopted in 1842, inspired by the French tricolor of liberty, equality, and fraternity.",
      elements: ["Tricolor of red, white, blue", "Obverse: National Coat of Arms with May Star", "Reverse: Treasury Seal with Lion and Cap of Liberty"],
      colors: [
        { name: "Patriot Red", colorClass: "bg-red-600 text-white", symbol: "Patriotism, courage, equality, and justice" },
        { name: "Peace White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Purity, unity, and peace" },
        { name: "Liberty Blue", colorClass: "bg-blue-600 text-white", symbol: "Truth, liberty, and clear skies" }
      ]
    },
    location: {
      region: "Central South America",
      coordinatesText: "23°26′ S, 58°26′ W",
      neighbors: "Bordered by Argentina to the south and southwest, Brazil to the east and northeast, and Bolivia to the northwest.",
      surroundingWaters: ["Paraguay River", "Paraná River (Inland Riverways)"],
      adjacentCountries: [
        { name: "Argentina", flagUrl: "https://flagcdn.com/w160/ar.png", lat: -34.6037, lng: -58.3816, relationship: "South & Southwest border" },
        { name: "Brazil", flagUrl: "https://flagcdn.com/w160/br.png", lat: -15.7975, lng: -47.8919, relationship: "East & Northeast border" },
        { name: "Bolivia", flagUrl: "https://flagcdn.com/w160/bo.png", lat: -16.5000, lng: -68.1500, relationship: "Northwest border" }
      ]
    },
    color: "bg-red-500",
    geo: { lat: -23.4425, lng: -58.4438, zoom: 6, capitalCoords: { lat: -25.2637, lng: -57.5759 } }
  },
  {
    id: "pe",
    iso2: "pe",
    name: "Peru",
    officialName: "Republic of Peru",
    capital: "Lima",
    population: "34.3 Million",
    languages: ["Spanish", "Quechua", "Aymara"],
    currency: "Peruvian Sol (S/.)",
    flagUrl: "https://flagcdn.com/w320/pe.png",
    uniqueness: "Heart of the ancient Incan Empire; home to the legendary Machu Picchu citadel, Rainbow Mountain, and mysterious Nazca Lines.",
    recordFact: "Peru is home to over 4,000 native varieties of edible potatoes and the deepest canyons on Earth (Cotahuasi and Colca).",
    description: "Peru encompasses coastal deserts, towering snow-capped Andes mountains, and dense Amazonian rainforest. Its ancient civilizations left behind architectural marvels like Sacsayhuamán and Machu Picchu.",
    interestingFacts: [
      "Machu Picchu was built without mortar; the stones fit together so tightly that a knife blade cannot slip between them.",
      "Vinicunca (Rainbow Mountain) gets its vivid multi-colored stripes from unique mineral weathering over millions of years.",
      "The giant Nazca Lines etched into the desert can only be fully appreciated from the air.",
      "Peruvian gastronomy is celebrated worldwide for dishes like ceviche, lomo saltado, and quinoa."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The ancient Incan citadel of Machu Picchu nestled high in the Andean cloud forest",
    flagMeaning: {
      story: "General José de San Martín was inspired to choose red and white after seeing a flock of red-and-white parihuanas (flamingos) take flight upon his arrival in Peru in 1820.",
      elements: ["Vertical triband of red, white, and red", "National coat of arms with a vicuña, cinchona tree, and cornucopia of gold coins"],
      colors: [
        { name: "Vibrant Red", colorClass: "bg-red-600 text-white", symbol: "The blood of heroes shed for independence" },
        { name: "Pristine White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Peace, purity, and justice" }
      ]
    },
    location: {
      region: "Western South America",
      coordinatesText: "9°11′ S, 75°0′ W",
      neighbors: "Bordered by Ecuador and Colombia to the north, Brazil to the east, Bolivia to the southeast, Chile to the south, and the Pacific Ocean to the west.",
      surroundingWaters: ["South Pacific Ocean", "Lake Titicaca", "Amazon River Headwaters"],
      adjacentCountries: [
        { name: "Ecuador", flagUrl: "https://flagcdn.com/w160/ec.png", lat: -0.1807, lng: -78.4678, relationship: "Northwest border" },
        { name: "Colombia", flagUrl: "https://flagcdn.com/w160/co.png", lat: 4.7110, lng: -74.0721, relationship: "Northeast border" },
        { name: "Brazil", flagUrl: "https://flagcdn.com/w160/br.png", lat: -15.7975, lng: -47.8919, relationship: "East border" },
        { name: "Bolivia", flagUrl: "https://flagcdn.com/w160/bo.png", lat: -16.5000, lng: -68.1500, relationship: "Southeast border" },
        { name: "Chile", flagUrl: "https://flagcdn.com/w160/cl.png", lat: -33.4489, lng: -70.6693, relationship: "South border" }
      ]
    },
    color: "bg-red-500",
    geo: { lat: -9.1900, lng: -75.0152, zoom: 5, capitalCoords: { lat: -12.0464, lng: -77.0428 } }
  },
  {
    id: "sr",
    iso2: "sr",
    name: "Suriname",
    officialName: "Republic of Suriname",
    capital: "Paramaribo",
    population: "620 Thousand",
    languages: ["Dutch", "Sranan Tongo", "Hindustani", "Javanese"],
    currency: "Surinamese Dollar (Sr$)",
    flagUrl: "https://flagcdn.com/w320/sr.png",
    uniqueness: "Smallest sovereign country in South America; covered 93% by dense untouched rainforest with zero net carbon footprint.",
    recordFact: "Suriname has the highest forest cover percentage of any independent country on Earth (over 93% of land area).",
    description: "Suriname is a culturally diverse South American nation on the Atlantic coast, known for Dutch colonial wooden architecture, Maroon and indigenous heritage, and wildlife reserves.",
    interestingFacts: [
      "In Paramaribo, a historic synagogue and a mosque stand right next to each other in harmonious peace.",
      "Suriname is the only nation outside Europe where Dutch is the primary official spoken language.",
      "Central Suriname Nature Reserve is a UNESCO site covering 1.6 million hectares of pristine tropical rainforest.",
      "The country celebrates Diwali, Keti Koti, Eid, and Christmas as major national holidays."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Historic wooden Dutch colonial architecture in Paramaribo, Suriname",
    flagMeaning: {
      story: "Adopted in 1975 upon independence from the Netherlands, representing unity, hope, and hard work.",
      elements: ["Five horizontal stripes of green, white, red, white, green", "Large golden five-pointed star in the center"],
      colors: [
        { name: "Forest Green", colorClass: "bg-emerald-600 text-white", symbol: "Fertility of the land and abundant forests" },
        { name: "Pure White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Justice, freedom, and human rights" },
        { name: "Progress Red", colorClass: "bg-red-600 text-white", symbol: "Progress and the struggle for a better life" },
        { name: "Golden Star", colorClass: "bg-amber-400 text-slate-900", symbol: "Unity of all ethnic groups that make up Suriname" }
      ]
    },
    location: {
      region: "Northern South America / Guianas",
      coordinatesText: "3°55′ N, 56°01′ W",
      neighbors: "Bordered by French Guiana to the east, Guyana to the west, Brazil to the south, and the Atlantic Ocean to the north.",
      surroundingWaters: ["Atlantic Ocean", "Suriname River", "Coppename River"],
      adjacentCountries: [
        { name: "Guyana", flagUrl: "https://flagcdn.com/w160/gy.png", lat: 6.8013, lng: -58.1551, relationship: "West border" },
        { name: "Brazil", flagUrl: "https://flagcdn.com/w160/br.png", lat: -15.7975, lng: -47.8919, relationship: "South border" }
      ]
    },
    color: "bg-green-500",
    geo: { lat: 3.9193, lng: -56.0278, zoom: 6, capitalCoords: { lat: 5.8520, lng: -55.2038 } }
  },
  {
    id: "uy",
    iso2: "uy",
    name: "Uruguay",
    officialName: "Oriental Republic of Uruguay",
    capital: "Montevideo",
    population: "3.5 Million",
    languages: ["Spanish"],
    currency: "Uruguayan Peso ($)",
    flagUrl: "https://flagcdn.com/w320/uy.png",
    uniqueness: "Hosted and won the very first FIFA World Cup in 1930; gets over 98% of its electricity from renewable energy sources.",
    recordFact: "Uruguay was the world's first country to provide every primary school student with a free laptop computer (Plan Ceibal).",
    description: "Uruguay is a progressive South American nation known for its rolling green interior, beach resorts like Punta del Este, gaucho cowboy traditions, and vibrant Tango music.",
    interestingFacts: [
      "Uruguay has four times more cows and cattle than human citizens!",
      "The first FIFA World Cup in history was held in Montevideo in 1930 at the Estadio Centenario.",
      "Uruguay produces nearly 100% of its electricity from wind, hydro, solar, and biomass.",
      "Candombe is an Afro-Uruguayan drumming rhythm played during the world's longest Carnival season (over 40 days)."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Coastline and historic plazas in Montevideo, Uruguay",
    flagMeaning: {
      story: "Adopted in 1830, modeled after the flags of Argentina and the United States, featuring the Sun of May.",
      elements: ["Nine horizontal alternating stripes of white and blue", "White canton with the golden Sun of May"],
      colors: [
        { name: "Sun of May", colorClass: "bg-amber-400 text-slate-900", symbol: "The May Revolution and freedom" },
        { name: "Blue & White Stripes", colorClass: "bg-blue-600 text-white", symbol: "The nine original departments of Uruguay" }
      ]
    },
    location: {
      region: "Southeastern South America",
      coordinatesText: "32°31′ S, 55°46′ W",
      neighbors: "Bordered by Argentina to the west and southwest, Brazil to the north and northeast, and the Atlantic Ocean to the southeast.",
      surroundingWaters: ["Atlantic Ocean", "Río de la Plata", "Uruguay River"],
      adjacentCountries: [
        { name: "Argentina", flagUrl: "https://flagcdn.com/w160/ar.png", lat: -34.6037, lng: -58.3816, relationship: "West across Uruguay River" },
        { name: "Brazil", flagUrl: "https://flagcdn.com/w160/br.png", lat: -15.7975, lng: -47.8919, relationship: "North & Northeast border" }
      ]
    },
    color: "bg-sky-500",
    geo: { lat: -32.5228, lng: -55.7658, zoom: 6, capitalCoords: { lat: -34.9011, lng: -56.1645 } }
  },
  {
    id: "ve",
    iso2: "ve",
    name: "Venezuela",
    officialName: "Bolivarian Republic of Venezuela",
    capital: "Caracas",
    population: "28.8 Million",
    languages: ["Spanish"],
    currency: "Venezuelan Bolívar (Bs.)",
    flagUrl: "https://flagcdn.com/w320/ve.png",
    uniqueness: "Home to Angel Falls (Salto Ángel), the highest uninterrupted waterfall on Earth plunging 979 meters from a flat-top tepui mountain.",
    recordFact: "Angel Falls drops 979 meters (3,212 feet) from the Auyán-tepui plateau, making it 19 times higher than Niagara Falls.",
    description: "Venezuela is located at the northern tip of South America, featuring the Andes mountains, the Orinoco river basin, the Caribbean coastline, and ancient prehistoric tabletop mountains (tepuis).",
    interestingFacts: [
      "Lake Maracaibo in Venezuela experiences the Catatumbo Lightning phenomenon, generating up to 280 lightning flashes per hour for 300 nights a year!",
      "Venezuela has the largest proven oil reserves in the world.",
      "Mount Roraima, a dramatic flat-top tepui mountain, inspired Sir Arthur Conan Doyle's novel 'The Lost World' and Pixar's movie 'Up'.",
      "Arepas, delicious cornmeal patties stuffed with cheese, meats, and beans, are Venezuela's beloved national staple food."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The dramatic sheer cliffs and cascading falls of Angel Falls in Venezuela",
    flagMeaning: {
      story: "Originally designed by Francisco de Miranda in 1806, updated in 2006 with an eighth star representing the historic Guayana province.",
      elements: ["Horizontal tricolor of yellow, blue, and red", "An arc of eight white five-pointed stars centered in the blue stripe"],
      colors: [
        { name: "Yellow", colorClass: "bg-amber-400 text-slate-900", symbol: "Riches of the land and warm sunshine" },
        { name: "Blue", colorClass: "bg-blue-600 text-white", symbol: "The Caribbean Sea and Atlantic Ocean" },
        { name: "Red", colorClass: "bg-red-600 text-white", symbol: "The blood shed by patriots for national sovereignty" },
        { name: "Eight Stars", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "The eight historic provinces of Venezuela" }
      ]
    },
    location: {
      region: "Northern South America",
      coordinatesText: "6°25′ N, 66°35′ W",
      neighbors: "Bordered by the Caribbean Sea and Atlantic Ocean to the north, Colombia to the west, Brazil to the south, and Guyana to the east.",
      surroundingWaters: ["Caribbean Sea", "North Atlantic Ocean", "Lake Maracaibo", "Orinoco River"],
      adjacentCountries: [
        { name: "Colombia", flagUrl: "https://flagcdn.com/w160/co.png", lat: 4.7110, lng: -74.0721, relationship: "West border" },
        { name: "Brazil", flagUrl: "https://flagcdn.com/w160/br.png", lat: -15.7975, lng: -47.8919, relationship: "South border" },
        { name: "Guyana", flagUrl: "https://flagcdn.com/w160/gy.png", lat: 6.8013, lng: -58.1551, relationship: "East border" }
      ]
    },
    color: "bg-yellow-500",
    geo: { lat: 6.4238, lng: -66.5897, zoom: 5, capitalCoords: { lat: 10.4806, lng: -66.9036 } }
  }
];

export const southAmericaContinent: Continent = {
  id: "south-america",
  name: "South America",
  emoji: "🏔️",
  bgGradient: "from-emerald-600 to-teal-800",
  mapBg: "bg-emerald-100 border-emerald-400",
  borderColor: "border-emerald-400",
  description: "South America is home to the mighty Amazon rainforest, the towering Andes mountains, Machu Picchu, Iguazu Falls, and vibrant Carnival rhythms!",
  countries: southAmericaCountries
};
