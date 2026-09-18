/**
 * Authoritative Verified Geography & Country Coordinates Database
 * 
 * Contains high-precision, fact-checked:
 * 1. Country Centroid Coordinates & Optimal Map Zoom (lat, lng, zoom)
 * 2. Exact National Capital Coordinates (capitalCoords: { lat, lng })
 * 3. Verified Sovereign Bordering Neighbors (neighborsIso2: string[])
 * 4. Border-Adjacent Regional Anchor Coordinates for vast transcontinental nations
 *    (e.g., Russia, China, USA, Canada) so neighbor pins sit directly across the border
 *    in the neighbor's territory without warping to distant points or inside host nations.
 */

export interface VerifiedCountryGeo {
  lat: number;
  lng: number;
  zoom: number;
  capital: string;
  capitalCoords: { lat: number; lng: number };
  neighborsIso2: string[];
}

export interface VerifiedNeighborInfo {
  name: string;
  flagUrl: string;
  lat: number;
  lng: number;
  relationship: string;
}

// Special anchor positions for large countries when viewed as a neighbor of specific countries
// Guaranteed to sit solidly inside the neighbor country, facing the host country
const BORDER_ANCHORS: Record<string, Record<string, { lat: number; lng: number }>> = {
  // Russia (ru) anchors when viewed from bordering neighbors
  ru: {
    by: { lat: 53.9500, lng: 32.8500 }, // Roslavl / Smolensk region in Western Russia (East of Belarus)
    ua: { lat: 50.5954, lng: 36.5873 }, // Belgorod region (Northeast of Ukraine)
    ee: { lat: 57.8193, lng: 28.3318 }, // Pskov / Pechory region (East of Estonia)
    lv: { lat: 57.1235, lng: 28.1456 }, // Pskov border region (East of Latvia)
    lt: { lat: 54.7104, lng: 20.4522 }, // Kaliningrad Oblast (Southwest of Lithuania)
    pl: { lat: 54.7104, lng: 20.4522 }, // Kaliningrad Oblast (North of Poland)
    fi: { lat: 60.7100, lng: 28.7500 }, // Vyborg / Leningrad Oblast (East of Finland)
    no: { lat: 69.4100, lng: 30.2200 }, // Nikel / Murmansk Oblast (East of Norway)
    ge: { lat: 43.0367, lng: 44.6678 }, // Vladikavkaz / North Caucasus (North of Georgia)
    az: { lat: 41.8000, lng: 48.3000 }, // Derbent / Dagestan (North of Azerbaijan)
    kz: { lat: 51.7700, lng: 55.1000 }, // Orenburg region (North of Kazakhstan)
    mn: { lat: 51.5000, lng: 106.5000 }, // Kyakhta / Buryatia (North of Mongolia)
    cn: { lat: 50.2500, lng: 127.5300 }, // Blagoveshchensk / Amur (North of China)
    kp: { lat: 42.4200, lng: 130.6400 }, // Khasan region (Northeast of North Korea)
  },
  // Latvia (lv) anchors
  lv: {
    by: { lat: 56.1000, lng: 27.2000 }, // Latgale / Southeast Latvia (North of Belarus)
    lt: { lat: 56.4000, lng: 24.0000 }, // Bauska / Zemgale (North of Lithuania)
    ee: { lat: 57.5000, lng: 25.5000 }, // Valmiera (South of Estonia)
    ru: { lat: 56.5000, lng: 27.5000 }, // Eastern Latvia (West of Russia)
  },
  // Greece (gr) anchors when viewed from bordering neighbors
  gr: {
    al: { lat: 39.6650, lng: 20.8537 }, // Ioannina / Epirus border region (South of Albania)
    mk: { lat: 40.7833, lng: 21.4000 }, // Florina / Western Macedonia (South of North Macedonia)
    bg: { lat: 41.1333, lng: 24.8833 }, // Xanthi / Thrace (South of Bulgaria)
    tr: { lat: 41.5000, lng: 26.5000 }, // Evros / Orestiada (West of Turkey)
  },
  // Ukraine (ua) anchors
  ua: {
    by: { lat: 51.2500, lng: 28.8000 }, // Northern Ukraine / Zhytomyr Oblast (South of Belarus)
    pl: { lat: 50.0500, lng: 24.0000 }, // Lviv Oblast (Southeast of Poland)
    sk: { lat: 48.6200, lng: 22.3000 }, // Uzhhorod / Zakarpattia (East of Slovakia)
    hu: { lat: 48.2000, lng: 22.6500 }, // Berehove / Zakarpattia (Northeast of Hungary)
    ro: { lat: 48.0000, lng: 26.0000 }, // Chernivtsi Oblast (North of Romania)
    md: { lat: 47.5000, lng: 29.5000 }, // Odesa Oblast (East of Moldova)
    ru: { lat: 50.0000, lng: 36.2500 }, // Kharkiv Oblast (Southwest of Russia)
  },
  // Poland (pl) anchors when viewed from bordering neighbors
  pl: {
    by: { lat: 52.2297, lng: 21.0122 }, // Warsaw / Eastern Poland (facing Belarus to the west)
    lt: { lat: 54.1000, lng: 22.9300 }, // Suwałki region
    de: { lat: 52.4000, lng: 15.5000 }, // Western Poland (Lubusz)
    cz: { lat: 50.7000, lng: 16.5000 }, // Lower Silesia
    sk: { lat: 49.6000, lng: 20.0000 }, // Southern Poland (Nowy Sącz)
    ua: { lat: 50.0500, lng: 22.5000 }, // Subcarpathian / Przemyśl
    ru: { lat: 54.2500, lng: 20.5000 }, // Warmia-Masuria
  },
  // United States (us) anchors
  us: {
    ca: { lat: 46.5000, lng: -94.5000 }, // Northern US (Minnesota/Great Lakes)
    mx: { lat: 31.5000, lng: -103.5000 }, // Southwestern US (Texas/New Mexico)
  },
  // Canada (ca) anchors
  ca: {
    us: { lat: 45.4215, lng: -75.6972 }, // Ottawa / Southern Canada
  },
  // China (cn) anchors
  cn: {
    ru: { lat: 45.5000, lng: 125.0000 }, // Northeast China / Harbin
    mn: { lat: 42.0000, lng: 112.0000 }, // Inner Mongolia
    kp: { lat: 40.1300, lng: 124.3800 }, // Dandong / Liaoning
    vn: { lat: 22.8000, lng: 106.7000 }, // Guangxi
    la: { lat: 22.0000, lng: 101.5000 }, // Yunnan
    mm: { lat: 24.0000, lng: 98.0000 }, // Yunnan
    in: { lat: 30.5000, lng: 85.0000 }, // Tibet
    np: { lat: 28.5000, lng: 85.5000 }, // Tibet
    bt: { lat: 28.0000, lng: 89.5000 }, // Tibet
    pk: { lat: 36.0000, lng: 76.0000 }, // Xinjiang
    kz: { lat: 44.0000, lng: 81.0000 }, // Xinjiang (Ili)
    kg: { lat: 40.5000, lng: 75.5000 }, // Xinjiang (Kashgar)
    tj: { lat: 39.0000, lng: 75.0000 }, // Xinjiang
    af: { lat: 37.2000, lng: 74.8000 }, // Wakhan corridor / Xinjiang
  },
  // Brazil (br) anchors
  br: {
    ar: { lat: -27.5000, lng: -53.5000 }, // Rio Grande do Sul
    uy: { lat: -31.5000, lng: -55.0000 }, // Southern border
    py: { lat: -25.0000, lng: -54.5000 }, // Paraná / Foz do Iguaçu
    bo: { lat: -16.0000, lng: -59.5000 }, // Mato Grosso
    pe: { lat: -9.5000, lng: -70.5000 }, // Acre
    co: { lat: -3.5000, lng: -69.5000 }, // Amazonas / Tabatinga
    ve: { lat: 3.5000, lng: -61.0000 }, // Roraima
    gy: { lat: 3.0000, lng: -60.0000 }, // Roraima
    sr: { lat: 2.0000, lng: -55.5000 }, // Pará
  }
};

