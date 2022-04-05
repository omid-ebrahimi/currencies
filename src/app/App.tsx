import React, { useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { LoadingScreen } from '@src/components';
import { styles } from './App.styles';
import { useCountries } from './App.hooks';
import { CardCountry } from './components/CardCountry';

function App() {
  const [filter, setFilter] = useState('');
  const { countries, loading } = useCountries();

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search country"
          onChangeText={setFilter}
        />
      </KeyboardAvoidingView>
      <FlatList
        data={countries.filter(country => country.name.includes(filter))}
        renderItem={({ item }) => <CardCountry country={item} />}
        keyExtractor={({ name }) => name}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

export default App;
