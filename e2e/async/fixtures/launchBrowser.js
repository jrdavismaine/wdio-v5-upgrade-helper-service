const { remote } = require('webdriverio');
const UpgradeService = require('../../../build/service').default;

const config = require('./config');

module.exports = async () => {
    // Add browser instance to global scope so new commands can be added.
    // eslint-disable-next-line no-multi-assign
    const browser = global.browser = await remote(config);
    new UpgradeService().before();
    return browser;
};
