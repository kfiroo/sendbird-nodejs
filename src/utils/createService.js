'use strict';

var _ = require('lodash');

var makeAction = require('./makeAction');

module.expors = function createService(apiToken, service) {
    var actions = service.getActions();
    var endpoint = service.getEndpoint();

    return _.mapValues(actions, _.partial(makeAction, apiToken, endpoint));
};