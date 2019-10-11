const SeleniumStandalone = require('selenium-standalone');

const startServer = () => new Promise((resolve, reject) => {
    SeleniumStandalone.start({}, (err, cp) => {
        if (err) {
            reject(err);
        }
        resolve(cp);
    });
})
    .then((res) => res)
    .catch((e) => {
        throw new Error(e);
    });

module.exports = {
    startServer,
};
