'use strict';

var createService = require('./utils/createService');

var adminService = require('./services/adminService');
var channelService = require('./services/channelService');
var messagingService = require('./services/messagingService');
var migrationService = require('./services/migrationService');
var userService = require('./services/userService');

function SendBird(apiToken) {
    if (!(this instanceof SendBird)) {
        return new SendBird(apiToken);
    }
    if (!apiToken) {
        throw new Error('Invalid api token');
    }
    this.adminService = createService(apiToken, adminService);
    this.channelService = createService(apiToken, channelService);
    this.messagingService = createService(apiToken, messagingService);
    this.migrationService = createService(apiToken, migrationService);
    this.userService = createService(apiToken, userService);
}

module.exports = SendBird;