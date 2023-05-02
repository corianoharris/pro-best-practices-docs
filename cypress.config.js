/**
 * Copyright (c) Coriano Harris. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// eslint-disable-next-line import/no-extraneous-dependencies
const {defineConfig} = require('cypress');
// https://github.com/bahmutov/cypress-split
const cypressSplit = require('cypress-split');

// in the user project it would be
const mdPreprocessor = require('cypress-markdown-preprocessor');
// const mdPreprocessor = require(".");

module.exports = defineConfig({
  fixturesFolder: false,
  viewportWidth: 500,

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      cypressSplit(on, config);
      on('file:preprocessor', mdPreprocessor);
      return config;
    },
    specPattern: ['cypress/e2e/*.md', 'cypress/e2e/*.js'],
    excludeSpecPattern: ['skip.js'],
  },
});
