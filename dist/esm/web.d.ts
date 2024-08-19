import { WebPlugin } from '@capacitor/core';
import type { CallNumberPlugin, CallNumberResult } from './definitions';
export declare class CallNumberWeb extends WebPlugin implements CallNumberPlugin {
    call(_options?: {
        number?: string;
        bypassAppChooser?: boolean;
    }): Promise<CallNumberResult>;
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
