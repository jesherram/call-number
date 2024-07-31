import { WebPlugin } from '@capacitor/core';

import type { CallNumberPlugin, CallNumberResult } from './definitions';

export class CallNumberWeb extends WebPlugin implements CallNumberPlugin {
  call(_options?: { number?: string; bypassAppChooser?: boolean; }): Promise<CallNumberResult> {
    throw new Error('Method not implemented.');
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
