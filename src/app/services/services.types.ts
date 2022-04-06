import { Currency, Rates } from '@src/app/App.types';

export interface CountryDto {
  name: { common: string };
  currencies?: Record<string, Omit<Currency, 'code'>>;
  capital: string[];
  population: number;
  flag: string;
}

export interface RatesDto {
  rates: Rates;
}
