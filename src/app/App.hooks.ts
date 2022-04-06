import { useEffect, useState } from 'react';
import { Country, Rates } from './App.types';
import { fetchCountries, fetchRates } from './services';

export function useCountries(): { countries: Country[]; loading: boolean } {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountries()
      .then(setCountries)
      .then(() => setLoading(false));
  }, []);

  return { countries, loading };
}

export function useRates(): Rates | undefined {
  const [rates, setRates] = useState<Rates>();
  useEffect(() => {
    fetchRates().then(setRates);
  }, []);

  return rates;
}
