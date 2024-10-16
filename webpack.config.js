const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const WooCommerceDependencyExtractionWebpackPlugin = require('@woocommerce/dependency-extraction-webpack-plugin');
const path = require('path');

module.exports = {
  ...defaultConfig,
  entry: {
    index: path.resolve(__dirname, 'src/index.js'), // Entry for index.js
    frontend: path.resolve(__dirname, 'src/frontend.js'), // Entry for frontend.js
  },
  output: {
    ...defaultConfig.output,
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'), // Output directory
  },
  module: {
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.(js|jsx)$/, // Handle both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // JSX support
          },
        },
      },
    ],
  },
  plugins: [
    ...(defaultConfig.plugins || []),
    new WooCommerceDependencyExtractionWebpackPlugin(), // WooCommerce plugin integration
  ],
  resolve: {
    ...defaultConfig.resolve,
    extensions: ['.js', '.jsx'], // Support .jsx imports without specifying the extension
  },
};
