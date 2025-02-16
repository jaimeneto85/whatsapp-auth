interface WhatsappLoginProps {
  callBackScreen: () => void;
  whatsappNumberCore: string;
  defaultMessageLogin?: string;
  style?: any;
  testID?: string;
}

declare module 'react-native-svg';

declare module 'react-native-whatsapp-login-button' {
  export interface WhatsappLoginProps {
    callBackScreen: () => void;
    whatsappNumberCore: string;
    defaultMessageLogin?: string;
  }
} 