import { Country } from '@src/app/App.types';
import { CountryDto } from './services.types';

export async function getCountries(): Promise<Country[]> {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries: CountryDto[] = await response.json();

  return countries.map(({ name, capital, population, currencies, flag }) => ({
    flag,
    population,
    name: name.common,
    capital: capital ? capital[0] : 'Unknown',
    currency: currencies
      ? Object.values(currencies)[0]
      : { name: 'Unknown', symbol: '?' },
  }));
}
