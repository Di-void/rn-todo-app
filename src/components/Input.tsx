import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import InputCheckBox from "./InputCheckBox";

const Input = () => {
  const [task, setNewTask] = useState("");
  return (
    <View className="bg-element-violet h-14 rounded-md flex-row items-center overflow-hidden">
      <InputCheckBox />
      <TextInput
        className="px-4 text-white h-full"
        style={{ flex: 0.8 }}
        placeholder="Create a new todo..."
        value={task}
        onChangeText={setNewTask}
        placeholderTextColor="#94a3b8"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 70,
  },
});

export default Input;