module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components/index.ts',
          '@theme': './src/theme/theme.ts',
          '@icons': './src/assets/icons/index.ts',
          '@hooks': './src/hooks/index.ts',
          '@screens': './src/screens/index.ts',
          '@routes': './src/routes/index.ts',
        },
        extensions: ['.ts', '.tsx'],
      },
    ],
  ],
};
