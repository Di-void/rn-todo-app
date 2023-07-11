import { View } from "react-native";
import Home from "../screens/Home";
import Active from "../screens/Active";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import globalStyle from "../Style";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <View className="-mt-28 p-2 h-full border border-red-500">
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "none",
            width: "100%",
            borderTopWidth: 0,
            bottom: -110,
          },
          headerShown: false,
          tabBarIconStyle: {
            display: "none",
          },
          tabBarLabelStyle: [
            {
              fontSize: 20,
            },
            globalStyle.fontStyle,
          ],
          tabBarHideOnKeyboard: true,
        }}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Active" component={Active} />
      </Tab.Navigator>
    </View>
  );
};

export default Tabs;

// for debugging: border border-red-500
