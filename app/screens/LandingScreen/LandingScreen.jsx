import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "../../components/AppText";
import Screen from "../../components/containers/Screen";
import AppModal from "../../components/containers/AppModal";

import Header from "./Header";
import Slogan from "./Slogan";
import LandingImage from "./LandingImage";
import Footer from "./Footer";
import NotifyMe from "./NotifyMe";
import colors from "../../config/colors";
import ContactModal from "./ContactModal";

const downloadImages = [
  require("../../assets/images/google-play.png"),
  require("../../assets/images/apple-store.png"),
];

export default LandingScreen = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <>
      <Screen>
        <View style={styles.container}>
          <Header
            style={styles.section}
            handlePress={() => setModalVisible(true)}
          />

          {/* ------------------------------------  Welcome Section    ---------------------------------*/}
          <View style={styles.section}>
            <ComingSoon />
            <Slogan text={`Bringing\n Muslims together`} />
            <View style={styles.downloadImagesContainer}>
              {downloadImages.map((image) => (
                <Image
                  key={image}
                  source={image}
                  style={styles.downloadImage}
                  resizeMode="cover"
                />
              ))}
            </View>
            <LandingImage
              source={require("../../assets/images/landing-image-1.png")}
            />
          </View>

          {/* ------------------------------------  Notify Me Section    ---------------------------------*/}
          <View style={styles.section}>
            <ComingSoon />
            <Slogan text={`Get Notified\nWhen we Launch`} />
            <NotifyMe />

            <LandingImage
              source={require("../../assets/images/landing-image-2.png")}
            />
          </View>
        </View>

        <Footer />
      </Screen>
      <ContactModal
        visible={modalVisible}
        CloseModal={() => setModalVisible(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  downloadImagesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 24,
    marginBottom: 30,
  },
  downloadImage: {
    width: "40%",
    height: 38.8,
    borderRadius: 5,
    backgroundColor: "#D9D9D980",
  },
  section: {
    marginBottom: 60,
  },

  debuger: {
    borderWidth: 1,
    borderColor: "#000",
  },
});

const ComingSoon = () => {
  return (
    <View
      style={[
        // styles.debuger,
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 8,
        },
      ]}
    >
      <View
        style={{
          width: 17.7,
          height: 0,
          borderWidth: 1.26,
          borderColor: "#000",
          marginRight: 6,
        }}
      />
      <AppText style={{ fontWeight: "500" }}>Coming Soon</AppText>
    </View>
  );
};
