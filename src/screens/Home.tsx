import React from "react";
import { View, StyleSheet } from "react-native";
import Input from "../components/Input";
import List from "../components/List";

const Home = () => {
  return (
    <View className="p-2 h-full">
      <Input />
      <List />
    </View>
  );
};

export default Home;

// for debugging: border border-white
