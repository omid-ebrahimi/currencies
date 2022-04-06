import { Country } from '@src/app/App.types';
import { CountryDto } from './services.types';

function transformCurrency(
  currencies: CountryDto['currencies'],
): Country['currency'] {
  const code = currencies && Object.keys(currencies)[0];
  return code ? { ...currencies[code], code } : undefined;
}

function transformCountry(country: CountryDto): Country {
  const { name, capital, population, currencies, flag } = country;
  return {
    flag,
    population,
    name: name.common,
    capital: capital ? capital[0] : 'Unknown',
    currency: transformCurrency(currencies),
  };
}

export async function fetchCountries(): Promise<Country[]> {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries: CountryDto[] = await response.json();

  return countries.map(transformCountry);
}
