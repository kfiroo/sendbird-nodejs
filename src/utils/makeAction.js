'use strict';

var _ = require('lodash');
var request = require('request');
var Promise = require('bluebird');

module.exports = function makeAction(apiToken, endpoint, action) {

    return function (payload) {

        return new Promise(function (resolve, reject) {
            
            var options = {
                json: true,
                url: action.url,
                method: action.method,
                baseUrl: endpoint,
                body: _.assign({
                    auth: apiToken
                }, payload)
            };
            
            request(options, function (err, res, body) {
                if (err) {
                    reject(err);
                    return;
                }
                if (body && body.error) {
                    reject(body);
                    return;
                }
                resolve(body);
            });
            
        });

    };

};