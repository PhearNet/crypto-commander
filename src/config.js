let target = process.env.APP_ENV || process.env.NODE_ENV;
let config = require('../config.json');


let launchConfig = config[target] ? config[target] : config.default;
launchConfig.target = target || 'develop';
// launchConfig.database.host = process.env.APP_DB || launchConfig.database.host;

module.exports = launchConfig;