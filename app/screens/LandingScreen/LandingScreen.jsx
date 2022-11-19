import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import normalize from "react-native-normalize";

import AppText from "../../components/AppText";
import Screen from "../../components/containers/Screen";

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
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Screen>
        <View style={styles.container}>
          {/* ------------------------------------  Header  ---------------------------------*/}
          <Header
            style={styles.section}
            handlePress={() => setModalVisible(true)}
          />

          {/* ------------------------------------  Welcome Section    ---------------------------------*/}
          <View style={styles.section}>
            <ComingSoon />
            <Slogan text={`Bringing \nMuslims together`} />
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
    padding: normalize(20),
  },
  downloadImagesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 24,
    marginBottom: 30,
  },
  downloadImage: {
    width: "40%",
    height: normalize(38.8),
    borderRadius: normalize(5),
    backgroundColor: colors.lightGray,
  },
  section: {
    marginBottom: 60,
  },
});

const ComingSoon = () => {
  return (
    <View
      style={[
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
          width: normalize(17.7),
          height: 0,
          borderWidth: 1.26,
          borderColor: "#000",
          marginRight: normalize(6),
        }}
      />
      <AppText style={{ fontFamily: "Inter-Medium" }}>Coming Soon</AppText>
    </View>
  );
};
