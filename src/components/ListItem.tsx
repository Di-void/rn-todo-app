import { View, Text } from "react-native";
import CustomCheckBox from "./CustomCheckBox";
import CloseButton from "./CloseButton";

interface ListItemProps {
  todo: string;
}

const ListItem = ({ todo }: ListItemProps) => {
  return (
    <View className="py-6 px-4 flex-row justify-between items-center border-b border-gray-500">
      <View>
        <CustomCheckBox />
      </View>
      <Text className="text-gray-300 w-3/4">{todo}</Text>
      <View>
        <CloseButton />
      </View>
    </View>
  );
};

export default ListItem;
