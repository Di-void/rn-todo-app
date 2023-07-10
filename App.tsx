import ScreenWrapper from "./src/components/ScreenWrapper";
import Tabs from "./src/components/Tabs";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";

export default function App() {
  let [fontsLoaded] = useFonts({
    JosefinSans_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="bg-bg-violet h-full">
      <ScreenWrapper>
        <Tabs />
      </ScreenWrapper>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
