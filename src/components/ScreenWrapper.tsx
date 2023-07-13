import { View } from "react-native";
import Tabs from "./Tabs";
import Header from "./Header";

const ScreensWrapper = () => {
  return (
    <View>
      <Header />
      <View>
        <Tabs />
      </View>
    </View>
  );
};

export default ScreensWrapper;
