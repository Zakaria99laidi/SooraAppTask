import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import AppModal from "../../components/containers/AppModal";
import AppText from "../../components/AppText";
import colors from "../../config/colors";

const ContactModal = ({
  visible,
  title = "Reach out to us through",
  email = "sooratheapp@gmail.com",
  CloseModal,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const handlePress = () => {
    setIsCopied(true);
    setTimeout(function () {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <AppModal visible={visible} CloseModal={CloseModal}>
      <View style={styles.container}>
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <View style={styles.emailContainer}>
            <AppText style={styles.email}>{email}</AppText>
            <TouchableWithoutFeedback onPress={handlePress}>
              <View>
                <Image
                  source={require("../../assets/images/copy.png")}
                  style={styles.copyImage}
                />
                <AppText style={styles.text}>Copy</AppText>
              </View>
            </TouchableWithoutFeedback>
          </View>
          {isCopied && (
            <AppText style={styles.textValidation}>{"Copied !"}</AppText>
          )}
        </View>
      </View>
    </AppModal>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 8,
    width: "100%",
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  email: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 17,
    color: colors.Blue,
    marginRight: 16,
  },
  copyImage: {
    width: 14,
    height: 18,
    alignSelf: "center",
  },
  text: {
    fontSize: 10,
    lineHeight: 12,
  },
  textValidation: {
    alignSelf: "center",
    marginTop: 10,
  },
  title: {
    marginBottom: 8,
    color: colors.lightBlack,
  },
});

export default ContactModal;
