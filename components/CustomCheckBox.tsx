import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import { useTaskStore } from "../stores/task-store";
import { Todo } from "../types/todo";

interface CustomCheckBoxProps {
  todo?: Todo;
}

export default function CustomCheckBox({ todo }: CustomCheckBoxProps) {
  const setTodoStatus = useTaskStore((state) => state.setTodoStatus);

  const setIsChecked = () => {
    setTodoStatus(todo?.id);
  };

  return (
    <LinearGradient
      className="rounded-xl"
      colors={
        todo?.complete
          ? ["hsl(192, 100%, 67%)", "hsl(280, 87%, 65%)"]
          : ["transparent", "transparent"]
      }
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 1, y: 0 }}
    >
      <Checkbox
        className="rounded-xl p-2.5"
        value={todo?.complete}
        onValueChange={setIsChecked}
        color={todo?.complete ? "transparent" : undefined}
      />
    </LinearGradient>
  );
}
