import { useEffect, useState } from 'react';
import { Country } from './App.types';
import { getCountries } from './services';

export function useCountries(): { countries: Country[]; loading: boolean } {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCountries()
      .then(setCountries)
      .then(() => setLoading(false));
  }, []);

  return { countries, loading };
}
