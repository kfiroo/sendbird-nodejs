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
    'participants': {
        method: GET,
        endpoint: '/{channel_url}/participants'
    },
    'freeze': {
        method: PUT,
        endpoint: '/{channel_url}/freeze'
    },
    'ban': {
        method: POST,
        endpoint: '/{channel_url}/ban'
    },
    'banList': {
        method: GET,
        endpoint: '/{channel_url}/ban'
    },
    'banUpdate': {
        method: PUT,
        endpoint: '/{channel_url}/ban/{banned_user_id}'
    },
    'banDelete': {
        method: DELETE,
        endpoint: '/{channel_url}/ban/{banned_user_id}'
    },
    'banView': {
        method: GET,
        endpoint: '/{channel_url}/ban/{banned_user_id}'
    },
    'mute': {
        method: POST,
        endpoint: '/{channel_url}/mute'
    },
    'muteList': {
        method: GET,
        endpoint: '/{channel_url}/mute'
    },
    'muteDelete': {
        method: DELETE,
        endpoint: '/{channel_url}/mute/{muted_user_id}'
    },
    'muteView': {
        method: GET,
        endpoint: '/{channel_url}/mute/{muted_user_id}'
    }
};

module.exports = actions;