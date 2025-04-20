import Constants from "expo-constants";
import React from "react";
import { Pressable, Text, Linking, Alert } from "react-native";

import { styles } from "./WhatsAuth.syle";
import { WhatsappButtonProps } from "./WhatsappAuth.types";
import { WhatsappIcon } from "./_icon/whatsapp.icon";

const WhatsappButton: React.FC<WhatsappButtonProps> = ({
  callBackScreen,
  whatsappNumberCore,
  defaultMessageLogin,
  buttonText = "Sign Up with WhatsApp",
  buttonStyle,
  buttonTextStyle,
  iconStyle,
  iconColor,
  iconSize,
}) => {
  const number =
    whatsappNumberCore ||
    Constants.expoConfig?.extra?.WHATSAPP_NUMBER_CORE ||
    Constants.expoConfig?.extra?.EXPO_PUBLIC_WHATSAPP_NUMBER_CORE;
  const message =
    defaultMessageLogin ||
    Constants.expoConfig?.extra?.DEFAULT_MESSAGE_LOGIN ||
    Constants.expoConfig?.extra?.EXPO_PUBLIC_DEFAULT_MESSAGE_LOGIN;

  const handlePress = () => {
    if (!number || !message) {
      Alert.alert("Error", "Number or message not configured.");
      console.error("Number or message not configured.");
      return;
    }

    const sanitizedNumber = number.replace(/\D/g, "");

    const url = `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(message)}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          Alert.alert("Erro", "WhatsApp is not installed.");
        } else {
          Linking.openURL(url)
            .then(() => {
              callBackScreen();
            })
            .catch(() => {
              Alert.alert("Error", "Unable to open WhatsApp.");
            });
        }
      })
      .catch(() => console.log("An error occurred while checking WhatsApp."));
  };

  return (
    <Pressable style={[styles.button, buttonStyle]} onPress={handlePress}>
      <WhatsappIcon
        width={iconSize}
        height={iconSize}
        color={iconColor}
        style={iconStyle}
      />
      <Text style={[styles.buttonText, buttonTextStyle]}>{buttonText}</Text>
    </Pressable>
  );
};

export { WhatsappButton };
