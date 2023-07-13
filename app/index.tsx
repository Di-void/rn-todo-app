import { View, FlatList } from "react-native";
import { todos } from "../mock-data";
import ListItem from "../components/ListItemCopy";
import Footer from "../components/FooterCopy";

export default function IndexPage() {
  const renderItem = ({ item }: { item: (typeof todos)[0] }) => {
    return <ListItem todo={item.todo} />;
  };
  return (
    <View
      style={{ width: "90%" }}
      className="bg-element-violet-2 h-fit rounded-md overflow-hidden"
    >
      <FlatList data={todos} renderItem={renderItem} />
      <Footer />
    </View>
  );
}
