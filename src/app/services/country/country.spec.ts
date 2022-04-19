import { Country, Currency } from '@src/app/App.types';
import { CountryDto } from './country.types';
import { transformCountry, transformCurrency } from './country.utils';

describe('utils', () => {
  describe('transformCurrency()', () => {
    it('given CountryDto.currencies, returns Currency', () => {
      const currenciesDto: CountryDto['currencies'] = {
        IRR: {
          name: 'Iranian Rials',
          symbol: 'ریال',
        },
      };

      const currency = transformCurrency(currenciesDto);

      expect(currency).toStrictEqual<Currency>({
        code: 'IRR',
        ...currenciesDto.IRR,
      });
    });
    it('given undefined, returns undefined', () => {
      const currencies: CountryDto['currencies'] = undefined;
      const currency = transformCurrency(currencies);
      expect(currency).toBe(undefined);
    });
    it('given an empty object, returns undefined', () => {
      const currencies: CountryDto['currencies'] = {};
      const currency = transformCurrency(currencies);
      expect(currency).toBe(undefined);
    });
  });
  describe('transformCountry()', () => {
    it('given CountryDto, returns Country', () => {
      const countryDto: CountryDto = {
        name: { common: 'Iran' },
        capital: ['Tehran'],
        currencies: {
          IRR: {
            name: 'Iranian Rials',
            symbol: 'ریال',
          },
        },
        flag: '🇮🇷',
        population: 85000000,
      };

      const country = transformCountry(countryDto);

      expect(country).toStrictEqual<Country>({
        name: countryDto.name.common,
        flag: countryDto.flag,
        population: countryDto.population,
        capital: countryDto.capital[0],
        currency: {
          code: 'IRR',
          name: 'Iranian Rials',
          symbol: 'ریال',
        },
      });
    });
  });
});
