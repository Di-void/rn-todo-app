import { View, KeyboardAvoidingView, Platform } from "react-native";
import ScreenWrapper from "./src/components/ScreenWrapper";
import Tabs from "./src/components/Tabs";
import { StatusBar } from "expo-status-bar";
import Input from "./src/components/Input";

export default function App() {
  return (
    <ScreenWrapper>
      <Tabs />
      <StatusBar style="light" />
    </ScreenWrapper>
  );
}
