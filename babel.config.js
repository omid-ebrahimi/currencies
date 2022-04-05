module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: ['.ts', '.tsx'],
        alias: {
          '@src': './src',
        },
      },
    ],
  ],
};
