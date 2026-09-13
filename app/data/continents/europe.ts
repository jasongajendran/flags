import { Continent, Country } from './types';

export const europeCountries: Country[] = [
  {
    id: "fr",
    iso2: "fr",
    name: "France",
    officialName: "French Republic",
    capital: "Paris",
    population: "68.0 Million",
    languages: ["French"],
    currency: "Euro (€)",
    flagUrl: "https://flagcdn.com/w320/fr.png",
    uniqueness: "Most visited country in the world; home to the Eiffel Tower, the Louvre Museum (world's largest art museum), Champagne, and the Palace of Versailles.",
    recordFact: "Welcomes over 100 million international tourists annually, holding the Guinness World Record as the world's #1 most visited nation.",
    description: "France spans from the Mediterranean Sea to the English Channel and the North Sea, and from the Rhine to the Atlantic Ocean. It is globally famed for gastronomy, haute couture, Impressionist art, and Alpine ski peaks like Mont Blanc.",
    interestingFacts: [
      "The Louvre in Paris is so massive that viewing every artwork for just 30 seconds would take over 100 continuous days!",
      "France produces over 1,500 distinct varieties of registered cheese.",
      "Mont Blanc (4,808 m) in the French Alps is the highest mountain peak in Western Europe.",
      "The Eiffel Tower was originally built as a temporary entrance arch for the 1889 World's Fair."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The iconic Eiffel Tower soaring over the Paris city skyline",
    flagMeaning: {
      story: "The French Tricolore was born during the French Revolution of 1789, combining the historic colors of Paris with royal white.",
      elements: ["Vertical tricolor of blue, white, and red"],
      colors: [
        { name: "Liberty Blue", colorClass: "bg-blue-800 text-white", symbol: "Saint Martin, Paris, and liberty" },
        { name: "Equality White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "The historic royal monarchy and national peace" },
        { name: "Fraternity Red", colorClass: "bg-red-600 text-white", symbol: "Saint Denis, the people of Paris, and fraternity" }
      ]
    },
    location: {
      region: "Western Europe",
      coordinatesText: "46°13′ N, 2°13′ E",
      neighbors: "Bordered by Belgium, Luxembourg, Germany, Switzerland, Italy, Monaco, Spain, and Andorra.",
      surroundingWaters: ["Atlantic Ocean", "English Channel", "Mediterranean Sea", "Bay of Biscay"],
      adjacentCountries: [
        { name: "Germany", flagUrl: "https://flagcdn.com/w160/de.png", lat: 52.5200, lng: 13.4050, relationship: "Northeast border" },
        { name: "Spain", flagUrl: "https://flagcdn.com/w160/es.png", lat: 40.4168, lng: -3.7038, relationship: "South border (Pyrenees)" },
        { name: "Italy", flagUrl: "https://flagcdn.com/w160/it.png", lat: 41.9028, lng: 12.4964, relationship: "Southeast border (Alps)" },
        { name: "United Kingdom", flagUrl: "https://flagcdn.com/w160/gb.png", lat: 51.5074, lng: -0.1278, relationship: "North (across English Channel)" }
      ]
    },
    color: "bg-blue-600",
    geo: { lat: 46.2276, lng: 2.2137, zoom: 5, capitalCoords: { lat: 48.8566, lng: 2.3522 } }
  },
  {
    id: "de",
    iso2: "de",
    name: "Germany",
    officialName: "Federal Republic of Germany",
    capital: "Berlin",
    population: "84.4 Million",
    languages: ["German"],
    currency: "Euro (€)",
    flagUrl: "https://flagcdn.com/w320/de.png",
    uniqueness: "Europe's largest economy; birthplace of the printing press, automobile (Karl Benz), Oktoberfest, and fairy-tale Neuschwanstein Castle.",
    recordFact: "Germany's Autobahn highway network is world-famous for having no federally mandated general speed limit on over half of its routes.",
    description: "Germany sits in the heart of Central Europe, stretching from the sandy North and Baltic Sea beaches down to the Bavarian Alps. It is known for engineering precision, classical music (Bach, Beethoven), and storybook castles.",
    interestingFacts: [
      "Neuschwanstein Castle in the Bavarian Alps directly inspired Walt Disney's iconic Cinderella and Sleeping Beauty castle.",
      "There are over 25,000 historic castles and fortresses scattered throughout Germany.",
      "Gutenberg invented the movable-type printing press in Mainz around 1440, launching the global information revolution.",
      "Oktoberfest in Munich is the largest folk festival on Earth, serving millions of liters of Bavarian beer."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The fairy-tale towers of Neuschwanstein Castle in Bavaria, Germany",
    flagMeaning: {
      story: "The black, red, and gold tricolor originated during the 19th-century German democratic movement and the 1848 Frankfurt Parliament.",
      elements: ["Horizontal tricolor of black, red, and gold"],
      colors: [
        { name: "Black", colorClass: "bg-slate-900 text-white", symbol: "Out of the darkness of servitude..." },
        { name: "Red", colorClass: "bg-red-600 text-white", symbol: "...through bloody battles of freedom..." },
        { name: "Gold", colorClass: "bg-amber-400 text-slate-900", symbol: "...into the golden light of liberty." }
      ]
    },
    location: {
      region: "Central Europe",
      coordinatesText: "51°09′ N, 10°27′ E",
      neighbors: "Bordered by Denmark, Poland, Czech Republic, Austria, Switzerland, France, Luxembourg, Belgium, and the Netherlands.",
      surroundingWaters: ["North Sea", "Baltic Sea"],
      adjacentCountries: [
        { name: "France", flagUrl: "https://flagcdn.com/w160/fr.png", lat: 48.8566, lng: 2.3522, relationship: "West border (Rhine)" },
        { name: "Poland", flagUrl: "https://flagcdn.com/w160/pl.png", lat: 52.2297, lng: 21.0122, relationship: "East border (Oder-Neisse)" },
        { name: "Austria", flagUrl: "https://flagcdn.com/w160/at.png", lat: 48.2082, lng: 16.3738, relationship: "South border (Alps)" },
        { name: "Netherlands", flagUrl: "https://flagcdn.com/w160/nl.png", lat: 52.3676, lng: 4.9041, relationship: "Northwest border" }
      ]
    },
    color: "bg-slate-800",
    geo: { lat: 51.1657, lng: 10.4515, zoom: 6, capitalCoords: { lat: 52.5200, lng: 13.4050 } }
  },
  {
    id: "gb",
    iso2: "gb",
    name: "United Kingdom",
    officialName: "United Kingdom of Great Britain and Northern Ireland",
    capital: "London",
    population: "67.7 Million",
    languages: ["English", "Welsh", "Scottish Gaelic", "Irish"],
    currency: "British Pound Sterling (£)",
    flagUrl: "https://flagcdn.com/w320/gb.png",
    uniqueness: "Birthplace of Shakespeare, the Industrial Revolution, Big Ben, Stonehenge, and Premier League football.",
    recordFact: "The London Underground ('The Tube'), opened in 1863, was the world's very first underground rapid-transit railway.",
    description: "The UK is an island nation made up of England, Scotland, Wales, and Northern Ireland, known for prehistoric Stonehenge, Loch Ness, royal palaces, and global cultural influence.",
    interestingFacts: [
      "Stonehenge in Wiltshire is an ancient prehistoric stone circle erected over 4,500 years ago.",
      "Nowhere in the entire United Kingdom is more than 113 km (70 miles) away from the coastline.",
      "The Queen/King of the UK owns all unmarked mute swans in open waters across England and Wales.",
      "Greenwich in London marks the Prime Meridian (0° Longitude) from which global time zones are measured (GMT/UTC)."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The Elizabeth Tower (Big Ben) and Houses of Parliament in London",
    flagMeaning: {
      story: "The 'Union Jack' blends the patron saint crosses of England (St. George), Scotland (St. Andrew), and Ireland (St. Patrick).",
      elements: ["St. George's red cross on white", "St. Andrew's white saltire on blue", "St. Patrick's red saltire on white"],
      colors: [
        { name: "Union Red", colorClass: "bg-red-600 text-white", symbol: "England and Northern Ireland crosses" },
        { name: "Union Blue", colorClass: "bg-blue-800 text-white", symbol: "Scotland's field of blue" },
        { name: "Purity White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Peace and cross borders" }
      ]
    },
    location: {
      region: "Northwestern Europe",
      coordinatesText: "55°22′ N, 3°26′ W",
      neighbors: "Island nation separated from continental Europe by the English Channel. Shares a land border with Ireland on the island of Ireland.",
      surroundingWaters: ["Atlantic Ocean", "North Sea", "English Channel", "Irish Sea"],
      adjacentCountries: [
        { name: "Ireland", flagUrl: "https://flagcdn.com/w160/ie.png", lat: 53.3498, lng: -6.2603, relationship: "Land border on Irish isle" },
        { name: "France", flagUrl: "https://flagcdn.com/w160/fr.png", lat: 48.8566, lng: 2.3522, relationship: "South across English Channel (Channel Tunnel)" }
      ]
    },
    color: "bg-blue-700",
    geo: { lat: 55.3781, lng: -3.4360, zoom: 5, capitalCoords: { lat: 51.5074, lng: -0.1278 } }
  },
  {
    id: "it",
    iso2: "it",
    name: "Italy",
    officialName: "Italian Republic",
    capital: "Rome",
    population: "58.9 Million",
    languages: ["Italian"],
    currency: "Euro (€)",
    flagUrl: "https://flagcdn.com/w320/it.png",
    uniqueness: "Home to the Colosseum, the Roman Empire, the Renaissance (Da Vinci & Michelangelo), pizza, gelato, and 59 UNESCO World Heritage sites (world #1).",
    recordFact: "Italy contains more UNESCO World Heritage Sites (59) than any other nation on Earth.",
    description: "Shaped like a high-heeled boot kicking into the Mediterranean Sea, Italy encompasses the snow-capped Dolomites, Venetian canals, rolling Tuscan vineyards, and the Amalfi Coast.",
    interestingFacts: [
      "The Colosseum in Rome could hold up to 80,000 spectators for gladiatorial battles 2,000 years ago.",
      "Pizza was invented in Naples in the 18th century, honored with the traditional Margherita pizza matching the Italian flag.",
      "Italy entirely encircles two separate sovereign independent microstates: Vatican City and San Marino.",
      "Venice is built upon 118 small islands linked by over 400 stone bridges across picturesque canals."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The ancient Colosseum standing proudly in Rome, Italy",
    flagMeaning: {
      story: "The Italian Tricolore was inspired by the French tricolor and adopted during the Cispadane Republic in 1797.",
      elements: ["Vertical tricolor of green, white, and red"],
      colors: [
        { name: "Meadow Green", colorClass: "bg-emerald-600 text-white", symbol: "Hope and the verdant plains of the Italian peninsula" },
        { name: "Alpine White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Faith and the snow-capped Alps" },
        { name: "Blood Red", colorClass: "bg-red-600 text-white", symbol: "Charity and blood spilled in wars of independence" }
      ]
    },
    location: {
      region: "Southern Europe / Mediterranean",
      coordinatesText: "41°52′ N, 12°34′ E",
      neighbors: "Bordered by France, Switzerland, Austria, and Slovenia; encloses the enclaves of San Marino and Vatican City.",
      surroundingWaters: ["Mediterranean Sea", "Adriatic Sea", "Tyrrhenian Sea", "Ionian Sea", "Ligurian Sea"],
      adjacentCountries: [
        { name: "Switzerland", flagUrl: "https://flagcdn.com/w160/ch.png", lat: 46.9480, lng: 7.4474, relationship: "North border (Alps)" },
        { name: "France", flagUrl: "https://flagcdn.com/w160/fr.png", lat: 48.8566, lng: 2.3522, relationship: "Northwest border" },
        { name: "Austria", flagUrl: "https://flagcdn.com/w160/at.png", lat: 48.2082, lng: 16.3738, relationship: "Northeast border" },
        { name: "Vatican City", flagUrl: "https://flagcdn.com/w160/va.png", lat: 41.9029, lng: 12.4534, relationship: "Enclave inside Rome" }
      ]
    },
    color: "bg-emerald-600",
    geo: { lat: 41.8719, lng: 12.5674, zoom: 5, capitalCoords: { lat: 41.9028, lng: 12.4964 } }
  },
  {
    id: "es",
    iso2: "es",
    name: "Spain",
    officialName: "Kingdom of Spain",
    capital: "Madrid",
    population: "48.4 Million",
    languages: ["Spanish (Castilian)", "Catalan", "Galician", "Basque"],
    currency: "Euro (€)",
    flagUrl: "https://flagcdn.com/w320/es.png",
    uniqueness: "Home to Antoni Gaudí's Sagrada Família, Flamenco dance, Paella, the Alhambra Palace, and the running of the bulls in Pamplona.",
    recordFact: "La Sagrada Família basilica in Barcelona has been under continuous construction since 1882—longer than the Egyptian Pyramids took to build!",
    description: "Spain occupies most of the Iberian Peninsula, featuring sun-drenched Costa del Sol beaches, Moorish palaces in Andalusia, the Pyrenees mountains, and the Camino de Santiago pilgrimage.",
    interestingFacts: [
      "Spain produces over 40% of the entire world's olive oil, primarily in the sun-drenched groves of Andalusia.",
      "The Alhambra in Granada is one of the most stunning masterpieces of Islamic Moorish architecture in the world.",
      "Madrid is home to Sobrino de Botín, recognized by Guinness as the oldest continuously operating restaurant on Earth (opened 1725).",
      "La Tomatina in Buñol is the world's biggest food fight, where 20,000 people throw 150 tons of overripe tomatoes!"
    ],
    factImageUrl: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The towering spires of Antoni Gaudí's Sagrada Família in Barcelona, Spain",
    flagMeaning: {
      story: "The 'Rojigualda' flag was commissioned by King Charles III in 1785 to make Spanish naval ships easily visible at sea.",
      elements: ["Horizontal triband of red, yellow (double width), red", "Spanish coat of arms featuring the Pillars of Hercules and royal crowns"],
      colors: [
        { name: "Gules Red", colorClass: "bg-red-600 text-white", symbol: "Courage and historic royal banners of Castile and Aragon" },
        { name: "Castilian Gold", colorClass: "bg-amber-400 text-slate-900", symbol: "Warm sunshine and Spanish sovereignty" },
        { name: "Pillars of Hercules", colorClass: "bg-slate-900 text-white", symbol: "Strait of Gibraltar with 'Plus Ultra' (Further Beyond)" }
      ]
    },
    location: {
      region: "Southwestern Europe / Iberian Peninsula",
      coordinatesText: "40°28′ N, 3°45′ W",
      neighbors: "Bordered by Portugal to the west, France and Andorra to the northeast, and Gibraltar and Morocco (across the Strait) to the south.",
      surroundingWaters: ["Mediterranean Sea", "Atlantic Ocean", "Bay of Biscay", "Strait of Gibraltar"],
      adjacentCountries: [
        { name: "Portugal", flagUrl: "https://flagcdn.com/w160/pt.png", lat: 38.7223, lng: -9.1393, relationship: "West border (Iberian Peninsula)" },
        { name: "France", flagUrl: "https://flagcdn.com/w160/fr.png", lat: 48.8566, lng: 2.3522, relationship: "Northeast border (Pyrenees)" },
        { name: "Morocco", flagUrl: "https://flagcdn.com/w160/ma.png", lat: 34.0209, lng: -6.8416, relationship: "South (across Strait of Gibraltar)" }
      ]
    },
    color: "bg-red-600",
    geo: { lat: 40.4637, lng: -3.7492, zoom: 5, capitalCoords: { lat: 40.4168, lng: -3.7038 } }
  },
  {
    id: "ua",
    iso2: "ua",
    name: "Ukraine",
    officialName: "Ukraine",
    capital: "Kyiv",
    population: "38.0 Million",
    languages: ["Ukrainian"],
    currency: "Ukrainian Hryvnia (₴)",
    flagUrl: "https://flagcdn.com/w320/ua.png",
    uniqueness: "Largest country entirely within the continent of Europe; the 'Breadbasket of Europe' with rich fertile black soil; home to golden-domed Saint Sophia Cathedral.",
    recordFact: "Arsenalna metro station in Kyiv is the second deepest subway station in the world, plunging 105.5 meters (346 ft) underground.",
    description: "Ukraine features sprawling golden wheat steppes, the Carpathian Mountains, ancient Cossack heritage, and historic cities like Kyiv and Lviv with centuries of architecture.",
    interestingFacts: [
      "Saint Sophia Cathedral in Kyiv, built in the 11th century, is famous for its 13 golden domes and Byzantine mosaics.",
      "The Tunnel of Love in Klevan is a lush 5-kilometer naturally formed tree-arch railway section.",
      "Pysanka is the ancient Ukrainian art form of hand-waxing intricate colorful patterns onto eggs.",
      "Ukraine holds a quarter of the world's most fertile agricultural 'chernozem' (black earth) soil."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Golden domes of Saint Sophia Cathedral in Kyiv, Ukraine",
    flagMeaning: {
      story: "Adopted in 1918 and restored in 1992, depicting peaceful blue skies over vast golden wheat fields.",
      elements: ["Horizontal bicolor of azure blue and golden yellow"],
      colors: [
        { name: "Azure Blue", colorClass: "bg-sky-500 text-white", symbol: "Clear peaceful skies and streams" },
        { name: "Golden Yellow", colorClass: "bg-amber-400 text-slate-900", symbol: "Vast golden fields of wheat and prosperity" }
      ]
    },
    location: {
      region: "Eastern Europe",
      coordinatesText: "48°22′ N, 31°10′ E",
      neighbors: "Bordered by Russia to the east, Belarus to the north, Poland, Slovakia, and Hungary to the west, and Romania and Moldova to the southwest.",
      surroundingWaters: ["Black Sea", "Sea of Azov"],
      adjacentCountries: [
        { name: "Poland", flagUrl: "https://flagcdn.com/w160/pl.png", lat: 52.2297, lng: 21.0122, relationship: "West border" },
        { name: "Romania", flagUrl: "https://flagcdn.com/w160/ro.png", lat: 44.4268, lng: 26.1025, relationship: "Southwest border" },
        { name: "Moldova", flagUrl: "https://flagcdn.com/w160/md.png", lat: 47.0105, lng: 28.8638, relationship: "Southwest border" }
      ]
    },
    color: "bg-sky-500",
    geo: { lat: 48.3794, lng: 31.1656, zoom: 5, capitalCoords: { lat: 50.4501, lng: 30.5234 } }
  },
  {
    id: "pl",
    iso2: "pl",
    name: "Poland",
    officialName: "Republic of Poland",
    capital: "Warsaw",
    population: "37.7 Million",
    languages: ["Polish"],
    currency: "Polish Złoty (zł)",
    flagUrl: "https://flagcdn.com/w320/pl.png",
    uniqueness: "Birthplace of astronomer Nicolaus Copernicus (who proved the Earth orbits the Sun), Marie Curie, composer Frédéric Chopin, and Wieliczka Salt Mine.",
    recordFact: "Wieliczka Salt Mine features an underground cathedral carved entirely from rock salt, including altars, statues, and chandeliers!",
    description: "Poland connects Western and Eastern Europe, featuring the Tatra Mountains, the Masurian Lake District, the historic royal city of Kraków, and resilient Warsaw.",
    interestingFacts: [
      "Białowieża Forest, shared with Belarus, is the last remaining primeval lowland forest in Europe, home to wild European bison.",
      "Malbork Castle in northern Poland is the largest castle in the world measured by land area.",
      "Pierogi—dumplings stuffed with potatoes, cheese, meat, or berries—are the beloved national comfort food.",
      "Warsaw's historic Old Town was painstakingly reconstructed brick by brick after WWII, earning UNESCO World Heritage status."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Colorful historic merchant houses in Warsaw Old Town, Poland",
    flagMeaning: {
      story: "Adopted in 1919, based on the historical national colors derived from the White Eagle coat of arms on a red shield.",
      elements: ["Horizontal bicolor of white and red"],
      colors: [
        { name: "Pure White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "The historic Polish White Eagle and peace" },
        { name: "Crimson Red", colorClass: "bg-red-600 text-white", symbol: "The red shield of courage and bravery" }
      ]
    },
    location: {
      region: "Central Europe",
      coordinatesText: "51°54′ N, 19°08′ E",
      neighbors: "Bordered by Germany to the west, Czech Republic and Slovakia to the south, Ukraine and Belarus to the east, Lithuania and Russia (Kaliningrad) to the northeast.",
      surroundingWaters: ["Baltic Sea"],
      adjacentCountries: [
        { name: "Germany", flagUrl: "https://flagcdn.com/w160/de.png", lat: 52.5200, lng: 13.4050, relationship: "West border" },
        { name: "Czech Republic", flagUrl: "https://flagcdn.com/w160/cz.png", lat: 50.0755, lng: 14.4378, relationship: "South border" },
        { name: "Ukraine", flagUrl: "https://flagcdn.com/w160/ua.png", lat: 50.4501, lng: 30.5234, relationship: "Southeast border" }
      ]
    },
    color: "bg-red-600",
    geo: { lat: 51.9194, lng: 19.1451, zoom: 6, capitalCoords: { lat: 52.2297, lng: 21.0122 } }
  },
  {
    id: "nl",
    iso2: "nl",
    name: "Netherlands",
    officialName: "Kingdom of the Netherlands",
    capital: "Amsterdam",
    population: "17.9 Million",
    languages: ["Dutch", "Frisian"],
    currency: "Euro (€)",
    flagUrl: "https://flagcdn.com/w320/nl.png",
    uniqueness: "World capital of cycling (more bikes than people!), historic windmills of Kinderdijk, Keukenhof tulip gardens, and the Van Gogh Museum.",
    recordFact: "Over 26% of the Netherlands lies below sea level, protected by the world's most advanced engineering system of dikes, canals, and flood barriers.",
    description: "The Netherlands is a flat, water-bound Northwestern European country celebrated for canal rings in Amsterdam, world-famous masters like Rembrandt and Vermeer, and cheese markets in Gouda.",
    interestingFacts: [
      "There are approximately 23 million bicycles in the Netherlands—substantially more than the entire human population of 18 million!",
      "Keukenhof Gardens plants over 7 million vibrant flower bulbs every single spring, creating a kaleidoscope of colors.",
      "The Port of Rotterdam is the largest deep-water seaport in the entire European continent.",
      "Dutch people are statistically the tallest human population on the planet on average."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Historic wooden windmills reflecting in the canals of Kinderdijk, Netherlands",
    flagMeaning: {
      story: "Dating back to the 16th-century Prince's Flag during the Dutch Revolt led by William of Orange.",
      elements: ["Horizontal tricolor of vermilion red, white, and cobalt blue"],
      colors: [
        { name: "Vermilion Red", colorClass: "bg-red-600 text-white", symbol: "Bravery and national defense (evolved from historic orange)" },
        { name: "Pure White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Peace and religious freedom" },
        { name: "Cobalt Blue", colorClass: "bg-blue-700 text-white", symbol: "The sea and steadfastness" }
      ]
    },
    location: {
      region: "Western Europe",
      coordinatesText: "52°07′ N, 5°18′ E",
      neighbors: "Bordered by Germany to the east and Belgium to the south, with the North Sea to the north and west.",
      surroundingWaters: ["North Sea", "Wadden Sea", "IJsselmeer"],
      adjacentCountries: [
        { name: "Belgium", flagUrl: "https://flagcdn.com/w160/be.png", lat: 50.8503, lng: 4.3517, relationship: "South border" },
        { name: "Germany", flagUrl: "https://flagcdn.com/w160/de.png", lat: 52.5200, lng: 13.4050, relationship: "East border" }
      ]
    },
    color: "bg-orange-500",
    geo: { lat: 52.1326, lng: 5.2913, zoom: 7, capitalCoords: { lat: 52.3676, lng: 4.9041 } }
  },
  {
    id: "ch",
    iso2: "ch",
    name: "Switzerland",
    officialName: "Swiss Confederation",
    capital: "Bern",
    population: "8.9 Million",
    languages: ["German", "French", "Italian", "Romansh"],
    currency: "Swiss Franc (CHF)",
    flagUrl: "https://flagcdn.com/w320/ch.png",
    uniqueness: "Home to the pyramid peak of the Matterhorn, Swiss chocolate, luxury watchmaking, fondue, and historic armed neutrality since 1815.",
    recordFact: "The Matterhorn (4,478 m) is one of the most iconic and photographed mountain summits on Earth, inspiring the shape of Toblerone chocolate!",
    description: "Switzerland is a landlocked Alpine nation known for crystal-clear glacial lakes like Geneva and Lucerne, scenic mountain railways like the Glacier Express, and international humanitarian headquarters (Red Cross, UN).",
    interestingFacts: [
      "Switzerland has four official national languages: German (62%), French (23%), Italian (8%), and Romansh (0.5%).",
      "The Gotthard Base Tunnel beneath the Swiss Alps is the longest railway tunnel in the world at 57.1 kilometers.",
      "Switzerland consumes more chocolate per capita than any other nation (approx. 10 kg per person per year).",
      "The Swiss flag is one of only two square sovereign national flags in the world (along with Vatican City)."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The dramatic pyramid peak of the Matterhorn reflecting in an alpine lake in Switzerland",
    flagMeaning: {
      story: "The white Greek cross on red field dates back to the Battle of Laupen in 1339 as a sign of Swiss confederate unity.",
      elements: ["Square red field", "Bold white equilateral Greek cross in the center"],
      colors: [
        { name: "Confederate Red", colorClass: "bg-red-600 text-white", symbol: "Sovereignty, protection, and freedom" },
        { name: "Swiss White Cross", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Christian heritage and peaceful confederation (inspired the Red Cross symbol)" }
      ]
    },
    location: {
      region: "Central Europe / Alps",
      coordinatesText: "46°49′ N, 8°13′ E",
      neighbors: "Landlocked country bordered by Germany to the north, Austria and Liechtenstein to the east, Italy to the south, and France to the west.",
      surroundingWaters: ["Lake Geneva", "Lake Constance", "Lake Lucerne", "Lake Zurich"],
      adjacentCountries: [
        { name: "France", flagUrl: "https://flagcdn.com/w160/fr.png", lat: 48.8566, lng: 2.3522, relationship: "West border" },
        { name: "Germany", flagUrl: "https://flagcdn.com/w160/de.png", lat: 52.5200, lng: 13.4050, relationship: "North border" },
        { name: "Italy", flagUrl: "https://flagcdn.com/w160/it.png", lat: 41.9028, lng: 12.4964, relationship: "South border" },
        { name: "Austria", flagUrl: "https://flagcdn.com/w160/at.png", lat: 48.2082, lng: 16.3738, relationship: "East border" }
      ]
    },
    color: "bg-red-600",
    geo: { lat: 46.8182, lng: 8.2275, zoom: 7, capitalCoords: { lat: 46.9480, lng: 7.4474 } }
  },
  {
    id: "se",
    iso2: "se",
    name: "Sweden",
    officialName: "Kingdom of Sweden",
    capital: "Stockholm",
    population: "10.5 Million",
    languages: ["Swedish"],
    currency: "Swedish Krona (kr)",
    flagUrl: "https://flagcdn.com/w320/se.png",
    uniqueness: "Home to the Nobel Prizes (Alfred Nobel), IKEA, Spotify, ABBA, the Icehotel in Jukkasjärvi, and the cultural custom of 'Fika' (coffee break).",
    recordFact: "Sweden is home to more than 267,570 islands—the highest number of islands of any country in the world!",
    description: "Sweden is a Nordic country covering pine forests, thousands of coastal archipelago islands, and the northern Arctic wilderness of Lapland where the Aurora Borealis dances across winter skies.",
    interestingFacts: [
      "The Nobel Prizes in Physics, Chemistry, Medicine, Literature, and Economics are awarded in Stockholm every December.",
      "The Icehotel in Jukkasjärvi is built completely from natural ice blocks carved from the Torne River every winter, melting back in spring.",
      "Allemansrätten (Right of Public Access) gives everyone the constitutional right to roam, camp, and forage anywhere in nature.",
      "Stockholm is built across 14 islands connected by 57 bridges, nicknamed the 'Venice of the North'."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Colorful medieval merchant townhouses of Gamla Stan in Stockholm, Sweden",
    flagMeaning: {
      story: "Dating back to the 16th century during the reign of King Gustav I Vasa, based on the Scandinavian Cross.",
      elements: ["Blue field", "Off-center golden-yellow Scandinavian cross"],
      colors: [
        { name: "Nordic Blue", colorClass: "bg-blue-600 text-white", symbol: "Truth, loyalty, and vigilance" },
        { name: "Golden Yellow", colorClass: "bg-amber-400 text-slate-900", symbol: "Generosity and the historic royal coat of arms" }
      ]
    },
    location: {
      region: "Northern Europe / Scandinavia",
      coordinatesText: "60°07′ N, 18°38′ E",
      neighbors: "Bordered by Norway to the west and north, Finland to the east, connected to Denmark via the Öresund Bridge.",
      surroundingWaters: ["Baltic Sea", "Gulf of Bothnia", "Kattegat", "Skagerrak"],
      adjacentCountries: [
        { name: "Norway", flagUrl: "https://flagcdn.com/w160/no.png", lat: 59.9139, lng: 10.7522, relationship: "West border (Scandinavian Mountains)" },
        { name: "Finland", flagUrl: "https://flagcdn.com/w160/fi.png", lat: 60.1699, lng: 24.9384, relationship: "Northeast border" },
        { name: "Denmark", flagUrl: "https://flagcdn.com/w160/dk.png", lat: 55.6761, lng: 12.5683, relationship: "Southwest (Öresund Bridge)" }
      ]
    },
    color: "bg-blue-600",
    geo: { lat: 60.1282, lng: 18.6435, zoom: 4, capitalCoords: { lat: 59.3293, lng: 18.0686 } }
  },
  {
    id: "gr",
    iso2: "gr",
    name: "Greece",
    officialName: "Hellenic Republic",
    capital: "Athens",
    population: "10.4 Million",
    languages: ["Greek"],
    currency: "Euro (€)",
    flagUrl: "https://flagcdn.com/w320/gr.png",
    uniqueness: "Cradle of Western Civilization, democracy, philosophy (Socrates, Plato, Aristotle), theater, the Olympic Games, and the Acropolis of Athens.",
    recordFact: "Athens is one of the world's oldest continuously inhabited cities, with recorded human history spanning over 3,400 years.",
    description: "Greece is situated at the southern tip of the Balkans, featuring thousands of Aegean and Ionian islands like Santorini and Mykonos with whitewashed buildings, ancient temple ruins, and olive groves.",
    interestingFacts: [
      "The Parthenon temple atop the Acropolis was dedicated to the goddess Athena in the 5th century BCE.",
      "The original ancient Olympic Games were held in Olympia every four years starting in 776 BCE.",
      "Santorini's dramatic caldera cliffs were formed by one of the largest volcanic eruptions in recorded human history.",
      "Greece has over 6,000 islands and islets, of which only 227 are inhabited."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Blue-domed whitewashed churches overlooking the caldera in Santorini, Greece",
    flagMeaning: {
      story: "Adopted during the Greek War of Independence in 1822, with nine stripes matching the nine syllables of the battle cry 'Eleftheria i Thanatos' (Freedom or Death).",
      elements: ["Nine alternating blue and white horizontal stripes", "Blue canton with a white Greek cross"],
      colors: [
        { name: "Aegean Blue", colorClass: "bg-blue-600 text-white", symbol: "The sparkling blue Aegean Sea and Greek skies" },
        { name: "Seafoam White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "The purity of the struggle for independence" },
        { name: "Greek Cross", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Eastern Orthodox Christianity" }
      ]
    },
    location: {
      region: "Southern Europe / Balkans",
      coordinatesText: "39°04′ N, 21°49′ E",
      neighbors: "Bordered by Albania, North Macedonia, and Bulgaria to the north, and Turkey to the northeast.",
      surroundingWaters: ["Aegean Sea", "Ionian Sea", "Mediterranean Sea", "Sea of Crete"],
      adjacentCountries: [
        { name: "Turkey", flagUrl: "https://flagcdn.com/w160/tr.png", lat: 39.9334, lng: 32.8597, relationship: "Northeast border & Aegean neighbor" },
        { name: "Albania", flagUrl: "https://flagcdn.com/w160/al.png", lat: 41.3275, lng: 19.8187, relationship: "Northwest border" },
        { name: "Bulgaria", flagUrl: "https://flagcdn.com/w160/bg.png", lat: 42.6977, lng: 23.3219, relationship: "North border" },
        { name: "North Macedonia", flagUrl: "https://flagcdn.com/w160/mk.png", lat: 41.9981, lng: 21.4254, relationship: "North border" }
      ]
    },
    color: "bg-blue-600",
    geo: { lat: 39.0742, lng: 21.8243, zoom: 6, capitalCoords: { lat: 37.9838, lng: 23.7275 } }
  },
  {
    id: "pt",
    iso2: "pt",
    name: "Portugal",
    officialName: "Portuguese Republic",
    capital: "Lisbon",
    population: "10.4 Million",
    languages: ["Portuguese"],
    currency: "Euro (€)",
    flagUrl: "https://flagcdn.com/w320/pt.png",
    uniqueness: "Age of Discovery seafaring pioneers (Vasco da Gama, Magellan), Pastéis de Nata custard tarts, Port wine, Fado music, and the world's biggest surf waves in Nazaré.",
    recordFact: "Nazaré on the Portuguese Atlantic coast holds the world record for the largest wave ever surfed by a human (over 26.2 meters / 86 feet high!).",
    description: "Portugal is the westernmost country of mainland Europe, situated on the Iberian Peninsula. It is renowned for colorful ceramic azulejo tiles, the golden cliffs of the Algarve, and historic Lisbon yellow trams.",
    interestingFacts: [
      "The Livraria Bertrand in Lisbon, founded in 1732, is recognized by Guinness as the oldest operating bookstore in the world.",
      "Portugal produces over 50% of the entire world's cork supply from its protected cork oak forests in the Alentejo.",
      "The Anglo-Portuguese Alliance (Treaty of Windsor, signed in 1386) is the oldest continuous diplomatic alliance in the world still in force.",
      "Pena Palace in Sintra is a romantic fairy-tale yellow and red castle perched high on a misty mountain ridge."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1508672019048-805b876b67e2?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Yellow tram climbing the cobblestone historic hills of Lisbon, Portugal",
    flagMeaning: {
      story: "Adopted in 1911 following the establishment of the Portuguese Republic, replacing royal blue with revolutionary green and red.",
      elements: ["Vertical bicolor of green and red", "Armillary sphere overlaid with the traditional Portuguese coat of arms"],
      colors: [
        { name: "Hope Green", colorClass: "bg-emerald-700 text-white", symbol: "Hope and the future" },
        { name: "Courage Red", colorClass: "bg-red-600 text-white", symbol: "The blood of patriots shed for the nation" },
        { name: "Armillary Sphere", colorClass: "bg-amber-400 text-slate-900", symbol: "The navigation instruments of the Age of Discovery" }
      ]
    },
    location: {
      region: "Southwestern Europe / Iberian Peninsula",
      coordinatesText: "39°33′ N, 8°13′ W",
      neighbors: "Occupies the western Atlantic edge of the Iberian Peninsula, bordered only by Spain to the north and east.",
      surroundingWaters: ["Atlantic Ocean"],
      adjacentCountries: [
        { name: "Spain", flagUrl: "https://flagcdn.com/w160/es.png", lat: 40.4168, lng: -3.7038, relationship: "North and East land border (La Raya)" }
      ]
    },
    color: "bg-emerald-700",
    geo: { lat: 39.3999, lng: -8.2245, zoom: 6, capitalCoords: { lat: 38.7223, lng: -9.1393 } }
  },
  {
    id: "at",
    iso2: "at",
    name: "Austria",
    officialName: "Republic of Austria",
    capital: "Vienna",
    population: "9.1 Million",
    languages: ["German"],
    currency: "Euro (€)",
    flagUrl: "https://flagcdn.com/w320/at.png",
    uniqueness: "Global capital of classical music (Mozart, Strauss, Schubert), imperial Schönbrunn Palace, Alpine ski resorts in Tyrol, and Sachertorte chocolate cake.",
    recordFact: "The Austrian flag is one of the oldest national flags in continuous use in the world, dating back to Duke Leopold V at the Siege of Acre in 1191.",
    description: "Austria is a landlocked Central European Alpine country renowned for Habsburg imperial grand palaces in Vienna, Hallstatt lakeside village, and pristine mountain valleys.",
    interestingFacts: [
      "Vienna has been repeatedly ranked as the city with the highest quality of living in the world.",
      "Schönbrunn Zoo in Vienna, founded in 1752, is the oldest continuously operating zoo in the world.",
      "Hallstatt is an ancient UNESCO village where salt has been mined for over 7,000 years.",
      "The classic musical film 'The Sound of Music' was filmed around the picturesque city and hills of Salzburg."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The idyllic alpine lakeside village of Hallstatt, Austria",
    flagMeaning: {
      story: "According to legend, Duke Leopold V's white tunic was soaked in battle blood except where his sword belt covered it, inspiring the red-white-red pattern.",
      elements: ["Horizontal triband of red, white, red"],
      colors: [
        { name: "Imperial Red", colorClass: "bg-red-600 text-white", symbol: "Bravery, strength, and sovereign heritage" },
        { name: "Danube White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Peace, honesty, and the River Danube" }
      ]
    },
    location: {
      region: "Central Europe / Alps",
      coordinatesText: "47°30′ N, 14°33′ E",
      neighbors: "Landlocked country bordered by Germany, Czech Republic, Slovakia, Hungary, Slovenia, Italy, Switzerland, and Liechtenstein.",
      surroundingWaters: ["Danube River", "Lake Constance", "Lake Neusiedl"],
      adjacentCountries: [
        { name: "Germany", flagUrl: "https://flagcdn.com/w160/de.png", lat: 52.5200, lng: 13.4050, relationship: "Northwest border" },
        { name: "Italy", flagUrl: "https://flagcdn.com/w160/it.png", lat: 41.9028, lng: 12.4964, relationship: "South border" },
        { name: "Switzerland", flagUrl: "https://flagcdn.com/w160/ch.png", lat: 46.9480, lng: 7.4474, relationship: "West border" },
        { name: "Hungary", flagUrl: "https://flagcdn.com/w160/hu.png", lat: 47.4979, lng: 19.0402, relationship: "East border" }
      ]
    },
    color: "bg-red-600",
    geo: { lat: 47.5162, lng: 14.5501, zoom: 7, capitalCoords: { lat: 48.2082, lng: 16.3738 } }
  },
  {
    id: "no",
    iso2: "no",
    name: "Norway",
    officialName: "Kingdom of Norway",
    capital: "Oslo",
    population: "5.5 Million",
    languages: ["Norwegian (Bokmål & Nynorsk)", "Sámi"],
    currency: "Norwegian Krone (kr)",
    flagUrl: "https://flagcdn.com/w320/no.png",
    uniqueness: "Land of the Midnight Sun, breathtaking glacier-carved Fjords (Geirangerfjord & Nærøyfjord), Viking heritage, and the Northern Lights in Tromsø.",
    recordFact: "The Lærdal Tunnel in western Norway is the longest road tunnel in the world, measuring 24.5 kilometers (15.2 miles) in length.",
    description: "Norway spans the western part of the Scandinavian Peninsula, featuring sheer mountain cliffs dropping into blue fjords, the Lofoten Islands, and polar bears on Svalbard.",
    interestingFacts: [
      "During summer in northern Norway, the sun never sets below the horizon for over two months (Midnight Sun).",
      "Norway consistently ranks at the top of the UN Human Development Index and World Happiness Reports.",
      "Modern skiing was pioneered in Norway—the word 'ski' comes from the Old Norse word 'skíð' meaning a split piece of wood.",
      "Svalbard Global Seed Vault stores over 1.2 million backup seed samples inside a permafrost mountain to safeguard world agriculture."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Majestic deep blue fjords and steep cliffs of Geirangerfjord, Norway",
    flagMeaning: {
      story: "Designed in 1821 by Fredrik Meltzer, incorporating the democratic French tricolor colors onto the Scandinavian cross.",
      elements: ["Red field", "Indigo blue Scandinavian cross bordered in white"],
      colors: [
        { name: "Norwegian Red", colorClass: "bg-red-600 text-white", symbol: "Historic union with Denmark" },
        { name: "Indigo Blue", colorClass: "bg-blue-800 text-white", symbol: "Historic union with Sweden and the surrounding sea" },
        { name: "White Border", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Purity and peace" }
      ]
    },
    location: {
      region: "Northern Europe / Scandinavia",
      coordinatesText: "60°28′ N, 8°28′ E",
      neighbors: "Bordered by Sweden to the east, Finland and Russia to the northeast, with the North Sea and Norwegian Sea to the west.",
      surroundingWaters: ["Norwegian Sea", "North Sea", "Barents Sea", "Arctic Ocean"],
      adjacentCountries: [
        { name: "Sweden", flagUrl: "https://flagcdn.com/w160/se.png", lat: 59.3293, lng: 18.0686, relationship: "Long eastern land border" },
        { name: "Finland", flagUrl: "https://flagcdn.com/w160/fi.png", lat: 60.1699, lng: 24.9384, relationship: "Northeast border" },
        { name: "Russia", flagUrl: "https://flagcdn.com/w160/ru.png", lat: 55.7558, lng: 37.6173, relationship: "Far northeast Arctic border" }
      ]
    },
    color: "bg-red-600",
    geo: { lat: 60.4720, lng: 8.4689, zoom: 4, capitalCoords: { lat: 59.9139, lng: 10.7522 } }
  },
  {
    id: "ie",
    iso2: "ie",
    name: "Ireland",
    officialName: "Republic of Ireland",
    capital: "Dublin",
    population: "5.1 Million",
    languages: ["Irish (Gaeilge)", "English"],
    currency: "Euro (€)",
    flagUrl: "https://flagcdn.com/w320/ie.png",
    uniqueness: "Known as the 'Emerald Isle'; home to the dramatic 214-meter Cliffs of Moher, Trinity College Book of Kells, Guinness stout, and traditional Irish folk music.",
    recordFact: "The Cliffs of Moher rise vertically over 214 meters (702 feet) straight out of the roaring Atlantic Ocean in County Clare.",
    description: "Ireland is an island on the northwestern edge of Europe, famed for 40 shades of green rolling pastures, ancient megalithic tombs like Newgrange (older than Stonehenge and the Pyramids), and cozy pub culture.",
    interestingFacts: [
      "Newgrange tomb in County Meath was built around 3200 BCE, perfectly aligned to illuminate its inner chamber at winter solstice sunrise.",
      "Halloween originated in ancient Ireland from the Celtic harvest festival of Samhain over 2,000 years ago.",
      "The national symbol of Ireland is the Celtic Harp—the only sovereign nation in the world with a musical instrument as its national emblem!",
      "The Book of Kells, housed at Trinity College Dublin, is an illuminated manuscript of the four Gospels masterfully illustrated in 800 CE."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The dramatic sheer green sea cliffs of the Cliffs of Moher, Ireland",
    flagMeaning: {
      story: "Presented in 1848 by French women sympathetic to Irish independence, symbolizing lasting peace between Catholics and Protestants.",
      elements: ["Vertical tricolor of green, white, and orange"],
      colors: [
        { name: "Emerald Green", colorClass: "bg-emerald-600 text-white", symbol: "The Gaelic tradition and Catholic population" },
        { name: "Truce White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Lasting peace and truce between the two communities" },
        { name: "Protestant Orange", colorClass: "bg-orange-500 text-white", symbol: "Supporters of William of Orange and Protestant population" }
      ]
    },
    location: {
      region: "Northwestern Europe",
      coordinatesText: "53°24′ N, 7°41′ W",
      neighbors: "Occupies five-sixths of the island of Ireland, sharing a land border with Northern Ireland (UK) to the northeast.",
      surroundingWaters: ["Atlantic Ocean", "Irish Sea", "Celtic Sea", "Saint George's Channel"],
      adjacentCountries: [
        { name: "United Kingdom (Northern Ireland)", flagUrl: "https://flagcdn.com/w160/gb.png", lat: 54.5973, lng: -5.9301, relationship: "Northeast land border" }
      ]
    },
    color: "bg-emerald-600",
    geo: { lat: 53.1424, lng: -7.6921, zoom: 6, capitalCoords: { lat: 53.3498, lng: -6.2603 } }
  },
  {
    id: "be",
    iso2: "be",
    name: "Belgium",
    officialName: "Kingdom of Belgium",
    capital: "Brussels",
    population: "11.7 Million",
    languages: ["Dutch", "French", "German"],
    currency: "Euro (€)",
    flagUrl: "https://flagcdn.com/w320/be.png",
    uniqueness: "Headquarters of the European Union and NATO; world capital of artisan chocolate, Belgian waffles, abbey beers, and Tintin comic books.",
    recordFact: "Produces over 220,000 tons of high-grade chocolate per year, with Brussels Airport being the single largest chocolate selling shop on Earth.",
    description: "Belgium sits at the crossroads of Germanic and Latin Europe, divided into Dutch-speaking Flanders in the north and French-speaking Wallonia in the south, featuring medieval canal cities like Bruges and Ghent.",
    interestingFacts: [
      "The Grand-Place in Brussels is widely considered one of the most ornate and beautiful central squares in Europe.",
      "Bruges is a fairy-tale medieval city linked by swans, cobbled alleys, and quiet canals, preserved since the Middle Ages.",
      "Belgian comic artists created world-famous characters including Tintin, The Smurfs, and Lucky Luke.",
      "Belgium has over 1,500 distinct traditional beer styles brewed according to centuries-old monastic recipes."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The golden guildhalls of Grand-Place in Brussels, Belgium",
    flagMeaning: {
      story: "Adopted in 1831 after the Belgian Revolution against Dutch rule, based on the coat of arms of the Duchy of Brabant.",
      elements: ["Vertical tricolor of black, yellow, and red"],
      colors: [
        { name: "Black", colorClass: "bg-slate-900 text-white", symbol: "The black shield of the lion of Brabant" },
        { name: "Yellow", colorClass: "bg-amber-400 text-slate-900", symbol: "The golden lion of Brabant" },
        { name: "Red", colorClass: "bg-red-600 text-white", symbol: "The red tongue and claws of the lion" }
      ]
    },
    location: {
      region: "Western Europe",
      coordinatesText: "50°50′ N, 4°20′ E",
      neighbors: "Bordered by the Netherlands to the north, Germany to the east, Luxembourg to the southeast, and France to the southwest.",
      surroundingWaters: ["North Sea"],
      adjacentCountries: [
        { name: "France", flagUrl: "https://flagcdn.com/w160/fr.png", lat: 48.8566, lng: 2.3522, relationship: "Southwest border" },
        { name: "Netherlands", flagUrl: "https://flagcdn.com/w160/nl.png", lat: 52.3676, lng: 4.9041, relationship: "North border" },
        { name: "Germany", flagUrl: "https://flagcdn.com/w160/de.png", lat: 52.5200, lng: 13.4050, relationship: "East border" },
        { name: "Luxembourg", flagUrl: "https://flagcdn.com/w160/lu.png", lat: 49.6116, lng: 6.1319, relationship: "Southeast border" }
      ]
    },
    color: "bg-amber-500",
    geo: { lat: 50.5039, lng: 4.4699, zoom: 7, capitalCoords: { lat: 50.8503, lng: 4.3517 } }
  },
  {
    id: "va",
    iso2: "va",
    name: "Vatican City",
    officialName: "Vatican City State",
    capital: "Vatican City",
    population: "764 People",
    languages: ["Italian", "Latin"],
    currency: "Euro (€)",
    flagUrl: "https://flagcdn.com/w320/va.png",
    uniqueness: "Smallest sovereign country in the world by both area (0.49 sq km) and population; spiritual headquarters of the Catholic Church and home to the Sistine Chapel.",
    recordFact: "The entire country occupies less than half a square kilometer (121 acres), fitting comfortably inside the city of Rome.",
    description: "Vatican City is an independent city-state enclave entirely surrounded by Rome, Italy. Governed by the Bishop of Rome (the Pope), it contains Saint Peter's Basilica, the Vatican Museums, and Michelangelo's painted ceiling in the Sistine Chapel.",
    interestingFacts: [
      "Michelangelo spent four years on high wooden scaffolds painting the iconic Genesis ceiling of the Sistine Chapel (1508–1512).",
      "St. Peter's Basilica is the largest church interior on Earth, capable of accommodating over 60,000 worshipers.",
      "The Pontifical Swiss Guard, established in 1506, wears colorful striped Renaissance uniforms and protects the Pope.",
      "Vatican City has its own post office, railway station, radio station, pharmacy, and mints its own collectible Euro coins."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Saint Peter's Square and the monumental basilica dome in Vatican City",
    flagMeaning: {
      story: "Adopted in 1929 under the Lateran Treaty signed with Italy, recognizing the sovereignty of the Holy See.",
      elements: ["Square vertical bicolor of yellow and white", "White half bears the Papal Tiara and crossed Keys of Saint Peter tied with a red cord"],
      colors: [
        { name: "Papal Gold", colorClass: "bg-amber-400 text-slate-900", symbol: "Spiritual authority and the keys of Heaven" },
        { name: "Pure White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Purity and earthly papal jurisdiction" },
        { name: "Keys of Heaven", colorClass: "bg-amber-500 text-slate-900", symbol: "Christ's promise to the Apostle Peter (Matthew 16:19)" }
      ]
    },
    location: {
      region: "Southern Europe / Enclave in Rome",
      coordinatesText: "41°54′ N, 12°27′ E",
      neighbors: "Entirely surrounded by the city of Rome, Italy (3.2 km border wall).",
      surroundingWaters: ["Tiber River (nearby in Rome)"],
      adjacentCountries: [
        { name: "Italy", flagUrl: "https://flagcdn.com/w160/it.png", lat: 41.9028, lng: 12.4964, relationship: "Entirely surrounds Vatican City" }
      ]
    },
    color: "bg-amber-400",
    geo: { lat: 41.9029, lng: 12.4534, zoom: 15, capitalCoords: { lat: 41.9029, lng: 12.4534 } }
  },
  {
    id: "ee",
    iso2: "ee",
    name: "Estonia",
    officialName: "Republic of Estonia",
    capital: "Tallinn",
    population: "1.3 Million",
    languages: ["Estonian"],
    currency: "Euro (€)",
    flagUrl: "https://flagcdn.com/w320/ee.png",
    uniqueness: "Known as e-Estonia, it is the world's most digital society with nationwide e-voting and 99% of public services online.",
    recordFact: "Birthplace of Skype and world leader in digital governance.",
    description: "Estonia is a Northern European nation bordering the Baltic Sea and Gulf of Finland. It encompasses over 2,000 islands, vast pine forests, and well-preserved medieval towns.",
    interestingFacts: [
      "Estonia was the first country in the world to implement online voting in general elections.",
      "Forests cover over 50% of Estonia's total land area, hosting brown bears, lynxes, and wolves.",
      "Tallinn's Old Town is one of Europe's best-preserved medieval Hansa trading cities, listed as a UNESCO World Heritage site."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Tallinn medieval old town and coastal towers",
    flagMeaning: {
      story: "Adopted in 1918, the Estonian blue-black-white tricolor reflects the country's sky, fertile soil, winter snow, and independence spirit.",
      elements: ["Horizontal tricolor of blue, black, and white"],
      colors: [
        { name: "Sky Blue", colorClass: "bg-sky-600 text-white", symbol: "The Estonian sky, Baltic Sea, and national freedom" },
        { name: "Fertile Black", colorClass: "bg-slate-900 text-white border border-slate-700", symbol: "The native soil and past historic struggles" },
        { name: "Pure White", colorClass: "bg-white text-slate-950 border border-slate-300", symbol: "Winter snow, hope, and a bright future" }
      ]
    },
    location: {
      region: "Northern Europe",
      coordinatesText: "58.5953° N, 25.0136° E",
      neighbors: "Bordered by Latvia to the south and Russia to the east.",
      surroundingWaters: ["Baltic Sea", "Gulf of Finland", "Gulf of Riga"],
      adjacentCountries: [
        { name: "Latvia", flagUrl: "https://flagcdn.com/w160/lv.png", lat: 56.95, lng: 24.1, relationship: "South Border" },
        { name: "Russia", flagUrl: "https://flagcdn.com/w160/ru.png", lat: 59.2, lng: 28.0, relationship: "East Border" }
      ]
    },
    color: "bg-sky-600",
    geo: { lat: 58.6, lng: 25.0, zoom: 7, capitalCoords: { lat: 59.4370, lng: 24.7535 } }
  },
  {
    id: "al",
    iso2: "al",
    name: "Albania",
    officialName: "Republic of Albania",
    capital: "Tirana",
    population: "2.8 Million",
    languages: ["Albanian"],
    currency: "Albanian Lek (ALL)",
    flagUrl: "https://flagcdn.com/w320/al.png",
    uniqueness: "Known as the Land of the Eagles, featuring over 173,000 historic concrete dome bunkers across its terrain.",
    recordFact: "Features over 300 sunny days annually along the Albanian Riviera.",
    description: "Albania is a Balkan nation on the Adriatic and Ionian seas, known for rugged mountain ranges, ancient Illyrian castles, and UNESCO-listed Ottoman heritage.",
    interestingFacts: [
      "Between the 1960s and 1980s, over 173,000 concrete dome bunkers were constructed across the country.",
      "Mother Teresa, celebrated Nobel Peace Prize laureate, was ethnically Albanian.",
      "Home to Butrint National Park, an ancient UNESCO World Heritage site with Greek, Roman, and Venetian ruins.",
      "The historic towns of Berat and Gjirokastër are famous for their remarkably preserved Ottoman stone architecture."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The historic city of Berat, known as the City of a Thousand Windows",
    flagMeaning: {
      story: "Adopted in 1912 upon independence, the flag features a black double-headed eagle symbolizing the 15th-century national hero Skanderbeg on a field of red.",
      elements: ["Black double-headed eagle", "Red field"],
      colors: [
        { name: "Blood Red", colorClass: "bg-red-700 text-white", symbol: "Bravery, strength, and the historic defense of freedom" },
        { name: "Eagle Black", colorClass: "bg-slate-950 text-white border border-slate-700", symbol: "The sovereign double-headed eagle of Gjergj Kastrioti Skanderbeg" }
      ]
    },
    location: {
      region: "Southern Europe",
      coordinatesText: "41°19′ N, 19°49′ E",
      neighbors: "Bordered by Montenegro to the northwest, Kosovo to the northeast, North Macedonia to the east, and Greece to the south.",
      surroundingWaters: ["Adriatic Sea", "Ionian Sea", "Mediterranean Sea"],
      adjacentCountries: [
        { name: "Montenegro", flagUrl: "https://flagcdn.com/w160/me.png", lat: 42.44, lng: 19.26, relationship: "Northwest Border" },
        { name: "North Macedonia", flagUrl: "https://flagcdn.com/w160/mk.png", lat: 41.99, lng: 21.43, relationship: "East Border" },
        { name: "Greece", flagUrl: "https://flagcdn.com/w160/gr.png", lat: 39.66, lng: 20.85, relationship: "South Border" }
      ]
    },
    color: "bg-red-700",
    geo: { lat: 41.1533, lng: 20.1683, zoom: 7, capitalCoords: { lat: 41.3275, lng: 19.8187 } }
  }
];

export const europeContinent: Continent = {
  id: "europe",
  name: "Europe",
  emoji: "🏰",
  bgGradient: "from-blue-700 to-indigo-900",
  mapBg: "bg-blue-50 border-blue-300",
  borderColor: "border-blue-400",
  description: "Europe is steeped in classical history, royal palaces, Renaissance masterpieces, Alpine peaks, and vibrant Mediterranean coasts!",
  countries: europeCountries
};
