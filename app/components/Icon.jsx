import { StyleSheet, Image, View } from "react-native";
import React from "react";

export default Icon = ({
  imgSource = require("../assets/images/facebook.png"),
  style,
  size = 24,
  styleImage,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, style]} {...otherProps}>
      <Image
        source={imgSource}
        style={[{ width: size, height: size }, styleImage]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 100,
  },
});
