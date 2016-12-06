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
        endpoint: '/{user_id}'
    },
    'view': {
        method: GET,
        endpoint: '/{user_id}'
    },
    'delete': {
        method: DELETE,
        endpoint: '/{user_id}'
    },
    'totalUnreadCount': {
        method: GET,
        endpoint: '/{user_id}/unread_count'
    },
    'activate': {
        method: PUT,
        endpoint: '/{user_id}/activate',
        deprecate: true
    },
    'block': {
        method: POST,
        endpoint: '/{user_id}/block'
    },
    'blockList': {
        method: GET,
        endpoint: '/{user_id}/block'
    },
    'deleteBlock': {
        method: DELETE,
        endpoint: '/{user_id}/block/{target_id}'
    },
    'banList': {
        method: GET,
        endpoint: '/{user_id}/ban'
    },
    'muteList': {
        method: GET,
        endpoint: '/{user_id}/mute'
    },
    'markAsReadAll': {
        method: POST,
        endpoint: '/{user_id}/mark_as_read_all'
    },
    'registerToken': {
        method: POST,
        endpoint: '/{user_id}/push/{token_type}'
    },
    'unregisterToken': {
        method: DELETE,
        endpoint: '/{user_id}/push/{token_type}/{push_token}'
    },
    'unregisterAllTokens': {
        method: DELETE,
        endpoint: '/{user_id}/push'
    },
    'pushPreference': {
        method: GET,
        endpoint: '/{user_id}/push_preference'
    },
    'updatePushPreference': {
        method: PUT,
        endpoint: '/{user_id}/push_preference'
    },
    'deletePushPreference': {
        method: DELETE,
        endpoint: '/{user_id}/push_preference'
    },
    'channelPushPreference': {
        method: GET,
        endpoint: '/{user_id}/push_preference/{channel_url}'
    },
    'updateChannelPushPreference': {
        method: PUT,
        endpoint: '/{user_id}/push_preference/{channel_url}'
    },
    'myGroupChannelList': {
        method: GET,
        endpoint: '/{user_id}/my_group_channels'
    }
};

module.exports = actions;

