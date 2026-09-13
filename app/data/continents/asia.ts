import { Continent, Country } from './types';

export const asiaCountries: Country[] = [
  {
    id: "jp",
    iso2: "jp",
    name: "Japan",
    officialName: "Japan (Nihon / Nippon)",
    capital: "Tokyo",
    population: "124.5 Million",
    languages: ["Japanese"],
    currency: "Japanese Yen (¥)",
    flagUrl: "https://flagcdn.com/w320/jp.png",
    uniqueness: "Land of the Rising Sun; bullet trains (Shinkansen), cherry blossoms (Sakura), ancient Kyoto shrines, anime & robotics, and Mount Fuji.",
    recordFact: "The Tokyo metropolitan area is the most populous mega-city on Earth with over 37 million residents, yet has the world's most punctual railway system.",
    description: "Japan is an East Asian archipelago of over 6,800 mountainous volcanic islands. It harmoniously blends ultra-modern technology and futuristic neon skylines with centuries-old Zen Buddhist temples, onsen hot springs, and tea ceremony traditions.",
    interestingFacts: [
      "The Shinkansen bullet trains reach speeds of 320 km/h with an average annual delay of less than 60 seconds per train.",
      "Mount Fuji (3,776 m) is a symmetrical active stratovolcano and sacred UNESCO cultural site.",
      "Japan has over 5.5 million automated vending machines selling hot ramen, green tea, umbrellas, and ice cream on almost every street corner.",
      "The ancient capital of Kyoto was spared during WWII and preserves over 2,000 historic temples, gardens, and imperial palaces."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Mount Fuji framed by spring cherry blossoms and a traditional pagoda in Japan",
    flagMeaning: {
      story: "Known as the 'Nisshōki' (Sun-mark flag) or 'Hinomaru' (Circle of the Sun), symbolizing the Sun Goddess Amaterasu from Shinto mythology.",
      elements: ["White rectangular field", "Large crimson red disc centered in the middle"],
      colors: [
        { name: "Crimson Sun", colorClass: "bg-red-600 text-white", symbol: "The rising sun, warmth, honesty, and the mythological ancestress of the Imperial line" },
        { name: "Pure White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Purity, integrity, and bright daylight" }
      ]
    },
    location: {
      region: "East Asia / Pacific Rim",
      coordinatesText: "36°12′ N, 138°15′ E",
      neighbors: "Island nation in the northwest Pacific Ocean, east of the Korean Peninsula, China, and Russia across the Sea of Japan.",
      surroundingWaters: ["Pacific Ocean", "Sea of Japan", "East China Sea", "Sea of Okhotsk"],
      adjacentCountries: [
        { name: "South Korea", flagUrl: "https://flagcdn.com/w160/kr.png", lat: 37.5665, lng: 126.9780, relationship: "West across Korea Strait" },
        { name: "China", flagUrl: "https://flagcdn.com/w160/cn.png", lat: 39.9042, lng: 116.4074, relationship: "West across East China Sea" }
      ]
    },
    color: "bg-red-600",
    geo: { lat: 36.2048, lng: 138.2529, zoom: 5, capitalCoords: { lat: 35.6762, lng: 139.6503 } }
  },
  {
    id: "in",
    iso2: "in",
    name: "India",
    officialName: "Republic of India (Bharat)",
    capital: "New Delhi",
    population: "1.43 Billion",
    languages: ["Hindi", "English", "22 Official Scheduled Languages"],
    currency: "Indian Rupee (₹)",
    flagUrl: "https://flagcdn.com/w320/in.png",
    uniqueness: "Most populous country on Earth; birthplace of yoga, chess, zero, Ayurveda, the Taj Mahal (Wonder of the World), and Bollywood.",
    recordFact: "India's Varanasi on the banks of the sacred Ganges River is one of the oldest continuously inhabited cities in human history (over 3,000 years).",
    description: "India is a vast subcontinent in South Asia stretching from the snow-capped Himalayan peaks to the tropical backwaters of Kerala and golden sands of Rajasthan, celebrating incredible spiritual, culinary, and linguistic diversity.",
    interestingFacts: [
      "The Taj Mahal in Agra was built by Mughal Emperor Shah Jahan in 1632 from white Makrana marble as a monument of eternal love for his wife Mumtaz Mahal.",
      "India is home to the Royal Bengal tiger, Asiatic lion, Indian elephant, and one-horned rhinoceros.",
      "The Kumbh Mela festival is the largest peaceful human gathering on Earth, attracting over 100 million pilgrims visible from space.",
      "The concept of zero ('shunya') and the decimal numbering system were mathematically formalized in ancient India by Aryabhata and Brahmagupta."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The magnificent white marble Taj Mahal reflecting in the garden pool in Agra, India",
    flagMeaning: {
      story: "The 'Tiranga' (Tricolor) was adopted on July 22, 1947, designed by Pingali Venkayya, featuring the Ashoka Chakra wheel of law.",
      elements: ["Horizontal tricolor of deep saffron, white, and India green", "Navy blue 24-spoke Ashoka Chakra wheel in the center"],
      colors: [
        { name: "Saffron", colorClass: "bg-amber-500 text-slate-900", symbol: "Courage, valor, and sacrifice" },
        { name: "White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Truth, peace, and purity" },
        { name: "India Green", colorClass: "bg-emerald-600 text-white", symbol: "Prosperity, agriculture, and faith" },
        { name: "Ashoka Chakra", colorClass: "bg-blue-900 text-white", symbol: "The eternal 24-hour wheel of dharma and righteousness" }
      ]
    },
    location: {
      region: "South Asia / Indian Subcontinent",
      coordinatesText: "20°35′ N, 78°57′ E",
      neighbors: "Bordered by Pakistan to the northwest, China, Nepal, and Bhutan to the north, and Bangladesh and Myanmar to the east; Sri Lanka and Maldives lie across the Indian Ocean.",
      surroundingWaters: ["Indian Ocean", "Arabian Sea", "Bay of Bengal"],
      adjacentCountries: [
        { name: "China", flagUrl: "https://flagcdn.com/w160/cn.png", lat: 39.9042, lng: 116.4074, relationship: "North Himalayan border" },
        { name: "Pakistan", flagUrl: "https://flagcdn.com/w160/pk.png", lat: 33.6844, lng: 73.0479, relationship: "Northwest border" },
        { name: "Nepal", flagUrl: "https://flagcdn.com/w160/np.png", lat: 27.7172, lng: 85.3240, relationship: "North border" },
        { name: "Bangladesh", flagUrl: "https://flagcdn.com/w160/bd.png", lat: 23.8103, lng: 90.4125, relationship: "East border" }
      ]
    },
    color: "bg-amber-500",
    geo: { lat: 20.5937, lng: 78.9629, zoom: 5, capitalCoords: { lat: 28.6139, lng: 77.2090 } }
  },
  {
    id: "cn",
    iso2: "cn",
    name: "China",
    officialName: "People's Republic of China",
    capital: "Beijing",
    population: "1.41 Billion",
    languages: ["Mandarin Chinese (Standard Putonghua)"],
    currency: "Renminbi / Chinese Yuan (¥)",
    flagUrl: "https://flagcdn.com/w320/cn.png",
    uniqueness: "Home to the Great Wall (over 21,000 km), the Terracotta Army, the Forbidden City, giant pandas, tea culture, and paper/gunpowder/compass inventions.",
    recordFact: "The Great Wall of China is the longest man-made structure in human history, built across mountain ridges over more than 2,000 years.",
    description: "China is a vast civilization spanning from the Tibetan Plateau ('Roof of the World') to Shanghai's futuristic skyline, featuring karst peaks in Guilin and ancient Silk Road cities.",
    interestingFacts: [
      "Ancient China is credited with the 'Four Great Inventions' that transformed civilization: papermaking, the magnetic compass, gunpowder, and printing.",
      "The Terracotta Army in Xi'an contains over 8,000 life-sized clay warriors and horses, each with unique individual facial expressions.",
      "Giant pandas are native only to the bamboo mountain forests of central China, notably Sichuan.",
      "The Forbidden City in Beijing contains 980 buildings with 8,886 rooms and served as the imperial palace for 24 emperors."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The ancient Great Wall of China winding along rugged mountain ridges",
    flagMeaning: {
      story: "Known as the 'Five-star Red Flag', designed by Zeng Liansong and officially hoisted in Tiananmen Square on October 1, 1949.",
      elements: ["Crimson red field", "Large golden five-pointed star surrounded by four smaller stars curving on the right"],
      colors: [
        { name: "Revolutionary Red", colorClass: "bg-red-600 text-white", symbol: "The communist revolution and blood of patriots" },
        { name: "Large Golden Star", colorClass: "bg-amber-400 text-slate-900", symbol: "The Communist Party leadership" },
        { name: "Four Smaller Stars", colorClass: "bg-amber-400 text-slate-900", symbol: "The four social classes united under national progress" }
      ]
    },
    location: {
      region: "East Asia",
      coordinatesText: "35°51′ N, 104°11′ E",
      neighbors: "Bordered by 14 countries including Russia, Mongolia, North Korea, Vietnam, Laos, Myanmar, India, Bhutan, Nepal, Pakistan, Afghanistan, Tajikistan, Kyrgyzstan, and Kazakhstan.",
      surroundingWaters: ["Bohai Sea", "Yellow Sea", "East China Sea", "South China Sea"],
      adjacentCountries: [
        { name: "India", flagUrl: "https://flagcdn.com/w160/in.png", lat: 28.6139, lng: 77.2090, relationship: "Southwest Himalayan border" },
        { name: "Russia", flagUrl: "https://flagcdn.com/w160/ru.png", lat: 55.7558, lng: 37.6173, relationship: "Northeast & Northwest border" },
        { name: "Vietnam", flagUrl: "https://flagcdn.com/w160/vn.png", lat: 21.0285, lng: 105.8542, relationship: "South border" }
      ]
    },
    color: "bg-red-600",
    geo: { lat: 35.8617, lng: 104.1954, zoom: 4, capitalCoords: { lat: 39.9042, lng: 116.4074 } }
  },
  {
    id: "kr",
    iso2: "kr",
    name: "South Korea",
    officialName: "Republic of Korea",
    capital: "Seoul",
    population: "51.7 Million",
    languages: ["Korean (Hangul)"],
    currency: "South Korean Won (₩)",
    flagUrl: "https://flagcdn.com/w320/kr.png",
    uniqueness: "Global cultural leader in K-Pop (BTS, BLACKPINK), K-Dramas, world's fastest internet, Samsung electronics, Kimchi, and ancient palaces like Gyeongbokgung.",
    recordFact: "King Sejong the Great invented Hangul in 1443—one of the most scientifically designed and phonetic alphabets in world history.",
    description: "South Korea occupies the southern half of the Korean Peninsula, blending cutting-edge smart cities, high-speed KTX trains, and esports arenas with mountain Buddhist hermitages and volcanic Jeju Island.",
    interestingFacts: [
      "Jeju Island features volcanic lava tube caves and Hallasan shield volcano, recognized as a UNESCO World Natural Heritage site.",
      "Kimchi—spicy fermented cabbage seasoned with red chili, garlic, and ginger—is served at virtually every Korean meal.",
      "Seoul has the world's most extensive high-speed 5G subway network with digital heated seats and interactive screens.",
      "Taekwondo, the global martial art characterized by high jumping and spinning kicks, originated in ancient Korea."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Historic Gyeongbokgung Palace framed by modern Seoul skyscrapers",
    flagMeaning: {
      story: "The 'Taegeukgi' embodies the philosophical principles of Taoism, universal harmony, balance, and constant movement.",
      elements: ["White field", "Red (Yang) and blue (Yin) Taegeuk circle in center", "Four black trigrams (Geon, Ri, Gam, Gon) in each corner"],
      colors: [
        { name: "White Field", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Purity, peace, and traditional white Korean hanbok" },
        { name: "Red & Blue Taegeuk", colorClass: "bg-red-600 text-white", symbol: "Cosmic balance of positive (light) and negative (dark) forces" },
        { name: "Four Trigrams", colorClass: "bg-slate-900 text-white", symbol: "Heaven, Earth, Fire, and Water" }
      ]
    },
    location: {
      region: "East Asia / Korean Peninsula",
      coordinatesText: "35°54′ N, 127°46′ E",
      neighbors: "Bordered by North Korea along the DMZ to the north; separated from Japan by the Korea Strait and from China by the Yellow Sea.",
      surroundingWaters: ["Yellow Sea (West Sea)", "Sea of Japan (East Sea)", "Korea Strait"],
      adjacentCountries: [
        { name: "North Korea", flagUrl: "https://flagcdn.com/w160/kp.png", lat: 39.0392, lng: 125.7625, relationship: "North border (Demilitarized Zone)" },
        { name: "Japan", flagUrl: "https://flagcdn.com/w160/jp.png", lat: 35.6762, lng: 139.6503, relationship: "Southeast across Korea Strait" }
      ]
    },
    color: "bg-blue-600",
    geo: { lat: 35.9078, lng: 127.7669, zoom: 6, capitalCoords: { lat: 37.5665, lng: 126.9780 } }
  },
  {
    id: "ae",
    iso2: "ae",
    name: "United Arab Emirates",
    officialName: "United Arab Emirates",
    capital: "Abu Dhabi",
    population: "9.5 Million",
    languages: ["Arabic", "English"],
    currency: "UAE Dirham (AED)",
    flagUrl: "https://flagcdn.com/w320/ae.png",
    uniqueness: "Home to Burj Khalifa (world's tallest building, 828 m), palm-shaped artificial islands, the Sheikh Zayed Grand Mosque, and the Louvre Abu Dhabi.",
    recordFact: "The Burj Khalifa in Dubai stands 828 meters (2,717 feet) tall with 163 floors, holding world records for tallest building, elevator, and observation deck.",
    description: "The UAE is a federation of seven emirates on the Arabian Peninsula, transformed from historic pearl-diving fishing villages into a global hub of futuristic architecture, commerce, and innovation.",
    interestingFacts: [
      "Palm Jumeirah is a massive artificial palm-tree-shaped archipelago built into the Persian Gulf, visible from space.",
      "Sheikh Zayed Grand Mosque in Abu Dhabi features 82 white marble domes, 1,000 columns, and the world's largest hand-knotted carpet.",
      "The UAE was the first Arab nation to successfully send a robotic space probe (Hope Probe) into orbit around Mars in 2021.",
      "Dubai has air-conditioned bus shelters and introduced drone taxis and robot police officers."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The gleaming Burj Khalifa piercing the Dubai skyline in the United Arab Emirates",
    flagMeaning: {
      story: "Designed in 1971 by Abdullah Mohammed Al Maainah, featuring the Pan-Arab colors representing Arab unity.",
      elements: ["Vertical red stripe at the hoist", "Three horizontal stripes of green, white, and black"],
      colors: [
        { name: "Red", colorClass: "bg-red-600 text-white", symbol: "Bravery, strength, and sacrifice" },
        { name: "Green", colorClass: "bg-emerald-600 text-white", symbol: "Hope, joy, love, and agricultural prosperity" },
        { name: "White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Peace, purity, and generosity" },
        { name: "Black", colorClass: "bg-slate-900 text-white", symbol: "Defeat of enemies and mental strength" }
      ]
    },
    location: {
      region: "Middle East / Arabian Peninsula",
      coordinatesText: "23°25′ N, 53°50′ E",
      neighbors: "Bordered by Saudi Arabia to the west and south, and Oman to the east and northeast.",
      surroundingWaters: ["Persian Gulf", "Gulf of Oman", "Strait of Hormuz"],
      adjacentCountries: [
        { name: "Saudi Arabia", flagUrl: "https://flagcdn.com/w160/sa.png", lat: 24.7136, lng: 46.6753, relationship: "West and South border" },
        { name: "Oman", flagUrl: "https://flagcdn.com/w160/om.png", lat: 23.5880, lng: 58.3829, relationship: "East border" }
      ]
    },
    color: "bg-emerald-600",
    geo: { lat: 23.4241, lng: 53.8478, zoom: 6, capitalCoords: { lat: 24.4539, lng: 54.3773 } }
  },
  {
    id: "th",
    iso2: "th",
    name: "Thailand",
    officialName: "Kingdom of Thailand",
    capital: "Bangkok",
    population: "71.8 Million",
    languages: ["Thai"],
    currency: "Thai Baht (฿)",
    flagUrl: "https://flagcdn.com/w320/th.png",
    uniqueness: "Known as the 'Land of Smiles'; famous for ornate Buddhist temples (Wat Arun, Wat Phra Kaew), Pad Thai street food, floating markets, and tropical Phi Phi Islands.",
    recordFact: "Thailand is the only Southeast Asian nation that was never colonized by a European power throughout its entire history.",
    description: "Thailand is the heart of mainland Southeast Asia, featuring misty jungle mountains in Chiang Mai, bustling canal markets in Bangkok, and emerald limestone karsts in the Andaman Sea.",
    interestingFacts: [
      "Bangkok's ceremonial ceremonial full name contains 168 letters, recognized as the longest place name in the world!",
      "Songkran is the world's biggest water fight festival, celebrating the Thai New Year in April with citywide water splashing.",
      "The Grand Palace in Bangkok is a glittering golden complex that houses the revered Emerald Buddha carved from a single jasper stone.",
      "Thailand is home to both the world's smallest mammal (Kitti's hog-nosed bumblebee bat) and largest fish (Whale shark)."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "The porcelain-decorated spire of Wat Arun temple on the Chao Phraya River in Bangkok",
    flagMeaning: {
      story: "The 'Trairanga' (Tricolor) was adopted in 1917 by King Rama VI, symbolizing the nation, religion, and the monarchy.",
      elements: ["Five horizontal stripes in red, white, blue (double width), white, and red"],
      colors: [
        { name: "Patriot Red", colorClass: "bg-red-600 text-white", symbol: "The blood shed by the Thai people to preserve independence" },
        { name: "Purity White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Buddhism and the purity of religion" },
        { name: "Royal Blue", colorClass: "bg-blue-800 text-white", symbol: "The sovereign monarchy" }
      ]
    },
    location: {
      region: "Southeast Asia / Indochina",
      coordinatesText: "15°52′ N, 100°59′ E",
      neighbors: "Bordered by Myanmar to the north and west, Laos to the northeast, Cambodia to the southeast, and Malaysia to the south.",
      surroundingWaters: ["Gulf of Thailand", "Andaman Sea", "Strait of Malacca"],
      adjacentCountries: [
        { name: "Cambodia", flagUrl: "https://flagcdn.com/w160/kh.png", lat: 11.5564, lng: 104.9282, relationship: "Southeast border" },
        { name: "Laos", flagUrl: "https://flagcdn.com/w160/la.png", lat: 17.9757, lng: 102.6331, relationship: "Northeast border (Mekong River)" },
        { name: "Malaysia", flagUrl: "https://flagcdn.com/w160/my.png", lat: 3.1390, lng: 101.6869, relationship: "South border" }
      ]
    },
    color: "bg-blue-600",
    geo: { lat: 15.8700, lng: 100.9925, zoom: 5, capitalCoords: { lat: 13.7563, lng: 100.5018 } }
  },
  {
    id: "sg",
    iso2: "sg",
    name: "Singapore",
    officialName: "Republic of Singapore",
    capital: "Singapore",
    population: "5.9 Million",
    languages: ["English", "Mandarin", "Malay", "Tamil"],
    currency: "Singapore Dollar (S$)",
    flagUrl: "https://flagcdn.com/w320/sg.png",
    uniqueness: "The 'Garden City'; futuristic Marina Bay Sands, Supertree Grove at Gardens by the Bay, Jewel Changi Airport with world's tallest indoor waterfall, and UNESCO hawker street food.",
    recordFact: "Gardens by the Bay features 18 colossal vertical 'Supertrees' up to 50 meters tall that generate solar power and harvest rainwater.",
    description: "Singapore is a prosperous island city-state at the southern tip of the Malay Peninsula. It is a global financial and logistics powerhouse celebrated for lush urban greenery, safety, multicultural harmony, and culinary excellence.",
    interestingFacts: [
      "The HSBC Rain Vortex at Jewel Changi Airport is a 40-meter-tall indoor waterfall cascading through a lush indoor rainforest.",
      "Singapore is one of only three surviving sovereign city-states in the modern world (along with Monaco and Vatican City).",
      "The Merlion—a mythical creature with the head of a lion and body of a fish—is the beloved national icon of Singapore.",
      "Singapore's traditional hawker street food culture is recognized on the UNESCO Representative List of Intangible Cultural Heritage."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Futuristic Supertree Grove illuminated at night in Gardens by the Bay, Singapore",
    flagMeaning: {
      story: "Adopted in 1959 upon achieving self-governance, symbolizing universal brotherhood and enduring national virtues.",
      elements: ["Horizontal bicolor of red and white", "Crescent moon and five white stars arranged in a circle on the red band"],
      colors: [
        { name: "Universal Red", colorClass: "bg-red-600 text-white", symbol: "Universal brotherhood and equality of all humans" },
        { name: "Pure White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Pervading and everlasting purity and virtue" },
        { name: "Crescent & Five Stars", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "A rising young nation pursuing democracy, peace, progress, justice, and equality" }
      ]
    },
    location: {
      region: "Southeast Asia / Maritime",
      coordinatesText: "1°21′ N, 103°49′ E",
      neighbors: "Island city-state separated from Peninsular Malaysia by the Straits of Johor and from Indonesia's Riau Islands by the Singapore Strait.",
      surroundingWaters: ["Singapore Strait", "Straits of Johor", "South China Sea"],
      adjacentCountries: [
        { name: "Malaysia", flagUrl: "https://flagcdn.com/w160/my.png", lat: 3.1390, lng: 101.6869, relationship: "North (connected via Causeway and Second Link)" },
        { name: "Indonesia", flagUrl: "https://flagcdn.com/w160/id.png", lat: -6.2088, lng: 106.8456, relationship: "South across Singapore Strait" }
      ]
    },
    color: "bg-red-600",
    geo: { lat: 1.3521, lng: 103.8198, zoom: 11, capitalCoords: { lat: 1.2897, lng: 103.8501 } }
  },
  {
    id: "id",
    iso2: "id",
    name: "Indonesia",
    officialName: "Republic of Indonesia",
    capital: "Jakarta / Nusantara",
    population: "278.7 Million",
    languages: ["Indonesian (Bahasa Indonesia)"],
    currency: "Indonesian Rupiah (Rp)",
    flagUrl: "https://flagcdn.com/w320/id.png",
    uniqueness: "Largest island country in the world (over 17,500 islands!); home to wild Komodo dragons, Borobudur (largest Buddhist temple on Earth), Bali beaches, and orangutans in Sumatra and Borneo.",
    recordFact: "Borobudur in Central Java is the single largest Buddhist temple monument in the world, built in the 9th century with 504 Buddha statues and 2,672 relief panels.",
    description: "Indonesia is a vast tropical archipelago straddling the equator between the Indian and Pacific Oceans. It encompasses active volcanic peaks like Mount Bromo, lush terraced rice fields in Bali, and prehistoric wildlife.",
    interestingFacts: [
      "Komodo National Park is the only place on Earth where the world's largest living lizard—the Komodo dragon (up to 3 m long)—roams wild.",
      "Indonesia is located right on the Pacific 'Ring of Fire' and contains over 130 active volcanoes.",
      "Kopi Luwak, one of the world's rarest coffees, is traditionally processed using beans collected from the Asian palm civet.",
      "Indonesia is the 4th most populous country on Earth, with over 700 spoken regional languages."
    ],
    factImageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    factImageCaption: "Terraced emerald rice paddies and volcanic mountains in Bali, Indonesia",
    flagMeaning: {
      story: "The 'Sang Saka Merah Putih' (The Sacred Red and White) dates back to the 13th-century banner of the Majapahit Empire.",
      elements: ["Horizontal bicolor of red and white"],
      colors: [
        { name: "Courage Red", colorClass: "bg-red-600 text-white", symbol: "Human physical life and bravery" },
        { name: "Purity White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Spiritual purity and the soul" }
      ]
    },
    location: {
      region: "Southeast Asia / Maritime",
      coordinatesText: "0°47′ S, 113°55′ E",
      neighbors: "Shares land borders with Malaysia (Borneo), Papua New Guinea (New Guinea), and East Timor (Timor island).",
      surroundingWaters: ["Indian Ocean", "Pacific Ocean", "Java Sea", "Banda Sea", "Celebes Sea"],
      adjacentCountries: [
        { name: "Malaysia", flagUrl: "https://flagcdn.com/w160/my.png", lat: 3.1390, lng: 101.6869, relationship: "North land border on Borneo" },
        { name: "Papua New Guinea", flagUrl: "https://flagcdn.com/w160/pg.png", lat: -9.4438, lng: 147.1803, relationship: "East land border on New Guinea" },
        { name: "Australia", flagUrl: "https://flagcdn.com/w160/au.png", lat: -35.2809, lng: 149.1300, relationship: "South across Timor Sea" }
      ]
    },
    color: "bg-red-600",
    geo: { lat: -0.7893, lng: 113.9213, zoom: 4, capitalCoords: { lat: -6.2088, lng: 106.8456 } }
  }
];

export const asiaContinent: Continent = {
  id: "asia",
  name: "Asia",
  emoji: "🌏",
  bgGradient: "from-amber-600 to-rose-700",
  mapBg: "bg-amber-50 border-amber-300",
  borderColor: "border-amber-400",
  description: "Asia is Earth's largest continent, home to the Himalayas, ancient dynasties, futuristic megacities, tropical archipelagos, and ancient spiritual traditions!",
  countries: asiaCountries
};
