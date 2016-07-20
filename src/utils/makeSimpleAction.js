'use strict';

module.exports = function makeAction(action) {
    return {
        url: '/' + action,
        method: 'POST'
    };
};