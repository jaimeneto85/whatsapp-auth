import { registerWebModule, NativeModule } from 'expo';

import { WhatsappAuthModuleEvents } from './WhatsappAuth.types';

class WhatsappAuthModule extends NativeModule<WhatsappAuthModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(WhatsappAuthModule);
