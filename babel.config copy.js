module.exports = (api) => {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blocklist: null,
          allowlist: null,
          safe: false,
          allowUndefined: true,
          verbose: false,
        },
      ],
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '^@assets(.+)': './assets/\\1',
            '^@components(.+)': './src/components/\\1',
            '^@config(.+)': './src/config/\\1',
            '^@layout(.+)': './src/layout/\\1',
            '^@lib(.+)': './src/lib/\\1',
            '^@packages(.+)': './src/packages/\\1',
            '^@screens(.+)': './src/screens/\\1',
            '^@stacks(.+)': './src/stacks/\\1',
          },
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.jsx',
            '.json',
            '.tsx',
            '.ts',
            '.native.js',
          ],
        },
      ],
      ['react-native-reanimated/plugin'],
    ],
  }
}
