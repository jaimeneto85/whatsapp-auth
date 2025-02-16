import type { StyleProp, ViewStyle } from 'react-native';

export type OnLoadEventPayload = {
  url: string;
};

export type WhatsappAuthModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
};

export type ChangeEventPayload = {
  value: string;
};

export type WhatsappAuthViewProps = {
  url: string;
  onLoad: (event: { nativeEvent: OnLoadEventPayload }) => void;
  style?: StyleProp<ViewStyle>;
};

export type WhatsappButtonProps = {
  callBackScreen: () => void;
  whatsappNumberCore?: string;
  defaultMessageLogin?: string;
  buttonText?: string;
}