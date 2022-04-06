import Config from 'react-native-config';
import { Rates } from '@src/app/App.types';
import { RatesDto } from './services.types';

export async function fetchRates(): Promise<Rates> {
  const response = await fetch(
    `http://data.fixer.io/api/latest?access_key=${Config.FIXER_KEY}`,
  );
  const data: RatesDto = await response.json();

  return data.rates;
}
