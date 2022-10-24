module.exports = (api) => {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '^@assets(.+)': './assets/\\1',
            '^@components(.+)': './src/components/\\1',
            '^@lib(.+)': './src/lib/\\1',
            '^@screens(.+)': './src/screens/\\1',
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
    ],
  }
}
