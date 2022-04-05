import { Platform, ViewStyle } from 'react-native';

export function getShadowStyle(elevation: number): ViewStyle {
  return Platform.select({
    android: {
      elevation,
      backgroundColor: 'white',
    },
    default: {
      zIndex: elevation,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOpacity: 0.0015 * elevation + 0.18,
      shadowRadius: 0.54 * elevation,
      shadowOffset: {
        width: 0.2 * elevation,
        height: 0.6 * elevation,
      },
    },
  });
}
