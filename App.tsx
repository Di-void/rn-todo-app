import { View } from "react-native";
import ScreenWrapper from "./src/components/ScreenWrapper";
import Tabs from "./src/components/Tabs";

export default function App() {
  return (
    <View>
      <ScreenWrapper>
        <Tabs />
      </ScreenWrapper>
    </View>
  );
}
