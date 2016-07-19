'use strict';

var createService = require('./utils/createService');

var userService = require('./services/userService');

function SendBird(apiToken) {
    if (!(this instanceof SendBird)) {
        return new SendBird(apiToken);
    }
    if (!apiToken) {
        throw new Error('Invalid api token');
    }
    this.userService = createService(apiToken, userService);
}

module.expors = SendBird;