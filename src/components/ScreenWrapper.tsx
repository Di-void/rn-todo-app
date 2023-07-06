import {
  View,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenWrapperProps {
  children: React.ReactNode;
}

const BackgroundImage = require("../../assets/images/bg-mobile-dark.jpg");

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  const [containerStyles, setContainerStyles] = useState(" basis-full");
  return (
    <View className="bg-bg-violet">
      <SafeAreaView className="basis-full">
        <ImageBackground source={BackgroundImage} style={{ flex: 0.3 }}>
          <Text className="text-white mt-[60] tracking-[18] font-bold text-3xl uppercase text-center">
            Todo
          </Text>
        </ImageBackground>
        <View style={{ flex: 0.7 }}>{children}</View>
      </SafeAreaView>
    </View>
  );
};

export default ScreenWrapper;
