import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import CheckBox from "./CheckBox";

const Input = () => {
  const [task, setNewTask] = useState("");
  const [todoStatus, setTodoStatus] = useState("");
  return (
    <View
      className="bg-element-violet h-1/3 rounded-md flex-row items-center overflow-hidden"
      style={styles.container}
    >
      <CheckBox />
      <View className="h-full" style={{ flex: 0.8 }}>
        <TextInput
          className="h-full px-4"
          placeholder="Create a new todo..."
          value={task}
          onChangeText={setNewTask}
          placeholderTextColor="#94a3b8"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 70,
  },
});

export default Input;