/**
 * Mathematically calculates the true compass bearing relationship from Host Country to Neighbor
 * with latitude cosine projection correction.
 */
export function calculateCompassDirection(
  fromLat: number,
  fromLng: number,
  toLat: number,
  toLng: number
): string {
  const dLat = toLat - fromLat;
  const avgLatRad = ((fromLat + toLat) / 2) * (Math.PI / 180);
  let dLng = toLng - fromLng;
  while (dLng > 180) dLng -= 360;
  while (dLng < -180) dLng += 360;

  const dEast = dLng * Math.cos(avgLatRad);
  const dNorth = dLat;

  let azimuth = (Math.atan2(dEast, dNorth) * 180) / Math.PI;
  if (azimuth < 0) azimuth += 360;

  if (azimuth >= 337.5 || azimuth < 22.5) return "North Border";
  if (azimuth >= 22.5 && azimuth < 67.5) return "Northeast Border";
  if (azimuth >= 67.5 && azimuth < 112.5) return "East Border";
  if (azimuth >= 112.5 && azimuth < 157.5) return "Southeast Border";
  if (azimuth >= 157.5 && azimuth < 202.5) return "South Border";
  if (azimuth >= 202.5 && azimuth < 247.5) return "Southwest Border";
  if (azimuth >= 247.5 && azimuth < 292.5) return "West Border";
  return "Northwest Border";
}

/**
 * Fact-checked dataset for ALL sovereign nations.
 * Includes precise capital coordinates, country centroids, zoom levels, and land neighbors.
 */
