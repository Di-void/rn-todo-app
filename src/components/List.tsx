import { View, Text, FlatList } from "react-native";
import ListItem from "./ListItem";
import { todos } from "../mock-data";

const List = () => {
  const renderItem = ({ item }: { item: (typeof todos)[0] }) => {
    return <ListItem todo={item.todo} />;
  };
  return (
    <View className="basis-full mt-4 bg-element-violet-2">
      <FlatList
        ItemSeparatorComponent={() => (
          <View style={{ backgroundColor: "#6b7280", height: 1 }} />
        )}
        data={todos}
        renderItem={renderItem}
      />
    </View>
  );
};

export default List;

// for debugging: border border-white
