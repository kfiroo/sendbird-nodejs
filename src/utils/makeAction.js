'use strict';

const _ = require('lodash');

const endpointParser = require('./endpointParser');

const {
    GET
} = require('../constants/requestTypes');

module.exports = function makeAction(request, endpointPrefix, name, options) {

    const endpoint = endpointPrefix + options.endpoint;

    const controller = endpointParser.parse(endpoint);

    return function doAction() {
        const args = Array.prototype.slice.call(arguments);
        const hasPayload = _.isPlainObject(_.last(args));
        const payload = hasPayload ? _.last(args) : null;
        const params = hasPayload ? _.initial(args) : args;

        if (params.length !== controller.args.length) {
            throw new Error(`Invalid arguments number: [${name}] expects [${controller.args.length}] arguments but received [${params.length}]`);
        }

        const reqParams = {
            method: options.method,
            url: controller.compile(args)
        };

        if (hasPayload) {
            if (options.method === GET) {
                reqParams.qs = payload;
            } else {
                reqParams.body = payload;
            }
        }

        return request(reqParams);
    };

};
