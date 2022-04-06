import React, { useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { LoadingScreen } from '@src/components';
import { styles } from './App.styles';
import { Currency } from './App.types';
import { CardCountry } from './components';
import { useCountries, useRates } from './App.hooks';

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

  function onChangeAmount(text: string) {
    if (/^([0-9]\d*)?(\.\d{0,2})?$/.test(text)) {
      setAmount(text);
    }
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search country"
          value={filter}
          onChangeText={setFilter}
        />
        <TextInput
          style={styles.input}
          placeholder="0 kr"
          keyboardType="numeric"
          value={amount}
          onChangeText={onChangeAmount}
        />
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
