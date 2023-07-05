import { View } from "react-native";
import ScreenWrapper from "./src/components/ScreenWrapper";
import Tabs from "./src/components/Tabs";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <ScreenWrapper>
        <Tabs />
      </ScreenWrapper>
      <StatusBar style="light" />
    </>
  );
}
