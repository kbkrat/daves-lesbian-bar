'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
  });

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    packagerOptions: {
      cssLoaderOptions: {
        sourceMap: process.env.EMBER_ENV !== "production" ? true : false,
      },
      webpackConfig: {
        module: {
          rules: [
            {
              test: f => /\.css$/i.test(f),
              exclude: /node_modules/,
              use: [
                {
                  loader: "postcss-loader",
                  options: {
                    sourceMap:
                      process.env.EMBER_ENV !== "production" ? true : false,
                    postcssOptions: {
                      config: "./postcss.config.js",
                    },
                  },
                },
              ],
            },
          ],
        },
        resolve: {
          fallback: {
            stream: false,
            crypto: false,
            fs: false,
            path: false,
          },
        },
      },
    },
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
