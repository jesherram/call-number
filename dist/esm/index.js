import { registerPlugin } from '@capacitor/core';
const CallNumber = registerPlugin('CallNumber', {
    web: () => import('./web').then(m => new m.CallNumberWeb()),
});
export * from './definitions';
export { CallNumber };
//# sourceMappingURL=index.js.map