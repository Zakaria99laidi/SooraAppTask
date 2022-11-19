import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../../components/AppText";

const Slogan = ({ text, style }) => {
  return <AppText style={[styles.slogan, style]}>{text}</AppText>;
};

const styles = StyleSheet.create({
  slogan: {
    // fontFamily: "Inter",
    fontWeight: "800",
    fontSize: 36,
    lineHeight: 44,
    textAlign: "center",
    textTransform: "capitalize",
    // marginBottom: 24,
  },
});

export default Slogan;
