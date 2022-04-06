import React from 'react';
import { Text, TextInputProps, View } from 'react-native';
import { Input } from '@src/components';
import { styles } from './InputCurrency.styles';

function InputCurrency({ onChangeText, ...otherProps }: TextInputProps) {
  function onChangeValue(text: string) {
    if (/^([0-9]\d*)?(\.\d{0,2})?$/.test(text)) {
      onChangeText && onChangeText(text);
    }
  }

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        placeholder="0"
        keyboardType="numeric"
        onChangeText={onChangeValue}
        {...otherProps}
      />
      <Text style={styles.postfix}> kr</Text>
    </View>
  );
}

export default InputCurrency;
