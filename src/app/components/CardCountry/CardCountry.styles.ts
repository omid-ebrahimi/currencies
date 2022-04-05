import { StyleSheet } from 'react-native';
import { colors, getShadowStyle, typography } from '@src/theme';

export const styles = StyleSheet.create({
  container: {
    ...getShadowStyle(3),
    height: 130,
    marginVertical: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 7,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  name: {
    ...typography.h3,
    flex: 1,
    marginLeft: 5,
  },
  subtitle: {
    ...typography.subtitle1,
    flex: 1,
    color: colors.grayText,
  },
});
