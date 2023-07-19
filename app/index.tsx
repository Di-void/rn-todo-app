import { View, FlatList } from "react-native";
import { todos } from "../mock-data";
import ListItem from "../components/ListItem";
import Footer from "../components/Footer";
import globalStyles from "../style";

export default function IndexPage() {
  const renderItem = ({ item }: { item: (typeof todos)[0] }) => {
    return <ListItem todo={item.todo} />;
  };
  return (
    <View
      style={[{ width: "90%" }, globalStyles.boxShadow]}
      className="bg-element-violet-2 h-fit rounded-md overflow-hidden"
    >
      <FlatList data={todos} renderItem={renderItem} />
      <Footer />
    </View>
  );
}
