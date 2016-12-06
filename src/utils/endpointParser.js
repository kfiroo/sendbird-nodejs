'use strict';

const _ = require('lodash');
const endpointParamRegExp = /\{(\w+?)\}/g;

function matchAll(str, re) {
    const ret = [];
    let m, i = 0;
    while (m = re.exec(str)) {
        ret.push({
            i: i++,
            key: m[0],
            name: m[1]
        });
    }
    return ret;
}

module.exports = {

    parse(endpoint) {
        const template = _.template(endpoint, {
            interpolate: endpointParamRegExp
        });
        return {
            args: matchAll(endpoint, endpointParamRegExp),
            compile(args) {
                const params = _.zipObject(_.map(this.args, 'name'), args);
                return template(params);
            }
        };
    }

};