import { View, Text, ImageBackground } from "react-native";
import Input from "./Input";

const BackgroundImage = require("../../assets/images/bg-mobile-dark.jpg");

export default function Header() {
  return (
    <View style={{ height: 230 }}>
      <ImageBackground
        source={BackgroundImage}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Text
          className="text-white font-bold text-3xl uppercase text-center"
          style={{ letterSpacing: 18 }}
        >
          Todo
        </Text>
        <Input />
      </ImageBackground>
    </View>
  );
}
