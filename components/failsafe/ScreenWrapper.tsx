import { View, Text, ImageBackground } from "react-native";

interface ScreenWrapperProps {
  children: React.ReactNode;
}

const BackgroundImage = require("../assets/images/bg-mobile-dark.jpg");

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  return (
    <View className="h-full">
      <ImageBackground source={BackgroundImage} style={{ flex: 0.3 }}>
        <Text className="text-white mt-[60] tracking-[18] font-bold text-3xl uppercase text-center">
          Todo
        </Text>
      </ImageBackground>
      <View className="h-full p-2" style={{ flex: 0.7 }}>
        {children}
      </View>
    </View>
  );
};

export default ScreenWrapper;
