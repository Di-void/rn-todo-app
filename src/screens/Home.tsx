import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddNewTask from "../components/AddNewTask";

const Home = () => {
  return (
    <SafeAreaView className="px-6 py-4">
      <View>
        <Text className="font-bold text-2xl mb-2">Today</Text>
        <Text className="text-gray-400">
          Best platform for creating to-do lists
        </Text>
      </View>

      <AddNewTask />
    </SafeAreaView>
  );
};

export default Home;
