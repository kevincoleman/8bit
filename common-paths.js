const path = require('path');

module.exports = {
  entryPath: path.resolve(__dirname, "src/main.js"),
  outputPath: path.resolve(__dirname, 'dist'),
  indexTemplatePath: path.resolve(__dirname, 'public/index.html'),
}