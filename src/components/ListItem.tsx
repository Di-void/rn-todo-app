import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";
import CloseButton from "./CloseButton";

interface ListItemProps {
  todo: string;
}

const ListItem = ({ todo }: ListItemProps) => {
  return (
    <View className="py-6 px-4 flex-row justify-between items-center border-b border-gray-500">
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
