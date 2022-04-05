import { StyleSheet } from 'react-native';
import { colors, typography } from '@src/theme';

export const styles = StyleSheet.create({
  inputsContainer: {
    padding: 5,
  },
  input: {
    ...typography.h3,
    padding: 7,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    borderRadius: 5,
  },
  listContainer: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    backgroundColor: colors.grayBackground,
  },
});
