import { useEffect, useCallback } from "react";
import { StatusBar } from "react-native";
import { colors } from "./src/config/colors";
import { Home } from "./src/screens/Home";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    prepare();
  }, []);

  const onLayoutRootLoad = useCallback(async () => {
    if (fontsLoaded) {
      console.log("font carregada");

      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={colors.gray[700]}
        translucent
      />
      <Home />
    </>
  );
}
