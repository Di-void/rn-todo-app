import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";

interface InputCheckBoxProps {
  isTodoCompleted: boolean;
  setIsTodoCompleted: (value: boolean) => void;
}

export default function InputCheckBoxProps({
  isTodoCompleted,
  setIsTodoCompleted,
}: InputCheckBoxProps) {
  return (
    <LinearGradient
      className="rounded-xl"
      colors={
        isTodoCompleted
          ? ["hsl(192, 100%, 67%)", "hsl(280, 87%, 65%)"]
          : ["transparent", "transparent"]
      }
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 1, y: 0 }}
    >
      <Checkbox
        className="rounded-xl p-2.5"
        value={isTodoCompleted}
        onValueChange={setIsTodoCompleted}
        color={isTodoCompleted ? "transparent" : undefined}
      />
    </LinearGradient>
  );
}
