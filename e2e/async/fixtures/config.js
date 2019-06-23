module.exports = {
    capabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu', '--window-size=1280,1024'],
        },
    },
    logLevel: 'error',
};
