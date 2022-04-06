import { StyleSheet } from 'react-native';
import { colors, typography } from '@src/theme';

export const styles = StyleSheet.create({
  input: {
    ...typography.h3,
    margin: 5,
    padding: 7,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
});
