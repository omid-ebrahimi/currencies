import { StyleSheet } from 'react-native';
import { colors, getShadowStyle, typography } from '@src/theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.grayBackground,
  },
  inputsContainer: {
    ...getShadowStyle(2),
    paddingVertical: 5,
    backgroundColor: colors.grayBackground,
  },
  input: {
    ...typography.h3,
    margin: 5,
    padding: 7,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  listContainer: {
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
});
