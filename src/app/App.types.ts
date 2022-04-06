export interface Currency {
  name: string;
  code: string;
  symbol: string;
}

export interface Country {
  name: string;
  currency?: Currency;
  capital: string;
  population: number;
  flag: string;
}

export type Rates = Record<string, number>;
