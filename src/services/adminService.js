'use strict';

var _ = require('lodash');
var makeSimpleAction = require('../utils/makeSimpleAction');

module.exports = {

    actionNames: [
        'broadcast_message',
        'read_messages',
        'delete_message',
        'list_messaging_channels',
        'mute',
        'unmute',
        'mute_list',
        'ccu_count'
    ],

    getEndpoint: function () {
        return 'https://api.sendbird.com/admin/';
    },

    getActions: function () {
        return _.zipObject(
            this.actionNames,
            _.map(this.actionNames, makeSimpleAction)
        );
    }

};