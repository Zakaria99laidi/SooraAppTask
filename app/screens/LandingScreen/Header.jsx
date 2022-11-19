import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppButton from "../../components/AppButton";

const Header = ({ style, handlePress, ...otherProps }) => {
  return (
    <View style={[styles.container, style]} {...otherProps}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <AppButton
        text="Contact us"
        imageSource={require("../../assets/images/contact-icon.png")}
        styleText={styles.textButton}
        onPress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 74,
    height: 16,
  },
  textButton: {
    fontFamily: "Inter-SemiBold",
    fontSize: 10,
    lineHeight: 12,
  },
});

export default Header;
