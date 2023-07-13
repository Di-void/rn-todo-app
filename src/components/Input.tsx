import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import CustomCheckBox from "./CustomCheckBox";
import globalStyle from "../Style";

const Input = () => {
  const [task, setNewTask] = useState("");
  return (
    <View
      className="flex-row rounded-md bg-element-violet overflow-hidden py-2"
      style={{ width: "85%" }}
    >
      <View style={{ flex: 0.15 }} className="items-center justify-center p-2">
        <CustomCheckBox />
      </View>
      <TextInput
        className="p-2 text-white"
        style={[{ flex: 0.8 }, globalStyle.fontStyle]}
        placeholder="Create a new todo..."
        value={task}
        onChangeText={setNewTask}
        placeholderTextColor="#9ca3af"
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
