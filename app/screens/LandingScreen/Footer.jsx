import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Linking,
} from "react-native";
import AppText from "../../components/AppText";

import Icon from "../../components/Icon";

const SocialIcons = [
  {
    name: "Facebook",
    image: require("../../assets/images/facebook.png"),
    link: "https://www.facebook.com/profile.php?id=100086249187059",
  },
  {
    name: "Twitter",
    image: require("../../assets/images/twitter.png"),
    link: "https://twitter.com/SooraTheApp",
  },
  {
    name: "Instagram",
    image: require("../../assets/images/instagram.png"),
    link: "https://www.sooratheapp.com/",
  },
  {
    name: "TikTok",
    image: require("../../assets/images/tiktok.png"),
    link: "https://www.sooratheapp.com/",
  },
  {
    name: "Youtube",
    image: require("../../assets/images/youtube.png"),
    link: "https://www.youtube.com/channel/UCS2_jKjdg5KTLo-1zFXDO8A",
  },
];

const Footer = () => {
  return (
    <View>
      <View style={styles.socialIconsContainer}>
        {SocialIcons.map((social) => (
          <TouchableWithoutFeedback
            key={social.name}
            onPress={() => Linking.openURL(social.link)}
          >
            <Icon imgSource={social.image} style={styles.icon} />
          </TouchableWithoutFeedback>
        ))}
      </View>

      <View style={styles.copyrightContainer}>
        <AppText>Copyright © 2022 Soora. All rights reserved</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  copyrightContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 18,
    borderTopWidth: 1,
    borderTopColor: "#1E1E1ECC",
  },
  socialIconsContainer: {
    flexDirection: "row",
    paddingBottom: 16,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  icon: {
    marginRight: 16,
  },
});

export default Footer;
