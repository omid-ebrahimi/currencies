import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { styles } from './LoadingScreen.styles';

function LoadingScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.indicator} size="large" />
      <Text>Loading</Text>
    </View>
  );
}

export default LoadingScreen;
