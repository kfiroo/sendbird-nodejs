'use strict';

const _ = require('lodash');

const makeAction = require('./makeAction');

module.exports = function createService(request, endpointPrefix, actions) {
    return _.mapValues(actions, (options, name) => {
        return makeAction(request, endpointPrefix, name, options);
    });
};