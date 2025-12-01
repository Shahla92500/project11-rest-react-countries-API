
export type ApiCountry = {
  name: { common: string };
  population: number;
  region: string;
  capital?: string[];
  flags: { png: string };
};
export type ApiDetailCountry = {
  name: {
    common: string;
    nativeName?: Record<string, { common: string }>;
  };
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
  tld?: string[];
  currencies?: Record<string, { name: string }>;
  languages?: Record<string, string>;
  borders?: string[];
  flags: { png: string };
};