import { Alert } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import { Country, Rates } from './App.types';
import { fetchCountries, fetchRates } from './services';

function alertError(message: string) {
  Alert.alert('Network Error', message);
}

export function useCountries(): { countries: Country[]; loading: boolean } {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountries()
      .then(setCountries)
      .catch(() => alertError('Failed to load countries!'))
      .finally(() => setLoading(false));
  }, []);

  return { countries, loading };
}

interface UseRatesType {
  rates?: Rates;
  loading: boolean;
  refresh: () => void;
}

export function useRates(): UseRatesType {
  const [rates, setRates] = useState<Rates>();
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(() => {
    setLoading(true);
    fetchRates()
      .then(setRates)
      .catch(() => alertError('Failed to load exchange rates!'))
      .finally(() => setLoading(false));
  }, []);

  useEffect(refresh, [refresh]);

  return { rates, refresh, loading };
}
