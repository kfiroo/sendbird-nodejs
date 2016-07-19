'use strict';

var _ = require('lodash');
var makeSimpleAction = require('../utils/makeSimpleAction');

module.exports = {

    actionNames: [
        'create',
        'list',
        'update',
        'delete',
        'view',
        'send',
        'get_metadata',
        'set_metadata',
        'get_metacounter',
        'set_metacounter',
        'incr_metacounter',
        'decr_metacounter',
        'message_count'
    ],

    getEndpoint: function () {
        return 'https://api.sendbird.com/channel/';
    },

    getActions: function () {
        return _.zipObject(
            this.actionNames,
            _.map(this.actionNames, makeSimpleAction)
        );
    }

};