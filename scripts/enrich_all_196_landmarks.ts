// scripts/enrich_all_196_landmarks.ts
import { WORLD_ALL_FLAGS } from "../app/data/world-flags-catalog";
import { WORLD_LANDMARKS_AND_FACTS, CountryLandmarksAndFacts, LandmarkPhoto } from "../app/data/country-landmarks-facts";
import * as fs from "fs";

interface CountryPlan {
  iso: string;
  name: string;
  needsGeo?: string[];
  needsWildlife?: string[];
  mode: "insert_geo_before_wildlife" | "append_wildlife" | "add_both" | "replace_wildlife_and_add_geo";
}

const PLANS: Record<string, CountryPlan> = {
  // === EUROPE (14 countries) ===
  hr: { iso: "hr", name: "Croatia", mode: "insert_geo_before_wildlife", needsGeo: ["Kornati", "Krka National Park", "Zlatni Rat"] },
  ee: { iso: "ee", name: "Estonia", mode: "insert_geo_before_wildlife", needsGeo: ["Lahemaa National Park", "Soomaa National Park"] },
  is: { iso: "is", name: "Iceland", mode: "insert_geo_before_wildlife", needsGeo: ["Vatnajökull", "Thingvellir National Park", "Landmannalaugar"] },
  ie: { iso: "ie", name: "Ireland", mode: "insert_geo_before_wildlife", needsGeo: ["Ring of Kerry", "Killarney National Park", "Connemara"] },
  lv: { iso: "lv", name: "Latvia", mode: "insert_geo_before_wildlife", needsGeo: ["Ķemeri National Park", "Venta Rapid", "Gauja National Park"] },
  li: { iso: "li", name: "Liechtenstein", mode: "insert_geo_before_wildlife", needsGeo: ["Grauspitz", "Rätikon"] },
  lt: { iso: "lt", name: "Lithuania", mode: "insert_geo_before_wildlife", needsGeo: ["Curonian Spit", "Aukštaitija National Park"] },
  mk: { iso: "mk", name: "North Macedonia", mode: "insert_geo_before_wildlife", needsGeo: ["Lake Ohrid", "Mavrovo National Park", "Pelister National Park"] },
  no: { iso: "no", name: "Norway", mode: "insert_geo_before_wildlife", needsGeo: ["Geirangerfjord", "Lofoten", "Preikestolen"] },
  ro: { iso: "ro", name: "Romania", mode: "append_wildlife", needsWildlife: ["Eurasian brown bear", "Eurasian lynx", "Chamois"] },
  ru: { iso: "ru", name: "Russia", mode: "insert_geo_before_wildlife", needsGeo: ["Lake Baikal", "Mount Elbrus", "Kamchatka Peninsula"] },
  sk: { iso: "sk", name: "Slovakia", mode: "insert_geo_before_wildlife", needsGeo: ["High Tatras", "Slovak Paradise National Park"] },
  si: { iso: "si", name: "Slovenia", mode: "insert_geo_before_wildlife", needsGeo: ["Postojna Cave", "Triglav", "Vintgar Gorge"] },
  ch: { iso: "ch", name: "Switzerland", mode: "insert_geo_before_wildlife", needsGeo: ["Matterhorn", "Jungfrau", "Aletsch Glacier"] },

  // === ASIA (27 countries) ===
  am: { iso: "am", name: "Armenia", mode: "insert_geo_before_wildlife", needsGeo: ["Lake Sevan", "Mount Aragats", "Garni Gorge"] },
  bh: { iso: "bh", name: "Bahrain", mode: "append_wildlife", needsWildlife: ["Arabian oryx", "Greater flamingo", "Dugong"] },
  bd: { iso: "bd", name: "Bangladesh", mode: "insert_geo_before_wildlife", needsGeo: ["Sundarbans", "Cox's Bazar Beach", "Srimangal Upazila"] },
  bt: { iso: "bt", name: "Bhutan", mode: "replace_wildlife_and_add_geo", needsGeo: ["Jigme Dorji National Park", "Dochula Pass", "Phobjikha Valley"], needsWildlife: ["Takin", "Red panda", "Black-necked crane"] },
  bn: { iso: "bn", name: "Brunei", mode: "insert_geo_before_wildlife", needsGeo: ["Ulu Temburong National Park", "Temburong District"] },
  id: { iso: "id", name: "Indonesia", mode: "insert_geo_before_wildlife", needsGeo: ["Mount Bromo", "Raja Ampat Islands", "Lake Toba"] },
  kw: { iso: "kw", name: "Kuwait", mode: "insert_geo_before_wildlife", needsGeo: ["Failaka Island", "Kuwait Bay", "Jaber Al-Ahmad Causeway"] },
  kg: { iso: "kg", name: "Kyrgyzstan", mode: "insert_geo_before_wildlife", needsGeo: ["Issyk-Kul", "Ala Archa National Park", "Tian Shan"] },
  lb: { iso: "lb", name: "Lebanon", mode: "insert_geo_before_wildlife", needsGeo: ["Jeita Grotto", "Kadisha Valley", "Cedars of God"] },
  my: { iso: "my", name: "Malaysia", mode: "insert_geo_before_wildlife", needsGeo: ["Mount Kinabalu", "Gunung Mulu National Park", "Batu Caves"] },
  mn: { iso: "mn", name: "Mongolia", mode: "insert_geo_before_wildlife", needsGeo: ["Gobi Desert", "Lake Khövsgöl", "Altai Mountains"] },
  mm: { iso: "mm", name: "Myanmar", mode: "insert_geo_before_wildlife", needsGeo: ["Inle Lake", "Mount Popa", "Hkakabo Razi"] },
  np: { iso: "np", name: "Nepal", mode: "insert_geo_before_wildlife", needsGeo: ["Annapurna Sanctuary", "Phewa Lake", "Mount Everest"] },
  kp: { iso: "kp", name: "North Korea", mode: "insert_geo_before_wildlife", needsGeo: ["Paektu Mountain", "Kumgangsan", "Myohyangsan"] },
  om: { iso: "om", name: "Oman", mode: "insert_geo_before_wildlife", needsGeo: ["Wahiba Sands", "Wadi Shab", "Jebel Akhdar (Oman)"] },
  pk: { iso: "pk", name: "Pakistan", mode: "insert_geo_before_wildlife", needsGeo: ["K2", "Hunza Valley", "Attabad Lake"] },
  ph: { iso: "ph", name: "Philippines", mode: "insert_geo_before_wildlife", needsGeo: ["Chocolate Hills", "Mayon", "Puerto Princesa Subterranean River National Park"] },
  qa: { iso: "qa", name: "Qatar", mode: "insert_geo_before_wildlife", needsGeo: ["Khor Al Adaid", "Al Thakhira", "Dahl Al Misfir"] },
  sg: { iso: "sg", name: "Singapore", mode: "insert_geo_before_wildlife", needsGeo: ["Bukit Timah Nature Reserve", "Sungei Buloh Wetland Reserve", "Sentosa"] },
  kr: { iso: "kr", name: "South Korea", mode: "insert_geo_before_wildlife", needsGeo: ["Hallasan", "Seoraksan", "Jeju Island"] },
  lk: { iso: "lk", name: "Sri Lanka", mode: "insert_geo_before_wildlife", needsGeo: ["Sinharaja Forest Reserve", "Yala National Park", "Sigiriya"] },
  sy: { iso: "sy", name: "Syria", mode: "insert_geo_before_wildlife", needsGeo: ["Euphrates", "Mount Hermon", "Palmyra"] },
  tl: { iso: "tl", name: "Timor-Leste", mode: "insert_geo_before_wildlife", needsGeo: ["Mount Ramelau", "Atauro Island", "Nino Konis Santana National Park"] },
  tr: { iso: "tr", name: "Turkey", mode: "insert_geo_before_wildlife", needsGeo: ["Pamukkale", "Cappadocia", "Mount Ararat"] },
  tm: { iso: "tm", name: "Turkmenistan", mode: "insert_geo_before_wildlife", needsGeo: ["Darvaza gas crater", "Yangykala Canyon", "Karakum Desert"] },
  vn: { iso: "vn", name: "Vietnam", mode: "insert_geo_before_wildlife", needsGeo: ["Ha Long Bay", "Son Doong Cave", "Mekong Delta"] },
  ye: { iso: "ye", name: "Yemen", mode: "insert_geo_before_wildlife", needsGeo: ["Socotra", "Haraz Mountains", "Wadi Dawan"] },

  // === AFRICA (36 countries) ===
  dz: { iso: "dz", name: "Algeria", mode: "insert_geo_before_wildlife", needsGeo: ["Tassili n'Ajjer", "Ahaggar Mountains", "Ghoufi"] },
  ao: { iso: "ao", name: "Angola", mode: "insert_geo_before_wildlife", needsGeo: ["Kalandula Falls", "Miradouro da Lua", "Iona National Park"] },
  bw: { iso: "bw", name: "Botswana", mode: "append_wildlife", needsWildlife: ["African bush elephant", "Plains zebra", "Cheetah"] },
  bi: { iso: "bi", name: "Burundi", mode: "append_wildlife", needsWildlife: ["Hippopotamus", "Chimpanzee", "African fish eagle"] },
  cm: { iso: "cm", name: "Cameroon", mode: "insert_geo_before_wildlife", needsGeo: ["Mount Cameroon", "Waza National Park", "Lake Nyos"] },
  km: { iso: "km", name: "Comoros", mode: "insert_geo_before_wildlife", needsGeo: ["Mount Karthala", "Mohéli Marine Park"] },
  cd: { iso: "cd", name: "Democratic Republic of the Congo", mode: "insert_geo_before_wildlife", needsGeo: ["Mount Nyiragongo", "Virunga National Park", "Boyoma Falls"] },
  cg: { iso: "cg", name: "Republic of the Congo", mode: "append_wildlife", needsWildlife: ["Western lowland gorilla", "Chimpanzee", "Bongo (antelope)"] },
  dj: { iso: "dj", name: "Djibouti", mode: "insert_geo_before_wildlife", needsGeo: ["Lake Assal (Djibouti)", "Gulf of Tadjoura", "Lake Abbe"] },
  gq: { iso: "gq", name: "Equatorial Guinea", mode: "insert_geo_before_wildlife", needsGeo: ["Monte Alén National Park", "Annobón", "Ureka, Equatorial Guinea"] },
  er: { iso: "er", name: "Eritrea", mode: "insert_geo_before_wildlife", needsGeo: ["Dahlak Archipelago", "Semenawi Bahri National Park"] },
  sz: { iso: "sz", name: "Eswatini", mode: "insert_geo_before_wildlife", needsGeo: ["Mlilwane Wildlife Sanctuary", "Komati River", "Sibebe"] },
  et: { iso: "et", name: "Ethiopia", mode: "insert_geo_before_wildlife", needsGeo: ["Simien Mountains National Park", "Danakil Depression", "Blue Nile Falls"] },
  ga: { iso: "ga", name: "Gabon", mode: "insert_geo_before_wildlife", needsGeo: ["Loango National Park", "Ivindo National Park", "Lopé National Park"] },
  ke: { iso: "ke", name: "Kenya", mode: "insert_geo_before_wildlife", needsGeo: ["Mount Kenya", "Great Rift Valley", "Lake Nakuru"] },
  ls: { iso: "ls", name: "Lesotho", mode: "insert_geo_before_wildlife", needsGeo: ["Maletsunyane Falls", "Drakensberg", "Sehlabathebe National Park"] },
  mg: { iso: "mg", name: "Madagascar", mode: "add_both", needsGeo: ["Isalo National Park", "Tsingy de Bemaraha", "Nosy Be"], needsWildlife: ["Ring-tailed lemur", "Fossa (animal)", "Aye-aye"] },
  mw: { iso: "mw", name: "Malawi", mode: "append_wildlife", needsWildlife: ["African fish eagle", "Lake Malawi cichlids", "African leopard"] },
  mr: { iso: "mr", name: "Mauritania", mode: "insert_geo_before_wildlife", needsGeo: ["Richat Structure", "Banc d'Arguin National Park"] },
  mu: { iso: "mu", name: "Mauritius", mode: "insert_geo_before_wildlife", needsGeo: ["Le Morne Brabant", "Seven Coloured Earths", "Trou aux Cerfs"] },
  mz: { iso: "mz", name: "Mozambique", mode: "insert_geo_before_wildlife", needsGeo: ["Bazaruto Archipelago", "Gorongosa National Park", "Quirimbas Islands"] },
  na: { iso: "na", name: "Namibia", mode: "insert_geo_before_wildlife", needsGeo: ["Fish River Canyon", "Sossusvlei", "Skeleton Coast"] },
  ne: { iso: "ne", name: "Niger", mode: "insert_geo_before_wildlife", needsGeo: ["Aïr Mountains", "Ténéré", "W National Park"] },
  ng: { iso: "ng", name: "Nigeria", mode: "insert_geo_before_wildlife", needsGeo: ["Zuma Rock", "Aso Rock", "Niger River"] },
  rw: { iso: "rw", name: "Rwanda", mode: "insert_geo_before_wildlife", needsGeo: ["Virunga Mountains", "Lake Kivu", "Nyungwe National Park"] },
  st: { iso: "st", name: "São Tomé and Príncipe", mode: "insert_geo_before_wildlife", needsGeo: ["Pico Cão Grande", "Obo National Park", "Ilhéu das Rolas"] },
  sn: { iso: "sn", name: "Senegal", mode: "insert_geo_before_wildlife", needsGeo: ["Djoudj National Bird Sanctuary", "Lake Retba", "Saloum Delta"] },
  sc: { iso: "sc", name: "Seychelles", mode: "insert_geo_before_wildlife", needsGeo: ["Morne Seychellois National Park", "Anse Source d'Argent", "Cousin Island"] },
  so: { iso: "so", name: "Somalia", mode: "insert_geo_before_wildlife", needsGeo: ["Cape Guardafui", "Shebelle River", "Cal Madow"] },
  za: { iso: "za", name: "South Africa", mode: "insert_geo_before_wildlife", needsGeo: ["Blyde River Canyon", "Drakensberg", "Cape Point"] },
  ss: { iso: "ss", name: "South Sudan", mode: "insert_geo_before_wildlife", needsGeo: ["Sudd", "Boma National Park", "Mount Kinyeti"] },
  sd: { iso: "sd", name: "Sudan", mode: "insert_geo_before_wildlife", needsGeo: ["Bayuda Desert", "Jebel Barkal", "Red Sea"] },
  tz: { iso: "tz", name: "Tanzania", mode: "insert_geo_before_wildlife", needsGeo: ["Ngorongoro Conservation Area", "Mount Kilimanjaro", "Lake Tanganyika"] },
  ug: { iso: "ug", name: "Uganda", mode: "add_both", needsGeo: ["Mount Stanley (Rwenzori)", "Lake Victoria", "Sipi Falls"], needsWildlife: ["Grey crowned crane", "Mountain gorilla", "Shoebill"] },
  zm: { iso: "zm", name: "Zambia", mode: "insert_geo_before_wildlife", needsGeo: ["Victoria Falls", "South Luangwa National Park", "Lower Zambezi National Park"] },
  zw: { iso: "zw", name: "Zimbabwe", mode: "insert_geo_before_wildlife", needsGeo: ["Matobo National Park", "Mana Pools National Park", "Victoria Falls"] },

  // === NORTH AMERICA (21 countries) ===
  bs: { iso: "bs", name: "Bahamas", mode: "insert_geo_before_wildlife", needsGeo: ["Dean's Blue Hole", "Andros Barrier Reef", "Exuma"] },
  bb: { iso: "bb", name: "Barbados", mode: "insert_geo_before_wildlife", needsGeo: ["Harrison's Cave", "Bathsheba, Barbados", "Animal Flower Cave"] },
  bz: { iso: "bz", name: "Belize", mode: "insert_geo_before_wildlife", needsGeo: ["Belize Barrier Reef", "Great Blue Hole", "Cockscomb Basin Wildlife Sanctuary"] },
  ca: { iso: "ca", name: "Canada", mode: "insert_geo_before_wildlife", needsGeo: ["Moraine Lake", "Canadian Rockies", "Bay of Fundy"] },
  cr: { iso: "cr", name: "Costa Rica", mode: "insert_geo_before_wildlife", needsGeo: ["Arenal Volcano", "Monteverde Cloud Forest Reserve", "Tortuguero National Park"] },
  cu: { iso: "cu", name: "Cuba", mode: "insert_geo_before_wildlife", needsGeo: ["Viñales Valley", "Alejandro de Humboldt National Park", "Zapata Swamp"] },
  do: { iso: "do", name: "Dominican Republic", mode: "insert_geo_before_wildlife", needsGeo: ["Pico Duarte", "Los Haitises National Park", "Lake Enriquillo"] },
  sv: { iso: "sv", name: "El Salvador", mode: "insert_geo_before_wildlife", needsGeo: ["Lake Coatepeque", "Santa Ana Volcano", "El Imposible National Park"] },
  gd: { iso: "gd", name: "Grenada", mode: "insert_geo_before_wildlife", needsGeo: ["Grand Etang Lake", "Levera National Park", "Carriacou"] },
  gt: { iso: "gt", name: "Guatemala", mode: "insert_geo_before_wildlife", needsGeo: ["Semuc Champey", "Lake Atitlán", "Pacaya"] },
  ht: { iso: "ht", name: "Haiti", mode: "insert_geo_before_wildlife", needsGeo: ["Pic la Selle", "Bassin Bleu", "Île de la Tortue"] },
  hn: { iso: "hn", name: "Honduras", mode: "insert_geo_before_wildlife", needsGeo: ["Río Plátano Biosphere Reserve", "Lake Yojoa", "Pico Bonito National Park"] },
  jm: { iso: "jm", name: "Jamaica", mode: "add_both", needsGeo: ["Cockpit Country", "Reach Falls", "Blue Mountains (Jamaica)"], needsWildlife: ["Red-billed streamertail", "Jamaican boa", "Jamaican iguana"] },
  mx: { iso: "mx", name: "Mexico", mode: "insert_geo_before_wildlife", needsGeo: ["Copper Canyon", "Cenote", "Sumidero Canyon"] },
  ni: { iso: "ni", name: "Nicaragua", mode: "insert_geo_before_wildlife", needsGeo: ["Ometepe", "Somoto Canyon National Monument", "Corn Islands"] },
  pa: { iso: "pa", name: "Panama", mode: "insert_geo_before_wildlife", needsGeo: ["San Blas Islands", "Volcán Barú", "Coiba"] },
  kn: { iso: "kn", name: "Saint Kitts and Nevis", mode: "insert_geo_before_wildlife", needsGeo: ["Mount Liamuiga", "Nevis Peak"] },
  lc: { iso: "lc", name: "Saint Lucia", mode: "insert_geo_before_wildlife", needsGeo: ["Gros Piton", "Petit Piton", "Saint Lucia"] },
  vc: { iso: "vc", name: "Saint Vincent and the Grenadines", mode: "insert_geo_before_wildlife", needsGeo: ["La Soufrière (Saint Vincent)", "Tobago Cays"] },
  tt: { iso: "tt", name: "Trinidad and Tobago", mode: "insert_geo_before_wildlife", needsGeo: ["Pitch Lake", "Caroni Swamp", "Maracas Beach"] },
  us: { iso: "us", name: "United States", mode: "insert_geo_before_wildlife", needsGeo: ["Yosemite Valley", "Monument Valley", "Denali"] },

  // === SOUTH AMERICA (9 countries) ===
  ar: { iso: "ar", name: "Argentina", mode: "insert_geo_before_wildlife", needsGeo: ["Aconcagua", "Fitz Roy", "Quebrada de Humahuaca"] },
  br: { iso: "br", name: "Brazil", mode: "insert_geo_before_wildlife", needsGeo: ["Iguazu Falls", "Pantanal", "Sugarloaf Mountain"] },
  cl: { iso: "cl", name: "Chile", mode: "insert_geo_before_wildlife", needsGeo: ["Atacama Desert", "Torres del Paine National Park", "El Tatio"] },
  co: { iso: "co", name: "Colombia", mode: "insert_geo_before_wildlife", needsGeo: ["Cocora Valley", "Caño Cristales", "Tayrona National Natural Park"] },
  ec: { iso: "ec", name: "Ecuador", mode: "insert_geo_before_wildlife", needsGeo: ["Cotopaxi", "Quilotoa", "Chimborazo"] },
  gy: { iso: "gy", name: "Guyana", mode: "insert_geo_before_wildlife", needsGeo: ["Mount Roraima", "Kaieteur Falls", "Iwokrama Forest"] },
  pe: { iso: "pe", name: "Peru", mode: "insert_geo_before_wildlife", needsGeo: ["Vinicunca", "Lake Titicaca", "Colca Canyon"] },
  sr: { iso: "sr", name: "Suriname", mode: "insert_geo_before_wildlife", needsGeo: ["Central Suriname Nature Reserve", "Brownsberg Nature Park", "Voltzberg"] },
  ve: { iso: "ve", name: "Venezuela", mode: "insert_geo_before_wildlife", needsGeo: ["Mount Roraima", "Angel Falls", "Los Roques archipelago"] },

  // === OCEANIA (12 countries) ===
  au: { iso: "au", name: "Australia", mode: "insert_geo_before_wildlife", needsGeo: ["Twelve Apostles (Victoria)", "Daintree Rainforest", "Bungle Bungle Range"] },
  ki: { iso: "ki", name: "Kiribati", mode: "insert_geo_before_wildlife", needsGeo: ["Phoenix Islands Protected Area", "Kiritimati", "Tabuaeran"] },
  mh: { iso: "mh", name: "Marshall Islands", mode: "insert_geo_before_wildlife", needsGeo: ["Bikini Atoll", "Maloelap Atoll", "Jaluit Atoll"] },
  nr: { iso: "nr", name: "Nauru", mode: "insert_geo_before_wildlife", needsGeo: ["Buada Lagoon", "Anibare Bay"] },
  nz: { iso: "nz", name: "New Zealand", mode: "insert_geo_before_wildlife", needsGeo: ["Tongariro National Park", "Franz Josef Glacier", "Waitomo Caves"] },
  pw: { iso: "pw", name: "Palau", mode: "insert_geo_before_wildlife", needsGeo: ["Rock Islands", "Jellyfish Lake", "Palau"] },
  pg: { iso: "pg", name: "Papua New Guinea", mode: "insert_geo_before_wildlife", needsGeo: ["Mount Wilhelm", "Tavurvur", "Sepik River"] },
  ws: { iso: "ws", name: "Samoa", mode: "insert_geo_before_wildlife", needsGeo: ["Savaiʻi", "Upolu", "To Sua Ocean Trench"] },
  sb: { iso: "sb", name: "Solomon Islands", mode: "insert_geo_before_wildlife", needsGeo: ["Marovo Lagoon", "Lake Tegano", "Kolombangara"] },
  to: { iso: "to", name: "Tonga", mode: "replace_wildlife_and_add_geo", needsGeo: ["Tongatapu", "Haʻapai"], needsWildlife: ["Humpback whale", "Pteropus"] },
  tv: { iso: "tv", name: "Tuvalu", mode: "insert_geo_before_wildlife", needsGeo: ["Funafuti", "Nanumea", "Niutao"] },
  vu: { iso: "vu", name: "Vanuatu", mode: "insert_geo_before_wildlife", needsGeo: ["Mount Yasur", "Espiritu Santo", "Ambrym"] }
};