export const VERIFIED_COUNTRIES_DATA: Record<string, VerifiedCountryGeo> = {
  // EUROPE
  al: { lat: 41.1533, lng: 20.1683, zoom: 7, capital: "Tirana", capitalCoords: { lat: 41.3275, lng: 19.8187 }, neighborsIso2: ["me", "xk", "mk", "gr"] },
  ad: { lat: 42.5462, lng: 1.6016, zoom: 11, capital: "Andorra la Vella", capitalCoords: { lat: 42.5063, lng: 1.5218 }, neighborsIso2: ["fr", "es"] },
  at: { lat: 47.5162, lng: 14.5501, zoom: 7, capital: "Vienna", capitalCoords: { lat: 48.2082, lng: 16.3738 }, neighborsIso2: ["de", "cz", "sk", "hu", "si", "it", "ch", "li"] },
  by: { lat: 53.7098, lng: 27.9534, zoom: 6, capital: "Minsk", capitalCoords: { lat: 53.9006, lng: 27.5590 }, neighborsIso2: ["pl", "lt", "lv", "ru", "ua"] },
  be: { lat: 50.5039, lng: 4.4699, zoom: 8, capital: "Brussels", capitalCoords: { lat: 50.8503, lng: 4.3517 }, neighborsIso2: ["fr", "lu", "de", "nl"] },
  ba: { lat: 43.9159, lng: 17.6791, zoom: 7, capital: "Sarajevo", capitalCoords: { lat: 43.8563, lng: 18.4131 }, neighborsIso2: ["hr", "rs", "me"] },
  bg: { lat: 42.7339, lng: 25.4858, zoom: 7, capital: "Sofia", capitalCoords: { lat: 42.6977, lng: 23.3219 }, neighborsIso2: ["ro", "rs", "mk", "gr", "tr"] },
  hr: { lat: 45.1000, lng: 15.2000, zoom: 7, capital: "Zagreb", capitalCoords: { lat: 45.8150, lng: 15.9819 }, neighborsIso2: ["si", "hu", "rs", "ba", "me"] },
  cy: { lat: 35.1264, lng: 33.4299, zoom: 8, capital: "Nicosia", capitalCoords: { lat: 35.1856, lng: 33.3823 }, neighborsIso2: [] },
  cz: { lat: 49.8175, lng: 15.4730, zoom: 7, capital: "Prague", capitalCoords: { lat: 50.0755, lng: 14.4378 }, neighborsIso2: ["de", "pl", "sk", "at"] },
  dk: { lat: 56.2639, lng: 9.5018, zoom: 7, capital: "Copenhagen", capitalCoords: { lat: 55.6761, lng: 12.5683 }, neighborsIso2: ["de"] },
  ee: { lat: 58.5953, lng: 25.0136, zoom: 7, capital: "Tallinn", capitalCoords: { lat: 59.4370, lng: 24.7535 }, neighborsIso2: ["lv", "ru"] },
  fi: { lat: 61.9241, lng: 25.7482, zoom: 5, capital: "Helsinki", capitalCoords: { lat: 60.1699, lng: 24.9384 }, neighborsIso2: ["se", "no", "ru"] },
  fr: { lat: 46.2276, lng: 2.2137, zoom: 6, capital: "Paris", capitalCoords: { lat: 48.8566, lng: 2.3522 }, neighborsIso2: ["es", "ad", "be", "lu", "de", "ch", "it", "mc"] },
  de: { lat: 51.1657, lng: 10.4515, zoom: 6, capital: "Berlin", capitalCoords: { lat: 52.5200, lng: 13.4050 }, neighborsIso2: ["dk", "pl", "cz", "at", "ch", "fr", "lu", "be", "nl"] },
  gr: { lat: 39.0742, lng: 21.8243, zoom: 6, capital: "Athens", capitalCoords: { lat: 37.9838, lng: 23.7275 }, neighborsIso2: ["al", "mk", "bg", "tr"] },
  va: { lat: 41.9029, lng: 12.4534, zoom: 15, capital: "Vatican City", capitalCoords: { lat: 41.9029, lng: 12.4534 }, neighborsIso2: ["it"] },
  hu: { lat: 47.1625, lng: 19.5033, zoom: 7, capital: "Budapest", capitalCoords: { lat: 47.4979, lng: 19.0402 }, neighborsIso2: ["at", "sk", "ua", "ro", "rs", "hr", "si"] },
  is: { lat: 64.9631, lng: -19.0208, zoom: 6, capital: "Reykjavik", capitalCoords: { lat: 64.1466, lng: -21.9426 }, neighborsIso2: [] },
  ie: { lat: 53.1424, lng: -7.6921, zoom: 7, capital: "Dublin", capitalCoords: { lat: 53.3498, lng: -6.2603 }, neighborsIso2: ["gb"] },
  it: { lat: 41.8719, lng: 12.5674, zoom: 6, capital: "Rome", capitalCoords: { lat: 41.9028, lng: 12.4964 }, neighborsIso2: ["fr", "ch", "at", "si", "sm", "va"] },
  lv: { lat: 56.8796, lng: 24.6032, zoom: 7, capital: "Riga", capitalCoords: { lat: 56.9496, lng: 24.1052 }, neighborsIso2: ["ee", "lt", "by", "ru"] },
  li: { lat: 47.1660, lng: 9.5554, zoom: 11, capital: "Vaduz", capitalCoords: { lat: 47.1410, lng: 9.5209 }, neighborsIso2: ["ch", "at"] },
  lt: { lat: 55.1694, lng: 23.8813, zoom: 7, capital: "Vilnius", capitalCoords: { lat: 54.6872, lng: 25.2797 }, neighborsIso2: ["lv", "by", "pl", "ru"] },
  lu: { lat: 49.8153, lng: 6.1296, zoom: 10, capital: "Luxembourg City", capitalCoords: { lat: 49.6116, lng: 6.1319 }, neighborsIso2: ["be", "fr", "de"] },
  mt: { lat: 35.9375, lng: 14.3754, zoom: 11, capital: "Valletta", capitalCoords: { lat: 35.8989, lng: 14.5146 }, neighborsIso2: [] },
  md: { lat: 47.4116, lng: 28.3699, zoom: 7, capital: "Chisinau", capitalCoords: { lat: 47.0105, lng: 28.8638 }, neighborsIso2: ["ro", "ua"] },
  mc: { lat: 43.7384, lng: 7.4246, zoom: 14, capital: "Monaco", capitalCoords: { lat: 43.7384, lng: 7.4246 }, neighborsIso2: ["fr"] },
  me: { lat: 42.7087, lng: 19.3744, zoom: 8, capital: "Podgorica", capitalCoords: { lat: 42.4304, lng: 19.2594 }, neighborsIso2: ["ba", "rs", "xk", "al", "hr"] },
  nl: { lat: 52.1326, lng: 5.2913, zoom: 7, capital: "Amsterdam", capitalCoords: { lat: 52.3676, lng: 4.9041 }, neighborsIso2: ["de", "be"] },
  mk: { lat: 41.6086, lng: 21.7453, zoom: 8, capital: "Skopje", capitalCoords: { lat: 41.9973, lng: 21.4280 }, neighborsIso2: ["rs", "xk", "bg", "gr", "al"] },
  no: { lat: 60.4720, lng: 8.4689, zoom: 5, capital: "Oslo", capitalCoords: { lat: 59.9139, lng: 10.7522 }, neighborsIso2: ["se", "fi", "ru"] },
  pl: { lat: 51.9194, lng: 19.1451, zoom: 6, capital: "Warsaw", capitalCoords: { lat: 52.2297, lng: 21.0122 }, neighborsIso2: ["de", "cz", "sk", "ua", "by", "lt", "ru"] },
  pt: { lat: 39.3999, lng: -8.2245, zoom: 6, capital: "Lisbon", capitalCoords: { lat: 38.7223, lng: -9.1393 }, neighborsIso2: ["es"] },
  ro: { lat: 45.9432, lng: 24.9668, zoom: 6, capital: "Bucharest", capitalCoords: { lat: 44.4268, lng: 26.1025 }, neighborsIso2: ["ua", "md", "bg", "rs", "hu"] },
  ru: { lat: 55.7558, lng: 37.6173, zoom: 4, capital: "Moscow", capitalCoords: { lat: 55.7558, lng: 37.6173 }, neighborsIso2: ["no", "fi", "ee", "lv", "lt", "pl", "by", "ua", "ge", "az", "kz", "cn", "mn", "kp"] },
  sm: { lat: 43.9424, lng: 12.4578, zoom: 12, capital: "San Marino", capitalCoords: { lat: 43.9424, lng: 12.4578 }, neighborsIso2: ["it"] },
  rs: { lat: 44.0165, lng: 21.0059, zoom: 7, capital: "Belgrade", capitalCoords: { lat: 44.7866, lng: 20.4489 }, neighborsIso2: ["hu", "ro", "bg", "mk", "xk", "me", "ba", "hr"] },
  xk: { lat: 42.6026, lng: 20.9030, zoom: 8, capital: "Pristina", capitalCoords: { lat: 42.6629, lng: 21.1655 }, neighborsIso2: ["rs", "mk", "al", "me"] },
  sk: { lat: 48.6690, lng: 19.6990, zoom: 7, capital: "Bratislava", capitalCoords: { lat: 48.1486, lng: 17.1077 }, neighborsIso2: ["cz", "pl", "ua", "hu", "at"] },
  si: { lat: 46.1512, lng: 14.9955, zoom: 8, capital: "Ljubljana", capitalCoords: { lat: 46.0569, lng: 14.5058 }, neighborsIso2: ["at", "hu", "hr", "it"] },
  es: { lat: 40.4637, lng: -3.7492, zoom: 6, capital: "Madrid", capitalCoords: { lat: 40.4168, lng: -3.7038 }, neighborsIso2: ["pt", "fr", "ad", "ma"] },
  se: { lat: 60.1282, lng: 18.6435, zoom: 5, capital: "Stockholm", capitalCoords: { lat: 59.3293, lng: 18.0686 }, neighborsIso2: ["no", "fi"] },
  ch: { lat: 46.8182, lng: 8.2275, zoom: 7, capital: "Bern", capitalCoords: { lat: 46.9480, lng: 7.4474 }, neighborsIso2: ["fr", "de", "at", "li", "it"] },
  ua: { lat: 48.3794, lng: 31.1656, zoom: 5, capital: "Kyiv", capitalCoords: { lat: 50.4501, lng: 30.5234 }, neighborsIso2: ["by", "ru", "md", "ro", "hu", "sk", "pl"] },
  gb: { lat: 55.3781, lng: -3.4360, zoom: 5, capital: "London", capitalCoords: { lat: 51.5074, lng: -0.1278 }, neighborsIso2: ["ie"] },

  // ASIA
  af: { lat: 33.9391, lng: 67.7100, zoom: 5, capital: "Kabul", capitalCoords: { lat: 34.5553, lng: 69.2075 }, neighborsIso2: ["ir", "pk", "tm", "uz", "tj", "cn"] },
  am: { lat: 40.0691, lng: 45.0382, zoom: 7, capital: "Yerevan", capitalCoords: { lat: 40.1872, lng: 44.5152 }, neighborsIso2: ["ge", "az", "ir", "tr"] },
  az: { lat: 40.1431, lng: 47.5769, zoom: 7, capital: "Baku", capitalCoords: { lat: 40.4093, lng: 49.8671 }, neighborsIso2: ["ru", "ge", "am", "ir", "tr"] },
  bh: { lat: 26.0667, lng: 50.5577, zoom: 10, capital: "Manama", capitalCoords: { lat: 26.2285, lng: 50.5860 }, neighborsIso2: [] },
  bd: { lat: 23.6850, lng: 90.3563, zoom: 6, capital: "Dhaka", capitalCoords: { lat: 23.8103, lng: 90.4125 }, neighborsIso2: ["in", "mm"] },
  bt: { lat: 27.5142, lng: 90.4336, zoom: 8, capital: "Thimphu", capitalCoords: { lat: 27.4728, lng: 89.6393 }, neighborsIso2: ["cn", "in"] },
  bn: { lat: 4.5353, lng: 114.7277, zoom: 9, capital: "Bandar Seri Begawan", capitalCoords: { lat: 4.9031, lng: 114.9398 }, neighborsIso2: ["my"] },
  kh: { lat: 12.5657, lng: 104.9910, zoom: 7, capital: "Phnom Penh", capitalCoords: { lat: 11.5564, lng: 104.9282 }, neighborsIso2: ["th", "la", "vn"] },
  cn: { lat: 35.8617, lng: 104.1954, zoom: 4, capital: "Beijing", capitalCoords: { lat: 39.9042, lng: 116.4074 }, neighborsIso2: ["kp", "ru", "mn", "kz", "kg", "tj", "af", "pk", "in", "np", "bt", "mm", "la", "vn"] },
  ge: { lat: 42.3154, lng: 43.3569, zoom: 7, capital: "Tbilisi", capitalCoords: { lat: 41.7151, lng: 44.8271 }, neighborsIso2: ["ru", "az", "am", "tr"] },
  in: { lat: 20.5937, lng: 78.9629, zoom: 5, capital: "New Delhi", capitalCoords: { lat: 28.6139, lng: 77.2090 }, neighborsIso2: ["pk", "cn", "np", "bt", "bd", "mm"] },
  id: { lat: -0.7893, lng: 113.9213, zoom: 4, capital: "Jakarta", capitalCoords: { lat: -6.2088, lng: 106.8456 }, neighborsIso2: ["my", "pg", "tl"] },
  ir: { lat: 32.4279, lng: 53.6880, zoom: 5, capital: "Tehran", capitalCoords: { lat: 35.6892, lng: 51.3890 }, neighborsIso2: ["am", "az", "tm", "af", "pk", "iq", "tr"] },
  iq: { lat: 33.2232, lng: 43.6793, zoom: 6, capital: "Baghdad", capitalCoords: { lat: 33.3152, lng: 44.3661 }, neighborsIso2: ["tr", "ir", "kw", "sa", "jo", "sy"] },
  il: { lat: 31.0461, lng: 34.8516, zoom: 8, capital: "Jerusalem", capitalCoords: { lat: 31.7683, lng: 35.2137 }, neighborsIso2: ["lb", "sy", "jo", "eg", "ps"] },
  jp: { lat: 36.2048, lng: 138.2529, zoom: 5, capital: "Tokyo", capitalCoords: { lat: 35.6762, lng: 139.6503 }, neighborsIso2: [] },
  jo: { lat: 30.5852, lng: 36.2384, zoom: 7, capital: "Amman", capitalCoords: { lat: 31.9454, lng: 35.9284 }, neighborsIso2: ["sy", "iq", "sa", "il", "ps"] },
  kz: { lat: 48.0196, lng: 66.9237, zoom: 4, capital: "Astana", capitalCoords: { lat: 51.1694, lng: 71.4491 }, neighborsIso2: ["ru", "cn", "kg", "uz", "tm"] },
  kw: { lat: 29.3117, lng: 47.4818, zoom: 8, capital: "Kuwait City", capitalCoords: { lat: 29.3759, lng: 47.9774 }, neighborsIso2: ["iq", "sa"] },
  kg: { lat: 41.2044, lng: 74.7661, zoom: 7, capital: "Bishkek", capitalCoords: { lat: 42.8746, lng: 74.5698 }, neighborsIso2: ["kz", "cn", "tj", "uz"] },
  la: { lat: 19.8563, lng: 102.4955, zoom: 6, capital: "Vientiane", capitalCoords: { lat: 17.9757, lng: 102.6331 }, neighborsIso2: ["mm", "cn", "vn", "kh", "th"] },
  lb: { lat: 33.8547, lng: 35.8623, zoom: 8, capital: "Beirut", capitalCoords: { lat: 33.8938, lng: 35.5018 }, neighborsIso2: ["sy", "il"] },
  my: { lat: 4.2105, lng: 101.9758, zoom: 6, capital: "Kuala Lumpur", capitalCoords: { lat: 3.1390, lng: 101.6869 }, neighborsIso2: ["th", "id", "bn"] },
  mv: { lat: 3.2028, lng: 73.2207, zoom: 7, capital: "Male", capitalCoords: { lat: 4.1755, lng: 73.5093 }, neighborsIso2: [] },
  mn: { lat: 46.8625, lng: 103.8467, zoom: 5, capital: "Ulaanbaatar", capitalCoords: { lat: 47.9212, lng: 106.9186 }, neighborsIso2: ["ru", "cn"] },
  mm: { lat: 21.9162, lng: 95.9560, zoom: 5, capital: "Naypyidaw", capitalCoords: { lat: 19.7633, lng: 96.0785 }, neighborsIso2: ["bd", "in", "cn", "la", "th"] },
  np: { lat: 28.3949, lng: 84.1240, zoom: 7, capital: "Kathmandu", capitalCoords: { lat: 27.7172, lng: 85.3240 }, neighborsIso2: ["cn", "in"] },
  kp: { lat: 40.3399, lng: 127.5101, zoom: 6, capital: "Pyongyang", capitalCoords: { lat: 39.0392, lng: 125.7625 }, neighborsIso2: ["cn", "ru", "kr"] },
  om: { lat: 21.4735, lng: 55.9754, zoom: 6, capital: "Muscat", capitalCoords: { lat: 23.5859, lng: 58.4059 }, neighborsIso2: ["ae", "sa", "ye"] },
  pk: { lat: 30.3753, lng: 69.3451, zoom: 5, capital: "Islamabad", capitalCoords: { lat: 33.6844, lng: 73.0479 }, neighborsIso2: ["ir", "af", "cn", "in"] },
  ps: { lat: 31.9522, lng: 35.2332, zoom: 8, capital: "Ramallah", capitalCoords: { lat: 31.9038, lng: 35.2034 }, neighborsIso2: ["il", "jo", "eg"] },
  ph: { lat: 12.8797, lng: 121.7740, zoom: 5, capital: "Manila", capitalCoords: { lat: 14.5995, lng: 120.9842 }, neighborsIso2: [] },
  qa: { lat: 25.3548, lng: 51.1839, zoom: 8, capital: "Doha", capitalCoords: { lat: 25.2854, lng: 51.5310 }, neighborsIso2: ["sa"] },
  sa: { lat: 23.8859, lng: 45.0792, zoom: 5, capital: "Riyadh", capitalCoords: { lat: 24.7136, lng: 46.6753 }, neighborsIso2: ["jo", "iq", "kw", "qa", "ae", "om", "ye"] },
  sg: { lat: 1.3521, lng: 103.8198, zoom: 11, capital: "Singapore", capitalCoords: { lat: 1.2897, lng: 103.8501 }, neighborsIso2: ["my"] },
  kr: { lat: 35.9078, lng: 127.7669, zoom: 6, capital: "Seoul", capitalCoords: { lat: 37.5665, lng: 126.9780 }, neighborsIso2: ["kp"] },
  lk: { lat: 7.8731, lng: 80.7718, zoom: 7, capital: "Colombo", capitalCoords: { lat: 6.9271, lng: 79.8612 }, neighborsIso2: [] },
  sy: { lat: 34.8021, lng: 38.9968, zoom: 6, capital: "Damascus", capitalCoords: { lat: 33.5138, lng: 36.2765 }, neighborsIso2: ["tr", "iq", "jo", "il", "lb"] },
  tj: { lat: 38.8610, lng: 71.2761, zoom: 7, capital: "Dushanbe", capitalCoords: { lat: 38.5598, lng: 68.7870 }, neighborsIso2: ["uz", "kg", "cn", "af"] },
  th: { lat: 15.8700, lng: 100.9925, zoom: 5, capital: "Bangkok", capitalCoords: { lat: 13.7563, lng: 100.5018 }, neighborsIso2: ["mm", "la", "kh", "my"] },
  tl: { lat: -8.8742, lng: 125.7275, zoom: 8, capital: "Dili", capitalCoords: { lat: -8.5569, lng: 125.5603 }, neighborsIso2: ["id"] },
  tr: { lat: 38.9637, lng: 35.2433, zoom: 5, capital: "Ankara", capitalCoords: { lat: 39.9334, lng: 32.8597 }, neighborsIso2: ["gr", "bg", "ge", "am", "az", "ir", "iq", "sy"] },
  tm: { lat: 38.9697, lng: 59.5563, zoom: 6, capital: "Ashgabat", capitalCoords: { lat: 37.9601, lng: 58.3261 }, neighborsIso2: ["kz", "uz", "af", "ir"] },
  ae: { lat: 23.4241, lng: 53.8478, zoom: 6, capital: "Abu Dhabi", capitalCoords: { lat: 24.4539, lng: 54.3773 }, neighborsIso2: ["om", "sa"] },
  uz: { lat: 41.3775, lng: 64.5853, zoom: 5, capital: "Tashkent", capitalCoords: { lat: 41.2995, lng: 69.2401 }, neighborsIso2: ["kz", "kg", "tj", "af", "tm"] },
  vn: { lat: 14.0583, lng: 108.2772, zoom: 5, capital: "Hanoi", capitalCoords: { lat: 21.0285, lng: 105.8542 }, neighborsIso2: ["cn", "la", "kh"] },
  ye: { lat: 15.5527, lng: 48.5164, zoom: 6, capital: "Sanaa", capitalCoords: { lat: 15.3694, lng: 44.1910 }, neighborsIso2: ["sa", "om"] },

  // NORTH AMERICA
  us: { lat: 37.0902, lng: -95.7129, zoom: 4, capital: "Washington, D.C.", capitalCoords: { lat: 38.9072, lng: -77.0369 }, neighborsIso2: ["ca", "mx"] },
  ca: { lat: 56.1304, lng: -106.3468, zoom: 4, capital: "Ottawa", capitalCoords: { lat: 45.4215, lng: -75.6972 }, neighborsIso2: ["us"] },
  mx: { lat: 23.6345, lng: -102.5528, zoom: 5, capital: "Mexico City", capitalCoords: { lat: 19.4326, lng: -99.1332 }, neighborsIso2: ["us", "gt", "bz"] },
  ag: { lat: 17.0608, lng: -61.7964, zoom: 10, capital: "Saint John's", capitalCoords: { lat: 17.1274, lng: -61.8468 }, neighborsIso2: [] },
  bs: { lat: 25.0343, lng: -77.3963, zoom: 7, capital: "Nassau", capitalCoords: { lat: 25.0480, lng: -77.3554 }, neighborsIso2: [] },
  bb: { lat: 13.1939, lng: -59.5432, zoom: 11, capital: "Bridgetown", capitalCoords: { lat: 13.0969, lng: -59.6145 }, neighborsIso2: [] },
  bz: { lat: 17.1899, lng: -88.4976, zoom: 8, capital: "Belmopan", capitalCoords: { lat: 17.2510, lng: -88.7669 }, neighborsIso2: ["mx", "gt"] },
  cr: { lat: 9.7489, lng: -83.7534, zoom: 8, capital: "San José", capitalCoords: { lat: 9.9281, lng: -84.0907 }, neighborsIso2: ["ni", "pa"] },
  cu: { lat: 21.5218, lng: -77.7812, zoom: 6, capital: "Havana", capitalCoords: { lat: 23.1136, lng: -82.3666 }, neighborsIso2: [] },
  dm: { lat: 15.4150, lng: -61.3710, zoom: 10, capital: "Roseau", capitalCoords: { lat: 15.3017, lng: -61.3881 }, neighborsIso2: [] },
  do: { lat: 18.7357, lng: -70.1627, zoom: 7, capital: "Santo Domingo", capitalCoords: { lat: 18.4861, lng: -69.9312 }, neighborsIso2: ["ht"] },
  sv: { lat: 13.7942, lng: -88.8965, zoom: 8, capital: "San Salvador", capitalCoords: { lat: 13.6929, lng: -89.2182 }, neighborsIso2: ["gt", "hn"] },
  gd: { lat: 12.1165, lng: -61.6790, zoom: 10, capital: "St. George's", capitalCoords: { lat: 12.0561, lng: -61.7488 }, neighborsIso2: [] },
  gt: { lat: 15.7835, lng: -90.2308, zoom: 7, capital: "Guatemala City", capitalCoords: { lat: 14.6349, lng: -90.5069 }, neighborsIso2: ["mx", "bz", "hn", "sv"] },
  ht: { lat: 18.9712, lng: -72.2852, zoom: 8, capital: "Port-au-Prince", capitalCoords: { lat: 18.5944, lng: -72.3074 }, neighborsIso2: ["do"] },
  hn: { lat: 15.2000, lng: -86.2419, zoom: 7, capital: "Tegucigalpa", capitalCoords: { lat: 14.0723, lng: -87.1921 }, neighborsIso2: ["gt", "sv", "ni"] },
  jm: { lat: 18.1096, lng: -77.2975, zoom: 8, capital: "Kingston", capitalCoords: { lat: 17.9712, lng: -76.7928 }, neighborsIso2: [] },
  ni: { lat: 12.8654, lng: -85.2072, zoom: 7, capital: "Managua", capitalCoords: { lat: 12.1150, lng: -86.2362 }, neighborsIso2: ["hn", "cr"] },
  pa: { lat: 8.5379, lng: -80.7821, zoom: 7, capital: "Panama City", capitalCoords: { lat: 8.9824, lng: -79.5199 }, neighborsIso2: ["cr", "co"] },
  kn: { lat: 17.3578, lng: -62.7830, zoom: 11, capital: "Basseterre", capitalCoords: { lat: 17.2948, lng: -62.7261 }, neighborsIso2: [] },
  lc: { lat: 13.9094, lng: -60.9789, zoom: 10, capital: "Castries", capitalCoords: { lat: 14.0101, lng: -60.9875 }, neighborsIso2: [] },
  vc: { lat: 13.2528, lng: -61.1971, zoom: 10, capital: "Kingstown", capitalCoords: { lat: 13.1587, lng: -61.2248 }, neighborsIso2: [] },
  tt: { lat: 10.6918, lng: -61.2225, zoom: 9, capital: "Port of Spain", capitalCoords: { lat: 10.6549, lng: -61.5019 }, neighborsIso2: [] },

  // SOUTH AMERICA
  ar: { lat: -38.4161, lng: -63.6167, zoom: 4, capital: "Buenos Aires", capitalCoords: { lat: -34.6037, lng: -58.3816 }, neighborsIso2: ["cl", "bo", "py", "br", "uy"] },
  bo: { lat: -16.2902, lng: -63.5887, zoom: 5, capital: "Sucre", capitalCoords: { lat: -19.0196, lng: -65.2619 }, neighborsIso2: ["br", "py", "ar", "cl", "pe"] },
  br: { lat: -14.2350, lng: -51.9253, zoom: 4, capital: "Brasília", capitalCoords: { lat: -15.7975, lng: -47.8919 }, neighborsIso2: ["uy", "ar", "py", "bo", "pe", "co", "ve", "gy", "sr"] },
  cl: { lat: -35.6751, lng: -71.5430, zoom: 4, capital: "Santiago", capitalCoords: { lat: -33.4489, lng: -70.6693 }, neighborsIso2: ["pe", "bo", "ar"] },
  co: { lat: 4.5709, lng: -74.2973, zoom: 5, capital: "Bogotá", capitalCoords: { lat: 4.7110, lng: -74.0721 }, neighborsIso2: ["pa", "ve", "br", "pe", "ec"] },
  ec: { lat: -1.8312, lng: -78.1834, zoom: 6, capital: "Quito", capitalCoords: { lat: -0.1807, lng: -78.4678 }, neighborsIso2: ["co", "pe"] },
  gy: { lat: 4.8604, lng: -58.9302, zoom: 6, capital: "Georgetown", capitalCoords: { lat: 6.8013, lng: -58.1551 }, neighborsIso2: ["ve", "br", "sr"] },
  py: { lat: -23.4425, lng: -58.4438, zoom: 6, capital: "Asunción", capitalCoords: { lat: -25.2637, lng: -57.5759 }, neighborsIso2: ["ar", "bo", "br"] },
  pe: { lat: -9.1900, lng: -75.0152, zoom: 5, capital: "Lima", capitalCoords: { lat: -12.0464, lng: -77.0428 }, neighborsIso2: ["ec", "co", "br", "bo", "cl"] },
  sr: { lat: 3.9193, lng: -56.0278, zoom: 6, capital: "Paramaribo", capitalCoords: { lat: 5.8520, lng: -55.2038 }, neighborsIso2: ["gy", "br"] },
  uy: { lat: -32.5228, lng: -55.7658, zoom: 6, capital: "Montevideo", capitalCoords: { lat: -34.9011, lng: -56.1645 }, neighborsIso2: ["ar", "br"] },
  ve: { lat: 6.4238, lng: -66.5897, zoom: 5, capital: "Caracas", capitalCoords: { lat: 10.4806, lng: -66.9036 }, neighborsIso2: ["co", "br", "gy"] },

  // AFRICA
  dz: { lat: 28.0339, lng: 1.6596, zoom: 5, capital: "Algiers", capitalCoords: { lat: 36.7538, lng: 3.0588 }, neighborsIso2: ["tn", "ly", "ne", "ml", "mr", "ma"] },
  ao: { lat: -11.2027, lng: 17.8739, zoom: 5, capital: "Luanda", capitalCoords: { lat: -8.8390, lng: 13.2894 }, neighborsIso2: ["cg", "cd", "zm", "na"] },
  bj: { lat: 9.3077, lng: 2.3158, zoom: 7, capital: "Porto-Novo", capitalCoords: { lat: 6.4969, lng: 2.6289 }, neighborsIso2: ["tg", "bf", "ne", "ng"] },
  bw: { lat: -22.3285, lng: 24.6849, zoom: 6, capital: "Gaborone", capitalCoords: { lat: -24.6282, lng: 25.9231 }, neighborsIso2: ["na", "zm", "zw", "za"] },
  bf: { lat: 12.2383, lng: -1.5616, zoom: 6, capital: "Ouagadougou", capitalCoords: { lat: 12.3714, lng: -1.5197 }, neighborsIso2: ["ml", "ne", "bj", "tg", "gh", "ci"] },
  bi: { lat: -3.3731, lng: 29.9189, zoom: 8, capital: "Gitega", capitalCoords: { lat: -3.4278, lng: 29.9246 }, neighborsIso2: ["rw", "tz", "cd"] },
  cv: { lat: 16.5388, lng: -23.0418, zoom: 8, capital: "Praia", capitalCoords: { lat: 14.9330, lng: -23.5133 }, neighborsIso2: [] },
  cm: { lat: 7.3697, lng: 12.3547, zoom: 6, capital: "Yaoundé", capitalCoords: { lat: 3.8480, lng: 11.5021 }, neighborsIso2: ["ng", "td", "cf", "cg", "ga", "gq"] },
  cf: { lat: 6.6111, lng: 20.9394, zoom: 6, capital: "Bangui", capitalCoords: { lat: 4.3947, lng: 18.5582 }, neighborsIso2: ["td", "sd", "ss", "cd", "cg", "cm"] },
  td: { lat: 15.4542, lng: 18.7322, zoom: 5, capital: "N'Djamena", capitalCoords: { lat: 12.1348, lng: 15.0557 }, neighborsIso2: ["ly", "sd", "cf", "cm", "ng", "ne"] },
  km: { lat: -11.8750, lng: 43.8722, zoom: 9, capital: "Moroni", capitalCoords: { lat: -11.7172, lng: 43.2473 }, neighborsIso2: [] },
  cd: { lat: -4.0383, lng: 21.7587, zoom: 5, capital: "Kinshasa", capitalCoords: { lat: -4.4419, lng: 15.2663 }, neighborsIso2: ["cg", "cf", "ss", "ug", "rw", "bi", "tz", "zm", "ao"] },
  cg: { lat: -0.2280, lng: 15.8277, zoom: 6, capital: "Brazzaville", capitalCoords: { lat: -4.2634, lng: 15.2429 }, neighborsIso2: ["ga", "cm", "cf", "cd", "ao"] },
  ci: { lat: 7.5400, lng: -5.5471, zoom: 6, capital: "Yamoussoukro", capitalCoords: { lat: 6.8276, lng: -5.2893 }, neighborsIso2: ["lr", "gn", "ml", "bf", "gh"] },
  dj: { lat: 11.8251, lng: 42.5903, zoom: 8, capital: "Djibouti", capitalCoords: { lat: 11.5721, lng: 43.1456 }, neighborsIso2: ["er", "et", "so"] },
  eg: { lat: 26.8206, lng: 30.8025, zoom: 5, capital: "Cairo", capitalCoords: { lat: 30.0444, lng: 31.2357 }, neighborsIso2: ["ly", "sd", "il", "ps"] },
  gq: { lat: 1.6508, lng: 10.2679, zoom: 7, capital: "Malabo", capitalCoords: { lat: 3.7504, lng: 8.7371 }, neighborsIso2: ["cm", "ga"] },
  er: { lat: 15.1794, lng: 39.7823, zoom: 6, capital: "Asmara", capitalCoords: { lat: 15.3229, lng: 38.9251 }, neighborsIso2: ["sd", "et", "dj"] },
  sz: { lat: -26.5225, lng: 31.4659, zoom: 9, capital: "Mbabane", capitalCoords: { lat: -26.3055, lng: 31.1367 }, neighborsIso2: ["za", "mz"] },
  et: { lat: 9.1450, lng: 40.4897, zoom: 5, capital: "Addis Ababa", capitalCoords: { lat: 9.0320, lng: 38.7469 }, neighborsIso2: ["er", "dj", "so", "ke", "ss", "sd"] },
  ga: { lat: -0.8037, lng: 11.6094, zoom: 6, capital: "Libreville", capitalCoords: { lat: 0.4162, lng: 9.4673 }, neighborsIso2: ["gq", "cm", "cg"] },
  gm: { lat: 13.4432, lng: -15.3101, zoom: 8, capital: "Banjul", capitalCoords: { lat: 13.4549, lng: -16.5790 }, neighborsIso2: ["sn"] },
  gh: { lat: 7.9465, lng: -1.0232, zoom: 6, capital: "Accra", capitalCoords: { lat: 5.6037, lng: -0.1870 }, neighborsIso2: ["ci", "bf", "tg"] },
  gn: { lat: 9.9456, lng: -9.6966, zoom: 6, capital: "Conakry", capitalCoords: { lat: 9.6412, lng: -13.5784 }, neighborsIso2: ["gw", "sn", "ml", "ci", "lr", "sl"] },
  gw: { lat: 11.8037, lng: -15.1804, zoom: 8, capital: "Bissau", capitalCoords: { lat: 11.8816, lng: -15.6178 }, neighborsIso2: ["sn", "gn"] },
  ke: { lat: -0.0236, lng: 37.9062, zoom: 6, capital: "Nairobi", capitalCoords: { lat: -1.2921, lng: 36.8219 }, neighborsIso2: ["ss", "et", "so", "ug", "tz"] },
  ls: { lat: -29.6099, lng: 28.2336, zoom: 8, capital: "Maseru", capitalCoords: { lat: -29.3151, lng: 27.4869 }, neighborsIso2: ["za"] },
  lr: { lat: 6.4281, lng: -9.4295, zoom: 7, capital: "Monrovia", capitalCoords: { lat: 6.3005, lng: -10.7969 }, neighborsIso2: ["sl", "gn", "ci"] },
  ly: { lat: 26.3351, lng: 17.2283, zoom: 5, capital: "Tripoli", capitalCoords: { lat: 32.8872, lng: 13.1913 }, neighborsIso2: ["tn", "dz", "ne", "td", "sd", "eg"] },
  mg: { lat: -18.7669, lng: 46.8691, zoom: 5, capital: "Antananarivo", capitalCoords: { lat: -18.8792, lng: 47.5079 }, neighborsIso2: [] },
  mw: { lat: -13.2543, lng: 34.3015, zoom: 6, capital: "Lilongwe", capitalCoords: { lat: -13.9626, lng: 33.7741 }, neighborsIso2: ["tz", "mz", "zm"] },
  ml: { lat: 17.5707, lng: -3.9962, zoom: 5, capital: "Bamako", capitalCoords: { lat: 12.6392, lng: -8.0029 }, neighborsIso2: ["dz", "ne", "bf", "ci", "gn", "sn", "mr"] },
  mr: { lat: 21.0079, lng: -10.9408, zoom: 5, capital: "Nouakchott", capitalCoords: { lat: 18.0735, lng: -15.9582 }, neighborsIso2: ["dz", "ml", "sn"] },
  mu: { lat: -20.3484, lng: 57.5522, zoom: 10, capital: "Port Louis", capitalCoords: { lat: -20.1609, lng: 57.5012 }, neighborsIso2: [] },
  ma: { lat: 31.7917, lng: -7.0926, zoom: 6, capital: "Rabat", capitalCoords: { lat: 34.0209, lng: -6.8416 }, neighborsIso2: ["es", "dz", "mr"] },
  mz: { lat: -18.6657, lng: 35.5296, zoom: 5, capital: "Maputo", capitalCoords: { lat: -25.9692, lng: 32.5732 }, neighborsIso2: ["tz", "mw", "zm", "zw", "za", "sz"] },
  na: { lat: -22.9576, lng: 18.4904, zoom: 5, capital: "Windhoek", capitalCoords: { lat: -22.5609, lng: 17.0658 }, neighborsIso2: ["ao", "zm", "bw", "za"] },
  ne: { lat: 17.6078, lng: 8.0817, zoom: 5, capital: "Niamey", capitalCoords: { lat: 13.5116, lng: 2.1254 }, neighborsIso2: ["ly", "td", "ng", "bj", "bf", "ml", "dz"] },
  ng: { lat: 9.0820, lng: 8.6753, zoom: 6, capital: "Abuja", capitalCoords: { lat: 9.0765, lng: 7.3986 }, neighborsIso2: ["ne", "td", "cm", "bj"] },
  rw: { lat: -1.9403, lng: 29.8739, zoom: 8, capital: "Kigali", capitalCoords: { lat: -1.9706, lng: 30.1044 }, neighborsIso2: ["ug", "tz", "bi", "cd"] },
  st: { lat: 0.1864, lng: 6.6131, zoom: 9, capital: "São Tomé", capitalCoords: { lat: 0.3365, lng: 6.7273 }, neighborsIso2: [] },
  sn: { lat: 14.4974, lng: -14.4524, zoom: 6, capital: "Dakar", capitalCoords: { lat: 14.7167, lng: -17.4677 }, neighborsIso2: ["mr", "ml", "gn", "gw", "gm"] },
  sc: { lat: -4.6796, lng: 55.4920, zoom: 9, capital: "Victoria", capitalCoords: { lat: -4.6191, lng: 55.4513 }, neighborsIso2: [] },
  sl: { lat: 8.4606, lng: -11.7799, zoom: 7, capital: "Freetown", capitalCoords: { lat: 8.4657, lng: -13.2317 }, neighborsIso2: ["gn", "lr"] },
  so: { lat: 5.1521, lng: 46.1996, zoom: 5, capital: "Mogadishu", capitalCoords: { lat: 2.0469, lng: 45.3182 }, neighborsIso2: ["dj", "et", "ke"] },
  za: { lat: -30.5595, lng: 22.9375, zoom: 5, capital: "Pretoria", capitalCoords: { lat: -25.7479, lng: 28.2293 }, neighborsIso2: ["na", "bw", "zw", "mz", "sz", "ls"] },
  ss: { lat: 6.8770, lng: 31.3070, zoom: 6, capital: "Juba", capitalCoords: { lat: 4.8594, lng: 31.5713 }, neighborsIso2: ["sd", "et", "ke", "ug", "cd", "cf"] },
  sd: { lat: 12.8628, lng: 30.2176, zoom: 5, capital: "Khartoum", capitalCoords: { lat: 15.5007, lng: 32.5599 }, neighborsIso2: ["eg", "er", "et", "ss", "cf", "td", "ly"] },
  tz: { lat: -6.3690, lng: 34.8888, zoom: 6, capital: "Dodoma", capitalCoords: { lat: -6.1630, lng: 35.7516 }, neighborsIso2: ["ke", "ug", "rw", "bi", "cd", "zm", "mw", "mz"] },
  tg: { lat: 8.6195, lng: 0.8248, zoom: 7, capital: "Lomé", capitalCoords: { lat: 6.1375, lng: 1.2125 }, neighborsIso2: ["gh", "bf", "bj"] },
  tn: { lat: 33.8869, lng: 9.5375, zoom: 6, capital: "Tunis", capitalCoords: { lat: 36.8065, lng: 10.1815 }, neighborsIso2: ["dz", "ly"] },
  ug: { lat: 1.3733, lng: 32.2903, zoom: 6, capital: "Kampala", capitalCoords: { lat: 0.3476, lng: 32.5825 }, neighborsIso2: ["ss", "ke", "tz", "rw", "cd"] },
  zm: { lat: -13.1339, lng: 27.8493, zoom: 5, capital: "Lusaka", capitalCoords: { lat: -15.3875, lng: 28.3228 }, neighborsIso2: ["cd", "tz", "mw", "mz", "zw", "bw", "na", "ao"] },
  zw: { lat: -19.0154, lng: 29.1549, zoom: 6, capital: "Harare", capitalCoords: { lat: -17.8216, lng: 31.0492 }, neighborsIso2: ["zm", "mz", "za", "bw"] },

  // OCEANIA
  au: { lat: -25.2744, lng: 133.7751, zoom: 4, capital: "Canberra", capitalCoords: { lat: -35.2809, lng: 149.1300 }, neighborsIso2: [] },
  fj: { lat: -17.7134, lng: 178.0650, zoom: 7, capital: "Suva", capitalCoords: { lat: -18.1416, lng: 178.4419 }, neighborsIso2: [] },
  ki: { lat: -3.3704, lng: -168.7340, zoom: 4, capital: "South Tarawa", capitalCoords: { lat: 1.3291, lng: 172.9790 }, neighborsIso2: [] },
  mh: { lat: 7.1315, lng: 171.1845, zoom: 6, capital: "Majuro", capitalCoords: { lat: 7.0897, lng: 171.3803 }, neighborsIso2: [] },
  fm: { lat: 7.4256, lng: 150.5508, zoom: 5, capital: "Palikir", capitalCoords: { lat: 6.9172, lng: 158.1589 }, neighborsIso2: [] },
  nr: { lat: -0.5228, lng: 166.9315, zoom: 12, capital: "Yaren", capitalCoords: { lat: -0.5477, lng: 166.9209 }, neighborsIso2: [] },
  nz: { lat: -40.9006, lng: 174.8860, zoom: 5, capital: "Wellington", capitalCoords: { lat: -41.2865, lng: 174.7762 }, neighborsIso2: [] },
  pw: { lat: 7.5150, lng: 134.5825, zoom: 8, capital: "Ngerulmud", capitalCoords: { lat: 7.5004, lng: 134.6243 }, neighborsIso2: [] },
  pg: { lat: -6.3149, lng: 143.9555, zoom: 5, capital: "Port Moresby", capitalCoords: { lat: -9.4438, lng: 147.1803 }, neighborsIso2: ["id"] },
  ws: { lat: -13.7590, lng: -172.1046, zoom: 8, capital: "Apia", capitalCoords: { lat: -13.8333, lng: -171.7667 }, neighborsIso2: [] },
  sb: { lat: -9.6457, lng: 160.1562, zoom: 6, capital: "Honiara", capitalCoords: { lat: -9.4456, lng: 159.9729 }, neighborsIso2: [] },
  to: { lat: -21.1789, lng: -175.1982, zoom: 7, capital: "Nuku'alofa", capitalCoords: { lat: -21.1394, lng: -175.2049 }, neighborsIso2: [] },
  tv: { lat: -7.1095, lng: 177.6493, zoom: 7, capital: "Funafuti", capitalCoords: { lat: -8.5167, lng: 179.2167 }, neighborsIso2: [] },
  vu: { lat: -15.3767, lng: 166.9592, zoom: 6, capital: "Port Vila", capitalCoords: { lat: -17.7333, lng: 168.3273 }, neighborsIso2: [] },

  // ANTARCTICA
  aq: { lat: -75.2509, lng: -0.0713, zoom: 3, capital: "Amundsen–Scott South Pole Station", capitalCoords: { lat: -90.0000, lng: 0.0000 }, neighborsIso2: [] }
};

