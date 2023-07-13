import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
// TODO -> Create custom bottom tab bar
// TODO -> add custom fonts

export default function AppLayout() {
  return (
    <SafeAreaView className="bg-bg-violet" style={{ flex: 1 }}>
      <Header />
      <View style={{ bottom: 20, maxHeight: "50%" }} className="items-center">
        <Slot />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
