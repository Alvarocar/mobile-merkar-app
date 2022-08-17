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
        },
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }],
      ["inline-react-svg"],
    ]
  };
};