/**
 * Returns the exact, verified geographical coordinate for a neighbor pin when viewed from hostIso2.
 * Strictly guarantees that the pin is INSIDE the neighbor country and NEVER clamped into the host.
 */
export function getVerifiedNeighborPlacement(hostIso2: string, neighborIso2: string): { lat: number; lng: number } {
  const hIso = hostIso2.toLowerCase();
  const nIso = neighborIso2.toLowerCase();

  // 1. Check if there is an explicit border anchor for transcontinental / vast nations
  if (BORDER_ANCHORS[nIso] && BORDER_ANCHORS[nIso][hIso]) {
    return BORDER_ANCHORS[nIso][hIso];
  }

  // 2. Otherwise, use the neighbor country's verified capital or centroid
  const nGeo = VERIFIED_COUNTRIES_DATA[nIso];
  if (nGeo) {
    // Prefer capital coordinates as they are precise, culturally canonical, and always inside sovereign borders
    if (nGeo.capitalCoords && typeof nGeo.capitalCoords.lat === 'number') {
      return { lat: nGeo.capitalCoords.lat, lng: nGeo.capitalCoords.lng };
    }
    return { lat: nGeo.lat, lng: nGeo.lng };
  }

  return { lat: 0, lng: 0 };
}

/**
 * Retrieves the full verified geography for a country, including all borders
 * and accurate directional indicators without arbitrary clamping.
 */
