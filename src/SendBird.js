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
    this.admin = createService(apiToken, adminService);
    this.channel = createService(apiToken, channelService);
    this.messaging = createService(apiToken, messagingService);
    this.migration = createService(apiToken, migrationService);
    this.user = createService(apiToken, userService);
}

module.exports = SendBird;