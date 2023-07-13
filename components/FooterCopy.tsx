import { View, Text } from "react-native";

export default function Footer() {
  return (
    <View className="px-4 py-6 flex-row justify-between">
      <View>
        <Text className="text-gray-400">5 items left</Text>
      </View>
      <View>
        <Text className="text-white">Clear completed</Text>
      </View>
    </View>
  );
}