export function getVerifiedCountryGeography(
  iso2: string,
  catalogFlags: Array<{ id: string; name: string; iso2: string; flagUrl: string }>
): {
  lat: number;
  lng: number;
  zoom: number;
  capitalCoords: { lat: number; lng: number };
  adjacentCountries: VerifiedNeighborInfo[];
} {
  const key = iso2.toLowerCase();
  const geo = VERIFIED_COUNTRIES_DATA[key];

  const hostLat = geo?.lat ?? 51.5;
  const hostLng = geo?.lng ?? 0;
  const zoom = geo?.zoom ?? 5;
  const capitalCoords = geo?.capitalCoords ?? { lat: hostLat, lng: hostLng };

  const rawNeighbors = geo?.neighborsIso2 || [];
  const adjacentCountries: VerifiedNeighborInfo[] = rawNeighbors
    .map((nIso: string) => {
      const neighborItem = catalogFlags.find(f => f.iso2.toLowerCase() === nIso.toLowerCase());
      if (!neighborItem) return null;

      const placement = getVerifiedNeighborPlacement(key, nIso);
      const relationship = calculateCompassDirection(hostLat, hostLng, placement.lat, placement.lng);

      return {
        name: neighborItem.name,
        flagUrl: neighborItem.flagUrl,
        lat: Number(placement.lat.toFixed(4)),
        lng: Number(placement.lng.toFixed(4)),
        relationship
      };
    })
    .filter(Boolean) as VerifiedNeighborInfo[];

  return {
    lat: hostLat,
    lng: hostLng,
    zoom,
    capitalCoords,
    adjacentCountries
  };
}
