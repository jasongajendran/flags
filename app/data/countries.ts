export interface ColorSymbol {
  name: string;
  colorClass: string;
  hex?: string;
  symbol: string;
}

export interface FlagMeaning {
  story: string; // Reason for choosing the flag & history
  elements: string[]; // What's in the flag
  colors: ColorSymbol[];
}

export interface CountryLocation {
  region: string; // e.g., "Western Europe", "East Asia"
  coordinatesText: string; // Quick locator description
  neighbors: string; // Bordering countries or bodies of water
}

export interface Country {
  id: string;
  name: string;
  capital: string;
  flagUrl: string;
  uniqueness: string;
  description: string;
  factImageUrl: string;
  factImageCaption: string;
  flagMeaning: FlagMeaning;
  location: CountryLocation;
  color: string;
  position: string; // Tailwind positioning for map UI (e.g. "top-[10%] left-[15%]")
}

export interface Continent {
  id: string;
  name: string;
  emoji: string;
  bgGradient: string;
  mapBg: string;
  borderColor: string;
  description: string;
  countries: Country[];
}

export const continentsData: Continent[] = [
  {
    id: "europe",
    name: "Europe",
    emoji: "🏰",
    bgGradient: "from-blue-500 to-indigo-600",
    mapBg: "bg-sky-200 border-sky-400",
    borderColor: "border-indigo-400",
    description: "Europe is home to grand castles, ancient history, famous artists, and scenic mountains!",
    countries: [
      {
        id: "uk",
        name: "United Kingdom",
        capital: "London",
        flagUrl: "https://flagcdn.com/w320/gb.png",
        uniqueness: "Famous for the Royal Family, double-decker red buses, and Big Ben!",
        description: "Welcome to the United Kingdom! The capital city is London. It is famous for its royal family, the giant clock called Big Ben, and red double-decker buses. The UK is made up of four nations: England, Scotland, Wales, and Northern Ireland.",
        factImageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "Big Ben and red double-decker buses in London",
        flagMeaning: {
          story: "Called the 'Union Jack', this famous flag was created by merging three historic patron saint crosses together when England, Scotland, and Ireland united into one Kingdom!",
          elements: ["Red Cross of St. George (England)", "White Cross of St. Andrew (Scotland)", "Red Saltire of St. Patrick (Ireland)"],
          colors: [
            { name: "Red", colorClass: "bg-red-600", symbol: "Represents bravery and strength" },
            { name: "White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Represents peace and honesty" },
            { name: "Blue", colorClass: "bg-blue-800", symbol: "Represents vigilance, truth, and loyalty" }
          ]
        },
        location: {
          region: "Northwestern Europe",
          coordinatesText: "An island nation off the northwest coast of mainland Europe",
          neighbors: "Surrounded by the Atlantic Ocean, North Sea, and English Channel"
        },
        color: "bg-red-400",
        position: "top-[12%] left-[18%]"
      },
      {
        id: "france",
        name: "France",
        capital: "Paris",
        flagUrl: "https://flagcdn.com/w320/fr.png",
        uniqueness: "Home to the tall Eiffel Tower, tasty baguettes, and fine art!",
        description: "Hello from France! The capital city is Paris, where you can see the famous Eiffel Tower lit up at night. French bakeries make crispy long baguettes and buttery croissants!",
        factImageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "The iconic Eiffel Tower soaring over Paris",
        flagMeaning: {
          story: "Known as the 'Tricolore', this flag was created during the French Revolution in 1789. Blue and Red are the traditional colors of Paris, while White represented the ancient French Monarchy, combining people and nation!",
          elements: ["Three equal vertical stripes of Blue, White, and Red"],
          colors: [
            { name: "Blue", colorClass: "bg-blue-700", symbol: "Represents Liberty (Freedom)" },
            { name: "White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Represents Equality" },
            { name: "Red", colorClass: "bg-red-600", symbol: "Represents Fraternity (Brotherhood)" }
          ]
        },
        location: {
          region: "Western Europe",
          coordinatesText: "Located south of the UK and west of Germany",
          neighbors: "Borders Spain, Italy, Switzerland, Germany, Belgium, and Atlantic Coast"
        },
        color: "bg-blue-400",
        position: "top-[36%] left-[28%]"
      },
      {
        id: "germany",
        name: "Germany",
        capital: "Berlin",
        flagUrl: "https://flagcdn.com/w320/de.png",
        uniqueness: "Known for magical fairy tale castles and giant soft pretzels!",
        description: "Welcome to Germany! The capital is Berlin. Germany has hundreds of majestic fairy tale castles hidden in the Black Forest, and people love eating soft warm pretzels!",
        factImageUrl: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "Neuschwanstein Castle, inspiration for fairy tales",
        flagMeaning: {
          story: "These three colors originated from the uniforms of freedom fighters during the Napoleonic wars and were adopted to symbolize German democracy and freedom!",
          elements: ["Three equal horizontal bands of Black, Red, and Gold"],
          colors: [
            { name: "Black", colorClass: "bg-slate-900 text-white", symbol: "Represents determination and strength" },
            { name: "Red", colorClass: "bg-red-600", symbol: "Represents valor and bravery" },
            { name: "Gold", colorClass: "bg-amber-400 text-slate-900", symbol: "Represents generosity and prosperity" }
          ]
        },
        location: {
          region: "Central Europe",
          coordinatesText: "Heart of Central Europe between France and Poland",
          neighbors: "Borders 9 countries including France, Poland, Denmark, and Switzerland"
        },
        color: "bg-yellow-400",
        position: "top-[20%] left-[52%]"
      },
      {
        id: "italy",
        name: "Italy",
        capital: "Rome",
        flagUrl: "https://flagcdn.com/w320/it.png",
        uniqueness: "Looks like a giant boot kicking a ball and invented pizza!",
        description: "Welcome to Italy! The capital is Rome. Italy looks just like a giant high-heeled boot on the world map. Italy is world-famous for inventing delicious cheesy pizza and pasta!",
        factImageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "The ancient Colosseum in the heart of Rome",
        flagMeaning: {
          story: "Inspired by the French flag, the Italian tricolor was created in 1797 during Napoleon's Italian campaign, with green replacing blue to represent Italy's lush natural landscape!",
          elements: ["Three equal vertical stripes of Green, White, and Red"],
          colors: [
            { name: "Green", colorClass: "bg-emerald-600", symbol: "Represents Italy's green hills and plains" },
            { name: "White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Represents the snowy peaks of the Alps" },
            { name: "Red", colorClass: "bg-red-600", symbol: "Represents the blood shed for independence" }
          ]
        },
        location: {
          region: "Southern Europe",
          coordinatesText: "Peninsula extending into the Mediterranean Sea",
          neighbors: "Borders France, Switzerland, Austria, and Slovenia"
        },
        color: "bg-emerald-400",
        position: "top-[58%] left-[58%]"
      },
      {
        id: "spain",
        name: "Spain",
        capital: "Madrid",
        flagUrl: "https://flagcdn.com/w320/es.png",
        uniqueness: "Famous for sunny Mediterranean beaches and fast Flamenco dancing!",
        description: "Hola from Spain! The capital city is Madrid. Spain is blessed with sunny beaches, vibrant olive groves, and traditional Flamenco music with Spanish acoustic guitars!",
        factImageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "Bright sunny streets and historic architecture in Spain",
        flagMeaning: {
          story: "Selected by King Charles III in 1785 to make Spanish naval ships easily recognizable at sea! The central coat of arms features the Pillars of Hercules and symbols of ancient kingdoms.",
          elements: ["Red and Yellow bands", "Spanish Coat of Arms with Crown and Royal Shields"],
          colors: [
            { name: "Yellow", colorClass: "bg-amber-400 text-slate-900", symbol: "Represents the warm sunshine and gold of Spain" },
            { name: "Red", colorClass: "bg-red-600", symbol: "Represents courage, warmth, and vitality" }
          ]
        },
        location: {
          region: "Southwestern Europe",
          coordinatesText: "Occupies most of the Iberian Peninsula in Southwestern Europe",
          neighbors: "Borders Portugal to the west and France to the north"
        },
        color: "bg-orange-400",
        position: "top-[64%] left-[14%]"
      },
      {
        id: "greece",
        name: "Greece",
        capital: "Athens",
        flagUrl: "https://flagcdn.com/w320/gr.png",
        uniqueness: "Birthplace of the ancient Olympic Games and white island houses!",
        description: "Welcome to Greece! The capital is Athens. Greece has over 2,000 beautiful sunny islands with white painted houses, blue ocean domes, and ancient temples where the first Olympics began!",
        factImageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "White domed buildings overlooking the blue Aegean Sea",
        flagMeaning: {
          story: "The 9 stripes represent the 9 syllables of the Greek freedom motto 'Eleftheria i Thanatos' (Freedom or Death). The cross in the corner represents Eastern Orthodox Christianity.",
          elements: ["White Cross in top corner", "Nine alternating blue and white stripes"],
          colors: [
            { name: "Blue", colorClass: "bg-sky-600", symbol: "Represents the clear Greek sky and surrounding sea" },
            { name: "White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Represents pure sea foam and the justice of the struggle" }
          ]
        },
        location: {
          region: "Southeastern Europe",
          coordinatesText: "Southern tip of the Balkan Peninsula surrounded by seas",
          neighbors: "Borders Albania, North Macedonia, Bulgaria, and Turkey"
        },
        color: "bg-cyan-400",
        position: "top-[72%] left-[76%]"
      }
    ]
  },
  {
    id: "asia",
    name: "Asia",
    emoji: "🐼",
    bgGradient: "from-emerald-500 to-teal-700",
    mapBg: "bg-teal-200 border-teal-400",
    borderColor: "border-teal-500",
    description: "Asia is the largest continent, filled with Mount Everest, giant pandas, cherry blossoms, and super high-tech cities!",
    countries: [
      {
        id: "japan",
        name: "Japan",
        capital: "Tokyo",
        flagUrl: "https://flagcdn.com/w320/jp.png",
        uniqueness: "Home to Mount Fuji, super fast bullet trains, and cute snowy monkeys!",
        description: "Welcome to Japan! The capital is Tokyo. Japan is an island country famous for high-speed Shinkansen bullet trains, Mount Fuji volcano, and adorable snow monkeys soaking in natural hot springs!",
        factImageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "Majestic Mount Fuji framed by cherry blossoms in Japan",
        flagMeaning: {
          story: "Called 'Nisshōki' (Sun Mark Flag), Japan is officially known as 'The Land of the Rising Sun'. The bold red disk represents the sun rising in the east!",
          elements: ["Centered bright red circle on a pure white background"],
          colors: [
            { name: "Red Sun Disk", colorClass: "bg-red-600", symbol: "Represents the rising sun, enthusiasm, and warmth" },
            { name: "White Canvas", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Represents honesty, integrity, and purity" }
          ]
        },
        location: {
          region: "East Asia",
          coordinatesText: "Archipelago of over 6,800 islands in the Pacific Ocean",
          neighbors: "Located east of the Korean Peninsula, China, and Russia"
        },
        color: "bg-red-400",
        position: "top-[25%] left-[80%]"
      },
      {
        id: "china",
        name: "China",
        capital: "Beijing",
        flagUrl: "https://flagcdn.com/w320/cn.png",
        uniqueness: "Famous for the massive Great Wall and friendly Giant Pandas!",
        description: "Welcome to China! The capital city is Beijing. China built the Great Wall of China which spans thousands of miles across mountain peaks. China is also the original home of cuddly bamboo-eating Giant Pandas!",
        factImageUrl: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "The winding Great Wall of China across lush green mountains",
        flagMeaning: {
          story: "Designed by Zeng Liansong in 1949, the large star symbolizes the unity of the Chinese nation, while the four smaller stars represent the four social classes coming together under unity!",
          elements: ["One large yellow star", "Four smaller yellow stars pointing towards the main star"],
          colors: [
            { name: "Red Field", colorClass: "bg-red-600", symbol: "Represents Chinese revolution and enthusiasm" },
            { name: "Yellow Stars", colorClass: "bg-amber-400 text-slate-900", symbol: "Represents brightness and the Chinese people" }
          ]
        },
        location: {
          region: "East Asia",
          coordinatesText: "Massive country occupying most of East Asian mainland",
          neighbors: "Borders 14 nations including India, Russia, Vietnam, and Mongolia"
        },
        color: "bg-amber-400",
        position: "top-[22%] left-[45%]"
      },
      {
        id: "india",
        name: "India",
        capital: "New Delhi",
        flagUrl: "https://flagcdn.com/w320/in.png",
        uniqueness: "Famous for the shiny white Taj Mahal, peacocks, and Bengal Tigers!",
        description: "Namaste from India! The capital is New Delhi. India has the famous white marble Taj Mahal, wild Bengal Tigers roaming dense forests, and colorful dancing peacocks!",
        factImageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "The breathtaking Taj Mahal in Agra, India",
        flagMeaning: {
          story: "Known as the 'Tiranga' (Tricolor), it was adopted in 1947. In the middle is the Ashoka Chakra—a 24-spoked wheel representing constant movement and law of righteousness!",
          elements: ["Saffron, White, and Green bands", "Blue 24-spoked Ashoka Chakra wheel in center"],
          colors: [
            { name: "Saffron", colorClass: "bg-amber-500", symbol: "Represents courage, sacrifice, and selflessness" },
            { name: "White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Represents peace, truth, and purity" },
            { name: "Green", colorClass: "bg-emerald-600", symbol: "Represents faith, fertility, and chivalry" }
          ]
        },
        location: {
          region: "South Asia",
          coordinatesText: "Large subcontinent bounded by the Himalayas in the north",
          neighbors: "Borders Pakistan, China, Nepal, Bhutan, Bangladesh, and Indian Ocean"
        },
        color: "bg-orange-400",
        position: "top-[52%] left-[28%]"
      },
      {
        id: "thailand",
        name: "Thailand",
        capital: "Bangkok",
        flagUrl: "https://flagcdn.com/w320/th.png",
        uniqueness: "Known as the Land of Smiles with friendly Asian Elephants!",
        description: "Sawasdee from Thailand! The capital is Bangkok. Thailand is renowned for golden Buddhist temples, floating street food markets, tropical beaches, and protected sanctuaries for gentle Asian elephants!",
        factImageUrl: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "Golden temples and tropical longtail boats in Thailand",
        flagMeaning: {
          story: "Called 'Trairanga' (Tricolor), King Rama VI introduced this design in 1917. The central blue stripe is twice as wide as the others to symbolize the monarchy uniting the nation.",
          elements: ["Five horizontal stripes of Red, White, Blue, White, and Red"],
          colors: [
            { name: "Red", colorClass: "bg-red-600", symbol: "Represents the land and nation's people" },
            { name: "White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Represents purity and religion" },
            { name: "Blue", colorClass: "bg-blue-800", symbol: "Represents the royal monarchy" }
          ]
        },
        location: {
          region: "Southeast Asia",
          coordinatesText: "Located in the heart of the Indochina peninsula",
          neighbors: "Borders Myanmar, Laos, Cambodia, and Malaysia"
        },
        color: "bg-purple-400",
        position: "top-[64%] left-[52%]"
      },
      {
        id: "uae",
        name: "United Arab Emirates",
        capital: "Abu Dhabi",
        flagUrl: "https://flagcdn.com/w320/ae.png",
        uniqueness: "Home to Burj Khalifa, the tallest building on Earth!",
        description: "Welcome to the United Arab Emirates! The capital is Abu Dhabi. The UAE is famous for giant golden sand dunes in the desert, falconry, and the Burj Khalifa—the tallest skyscraper in the world!",
        factImageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "The soaring Burj Khalifa skyscraper reaching into the clouds",
        flagMeaning: {
          story: "Adopted in 1971 when the 7 emirates joined together into one nation. It uses Pan-Arab colors to signify unity among Arab countries.",
          elements: ["Vertical Red stripe on left", "Three horizontal stripes of Green, White, and Black"],
          colors: [
            { name: "Red", colorClass: "bg-red-600", symbol: "Represents bravery, hardiness, and unity" },
            { name: "Green", colorClass: "bg-emerald-600", symbol: "Represents hope, joy, and agricultural wealth" },
            { name: "White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Represents peace and honesty" },
            { name: "Black", colorClass: "bg-slate-900 text-white", symbol: "Represents strength of mind and oil resources" }
          ]
        },
        location: {
          region: "Western Asia / Middle East",
          coordinatesText: "Eastern edge of the Arabian Peninsula bordering Persian Gulf",
          neighbors: "Borders Saudi Arabia and Oman"
        },
        color: "bg-emerald-400",
        position: "top-[42%] left-[12%]"
      }
    ]
  },
  {
    id: "africa",
    name: "Africa",
    emoji: "🦁",
    bgGradient: "from-amber-500 to-orange-600",
    mapBg: "bg-amber-200 border-amber-400",
    borderColor: "border-amber-500",
    description: "Africa features vast wildlife safaris, ancient pyramids, mighty rivers, and diverse vibrant cultures!",
    countries: [
      {
        id: "egypt",
        name: "Egypt",
        capital: "Cairo",
        flagUrl: "https://flagcdn.com/w320/eg.png",
        uniqueness: "Famous for ancient stone Pyramids, the Sphinx, and the Nile River!",
        description: "Welcome to Egypt! The capital is Cairo. Egypt is world famous for its 4,500-year-old stone Pyramids of Giza, the mysterious Great Sphinx statue, and the long Nile River!",
        factImageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "The ancient Great Pyramids of Giza rising from the desert",
        flagMeaning: {
          story: "Adopted in 1984, the flag features the golden 'Eagle of Saladin' in the center, an ancient symbol of Arab strength and independence!",
          elements: ["Golden Eagle of Saladin in center", "Three horizontal bands of Red, White, and Black"],
          colors: [
            { name: "Red", colorClass: "bg-red-600", symbol: "Represents the struggle against tyranny before 1952" },
            { name: "White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Represents the peaceful revolution" },
            { name: "Black", colorClass: "bg-slate-900 text-white", symbol: "Represents the end of dark foreign oppression" },
            { name: "Gold Eagle", colorClass: "bg-amber-400 text-slate-900", symbol: "Represents power, independence, and heritage" }
          ]
        },
        location: {
          region: "North Africa",
          coordinatesText: "Northeastern corner of Africa linking to Asia",
          neighbors: "Borders Mediterranean Sea, Red Sea, Libya, Sudan, and Israel"
        },
        color: "bg-yellow-400",
        position: "top-[12%] left-[45%]"
      },
      {
        id: "kenya",
        name: "Kenya",
        capital: "Nairobi",
        flagUrl: "https://flagcdn.com/w320/ke.png",
        uniqueness: "Famous for savannah safaris with running lions, giraffes, and zebras!",
        description: "Jambo from Kenya! The capital city is Nairobi. Kenya is world-renowned for wild animal safaris across the Maasai Mara, where tall giraffes, roaring lions, and striped zebras roam free!",
        factImageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "Tall giraffes wandering across the Kenyan savannah at sunset",
        flagMeaning: {
          story: "Based on the flag of the Kenya African National Union (KANU), it features a traditional warrior's Maasai shield and two crossed spears to defend freedom!",
          elements: ["Maasai Shield with two crossed spears", "Black, Red, and Green horizontal stripes with white borders"],
          colors: [
            { name: "Black", colorClass: "bg-slate-900 text-white", symbol: "Represents the native people of Kenya" },
            { name: "Red", colorClass: "bg-red-600", symbol: "Represents the blood shed during the fight for independence" },
            { name: "Green", colorClass: "bg-emerald-600", symbol: "Represents Kenya's rich fertile land and forests" },
            { name: "White Fimbriations", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Represents peace and unity" }
          ]
        },
        location: {
          region: "East Africa",
          coordinatesText: "Located on the equator along the Indian Ocean coast",
          neighbors: "Borders Ethiopia, Somalia, Tanzania, Uganda, and South Sudan"
        },
        color: "bg-red-400",
        position: "top-[45%] left-[58%]"
      },
      {
        id: "southafrica",
        name: "South Africa",
        capital: "Pretoria",
        flagUrl: "https://flagcdn.com/w320/za.png",
        uniqueness: "Famous for Table Mountain and cute wild African penguins on beaches!",
        description: "Welcome to South Africa! Its executive capital is Pretoria. South Africa has flat-topped Table Mountain and Boulders Beach, where wild African penguins waddle on the sand!",
        factImageUrl: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "Boulders Beach in Cape Town, home to wild African penguins",
        flagMeaning: {
          story: "Designed by Frederick Brownell in 1994 to celebrate the end of Apartheid. The horizontal 'Y' shape symbolizes diverse groups coming together as one unified nation!",
          elements: ["Horizontal Y-shape band", "Six harmonious colors representing all South Africans"],
          colors: [
            { name: "Green Y", colorClass: "bg-emerald-600", symbol: "Represents convergence and growth of the country" },
            { name: "Black & Gold", colorClass: "bg-slate-900 text-white", symbol: "Represents native African heritage and rich mineral wealth" },
            { name: "Red, White & Blue", colorClass: "bg-red-600", symbol: "Represents historical European ties and peace" }
          ]
        },
        location: {
          region: "Southern Africa",
          coordinatesText: "Southernmost tip of the African continent",
          neighbors: "Surrounded by Atlantic and Indian Oceans, borders Namibia, Botswana, and Zimbabwe"
        },
        color: "bg-green-400",
        position: "top-[78%] left-[45%]"
      },
      {
        id: "madagascar",
        name: "Madagascar",
        capital: "Antananarivo",
        flagUrl: "https://flagcdn.com/w320/mg.png",
        uniqueness: "Home to cute ring-tailed lemurs and giant upside-down Baobab trees!",
        description: "Hello from Madagascar! The capital is Antananarivo. Madagascar is a giant island in the Indian Ocean home to unique animals found nowhere else on Earth, like ring-tailed lemurs!",
        factImageUrl: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "The famous Avenue of the Baobabs with giant unique trees",
        flagMeaning: {
          story: "Adopted in 1958 before gaining full independence. White and Red represent the Merina kingdom, while Green represents the coastal dwellers!",
          elements: ["Vertical White bar on left", "Horizontal Red and Green bands"],
          colors: [
            { name: "White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Represents purity, honesty, and history" },
            { name: "Red", colorClass: "bg-red-600", symbol: "Represents sovereignty and royal heritage" },
            { name: "Green", colorClass: "bg-emerald-600", symbol: "Represents coastal people and agricultural hope" }
          ]
        },
        location: {
          region: "East African Island",
          coordinatesText: "Large island in the Indian Ocean off Mozambique coast",
          neighbors: "Separated from mainland Africa by the Mozambique Channel"
        },
        color: "bg-pink-400",
        position: "top-[62%] left-[82%]"
      },
      {
        id: "morocco",
        name: "Morocco",
        capital: "Rabat",
        flagUrl: "https://flagcdn.com/w320/ma.png",
        uniqueness: "Known for giant Sahara sand dunes, colorful spice markets, and blue towns!",
        description: "Welcome to Morocco! The capital is Rabat. Morocco has golden sand dunes in the Sahara Desert, aromatic spice souks, and Chefchaouen, the magical blue-painted mountain village!",
        factImageUrl: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "The famous blue buildings of Chefchaouen in Morocco",
        flagMeaning: {
          story: "Red has been the historic royal color of Morocco since the 17th century. In 1915, King Mulai Yusuf added the green 5-pointed Seal of Solomon star to distinguish it!",
          elements: ["Five-pointed green pentagram star (Seal of Solomon)", "Bold red background"],
          colors: [
            { name: "Red Field", colorClass: "bg-red-600", symbol: "Represents bravery, strength, and royal ancestry" },
            { name: "Green Star", colorClass: "bg-emerald-600", symbol: "Represents wisdom, health, peace, and love" }
          ]
        },
        location: {
          region: "Northwest Africa",
          coordinatesText: "Situated at the gateway to Mediterranean and Atlantic",
          neighbors: "Borders Algeria to the east and Western Sahara to the south"
        },
        color: "bg-orange-400",
        position: "top-[14%] left-[12%]"
      }
    ]
  },
  {
    id: "northamerica",
    name: "North America",
    emoji: "🗽",
    bgGradient: "from-blue-600 to-cyan-700",
    mapBg: "bg-sky-200 border-sky-400",
    borderColor: "border-cyan-500",
    description: "North America spans from frozen Arctic tundras and maple forests down to tropical Caribbean beaches!",
    countries: [
      {
        id: "usa",
        name: "United States",
        capital: "Washington, D.C.",
        flagUrl: "https://flagcdn.com/w320/us.png",
        uniqueness: "Home to the Statue of Liberty, Grand Canyon, and Hollywood!",
        description: "Welcome to the United States! The capital is Washington, D.C. The USA is home to New York's Statue of Liberty, the giant red rock Grand Canyon, and NASA space rockets!",
        factImageUrl: "https://images.unsplash.com/photo-1609825488888-3a766db05542?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "The Statue of Liberty holding her torch in New York",
        flagMeaning: {
          story: "Known as 'The Stars and Stripes', created in 1777. The 50 stars represent the 50 US states, and the 13 stripes represent the original 13 colonies that declared independence!",
          elements: ["50 white 5-pointed stars in a blue canton", "13 alternating red and white horizontal stripes"],
          colors: [
            { name: "Red Stripes", colorClass: "bg-red-600", symbol: "Represents valor and bravery" },
            { name: "White Stripes", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Represents purity and innocence" },
            { name: "Blue Canton", colorClass: "bg-blue-800", symbol: "Represents vigilance, perseverance, and justice" }
          ]
        },
        location: {
          region: "North America",
          coordinatesText: "Spans across the middle of the North American continent",
          neighbors: "Borders Canada to the north and Mexico to the south"
        },
        color: "bg-blue-500",
        position: "top-[42%] left-[45%]"
      },
      {
        id: "canada",
        name: "Canada",
        capital: "Ottawa",
        flagUrl: "https://flagcdn.com/w320/ca.png",
        uniqueness: "Famous for snowy Rocky Mountains, sweet maple syrup, and wild Moose!",
        description: "Eh-oh from Canada! The capital is Ottawa. Canada is the second-largest country on Earth, covered in crystal blue glacier lakes, pine forests, and sweet maple trees!",
        factImageUrl: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "Turquoise Moraine Lake in Banff National Park, Canada",
        flagMeaning: {
          story: "Adopted in 1965, replacing the British Red Ensign. The maple leaf had been a symbol of Canadian nature and native heritage since the 1700s!",
          elements: ["Stylized 11-pointed Red Maple Leaf in center", "Two vertical red side bars"],
          colors: [
            { name: "Red", colorClass: "bg-red-600", symbol: "Taken from St. George's cross, symbolizes sacrifice and vigor" },
            { name: "White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Taken from French royal emblem, symbolizes peace and snowy northern expanse" }
          ]
        },
        location: {
          region: "Northern North America",
          coordinatesText: "Occupies northern half of continent reaching into Arctic",
          neighbors: "Borders United States to south and Pacific, Atlantic, and Arctic Oceans"
        },
        color: "bg-red-400",
        position: "top-[15%] left-[40%]"
      },
      {
        id: "mexico",
        name: "Mexico",
        capital: "Mexico City",
        flagUrl: "https://flagcdn.com/w320/mx.png",
        uniqueness: "Known for ancient Mayan pyramids, yummy tacos, and Mariachi music!",
        description: "¡Hola! from Mexico! The capital is Mexico City. Mexico has thousands of years of Aztec and Mayan step pyramids, delicious cheesy tacos, and colorful Mariachi folk music!",
        factImageUrl: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "The ancient Mayan Chichen Itza pyramid in Mexico",
        flagMeaning: {
          story: "Based on the ancient Aztec legend: gods told Aztecs to build their capital where they saw an eagle eating a snake while perched on a cactus in a lake!",
          elements: ["Mexican Coat of Arms: Eagle perched on prickly pear cactus holding a rattlesnake", "Green, White, and Red vertical stripes"],
          colors: [
            { name: "Green", colorClass: "bg-emerald-600", symbol: "Represents hope and prosperity" },
            { name: "White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Represents purity and religious faith" },
            { name: "Red", colorClass: "bg-red-600", symbol: "Represents the blood of national heroes" }
          ]
        },
        location: {
          region: "Southern North America",
          coordinatesText: "Located south of the US with coasts on Pacific and Gulf of Mexico",
          neighbors: "Borders US to north and Guatemala and Belize to south"
        },
        color: "bg-emerald-500",
        position: "top-[68%] left-[28%]"
      },
      {
        id: "jamaica",
        name: "Jamaica",
        capital: "Kingston",
        flagUrl: "https://flagcdn.com/w320/jm.png",
        uniqueness: "Famous for Reggae music, fast sprinters, and tropical waterfalls!",
        description: "Welcome to Jamaica! The capital is Kingston. Jamaica is a tropical Caribbean island famous for upbeat Reggae music, world-record sprinters, and Dunn's River waterfalls!",
        factImageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "Turquoise Caribbean waters and palm trees in Jamaica",
        flagMeaning: {
          story: "Adopted on Independence Day in 1962. It is one of the only national flags in the world that does not contain red, white, or blue!",
          elements: ["Gold diagonal cross (saltire) dividing flag into four triangles"],
          colors: [
            { name: "Gold Cross", colorClass: "bg-amber-400 text-slate-900", symbol: "Represents natural sunshine and wealth of Jamaica" },
            { name: "Green Triangles", colorClass: "bg-emerald-600", symbol: "Represents lush green vegetation and hope" },
            { name: "Black Triangles", colorClass: "bg-slate-900 text-white", symbol: "Represents strength and creativity of the people" }
          ]
        },
        location: {
          region: "Caribbean Sea",
          coordinatesText: "Island country in the Caribbean Sea south of Cuba",
          neighbors: "Surrounded by warm Caribbean Sea waters"
        },
        color: "bg-yellow-400",
        position: "top-[78%] left-[70%]"
      }
    ]
  },
  {
    id: "southamerica",
    name: "South America",
    emoji: "🐆",
    bgGradient: "from-green-600 to-emerald-800",
    mapBg: "bg-emerald-200 border-emerald-400",
    borderColor: "border-emerald-600",
    description: "South America is home to the Amazon Rainforest, high Andes mountains, colorful toucans, and football passion!",
    countries: [
      {
        id: "brazil",
        name: "Brazil",
        capital: "Brasília",
        flagUrl: "https://flagcdn.com/w320/br.png",
        uniqueness: "Home to the giant Amazon Rainforest, Christ the Redeemer, and Samba!",
        description: "Olá from Brazil! The capital is Brasília. Brazil is the largest country in South America, home to the Amazon river and jungle, world-champion football teams, and colorful Carnival dances!",
        factImageUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "Christ the Redeemer statue overlooking Rio de Janeiro",
        flagMeaning: {
          story: "Adopted in 1889, the globe shows the starry night sky over Rio de Janeiro on November 15, 1889 (the day Brazil became a republic)! The banner reads 'Ordem e Progresso' (Order and Progress).",
          elements: ["Blue celestial globe with 27 stars", "Yellow diamond on vivid green canvas"],
          colors: [
            { name: "Green", colorClass: "bg-emerald-600", symbol: "Represents the vast Amazon rainforest and flora" },
            { name: "Yellow Diamond", colorClass: "bg-amber-400 text-slate-900", symbol: "Represents Brazil's mineral gold wealth" },
            { name: "Blue Globe & White Stars", colorClass: "bg-blue-800", symbol: "Represents the starry sky over Rio and Brazilian states" }
          ]
        },
        location: {
          region: "Eastern South America",
          coordinatesText: "Covers nearly half of the South American continent",
          neighbors: "Borders 10 countries including Argentina, Peru, Colombia, and Atlantic Ocean"
        },
        color: "bg-green-500",
        position: "top-[40%] left-[55%]"
      },
      {
        id: "argentina",
        name: "Argentina",
        capital: "Buenos Aires",
        flagUrl: "https://flagcdn.com/w320/ar.png",
        uniqueness: "Famous for the high Andes mountains, Tango dancing, and glaciers!",
        description: "¡Hola! from Argentina! The capital is Buenos Aires. Argentina features icy blue Patagonia glaciers, grassy Pampas plains where cowboys ride, and passionate Tango dancing!",
        factImageUrl: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "Perito Moreno Glacier in Patagonia, Argentina",
        flagMeaning: {
          story: "Created by Manuel Belgrano in 1812 during the War of Independence. The central 'Sun of May' (Sol de Mayo) pays tribute to Inti, the ancient Inca Sun God!",
          elements: ["Golden 'Sun of May' with 32 alternating straight and wavy rays", "Light blue and white stripes"],
          colors: [
            { name: "Light Blue", colorClass: "bg-sky-400", symbol: "Represents clear skies and clouds over Argentina" },
            { name: "White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Represents peace, freedom, and snow-capped Andes" },
            { name: "Golden Sun", colorClass: "bg-amber-400 text-slate-900", symbol: "Represents the Inca Sun God Inti and freedom" }
          ]
        },
        location: {
          region: "Southern South America",
          coordinatesText: "Occupies most of the southern cone of South America",
          neighbors: "Borders Chile to west, Bolivia, Paraguay, Brazil, Uruguay, and Atlantic"
        },
        color: "bg-sky-400",
        position: "top-[72%] left-[40%]"
      },
      {
        id: "peru",
        name: "Peru",
        capital: "Lima",
        flagUrl: "https://flagcdn.com/w320/pe.png",
        uniqueness: "Home to the mysterious ancient Inca city of Machu Picchu and Llamas!",
        description: "Welcome to Peru! The capital is Lima. Peru is famous for Machu Picchu, an ancient stone city built by the Incas high in the mountains, and fluffy friendly llamas!",
        factImageUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "Machu Picchu citadel high in the Peruvian Andes mountains",
        flagMeaning: {
          story: "Designed by General José de San Martín in 1820 after seeing a flock of red-winged, white-breasted flamingos fly into the sky—which he took as an omen of victory!",
          elements: ["Three equal vertical bands of Red, White, and Red"],
          colors: [
            { name: "Red", colorClass: "bg-red-600", symbol: "Represents the blood shed for Inca and national freedom" },
            { name: "White", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Represents peace, purity, and justice" }
          ]
        },
        location: {
          region: "Western South America",
          coordinatesText: "Located on the Pacific coast of South America",
          neighbors: "Borders Ecuador, Colombia, Brazil, Bolivia, and Chile"
        },
        color: "bg-red-400",
        position: "top-[32%] left-[18%]"
      }
    ]
  },
  {
    id: "oceania",
    name: "Oceania",
    emoji: "🦘",
    bgGradient: "from-teal-500 to-blue-700",
    mapBg: "bg-teal-200 border-teal-400",
    borderColor: "border-teal-500",
    description: "Oceania includes Australia and island nations surrounded by coral reefs, kangaroos, and clear blue oceans!",
    countries: [
      {
        id: "australia",
        name: "Australia",
        capital: "Canberra",
        flagUrl: "https://flagcdn.com/w320/au.png",
        uniqueness: "Home to hopping Kangaroos, Koalas, and the Great Barrier Reef!",
        description: "G'day from Australia! The capital is Canberra. Australia is a whole continent and country in one, famous for jumping kangaroos, sleepy koalas, the Sydney Opera House, and colourful coral reefs!",
        factImageUrl: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "The Sydney Opera House on the harbour in Australia",
        flagMeaning: {
          story: "Chosen in a nationwide flag competition in 1901. The large seven-pointed star is the Commonwealth Star representing Australian states and territories!",
          elements: ["Union Jack in top corner", "Large 7-pointed Commonwealth Star", "Southern Cross constellation (5 stars)"],
          colors: [
            { name: "Blue Field", colorClass: "bg-blue-800", symbol: "Represents the island continent surrounded by oceans" },
            { name: "White Stars", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Represents the Southern Cross constellation visible in Southern skies" }
          ]
        },
        location: {
          region: "Oceania / Australasia",
          coordinatesText: "Massive island continent between Indian and Pacific Oceans",
          neighbors: "Surrounded by ocean, near New Zealand, Indonesia, and Papua New Guinea"
        },
        color: "bg-blue-500",
        position: "top-[45%] left-[40%]"
      },
      {
        id: "newzealand",
        name: "New Zealand",
        capital: "Wellington",
        flagUrl: "https://flagcdn.com/w320/nz.png",
        uniqueness: "Famous for Kiwi birds, dramatic fjords, and Hobbit movie scenery!",
        description: "Kia Ora from New Zealand! The capital is Wellington. New Zealand consists of two beautiful islands filled with snow peaks, thermal geysers, flightless Kiwi birds, and Hobbiton villages!",
        factImageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "Majestic mountains and blue lakes of New Zealand",
        flagMeaning: {
          story: "Adopted in 1902, the flag features four red stars outlined in white representing the Southern Cross constellation, guiding sailors across the Pacific Ocean!",
          elements: ["Union Jack in top corner", "Four red 5-pointed stars with white borders"],
          colors: [
            { name: "Blue Field", colorClass: "bg-blue-800", symbol: "Represents the vast Pacific ocean and sky" },
            { name: "Red Stars", colorClass: "bg-red-600", symbol: "Represents the Southern Cross guiding lights" }
          ]
        },
        location: {
          region: "Polynesia / Oceania",
          coordinatesText: "Island nation in Southwestern Pacific Ocean",
          neighbors: "Located southeast of Australia across the Tasman Sea"
        },
        color: "bg-indigo-500",
        position: "top-[70%] left-[75%]"
      }
    ]
  },
  {
    id: "antarctica",
    name: "Antarctica",
    emoji: "🐧",
    bgGradient: "from-indigo-600 to-blue-900",
    mapBg: "bg-slate-200 border-slate-300",
    borderColor: "border-indigo-400",
    description: "Antarctica is the coldest, windiest continent on Earth, covered in thick ice sheets and home to millions of Emperor penguins!",
    countries: [
      {
        id: "antarctica_land",
        name: "Antarctica Haven",
        capital: "McMurdo Station",
        flagUrl: "https://flagcdn.com/w320/aq.png",
        uniqueness: "Coldest continent on Earth with giant icebergs and Emperor penguins!",
        description: "Welcome to Antarctica! It is not a country with a government, but a protected continent dedicated to peace and scientific discovery! Millions of Emperor penguins, seals, and blue whales thrive here amidst towering icebergs.",
        factImageUrl: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
        factImageCaption: "Adorable Emperor penguins standing on icy Antarctic shores",
        flagMeaning: {
          story: "Designed by Graham Bartram in 2002 (True South emblem), showing a plain white map of Antarctica on a sky-blue field to symbolize neutral scientific peace!",
          elements: ["White silhouette map of Antarctica continent centered"],
          colors: [
            { name: "Sky Blue", colorClass: "bg-sky-400", symbol: "Represents the icy clear Antarctic sky and oceans" },
            { name: "White Map", colorClass: "bg-white text-slate-900 border border-slate-300", symbol: "Represents pure ice, snow, and peace for all mankind" }
          ]
        },
        location: {
          region: "South Pole",
          coordinatesText: "Southernmost continent surrounding the geographical South Pole",
          neighbors: "Surrounded by the icy Southern Ocean"
        },
        color: "bg-slate-300",
        position: "top-[45%] left-[45%]"
      }
    ]
  }
];

// Backward compatibility export
export const europeData = continentsData[0].countries;
