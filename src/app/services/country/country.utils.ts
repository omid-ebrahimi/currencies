import { Country } from '@src/app/App.types';
import { CountryDto } from './country.types';

export function transformCurrency(
  currencies: CountryDto['currencies'],
): Country['currency'] {
  const code = currencies && Object.keys(currencies)[0];
  return code ? { ...currencies[code], code } : undefined;
}

export function transformCountry(country: CountryDto): Country {
  const { name, capital, population, currencies, flag } = country;
  return {
    flag,
    population,
    name: name.common,
    capital: capital ? capital[0] : 'Unknown',
    currency: transformCurrency(currencies),
  };
}
