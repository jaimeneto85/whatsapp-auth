import { NativeModule, requireNativeModule } from 'expo';

import { WhatsappAuthModuleEvents } from './WhatsappAuth.types';

declare class WhatsappAuthModule extends NativeModule<WhatsappAuthModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<WhatsappAuthModule>('WhatsappAuth');
