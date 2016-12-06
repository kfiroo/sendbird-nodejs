'use strict';

const actions = require('./actions');

const createService = require('../../utils/createService');

module.exports = function (request) {
    return createService(request, '/users', actions);
};