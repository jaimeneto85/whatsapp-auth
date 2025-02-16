import { requireNativeView } from 'expo';
import * as React from 'react';

import { WhatsappAuthViewProps } from './WhatsappAuth.types';

const NativeView: React.ComponentType<WhatsappAuthViewProps> =
  requireNativeView('WhatsappAuth');

export default function WhatsappAuthView(props: WhatsappAuthViewProps) {
  return <NativeView {...props} />;
}
