import React from 'react';
import { Text, View } from 'react-native';
import { typography } from '@src/theme';
import { Country } from '@src/app/App.types';
import { numberWithCommas } from '@src/utils/number';
import { styles } from './CardCountry.styles';

interface Props {
  country: Country;
  amount?: number;
}

function CardCountry({ country, amount }: Props) {
  const { name, flag, capital, population, currency } = country;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={typography.h1}>{flag}</Text>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.subtitle}>&#127963; {capital}</Text>
        <Text style={styles.subtitle}>
          &#128101; {numberWithCommas(population)}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.subtitle}>
          &#128176; {currency?.code ?? 'Unknown'}
        </Text>
        {amount !== undefined && (
          <Text style={styles.subtitle}>
            {currency?.symbol ?? '?'} {amount.toFixed(2)}
          </Text>
        )}
      </View>
    </View>
  );
}

export default React.memo(
  CardCountry,
  (prevProps, nextProps) => prevProps.amount === nextProps.amount,
);
