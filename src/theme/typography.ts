import { TextStyle } from 'react-native';

type Typography = {
  [typography in 'h1' | 'h2' | 'h3' | 'subtitle1' | 'subtitle2']: TextStyle;
};

export const typography: Typography = {
  h1: {
    fontWeight: 'normal',
    fontSize: 34,
    letterSpacing: 0.25,
  },
  h2: {
    fontWeight: 'normal',
    fontSize: 24,
    letterSpacing: 0,
  },
  h3: {
    fontWeight: '500',
    fontSize: 20,
    letterSpacing: 0.15,
  },
  subtitle1: {
    fontWeight: 'normal',
    fontSize: 16,
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontWeight: '500',
    fontSize: 14,
    letterSpacing: 0.1,
  },
};
