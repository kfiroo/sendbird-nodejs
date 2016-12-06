'use strict';

const _ = require('lodash');
const expect = require('expect');
const nock = require('nock');

const SendBird = require('../src/SendBird');

const endpointParser = require('../src/utils/endpointParser');

const baseUrl = 'http://localhost:1234';
const apiToken = 'my-api-token';

const sb = SendBird(apiToken, baseUrl);

describe('endpointParser', function () {
    
    it('should parse endpoint', function () {
        expect(endpointParser.parse('/users/{user_id}/push/{token_type}/{push_token}').args).toEqual([
            {
                i: 0,
                key: '{user_id}',
                name: 'user_id'
            },
            {
                i: 1,
                key: '{token_type}',
                name: 'token_type'
            },
            {
                i: 2,
                key: '{push_token}',
                name: 'push_token'
            }
        ]);
    });

    it('should compile the endpoint template with the params', function () {
        const endpoint = '/users/{user_id}/push/{token_type}/{push_token}';
        const parsed = endpointParser.parse(endpoint);
        const args = [
            'some-user-id',
            'some-token-type',
            'some-push-token'
        ];
        expect(parsed.compile(args)).toBe('/users/some-user-id/push/some-token-type/some-push-token');
    });
    
});

describe('sendbird', function () {

    before(function () {
        nock.disableNetConnect();
    });

    after(function () {
        nock.cleanAll();
        nock.enableNetConnect();
    });

    it('should throw if api is not given', function () {
        expect(() => {
            SendBird();
        }).toThrow('Invalid api token');
    });

    describe('users', function () {

        it('should exist', function () {
            expect(sb.users).toExist();
        });

        it('should expose functions', function () {
            expect(_.every(sb.users, _.isFunction)).toBe(true);
        });

        it('should call the api', function () {
            const nockOptions = {
                reqheaders: {
                    'Api-Token': apiToken
                }
            };
            const userId = 'some-user-id';
            const tokenType = 'some-token-type';
            const payload = {
                gcm_reg_token: 'my-gcm-reg-token'
            };
            const scope = nock(baseUrl, nockOptions)
                .post(`/users/${userId}/push/${tokenType}`, payload)
                .reply(200, {});

            return sb.users.registerToken(userId, tokenType, payload)
                .then(() => {
                    scope.done();
                });
        });
        
        it('should call the api with query string', function () {
            const nockOptions = {
                reqheaders: {
                    'Api-Token': apiToken
                }
            };
            const payload = {
                limit: 15,
                show_bot: false
            };
            const scope = nock(baseUrl, nockOptions)
                .get('/users/')
                .query(payload)
                .reply(200, {});

            return sb.users.list(payload)
                .then(() => {
                    scope.done();
                });
        });

        it('should throw if arguments number is wrong', function () {
            const userId = 'some-user-id';
            const payload = {
                gcm_reg_token: 'my-gcm-reg-token'
            };

            expect(() => {
                sb.users.registerToken(userId, payload);
            }).toThrow('Invalid arguments number: [registerToken] expects [2] arguments but received [1]');
        });
        
    });
    
    describe('messages', function () {
        
        it('should call sub service', function () {
            const nockOptions = {
                reqheaders: {
                    'Api-Token': apiToken
                }
            };
            const channelUrl = 'some-channel-url';
            const messageId = 'some-msg-id';
            const scope = nock(baseUrl, nockOptions)
                .delete(`/group_channels/${channelUrl}/messages/${messageId}`)
                .reply(200, {});

            return sb.groupChannels.messages.delete(channelUrl, messageId)
                .then(() => {
                    scope.done();
                });
        });
        
    });

});