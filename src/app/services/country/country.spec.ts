import { Currency } from '@src/app/App.types';
import { transformCurrency } from '@src/app/services/country/country.utils';
import { CountryDto } from './country.types';

describe('transformCurrency', () => {
  it('transforms currencies field in country dto to currency', () => {
    const currencies: CountryDto['currencies'] = {
      IRR: {
        name: 'Iranian Rials',
        symbol: 'ریال',
      },
    };

    const currency: Currency | undefined = transformCurrency(currencies);

    expect(currency).toStrictEqual({
      code: 'IRR',
      ...currencies.IRR,
    });
  });
});
