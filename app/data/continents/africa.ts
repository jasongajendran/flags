import { Continent, Country } from './types';

export const africaCountries: Country[] = [
  {
    id: "eg",
    iso2: "eg",
    name: "Egypt",
    officialName: "Arab Republic of Egypt",
    capital: "Cairo",
    population: "112.7 Million",
    languages: ["Arabic"],
    currency: "Egyptian Pound (E£)",
    flagUrl: "https://flagcdn.com/w320/eg.png",
    uniqueness: "Cradle of ancient pharaohs; home to the Great Pyramids of Giza and Sphinx (only surviving Ancient Wonder), the Nile River, and the Suez Canal.",
    recordFact: "The Great Pyramid of Khufu in Giza was the tallest man-made structure on Earth for more than 3,800 years.",
    description: "Egypt is a transcontinental nation linking northeast Africa with the Middle East via the Sinai Peninsula. It is defined by the life-giving Nile River valley, ancient hieroglyphic temples in Luxor and Karnak, and Red Sea coral reefs in Sharm El Sheikh.",
    interestingFacts: [
      "The Great Pyramid of Giza was built with approximately 2.3 million massive limestone and granite blocks.",
      "The Nile River is the longest river in Africa (approx. 6,650 km), flowing north into the Mediterranean Sea.",
      "Ancient Egyptians invented hieroglyphic writing, 365-day solar calendars, papyrus paper, and black eye kohl.",
      "The Suez Canal, opened in 1869, connects the Mediterranean Sea to the Red Sea, handling ~12% of global maritime trade."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The ancient Great Pyramids of Giza and the Sphinx rising from the desert sands in Egypt",
    flagMeaning: {
      story: "Adopted in 1984, the flag features the historic Pan-Arab tricolor with the golden Eagle of Saladin in the center.",
      elements: ["Horizontal tricolor of red, white, and black", "Golden Eagle of Saladin on the white stripe"],
      colors: [
        { name: "Revolution Red", colorClass: "bg-red-600 text-white", symbol: "The period before the 1952 revolution and sacrifice of martyrs" },
        { name: "Purity White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "The bloodless nature of the 1952 revolution and a peaceful future" },
        { name: "Darkness Black", colorClass: "bg-slate-900 text-white", symbol: "The end of foreign occupation and dark oppression" },
        { name: "Eagle of Saladin", colorClass: "bg-amber-400 text-slate-900", symbol: "Arab unity, strength, and sovereign power" }
      ]
    },
    location: {
      region: "North Africa / Middle East",
      coordinatesText: "26°49′ N, 29°51′ E",
      neighbors: "Bordered by Libya to the west, Sudan to the south, and Israel / Palestine (Gaza) to the northeast.",
      surroundingWaters: ["Mediterranean Sea", "Red Sea", "Gulf of Suez", "Gulf of Aqaba", "Nile River"],
      adjacentCountries: [
        { name: "Sudan", flagUrl: "https://flagcdn.com/w160/sd.png", lat: 15.5007, lng: 32.5599, relationship: "South border" },
        { name: "Libya", flagUrl: "https://flagcdn.com/w160/ly.png", lat: 32.8872, lng: 13.1913, relationship: "West border" },
        { name: "Saudi Arabia", flagUrl: "https://flagcdn.com/w160/sa.png", lat: 24.7136, lng: 46.6753, relationship: "East across Red Sea" }
      ]
    },
    color: "bg-amber-500",
    geo: { lat: 26.8206, lng: 30.8025, zoom: 5, capitalCoords: { lat: 30.0444, lng: 31.2357 } }
  },
  {
    id: "ng",
    iso2: "ng",
    name: "Nigeria",
    officialName: "Federal Republic of Nigeria",
    capital: "Abuja",
    population: "223.8 Million",
    languages: ["English", "Hausa", "Yoruba", "Igbo"],
    currency: "Nigerian Naira (₦)",
    flagUrl: "https://flagcdn.com/w320/ng.png",
    uniqueness: "The 'Giant of Africa'; most populous country in Africa; global leader in Afrobeats music (Burna Boy, Wizkid), Nollywood cinema, and rich ancestral cultures.",
    recordFact: "Nollywood produces over 2,500 movies every year, ranking as the second-largest film production industry in the world by volume.",
    description: "Nigeria is a dynamic West African powerhouse spanning from the Sahel desert in the north to tropical mangrove swamps along the Gulf of Guinea, home to over 250 distinct ethnic groups.",
    interestingFacts: [
      "Nigeria is the most populous black nation on Earth, with 1 out of every 5 people in Sub-Saharan Africa being Nigerian.",
      "Afrobeats originated in Nigeria and has become a dominant global musical phenomenon.",
      "The ancient Benin Bronzes represent some of the highest achievements in historic bronze and brass metal casting.",
      "Zuma Rock near Abuja is a massive natural monolithic granite rock rising 725 meters above the surrounding plateau."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Lagos lagoon waterfront and modern skyline in Nigeria",
    flagMeaning: {
      story: "Designed in 1959 by Taiwo Akinkunmi, a 23-year-old engineering student studying in London.",
      elements: ["Vertical triband of green, white, and green"],
      colors: [
        { name: "Agriculture Green", colorClass: "bg-emerald-600 text-white", symbol: "Nigeria's fertile agricultural wealth and natural resources" },
        { name: "Unity White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Peace, unity, and harmony across the nation" }
      ]
    },
    location: {
      region: "West Africa / Gulf of Guinea",
      coordinatesText: "9°04′ N, 7°29′ E",
      neighbors: "Bordered by Niger to the north, Chad to the northeast, Cameroon to the east, and Benin to the west, with the Atlantic Ocean to the south.",
      surroundingWaters: ["Gulf of Guinea", "Atlantic Ocean", "Niger River", "Benue River", "Lake Chad"],
      adjacentCountries: [
        { name: "Benin", flagUrl: "https://flagcdn.com/w160/bj.png", lat: 6.4969, lng: 2.6289, relationship: "West border" },
        { name: "Cameroon", flagUrl: "https://flagcdn.com/w160/cm.png", lat: 3.8480, lng: 11.5021, relationship: "East border" },
        { name: "Niger", flagUrl: "https://flagcdn.com/w160/ne.png", lat: 13.5116, lng: 2.1254, relationship: "North border" },
        { name: "Chad", flagUrl: "https://flagcdn.com/w160/td.png", lat: 12.1348, lng: 15.0557, relationship: "Northeast border (Lake Chad)" }
      ]
    },
    color: "bg-emerald-600",
    geo: { lat: 9.0820, lng: 8.6753, zoom: 6, capitalCoords: { lat: 9.0765, lng: 7.3986 } }
  },
  {
    id: "za",
    iso2: "za",
    name: "South Africa",
    officialName: "Republic of South Africa",
    capital: "Pretoria (Exec), Cape Town (Legis), Bloemfontein (Judic)",
    population: "60.4 Million",
    languages: ["Zulu", "Xhosa", "Afrikaans", "English", "12 Official Languages"],
    currency: "South African Rand (R)",
    flagUrl: "https://flagcdn.com/w320/za.png",
    uniqueness: "Known as the 'Rainbow Nation'; home to Table Mountain, the Big Five wildlife in Kruger National Park, Cape of Good Hope, and Nelson Mandela's legacy.",
    recordFact: "South Africa is the only sovereign country in the world with three official national capital cities (Pretoria, Cape Town, and Bloemfontein).",
    description: "South Africa occupies the southern tip of the African continent, where the Atlantic and Indian Oceans meet. It is celebrated for dramatic coastal drives along Chapman's Peak, the Drakensberg mountains, and world-renowned wine valleys in Stellenbosch.",
    interestingFacts: [
      "Table Mountain in Cape Town is one of the oldest mountains on Earth, featuring a flat plateau summit often covered in a cloud 'tablecloth'.",
      "Kruger National Park is one of the largest game reserves in Africa, home to lions, leopards, rhinos, elephants, and Cape buffalo.",
      "The Vredefort Crater in South Africa is the oldest and largest meteorite impact crater identified on Earth (over 2 billion years old).",
      "South Africa has 12 official national languages, recognizing its extraordinary multicultural heritage."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The flat summit of Table Mountain overlooking Cape Town, South Africa",
    flagMeaning: {
      story: "Adopted on April 27, 1994, to celebrate the end of Apartheid and the birth of a multiracial democracy led by Nelson Mandela.",
      elements: ["Horizontal Y-shape (pall) converging in the center", "Six vibrant colors representing the union of all South Africans"],
      colors: [
        { name: "Black, Green & Yellow", colorClass: "bg-emerald-600 text-white", symbol: "Colors of the African National Congress and African heritage" },
        { name: "Red, White & Blue", colorClass: "bg-blue-700 text-white", symbol: "Historic European colors and the flags of the Boer Republics and Britain" },
        { name: "Converging V-Shape", colorClass: "bg-amber-400 text-slate-900", symbol: "Diverse elements coming together in unity" }
      ]
    },
    location: {
      region: "Southern Africa",
      coordinatesText: "30°33′ S, 22°56′ E",
      neighbors: "Bordered by Namibia, Botswana, and Zimbabwe to the north, Mozambique and Eswatini to the northeast; completely encloses the kingdom of Lesotho.",
      surroundingWaters: ["Atlantic Ocean", "Indian Ocean", "Cape of Good Hope", "Cape Agulhas"],
      adjacentCountries: [
        { name: "Namibia", flagUrl: "https://flagcdn.com/w160/na.png", lat: -22.5609, lng: 17.0658, relationship: "Northwest border" },
        { name: "Botswana", flagUrl: "https://flagcdn.com/w160/bw.png", lat: -24.6282, lng: 25.9231, relationship: "North border" },
        { name: "Zimbabwe", flagUrl: "https://flagcdn.com/w160/zw.png", lat: -17.8252, lng: 31.0335, relationship: "Northeast border (Limpopo River)" },
        { name: "Mozambique", flagUrl: "https://flagcdn.com/w160/mz.png", lat: -25.9692, lng: 32.5732, relationship: "Northeast border" }
      ]
    },
    color: "bg-emerald-600",
    geo: { lat: -30.5595, lng: 22.9375, zoom: 5, capitalCoords: { lat: -25.7479, lng: 28.2293 } }
  },
  {
    id: "ke",
    iso2: "ke",
    name: "Kenya",
    officialName: "Republic of Kenya",
    capital: "Nairobi",
    population: "55.1 Million",
    languages: ["Swahili (Kiswahili)", "English"],
    currency: "Kenyan Shilling (KSh)",
    flagUrl: "https://flagcdn.com/w320/ke.png",
    uniqueness: "World capital of long-distance running champions (Eliud Kipchoge), the Great Wildebeest Migration in Maasai Mara, and Mount Kenya.",
    recordFact: "The Maasai Mara annual Great Migration sees over 1.5 million wildebeest and zebras cross crocodile-filled rivers—one of the Seven Natural Wonders of Africa.",
    description: "Kenya straddles the equator in East Africa, spanning from the Indian Ocean port of Mombasa to the Great Rift Valley, savannah safari grasslands, and snow-capped Mount Kenya.",
    interestingFacts: [
      "Eliud Kipchoge of Kenya became the first human in history to run a marathon in under 2 hours (1:59:40 in Vienna, 2019).",
      "Nairobi is the only national capital in the world with a wild game national park where lions roam against a skyscraper backdrop.",
      "The Maasai people are world-renowned for their vibrant red shúkà robes, intricate beadwork, and jumping dance (Adumu).",
      "Lake Turkana in northern Kenya is the world's largest permanent desert lake and largest alkaline lake."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "A majestic lion roaming the golden savannah grasslands of the Maasai Mara, Kenya",
    flagMeaning: {
      story: "Adopted in 1963 upon independence, featuring the traditional Maasai shield and crossed spears defending freedom.",
      elements: ["Horizontal triband of black, red (bordered in white), and green", "Traditional Maasai warrior shield with two crossed white spears in center"],
      colors: [
        { name: "Black", colorClass: "bg-slate-900 text-white", symbol: "The people of the Republic of Kenya" },
        { name: "Red", colorClass: "bg-red-600 text-white", symbol: "The blood shed during the struggle for freedom" },
        { name: "Green", colorClass: "bg-emerald-600 text-white", symbol: "Kenya's rich natural resources and agriculture" },
        { name: "Maasai Shield", colorClass: "bg-amber-700 text-white", symbol: "Defense of freedom and national unity" }
      ]
    },
    location: {
      region: "East Africa",
      coordinatesText: "0°01′ N, 37°54′ E",
      neighbors: "Bordered by South Sudan and Ethiopia to the north, Somalia to the east, Tanzania to the south, and Uganda to the west.",
      surroundingWaters: ["Indian Ocean", "Lake Victoria", "Lake Turkana", "Lake Naivasha"],
      adjacentCountries: [
        { name: "Tanzania", flagUrl: "https://flagcdn.com/w160/tz.png", lat: -6.1630, lng: 35.7516, relationship: "South border" },
        { name: "Uganda", flagUrl: "https://flagcdn.com/w160/ug.png", lat: 0.3476, lng: 32.5825, relationship: "West border" },
        { name: "Ethiopia", flagUrl: "https://flagcdn.com/w160/et.png", lat: 9.0320, lng: 38.7469, relationship: "North border" }
      ]
    },
    color: "bg-emerald-600",
    geo: { lat: -0.0236, lng: 37.9062, zoom: 6, capitalCoords: { lat: -1.2921, lng: 36.8219 } }
  },
  {
    id: "ma",
    iso2: "ma",
    name: "Morocco",
    officialName: "Kingdom of Morocco",
    capital: "Rabat",
    population: "37.8 Million",
    languages: ["Arabic", "Berber (Tamazight)", "French"],
    currency: "Moroccan Dirham (MAD)",
    flagUrl: "https://flagcdn.com/w320/ma.png",
    uniqueness: "Gateway between Africa and Europe; famous for Marrakech souks and medinas, blue-painted Chefchaouen, the Sahara Desert dunes, and aromatic Tagine stew.",
    recordFact: "The University of al-Qarawiyyin in Fez, founded in 859 CE by Fatima al-Fihri, is recognized by UNESCO and Guinness as the oldest continually operating university in the world.",
    description: "Morocco sits in Northwest Africa, bordered by the Atlantic Ocean and the Mediterranean Sea, characterized by the rugged Atlas Mountains, ancient clay kasbahs, and vast Sahara sand dunes in Merzouga.",
    interestingFacts: [
      "Chefchaouen is world-famous as the 'Blue Pearl' of Morocco, where entire mountainside streets and houses are painted vibrant cobalt and sky-blue.",
      "The ancient clay fortified village of Aït Benhaddou has served as a filming location for Gladiator, Game of Thrones, and The Mummy.",
      "Moroccan mint tea, poured from high above into decorative glasses, is the country's national symbol of warm hospitality ('Moroccan Whiskey').",
      "Morocco made historic World Cup history in Qatar 2022 by becoming the first African and Arab nation ever to reach the FIFA World Cup semi-finals!"
    ],
    factImageUrl: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The enchanting blue-painted streets and archways of Chefchaouen, Morocco",
    flagMeaning: {
      story: "Adopted in 1915 under the reign of Sultan Moulay Youssef, the green pentagram star represents the Seal of Solomon.",
      elements: ["Deep red field", "Centered green five-pointed linear star (Seal of Solomon)"],
      colors: [
        { name: "Alaouite Red", colorClass: "bg-red-600 text-white", symbol: "Hardiness, bravery, and the ruling Alaouite dynasty" },
        { name: "Green Pentagram", colorClass: "bg-emerald-600 text-white", symbol: "The Seal of Solomon, wisdom, peace, and the five pillars of Islam" }
      ]
    },
    location: {
      region: "North Africa / Maghreb",
      coordinatesText: "31°47′ N, 7°05′ W",
      neighbors: "Bordered by Algeria to the east, Western Sahara to the south, and separated from Spain by the 14-km Strait of Gibraltar.",
      surroundingWaters: ["Atlantic Ocean", "Mediterranean Sea", "Strait of Gibraltar"],
      adjacentCountries: [
        { name: "Algeria", flagUrl: "https://flagcdn.com/w160/dz.png", lat: 36.7538, lng: 3.0588, relationship: "East border" },
        { name: "Spain", flagUrl: "https://flagcdn.com/w160/es.png", lat: 40.4168, lng: -3.7038, relationship: "North across Strait of Gibraltar (14 km)" }
      ]
    },
    color: "bg-red-600",
    geo: { lat: 31.7917, lng: -7.0926, zoom: 6, capitalCoords: { lat: 34.0209, lng: -6.8416 } }
  },
  {
    id: "tz",
    iso2: "tz",
    name: "Tanzania",
    officialName: "United Republic of Tanzania",
    capital: "Dodoma",
    population: "65.5 Million",
    languages: ["Swahili (Kiswahili)", "English"],
    currency: "Tanzanian Shilling (TSh)",
    flagUrl: "https://flagcdn.com/w320/tz.png",
    uniqueness: "Home to Mount Kilimanjaro (highest peak in Africa, 5,895 m), the Serengeti savannah, Ngorongoro Crater, and the spice island of Zanzibar.",
    recordFact: "Mount Kilimanjaro is the tallest free-standing mountain on planet Earth, rising 5,895 meters above sea level with an equatorial snow-capped peak.",
    description: "Tanzania is an East African wilderness powerhouse renowned for the vast wildlife herds of the Serengeti, the world's largest unbroken volcanic caldera at Ngorongoro, and turquoise Zanzibar beaches.",
    interestingFacts: [
      "Ngorongoro Crater is a 260-square-kilometer volcanic crater that acts as a natural wildlife sanctuary for over 25,000 large animals.",
      "Zanzibar's Stone Town is a historic UNESCO spice trading port known for intricately carved wooden brass doors and clove plantations.",
      "Tanzanite is an exceedingly rare violet-blue gemstone found in only one single 4-kilometer strip of land near Mount Kilimanjaro.",
      "Lake Tanganyika in western Tanzania is the second-deepest and second-oldest freshwater lake in the world."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Mount Kilimanjaro's snow-capped summit rising above the African savannah in Tanzania",
    flagMeaning: {
      story: "Created in 1964 upon the peaceful union of Tanganyika and the island republic of Zanzibar.",
      elements: ["Divided diagonally by a black band with yellow borders", "Upper green triangle and lower blue triangle"],
      colors: [
        { name: "Fertile Green", colorClass: "bg-emerald-600 text-white", symbol: "Natural vegetation and agriculture" },
        { name: "Ocean Blue", colorClass: "bg-sky-500 text-white", symbol: "The Indian Ocean and great lakes" },
        { name: "Black Band", colorClass: "bg-slate-900 text-white", symbol: "The indigenous people of Tanzania" },
        { name: "Golden Edges", colorClass: "bg-amber-400 text-slate-900", symbol: "Rich mineral wealth" }
      ]
    },
    location: {
      region: "East Africa",
      coordinatesText: "6°22′ S, 34°53′ E",
      neighbors: "Bordered by Kenya and Uganda to the north, Rwanda, Burundi, and DRC to the west, and Zambia, Malawi, and Mozambique to the south.",
      surroundingWaters: ["Indian Ocean", "Lake Victoria", "Lake Tanganyika", "Lake Nyasa (Malawi)"],
      adjacentCountries: [
        { name: "Kenya", flagUrl: "https://flagcdn.com/w160/ke.png", lat: -1.2921, lng: 36.8219, relationship: "North border" },
        { name: "Uganda", flagUrl: "https://flagcdn.com/w160/ug.png", lat: 0.3476, lng: 32.5825, relationship: "Northwest border" },
        { name: "Mozambique", flagUrl: "https://flagcdn.com/w160/mz.png", lat: -25.9692, lng: 32.5732, relationship: "South border" }
      ]
    },
    color: "bg-emerald-600",
    geo: { lat: -6.3690, lng: 34.8888, zoom: 6, capitalCoords: { lat: -6.1630, lng: 35.7516 } }
  }
];

export const africaContinent: Continent = {
  id: "africa",
  name: "Africa",
  emoji: "🌍",
  bgGradient: "from-amber-700 to-emerald-800",
  mapBg: "bg-amber-50 border-amber-300",
  borderColor: "border-amber-400",
  description: "Africa is the majestic cradle of humankind, featuring the Serengeti migration, the Sahara Desert, Mount Kilimanjaro, Victoria Falls, and ancient pyramids!",
  countries: africaCountries
};
