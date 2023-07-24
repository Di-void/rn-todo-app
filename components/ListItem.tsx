import { View, Text } from "react-native";
import CustomCheckBox from "./CustomCheckBox";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "./CustomButton";
import globalStyles from "../style";
import type { Todo } from "../types/todo";

interface ListItemProps {
  todo: Todo;
}

export default function ListItem({ todo }: ListItemProps) {
  return (
    <View className="py-6 px-4 flex-row justify-between items-center border-b border-gray-500">
      <View>
        <CustomCheckBox todo={todo} />
      </View>
      <Text
        className="w-3/4"
        style={[
          globalStyles.fontStyle,
          {
            textDecorationLine: todo.complete ? "line-through" : undefined,
            color: todo.complete ? "#9ca3af" : "#d1d5db",
          },
        ]}
      >
        {todo.todo}
      </Text>
      <View>
        <CustomButton
          label={<AntDesign name="close" size={24} color="#6b7280" />}
          action={() => alert("Remove Todo")}
        />
      </View>
    </View>
  );
}
