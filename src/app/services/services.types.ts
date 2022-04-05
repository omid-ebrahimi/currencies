import { Currency } from '@src/app/App.types';

export interface CountryDto {
  name: { common: string };
  currencies?: Record<string, Currency>;
  capital: string[];
  population: number;
  flag: string;
}
