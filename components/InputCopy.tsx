import { View, Text, TextInput } from "react-native";
import { useState } from "react";
import CustomCheckBox from "./CustomCheckBoxCopy";

export default function Input() {
  const [task, setNewTask] = useState("");

  return (
    <View
      className="flex-row rounded-md bg-element-violet overflow-hidden"
      style={{ width: "85%" }}
    >
      <View style={{ flex: 0.15 }} className="items-center justify-center p-2">
        <CustomCheckBox />
      </View>
      <TextInput
        className="p-2"
        style={{ flex: 0.85 }}
        value={task}
        onChangeText={setNewTask}
        placeholderTextColor="#9ca3af"
        placeholder="Create a new todo..."
      />
    </View>
  );
}
