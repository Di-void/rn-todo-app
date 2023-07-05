import { View, Text } from "react-native";
import Home from "../screens/Home";
import { SafeAreaView } from "react-native-safe-area-context";

const Tabs = () => {
  return (
    <SafeAreaView>
      <Text>Tab Screens</Text>
      <Home />
    </SafeAreaView>
  );
};

export default Tabs;
