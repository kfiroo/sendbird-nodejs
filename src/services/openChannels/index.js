'use strict';

const _ = require('lodash');
const actions = require('./actions');

const createService = require('../../utils/createService');

const messagesService = require('../messages');
const metadataService = require('../metadata');
const metacounterService = require('../metacounter');

module.exports = function (request) {
    const service = createService(request, '/open_channels', actions);
    service.messages = messagesService(request, '/open_channels/{channel_url}');
    service.metadata = metadataService(request, '/open_channels/{channel_url}');
    service.metacounter = metacounterService(request, '/open_channels/{channel_url}');
    return service;
};