import { Country } from '@src/app/App.types';
import { CountryDto } from './country.types';
import { transformCountry } from './country.utils';

export async function fetchCountries(): Promise<Country[]> {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries: CountryDto[] = await response.json();

  return countries.map(transformCountry);
}
