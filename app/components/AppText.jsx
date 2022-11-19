import React from "react";

import { Text, StyleSheet } from "react-native";
import colors from "../config/colors.js";

export default AppText = ({ children, style, ...otherProps }) => (
  <Text style={[styles.text, style]} {...otherProps}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    // fontFamily: "Inter",
    color: colors.black,
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: 15,
  },
});
