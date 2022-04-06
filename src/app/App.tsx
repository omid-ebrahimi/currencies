import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Input, LoadingScreen } from '@src/components';
import { styles } from './App.styles';
import { Currency } from './App.types';
import { useCountries, useRates } from './App.hooks';
import { CardCountry, InputCurrency } from './components';

function App() {
  const [filter, setFilter] = useState('');
  const [amount, setAmount] = useState('');

  const rates = useRates();
  const { countries, loading } = useCountries();

  function calculateAmount(currency?: Currency): number | undefined {
    if (rates && currency?.code && rates[currency.code]) {
      return (Number('0' + amount) * rates[currency.code]) / rates.SEK;
    }
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.inputsContainer}>
        <Input
          placeholder="Search country"
          value={filter}
          onChangeText={setFilter}
        />
        <InputCurrency value={amount} onChangeValue={setAmount} />
      </KeyboardAvoidingView>
      <FlatList
        data={countries.filter(country => country.name.includes(filter))}
        renderItem={({ item }) => (
          <CardCountry country={item} amount={calculateAmount(item.currency)} />
        )}
        keyExtractor={({ name }) => name}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

export default App;
