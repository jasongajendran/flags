export interface ColorSymbol {
  name: string;
  colorClass: string;
  hex?: string;
  symbol: string;
}

export interface FlagMeaning {
  story: string; // Reason for choosing the flag & history
  elements: string[]; // What's on the flag
  colors: ColorSymbol[];
}

export interface NeighborInfo {
  name: string;
  flagUrl: string;
  lat: number;
  lng: number;
  relationship: string;
}

export interface CountryLocation {
  region: string; // e.g. "Western Europe", "East Asia"
  coordinatesText: string;
  neighbors: string; // Bordering countries or bodies of water
  surroundingWaters: string[];
  adjacentCountries?: NeighborInfo[];
}

export interface LandmarkPhoto {
  title: string;
  caption: string;
  url: string;
}

export interface Country {
  id: string;
  iso2: string; // 2-letter ISO code for flags (e.g. "gb", "us", "in")
  name: string;
  officialName: string;
  capital: string;
  population: string;
  languages: string[];
  currency: string;
  flagUrl: string;
  uniqueness: string; // Standout uniqueness / record
  recordFact?: string;
  description: string;
  interestingFacts: string[];
  factImageUrl: string;
  factImageCaption: string;
  landmarks?: LandmarkPhoto[];
  flagMeaning: FlagMeaning;
  location: CountryLocation;
  color: string;
  position?: string; // Positioning for continent map
  geo: {
    lat: number;
    lng: number;
    zoom: number;
    capitalCoords: { lat: number; lng: number };
  };
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
