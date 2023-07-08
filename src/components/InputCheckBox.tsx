import { View } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

const InputCheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={{ flex: 0.2 }} className="h-full items-center justify-center">
      <Checkbox
        className="rounded-xl p-2.5"
        value={isChecked}
        onValueChange={setIsChecked}
      />
    </View>
  );
};

export default InputCheckBox;