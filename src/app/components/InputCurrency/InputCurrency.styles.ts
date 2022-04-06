import { StyleSheet } from 'react-native';
import { typography } from '@src/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  postfix: {
    ...typography.h3,
    width: 35,
  },
});
