'use strict';

const {
    GET,
    POST,
    PUT,
    DELETE
} = require('../../constants/requestTypes');

const actions = {
    'create': {
        method: POST,
        endpoint: '/'
    },
    'view': {
        method: GET,
        endpoint: '/'
    },
    'viewSingle': {
        method: GET,
        endpoint: '/{key_name}'
    },
    'update': {
        method: PUT,
        endpoint: '/'
    },
    'updateSingle': {
        method: PUT,
        endpoint: '/{key_name}'
    },
    'delete': {
        method: DELETE,
        endpoint: '/'
    },
    'deleteSingle': {
        method: DELETE,
        endpoint: '/{key_name}'
    }
};

module.exports = actions;