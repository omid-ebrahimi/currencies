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

  const { countries, loading } = useCountries();
  const { rates, refresh: refreshRates, loading: loadingRates } = useRates();

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
        <InputCurrency
          value={amount}
          onChangeText={setAmount}
          editable={rates !== undefined}
        />
      </KeyboardAvoidingView>
      <FlatList
        data={countries.filter(country => country.name.includes(filter))}
        renderItem={({ item }) => (
          <CardCountry country={item} amount={calculateAmount(item.currency)} />
        )}
        keyExtractor={({ name }) => name}
        onRefresh={refreshRates}
        refreshing={loadingRates}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

export default App;
