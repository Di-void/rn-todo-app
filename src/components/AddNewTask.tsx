import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const AddNewTask = () => {
  return (
    <View
      className="mt-6 rounded-lg overflow-hidden bg-white"
      style={styles.container}
    >
      <View className="bg-teal-600 w-full h-[30]"></View>
      <View className="flex-row items-center p-4 gap-2">
        <AntDesign name="plussquare" size={24} color="#0d9488" />
        <Text className="font-semibold">Tap plus to create a new task</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // box shadow effect
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
});

export default AddNewTask;
