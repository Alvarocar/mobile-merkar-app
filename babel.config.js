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
          '@type': './src/type',
          '@slice': './src/slice',
          '@stylesheet': './src/stylesheet',
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
