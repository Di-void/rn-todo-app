import Header from "./src/components/Header";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import Tabs from "./src/components/Tabs";

export default function App() {
  let [fontsLoaded] = useFonts({
    JosefinSans_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="bg-bg-violet" style={{ flex: 1 }}>
      <Header />
      <View className="items-center" style={{ bottom: 20, maxHeight: "50%" }}>
        <Tabs />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
