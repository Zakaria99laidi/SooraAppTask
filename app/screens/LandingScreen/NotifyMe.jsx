import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import normalize from "react-native-normalize";

import AppButton from "../../components/AppButton";
import colors from "../../config/colors";

const NotifyMe = ({ style, ...otherProps }) => {
  const [isEmailReceived, setIsEmailReceived] = useState(false);
  const [email, setEmail] = useState("");

  const handleTextChange = (value) => {
    setEmail(value);
  };

  const handleSubmit = () => {
    if (email) {
      // Save the email

      setIsEmailReceived(true);
      setEmail("");
    }
  };

  return (
    <View style={[styles.container, style]} {...otherProps}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={handleTextChange}
          onPressIn={() => setIsEmailReceived(false)}
        />
        <AppButton
          text={"Notify Me"}
          style={styles.button}
          onPress={handleSubmit}
        />
      </View>
      {isEmailReceived && (
        <AppText style={styles.textValidation}>
          {`Your email address has been received.`}
        </AppText>
      )}
      <AppText>{`Don’t worry, we won’t spam you :)`}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 16,
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    borderRadius: 100,
    borderWidth: 0.8,
    borderColor: colors.black,
    flexDirection: "row",
    padding: 4,
    marginBottom: 8,
  },
  textInput: {
    flex: 1,
    marginHorizontal: normalize(5),
    marginLeft: normalize(10),
    fontFamily: "Inter-SemiBold",
  },
  textValidation: {
    fontFamily: "Inter-SemiBold",
    color: colors.Blue,
    marginBottom: 4,
  },
  button: {
    borderRadius: 100,
  },
});

export default NotifyMe;
