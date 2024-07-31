import { WebPlugin } from '@capacitor/core';

import type { CallNumberPlugin } from './definitions';

export class CallNumberWeb extends WebPlugin implements CallNumberPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
