import { View } from "react-native";
import Home from "../screens/Home";

const Tabs = () => {
  return (
    <View
      style={{ width: "90%" }}
      className="bg-element-violet-2 rounded-md overflow-hidden"
    >
      <Home />
    </View>
  );
};

export default Tabs;
