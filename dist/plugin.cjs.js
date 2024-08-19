'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CallNumber = core.registerPlugin('CallNumber', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CallNumberWeb()),
});

class CallNumberWeb extends core.WebPlugin {
    call(_options) {
        throw new Error('Method not implemented.');
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CallNumberWeb: CallNumberWeb
});

exports.CallNumber = CallNumber;
//# sourceMappingURL=plugin.cjs.js.map
