import { View, Text } from "react-native";
import CustomCheckBox from "./CustomCheckBoxCopy";

interface ListItemProps {
  todo: string;
}

export default function ListItem({ todo }: ListItemProps) {
  return (
    <View className="py-6 px-4 flex-row justify-between items-center border-b border-gray-500">
      <View>
        <CustomCheckBox />
      </View>
      <Text className="text-gray-300 w-3/4">{todo}</Text>
      <View>
        <Text>X</Text>
      </View>
    </View>
  );
}
