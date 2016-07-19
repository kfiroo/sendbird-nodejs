'use strict';

var _ = require('lodash');
var makeSimpleAction = require('../utils/makeSimpleAction');

module.exports = {

    actionNames: [
        'create',
        'invite',
        'record'
    ],

    getEndpoint: function () {
        return 'https://api.sendbird.com/migration/';
    },

    getActions: function () {
        return _.zipObject(
            this.actionNames,
            _.map(this.actionNames, makeSimpleAction)
        );
    }

};