'use strict';

module.expors = function makeAction(action) {
    return {
        url: '/' + action,
        method: 'POST'
    };
};