import * as React from 'react';

import { WhatsappAuthViewProps } from './WhatsappAuth.types';

export default function WhatsappAuthView(props: WhatsappAuthViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
