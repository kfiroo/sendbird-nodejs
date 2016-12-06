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
    'list': {
        method: GET,
        endpoint: '/'
    },
    'update': {
        method: PUT,
        endpoint: '/{channel_url}'
    },
    'delete': {
        method: DELETE,
        endpoint: '/{channel_url}'
    },
    'view': {
        method: GET,
        endpoint: '/{channel_url}'
    },
    'members': {
        method: GET,
        endpoint: '/{channel_url}/members'
    },
    'checkMember': {
        method: GET,
        endpoint: '/{channel_url}/members/{user_id}'
    },
    'invite': {
        method: POST,
        endpoint: '/{channel_url}/invite'
    },
    'hide': {
        method: PUT,
        endpoint: '/{channel_url}/hide'
    },
    'leave': {
        method: PUT,
        endpoint: '/{channel_url}/leave'
    }
};

module.exports = actions;