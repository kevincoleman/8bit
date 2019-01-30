const presets = [
  [
      "@babel/preset-env",
      {
          // we want webpack to handle modules for us
          modules: false,
          useBuiltIns: "usage",
          // test what transformations are being used in terminal
          // debug: true,
      },
  ],
];

const plugins = [
  ['@babel/plugin-syntax-dynamic-import']
];

module.exports = {
  presets,
  plugins
};
