import React from 'react';
import { Text, View } from 'react-native';
import { Input } from '@src/components';
import { styles } from './InputCurrency.styles';

interface Props {
  value: string;
  onChangeValue: (value: string) => void;
}

function InputCurrency({ value, onChangeValue }: Props) {
  function onChangeText(text: string) {
    if (/^([0-9]\d*)?(\.\d{0,2})?$/.test(text)) {
      onChangeValue(text);
    }
  }

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        placeholder="0"
        keyboardType="numeric"
        value={value}
        onChangeText={onChangeText}
      />
      <Text style={styles.postfix}> kr</Text>
    </View>
  );
}

export default InputCurrency;
