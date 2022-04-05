import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { LoadingScreen } from '@src/components';
import { styles } from './App.styles';
import { useCountries } from './App.hooks';
import { CardCountry } from './components/CardCountry';

function App() {
  const { countries, loading } = useCountries();

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={countries}
        renderItem={({ item }) => <CardCountry country={item} />}
        keyExtractor={({ name }) => name}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

export default App;
