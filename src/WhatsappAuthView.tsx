import * as React from "react";
import { Platform, View } from "react-native";

import { WhatsappAuthViewProps } from "./WhatsappAuth.types";

let NativeView: React.ComponentType<WhatsappAuthViewProps> | null = null;

if (Platform.OS !== "web") {
  try {
    const { requireNativeView } = require("expo");
    NativeView = requireNativeView("WhatsappAuth");
  } catch (error) {
    console.warn("WhatsappAuth: Native view could not be loaded");
    console.error(error);
  }
}

export default function WhatsappAuthView(props: WhatsappAuthViewProps) {
  if (Platform.OS === "web" || !NativeView) {
    return <View style={props.style} />;
  }

  return <NativeView {...props} />;
}
