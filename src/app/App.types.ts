export interface Currency {
  name: string;
  symbol: string;
}

export interface Country {
  name: string;
  currency: Currency;
  capital: string;
  population: number;
  flag: string;
}
