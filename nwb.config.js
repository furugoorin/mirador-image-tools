const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'MiradorImageTools',
      externals: {
        react: 'React',
        'react-dom': 'ReactDom',
      },
    },
  },
  webpack: {
    aliases: {
      '@material-ui/core': path.resolve('./', 'node_modules', '@material-ui/core'),
      '@material-ui/styles': path.resolve('./', 'node_modules', '@material-ui/styles'),
      react: path.resolve('./', 'node_modules', 'react'),
      'react-dom': path.resolve('./', 'node_modules', 'react-dom'),
    },
    extra: {
      plugins: [
        new CleanWebpackPlugin(),
        new webpack.IgnorePlugin(/@blueprintjs\/(core|icons)/),
      ],
    },
  },
};
