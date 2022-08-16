module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["import", { libraryName: "@ant-design/react-native" }],
      ['module-resolver', {
        'alias': {
          '@src': './src',
          '@assets': './assets',
          '@scenes': './src/scenes',
          '@routes': './src/routes',
          '@utils': './src/utils',
          '@types': './src/types',
          '@slice': './src/slice',
          '@styles': './src/styles',
        },
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }]
    ]
  };
};
