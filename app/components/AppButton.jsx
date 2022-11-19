import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

export default AppButton = ({
  text,
  color = "black",
  width,
  onPress,
  style,
  styleText,
  imageSource,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.buttonContainer,
        { backgroundColor: colors[color], width: width },
        style,
      ]}
    >
      <AppText style={[styles.text, styleText]}>{text}</AppText>
      {imageSource && (
        <Image
          source={imageSource}
          style={{ width: 10, height: 10, marginLeft: 8 }}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 4,
  },
  text: {
    color: colors.white,
    fontWeight: "600",
  },
});
