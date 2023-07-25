import { View, Text } from "react-native";
import CustomButton from "./CustomButton";
import globalStyles from "../style";
import { useTaskStore } from "../stores/task-store";

export default function Footer() {
  const clearCompletedTodos = useTaskStore(
    (state) => state.clearCompletedTodos
  );
  return (
    <View className="px-4 py-6 flex-row justify-between">
      <View>
        <Text className="text-gray-400" style={globalStyles.fontStyle}>
          5 items left
        </Text>
      </View>
      <View>
        <CustomButton label={"clear completed"} action={clearCompletedTodos} />
      </View>
    </View>
  );
}
