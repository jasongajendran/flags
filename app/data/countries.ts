export interface Country {
  id: string;
  name: string;
  capital: string;
  flagUrl: string;
  uniqueness: string;
  description: string;
  color: string;
  position: string; // for the interactive map UI
}

export interface Continent {
  id: string;
  name: string;
  emoji: string;
  bgGradient: string;
  mapBg: string;
  borderColor: string;
  countries: Country[];
}

export const continentsData: Continent[] = [
  {
    id: "europe",
    name: "Europe",
    emoji: "🏰",
    bgGradient: "from-blue-500 to-indigo-600",
    mapBg: "bg-sky-300 border-sky-400",
    borderColor: "border-indigo-400",
    countries: [
      {
        id: "uk",
        name: "United Kingdom",
        capital: "London",
        flagUrl: "https://flagcdn.com/w320/gb.png",
        uniqueness: "Famous for the Royal Family, double-decker buses, and Big Ben!",
        description: "Welcome to the United Kingdom! The capital city is London. It is famous for its royal family, the giant clock called Big Ben, and red double-decker buses. It is actually made up of four parts: England, Scotland, Wales, and Northern Ireland.",
        color: "bg-red-400",
        position: "top-[10%] left-[15%]"
      },
      {
        id: "france",
        name: "France",
        capital: "Paris",
        flagUrl: "https://flagcdn.com/w320/fr.png",
        uniqueness: "Home to the Eiffel Tower and delicious baguettes!",
        description: "Hello from France! The capital city is Paris, where you can find the tall Eiffel Tower. French people love to bake long delicious bread called baguettes and make wonderful cheese!",
        color: "bg-blue-400",
        position: "top-[35%] left-[25%]"
      },
      {
        id: "germany",
        name: "Germany",
        capital: "Berlin",
        flagUrl: "https://flagcdn.com/w320/de.png",
        uniqueness: "Known for magical fairy tale castles and yummy pretzels!",
        description: "Welcome to Germany! The capital is Berlin. Germany has many beautiful old castles that look like they are right out of a fairy tale storybook. They also love giant soft pretzels!",
        color: "bg-yellow-400",
        position: "top-[20%] left-[55%]"
      },
      {
        id: "italy",
        name: "Italy",
        capital: "Rome",
        flagUrl: "https://flagcdn.com/w320/it.png",
        uniqueness: "Looks like a giant boot on the map and invented pizza!",
        description: "Welcome to Italy! The capital is Rome. If you look at Italy on a map, it looks exactly like a giant boot kicking a ball! Italy is world famous for inventing delicious pizza and pasta.",
        color: "bg-emerald-400",
        position: "top-[60%] left-[60%]"
      },
      {
        id: "spain",
        name: "Spain",
        capital: "Madrid",
        flagUrl: "https://flagcdn.com/w320/es.png",
        uniqueness: "Famous for sunny beaches, flamenco dancing, and colorful festivals!",
        description: "Hello from Spain! The capital city is Madrid. Spain is known for its super sunny beaches and a fast, energetic style of music and dancing called Flamenco!",
        color: "bg-orange-400",
        position: "top-[68%] left-[10%]"
      },
      {
        id: "greece",
        name: "Greece",
        capital: "Athens",
        flagUrl: "https://flagcdn.com/w320/gr.png",
        uniqueness: "Birthplace of the ancient Olympic Games and white island houses!",
        description: "Welcome to Greece! The capital is Athens. Greece is an ancient country with thousands of sunny islands, blue dome roofs, and it is where the very first Olympic Games started!",
        color: "bg-cyan-400",
        position: "top-[70%] left-[78%]"
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
    countries: [
      {
        id: "japan",
        name: "Japan",
        capital: "Tokyo",
        flagUrl: "https://flagcdn.com/w320/jp.png",
        uniqueness: "Home to Mount Fuji, bullet trains, and cute snowy monkeys!",
        description: "Welcome to Japan! The capital is Tokyo. Japan is a beautiful island nation with super fast bullet trains and Mount Fuji, a giant snow-capped volcano. Snow monkeys love relaxing in warm natural hot springs here!",
        color: "bg-red-400",
        position: "top-[25%] left-[75%]"
      },
      {
        id: "china",
        name: "China",
        capital: "Beijing",
        flagUrl: "https://flagcdn.com/w320/cn.png",
        uniqueness: "Famous for the giant Great Wall and friendly Giant Pandas!",
        description: "Welcome to China! The capital city is Beijing. China built the famous Great Wall that winds across thousands of miles of mountains! It is also the home of fluffy black-and-white Giant Pandas.",
        color: "bg-amber-400",
        position: "top-[20%] left-[45%]"
      },
      {
        id: "india",
        name: "India",
        capital: "New Delhi",
        flagUrl: "https://flagcdn.com/w320/in.png",
        uniqueness: "Famous for the shiny Taj Mahal, peacocks, and Bengal Tigers!",
        description: "Namaste from India! The capital is New Delhi. India has the famous white marble Taj Mahal, wild Bengal Tigers in lush forests, and colorful peacocks dancing in the sun!",
        color: "bg-orange-400",
        position: "top-[55%] left-[25%]"
      },
      {
        id: "thailand",
        name: "Thailand",
        capital: "Bangkok",
        flagUrl: "https://flagcdn.com/w320/th.png",
        uniqueness: "Known as the Land of Smiles with friendly Asian Elephants!",
        description: "Sawasdee from Thailand! The capital is Bangkok. Thailand is famous for golden temples, tropical fruit markets, beautiful ocean beaches, and gentle Asian Elephants!",
        color: "bg-purple-400",
        position: "top-[65%] left-[50%]"
      },
      {
        id: "uae",
        name: "United Arab Emirates",
        capital: "Abu Dhabi",
        flagUrl: "https://flagcdn.com/w320/ae.png",
        uniqueness: "Home to Burj Khalifa, the tallest building on Earth!",
        description: "Welcome to the United Arab Emirates! The capital is Abu Dhabi. The UAE is famous for giant golden sand dunes, friendly camels, and the Burj Khalifa—the tallest skyscraper in the world!",
        color: "bg-emerald-400",
        position: "top-[40%] left-[10%]"
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
    countries: [
      {
        id: "egypt",
        name: "Egypt",
        capital: "Cairo",
        flagUrl: "https://flagcdn.com/w320/eg.png",
        uniqueness: "Famous for ancient stone Pyramids, the Sphinx, and the Nile River!",
        description: "Welcome to Egypt! The capital is Cairo. Egypt is world famous for its ancient stone Pyramids built thousands of years ago, the giant Sphinx statue, and the long Nile River!",
        color: "bg-yellow-400",
        position: "top-[10%] left-[45%]"
      },
      {
        id: "kenya",
        name: "Kenya",
        capital: "Nairobi",
        flagUrl: "https://flagcdn.com/w320/ke.png",
        uniqueness: "Famous for savannah safaris with running lions, giraffes, and zebras!",
        description: "Jambo from Kenya! The capital city is Nairobi. Kenya is famous for amazing wildlife safaris where tall giraffes, roaring lions, and striped zebras roam across open grassy plains!",
        color: "bg-red-400",
        position: "top-[45%] left-[55%]"
      },
      {
        id: "southafrica",
        name: "South Africa",
        capital: "Pretoria",
        flagUrl: "https://flagcdn.com/w320/za.png",
        uniqueness: "Famous for Table Mountain and cute wild African penguins on beaches!",
        description: "Welcome to South Africa! Its executive capital is Pretoria. South Africa has the giant flat Table Mountain and Boulders Beach, where cute African penguins waddle around on the sand!",
        color: "bg-green-400",
        position: "top-[75%] left-[45%]"
      },
      {
        id: "madagascar",
        name: "Madagascar",
        capital: "Antananarivo",
        flagUrl: "https://flagcdn.com/w320/mg.png",
        uniqueness: "Home to cute ring-tailed lemurs and giant upside-down Baobab trees!",
        description: "Hello from Madagascar! The capital is Antananarivo. Madagascar is a giant island in the ocean with unique animals found nowhere else on Earth, like cute ring-tailed lemurs!",
        color: "bg-pink-400",
        position: "top-[60%] left-[80%]"
      },
      {
        id: "morocco",
        name: "Morocco",
        capital: "Rabat",
        flagUrl: "https://flagcdn.com/w320/ma.png",
        uniqueness: "Known for giant Sahara sand dunes, colorful markets, and blue towns!",
        description: "Welcome to Morocco! The capital is Rabat. Morocco has golden sand dunes in the Sahara Desert, lively markets filled with sweet spices, and the famous blue-painted village of Chefchaouen!",
        color: "bg-orange-400",
        position: "top-[12%] left-[12%]"
      }
    ]
  }
];

// Backward compatibility export
export const europeData = continentsData[0].countries;
