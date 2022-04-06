import { StyleSheet } from 'react-native';
import { colors, getShadowStyle } from '@src/theme';

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
  currencyInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContainer: {
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
});
