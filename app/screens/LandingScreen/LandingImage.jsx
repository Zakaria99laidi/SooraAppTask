import React from "react";
import { StyleSheet, Image } from "react-native";

const LandingImage = ({
  source,
  style,
  resizeMode = "cover",
  ...otherProps
}) => (
  <Image
    source={source}
    style={[styles.landingImage, style]}
    resizeMode={resizeMode}
    {...otherProps}
  />
);

const styles = StyleSheet.create({
  landingImage: {
    width: "100%",
    height: 396,
  },
});

export default LandingImage;
