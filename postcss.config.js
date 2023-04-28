/* eslint node/no-missing-require: "off" */
const env = process.env.EMBER_ENV || 'development';

const plugins = [
  require('tailwindcss/nesting'),
  require('tailwindcss')({ config: './tailwind.config.js' }),
  require('autoprefixer'),
];

module.exports = {
  plugins,
};
