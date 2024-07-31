import { registerPlugin } from '@capacitor/core';

import type { CallNumberPlugin } from './definitions';

const CallNumber = registerPlugin<CallNumberPlugin>('CallNumber', {
  web: () => import('./web').then(m => new m.CallNumberWeb()),
});

export * from './definitions';
export { CallNumber };
