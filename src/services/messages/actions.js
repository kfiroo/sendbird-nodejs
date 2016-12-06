'use strict';

const {
    GET,
    POST,
    PUT,
    DELETE
} = require('../../constants/requestTypes');

const actions = {
    'send': {
        method: POST,
        endpoint: '/'
    },
    'list': {
        method: GET,
        endpoint: '/'
    },
    'delete': {
        method: DELETE,
        endpoint: '/{message_id}'
    },
    'view': {
        method: GET,
        endpoint: '/{message_id}'
    },
    'markAsRead': {
        method: PUT,
        endpoint: '/mark_as_read'
    },
    'count': {
        method: GET,
        endpoint: '/total_count'
    },
    'unreadCount': {
        method: GET,
        endpoint: '/unread_count'
    }
};

module.exports = actions;