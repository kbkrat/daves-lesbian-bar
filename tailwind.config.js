'use strict';
const path = require('path');

const appEntry = path.join(__dirname, 'app');
const relevantFilesGlob = '**/*.{html,js,ts,hbs,gjs,gts}';

const content = [path.join(appEntry, relevantFilesGlob)];

const tailwindConfig = {
  content,
  theme: {},
  plugins: [require('@tailwindcss/typography')],
};

module.exports = tailwindConfig;
