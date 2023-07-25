import { View, Text } from "react-native";
import CustomButton from "./CustomButton";
import globalStyles from "../style";
import { useTaskStore } from "../stores/task-store";
import { shallow } from "zustand/shallow";

export default function Footer() {
  const { activeAndText, clearCompletedTodos } = useTaskStore(
    (state) => ({
      clearCompletedTodos: state.clearCompletedTodos,
      activeAndText: state.activeAndTextFormat(),
    }),
    shallow
  );
  return (
    <View className="px-4 py-6 flex-row justify-between">
      <View>
        <Text className="text-gray-400" style={globalStyles.fontStyle}>
          {`${activeAndText.itemsLeft} ${activeAndText["text-format"]} left`}
        </Text>
      </View>
      <View>
        <CustomButton label={"clear completed"} action={clearCompletedTodos} />
      </View>
    </View>
  );
}
