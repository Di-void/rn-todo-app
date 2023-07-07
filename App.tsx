import ScreenWrapper from "./src/components/ScreenWrapper";
import Tabs from "./src/components/Tabs";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="bg-bg-violet h-full">
      <ScreenWrapper>
        <Tabs />
      </ScreenWrapper>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
