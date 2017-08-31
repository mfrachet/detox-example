/* eslint-disable */
require('babel-polyfill');
const { defineSupportCode } = require('cucumber');
const detox = require('detox');
const config = require('../../../package.json').detox;

defineSupportCode(({ Before, After }) => {
  Before({ timeout: 120 * 1000 }, async () => {
    await detox.init(config);
  });
  After({ timeout: 120 * 1000 }, async () => {
    await detox.cleanup();
  });
});
