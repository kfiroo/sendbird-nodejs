'use strict';

var _ = require('lodash');
var makeSimpleAction = require('../utils/makeSimpleAction');

module.exports = {

    actionNames: [
        'create',
        'update',
        'auth',
        'block',
        'unblock',
        'deactivate'
    ],

    getEndpoint: function () {
        return 'https://api.sendbird.com/user/';
    },

    getActions: function () {
        return _.zipObject(
            this.actionNames,
            _.map(this.actionNames, makeSimpleAction)
        );
    }

};