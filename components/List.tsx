import { View, FlatList } from "react-native";
import ListItem from "./ListItem";
import { todos } from "../mock-data";
import Footer from "./Footer";

const List = () => {
  const renderItem = ({ item }: { item: (typeof todos)[0] }) => {
    return <ListItem todo={item.todo} />;
  };
  return (
    <View className="h-fit mt-4 bg-element-violet-2 rounded-md overflow-hidden">
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyboardShouldPersistTaps="always"
      />
      <Footer />
    </View>
  );
};

export default List;

// for debugging: border border-white
