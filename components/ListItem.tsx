import { View, Text } from "react-native";
import CustomCheckBox from "./CustomCheckBox";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "./CustomButton";

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
        <CustomButton
          label={<AntDesign name="close" size={24} color="#6b7280" />}
          action={() => alert("Remove Todo")}
        />
      </View>
    </View>
  );
}
