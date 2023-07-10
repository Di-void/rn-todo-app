import { View, Text } from "react-native";
import CustomButton from "./CustomButton";

const Footer = () => {
  return (
    <View className="px-4 py-6 flex-row justify-between">
      <View>
        <Text className="text-gray-400">5 items left</Text>
      </View>
      <View>
        <CustomButton
          label={"clear completed"}
          action={() => alert("Clear completed todos")}
        />
      </View>
    </View>
  );
};

export default Footer;
