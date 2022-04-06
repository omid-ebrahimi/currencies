import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { colors } from '@src/theme';
import { styles } from './Input.styles';

function Input({ style, editable = true, ...otherProps }: TextInputProps) {
  return (
    <TextInput
      style={[
        styles.input,
        style,
        !editable && { backgroundColor: colors.grayBackground },
      ]}
      editable={editable}
      {...otherProps}
    />
  );
}

export default Input;
