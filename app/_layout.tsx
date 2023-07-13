import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
// TODO -> Create custom bottom tab bar

export default function AppLayout() {
  return (
    <SafeAreaView className="bg-bg-violet" style={{ flex: 1 }}>
      <Header />
      <Slot />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
