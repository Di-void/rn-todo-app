import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";
import CloseButton from "./CloseButton";

interface ListItemProps {
  todo: string;
}

const ListItem = ({ todo }: ListItemProps) => {
  return (
    <View className="p-6 flex-row justify-between align-center">
      <View>
        <Checkbox className="rounded-xl p-2.5" />
      </View>
      <Text className="text-gray-300 w-3/4">{todo}</Text>
      <View>
        <CloseButton />
      </View>
    </View>
  );
};

export default ListItem;
