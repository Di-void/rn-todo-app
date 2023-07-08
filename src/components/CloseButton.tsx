import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CloseButton = () => {
  return (
    <Pressable className="" onPress={() => alert("Close button")}>
      <AntDesign name="close" size={24} color="#6b7280" />
    </Pressable>
  );
};

export default CloseButton;
