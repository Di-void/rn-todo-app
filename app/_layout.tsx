import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import Header from "../components/Header";
import TabBar from "../components/TabBar";
import { JosefinSans_500Medium } from "@expo-google-fonts/josefin-sans";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect, useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await Font.loadAsync({ JosefinSans_500Medium });
      } catch (e) {
        // handle error
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView
      className="bg-bg-violet"
      style={{ flex: 1 }}
      onLayout={onLayout}
    >
      <Header />
      <View style={{ bottom: 20, maxHeight: "50%" }} className="items-center">
        <Slot />
      </View>
      <StatusBar style="light" />
      <View className="absolute bottom-5 w-full items-center">
        <TabBar />
      </View>
    </SafeAreaView>
  );
}
