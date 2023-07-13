import { FlatList } from "react-native";
import ListItem from "./ListItem";
import { todos } from "../mock-data";

const List = () => {
  const renderItem = ({ item }: { item: (typeof todos)[0] }) => {
    return <ListItem todo={item.todo} />;
  };
  return (
    <>
      <FlatList data={todos} renderItem={renderItem} />
    </>
  );
};

export default List;

// for debugging: border border-white -mt-28 mt-4
