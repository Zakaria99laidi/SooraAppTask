import React from "react";
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

const AppModal = ({
  children,
  visible,
  transparent = true,
  style,
  CloseModal,
  ...otherProps
}) => {
  return (
    <Modal visible={visible} transparent={transparent} {...otherProps}>
      <TouchableWithoutFeedback onPress={CloseModal}>
        <View style={[styles.container, style]}>{children}</View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#00000033",
  },
});

export default AppModal;
