import Checkbox from "expo-checkbox";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const CustomCheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <LinearGradient
      className="rounded-xl"
      colors={
        isChecked
          ? ["hsl(192, 100%, 67%)", "hsl(280, 87%, 65%)"]
          : ["transparent", "transparent"]
      }
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 1, y: 0 }}
    >
      <Checkbox
        className="rounded-xl p-2.5"
        value={isChecked}
        onValueChange={setIsChecked}
        color={isChecked ? "transparent" : undefined}
      />
    </LinearGradient>
  );
};

export default CustomCheckBox;
