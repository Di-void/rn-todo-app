import { View, KeyboardAvoidingView, Platform, Text } from "react-native";
import Home from "../screens/Home";

const Tabs = () => {
  return (
    <View className="-mt-24 p-2 basis-full">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Home />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Tabs;
