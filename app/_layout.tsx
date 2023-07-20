import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import TabBar from "../components/TabBar";
import {
  useFonts,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";

export default function AppLayout() {
  let [fontsLoaded] = useFonts({
    JosefinSans_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="bg-bg-violet" style={{ flex: 1 }}>
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
