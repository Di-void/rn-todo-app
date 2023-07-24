import { View, TextInput } from "react-native";
import { useState } from "react";
import InputCheckBox from "./input-checkbox";
import globalStyles from "../style";
import { useTaskStore } from "../stores/task-store";
import { Todo } from "../types/todo";

export default function Input() {
  const [task, setNewTask] = useState("");
  const [isTodoComplete, setIsTodoComplete] = useState(false);
  const addTodo = useTaskStore((state) => state.addTodo);
  const addNewTodo = () => {
    if (task.trim() === "") return;
    const newTodo: Todo = {
      id: Math.random().toString(36),
      todo: task,
      complete: isTodoComplete,
    };
    addTodo(newTodo);
    setNewTask("");
    setIsTodoComplete(false);
  };

  return (
    <View
      className="flex-row rounded-md bg-element-violet overflow-hidden py-2"
      style={{ width: "85%" }}
    >
      <View style={{ flex: 0.15 }} className="items-center justify-center p-2">
        <InputCheckBox
          isTodoCompleted={isTodoComplete}
          setIsTodoCompleted={setIsTodoComplete}
        />
      </View>
      <TextInput
        className="p-2 text-white"
        style={[{ flex: 0.85 }, globalStyles.fontStyle]}
        value={task}
        onChangeText={setNewTask}
        placeholderTextColor="#9ca3af"
        placeholder="Create a new todo..."
        onSubmitEditing={addNewTodo}
      />
    </View>
  );
}
