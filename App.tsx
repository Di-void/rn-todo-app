import ScreensWrapper from "./src/components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  let [fontsLoaded] = useFonts({
    JosefinSans_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <SafeAreaView className="bg-bg-violet h-full">
        <ScreensWrapper />
        <StatusBar style="light" />
      </SafeAreaView>
    </NavigationContainer>
  );
}
