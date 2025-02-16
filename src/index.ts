// Reexport the native module. On web, it will be resolved to WhatsappAuthModule.web.ts
// and on native platforms to WhatsappAuthModule.ts
export { default } from './WhatsappAuthModule';
export { default as WhatsappAuthView } from './WhatsappAuthView';
export * from  './WhatsappAuth.types';