export { PLANS };

async function fetchWikiPhoto(titles: string[]): Promise<LandmarkPhoto | null> {
  for (const t of titles) {
    try {
      const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(t.replace(/ /g, "_"))}`;
      const res = await fetch(url, {
        headers: { "User-Agent": "WorldAtlasApp/1.0 (educational applet)" }
      });
      if (!res.ok) continue;
      const data = await res.json();
      if (data.thumbnail?.source) {
        let extract = data.extract || "";
        // Clean extract to 1-2 clean sentences
        const sentences = extract.match(/[^.!?]+[.!?]+/g) || [extract];
        const caption = sentences.slice(0, 2).join(" ").trim();
        return {
          title: data.title,
          caption: caption.length > 20 ? caption : `${data.title} is a renowned natural feature of the country.`,
          url: data.thumbnail.source
        };
      }
    } catch (e) {
      // Continue to fallback title
    }
  }
  return null;
}

async function runEnrichment() {
  console.log("Beginning enrichment of all countries under 5 landmarks...");
  const db: Record<string, CountryLandmarksAndFacts> = { ...WORLD_LANDMARKS_AND_FACTS };

  let processedCount = 0;
  let failedIso: string[] = [];

  for (const [iso, plan] of Object.entries(PLANS)) {
    const entry = db[iso];
    if (!entry) {
      console.warn(`No entry found in database for ISO ${iso}`);
      continue;
    }

    const currentLandmarks = [...entry.landmarks];

    if (plan.mode === "insert_geo_before_wildlife") {
      const geoPhoto = await fetchWikiPhoto(plan.needsGeo || []);
      if (!geoPhoto) {
        console.error(`FAILED to fetch Geo for ${iso} (${plan.name}):`, plan.needsGeo);
        failedIso.push(iso);
        continue;
      }
      // Insert geo before the last item (which is wildlife)
      // e.g. [L0, L1, L2, Wildlife] -> [L0, L1, L2, Geo, Wildlife]
      const wildlife = currentLandmarks.pop()!;
      currentLandmarks.push(geoPhoto);
      currentLandmarks.push(wildlife);
      entry.landmarks = currentLandmarks;
      processedCount++;
    } else if (plan.mode === "append_wildlife") {
      const wildPhoto = await fetchWikiPhoto(plan.needsWildlife || []);
      if (!wildPhoto) {
        console.error(`FAILED to fetch Wildlife for ${iso} (${plan.name}):`, plan.needsWildlife);
        failedIso.push(iso);
        continue;
      }
      currentLandmarks.push(wildPhoto);
      entry.landmarks = currentLandmarks;
      processedCount++;
    } else if (plan.mode === "add_both") {
      const geoPhoto = await fetchWikiPhoto(plan.needsGeo || []);
      const wildPhoto = await fetchWikiPhoto(plan.needsWildlife || []);
      if (!geoPhoto || !wildPhoto) {
        console.error(`FAILED to fetch both for ${iso} (${plan.name})`);
        failedIso.push(iso);
        continue;
      }
      currentLandmarks.push(geoPhoto);
      currentLandmarks.push(wildPhoto);
      entry.landmarks = currentLandmarks;
      processedCount++;
    } else if (plan.mode === "replace_wildlife_and_add_geo") {
      const geoPhoto = await fetchWikiPhoto(plan.needsGeo || []);
      const wildPhoto = await fetchWikiPhoto(plan.needsWildlife || []);
      if (!geoPhoto || !wildPhoto) {
        console.error(`FAILED to fetch replace/add for ${iso} (${plan.name})`);
        failedIso.push(iso);
        continue;
      }
      // Replace item 3 with geoPhoto and add wildPhoto as item 4
      if (currentLandmarks.length >= 4) {
        currentLandmarks[3] = geoPhoto;
      } else {
        currentLandmarks.push(geoPhoto);
      }
      currentLandmarks.push(wildPhoto);
      entry.landmarks = currentLandmarks;
      processedCount++;
    }

    console.log(`[${processedCount}/${Object.keys(PLANS).length}] Processed ${iso.toUpperCase()} (${plan.name}) -> ${entry.landmarks.length} items`);
  }

  console.log(`\nEnrichment finished. Successfully updated: ${processedCount}, Failed: ${failedIso.length}`);

  if (failedIso.length > 0) {
    console.error("Stopping due to failures:", failedIso);
    return;
  }

  // Verification across ALL 196 countries in WORLD_ALL_FLAGS
  console.log("\nVerifying all 196 nations...");
  let allGood = true;
  let countDistribution: Record<number, number> = {};

  for (const flag of WORLD_ALL_FLAGS) {
    const iso = flag.iso2.toLowerCase();
    const entry = db[iso];
    if (!entry) {
      console.error(`CRITICAL: Country missing from database: ${flag.name} (${iso})`);
      allGood = false;
      continue;
    }
    const count = entry.landmarks.length;
    countDistribution[count] = (countDistribution[count] || 0) + 1;

    if (count < 5) {
      console.error(`CRITICAL: Country has fewer than 5 landmarks: ${flag.name} (${iso}) has ${count}`);
      allGood = false;
    }

    // Verify each photo
    entry.landmarks.forEach((p, idx) => {
      if (!p.title || !p.caption || !p.url || !p.url.startsWith("https://")) {
        console.error(`CRITICAL: Invalid photo at index ${idx} for ${flag.name} (${iso})`, p);
        allGood = false;
      }
    });
  }

  console.log("Count distribution across all 196 countries:", countDistribution);

  if (!allGood) {
    console.error("Verification failed! Not writing to file.");
    return;
  }

  // Write to app/data/country-landmarks-facts.ts
  const outputContent = `export interface LandmarkPhoto {
  title: string;
  caption: string;
  url: string;
}

export interface CountryLandmarksAndFacts {
  facts: string[];
  landmarks: LandmarkPhoto[];
}

export const WORLD_LANDMARKS_AND_FACTS: Record<string, CountryLandmarksAndFacts> = ${JSON.stringify(db, null, 2)};
`;

  fs.writeFileSync("app/data/country-landmarks-facts.ts", outputContent, "utf-8");
  console.log("Successfully wrote updated WORLD_LANDMARKS_AND_FACTS to app/data/country-landmarks-facts.ts!");
}

runEnrichment();
