import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenWrapperProps {
  children: React.ReactNode;
}

const BackgroundImage = require("../../assets/images/bg-mobile-dark.jpg");

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  return (
    <SafeAreaView className="bg-bg-violet basis-full">
      <ImageBackground source={BackgroundImage} style={{ flex: 0.3 }}>
        <Text className="text-white mt-[60] tracking-[18px] font-bold text-3xl uppercase text-center">
          Todo
        </Text>
      </ImageBackground>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenWrapper;
