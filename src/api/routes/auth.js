const SuperLogin = require('superlogin');
let config = require('../../config');

let slconfig = {
    dbServer: config.api.database,
    userDBs: config.api.userDBs
};

if (config.target.toLowerCase() === "production"){
    slconfig.session = config.api.session;
    slconfig.mailer = config.api.mailer;
}

let superlogin = new SuperLogin(slconfig);

module.exports = superlogin.router;