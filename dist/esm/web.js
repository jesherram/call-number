import { WebPlugin } from '@capacitor/core';
export class CallNumberWeb extends WebPlugin {
    call(_options) {
        throw new Error('Method not implemented.');
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map