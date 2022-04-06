import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './Input.styles';

function Input({ style, ...otherProps }: TextInputProps) {
  return <TextInput style={[styles.input, style]} {...otherProps} />;
}

export default Input;
