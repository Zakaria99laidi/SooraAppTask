import React from "react";
import { useFonts } from "expo-font";

import LandingScreen from "./app/screens/LandingScreen/LandingScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Bold": require("./app/assets/fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("./app/assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("./app/assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./app/assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <LandingScreen />;
}
