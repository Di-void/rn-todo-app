import { View, FlatList } from "react-native";
import { todos } from "../mock-data";
import ListItem from "../components/ListItem";
import Footer from "../components/Footer";
import globalStyles from "../style";
import { useTaskStore } from "../stores/task-store";

export default function ActivePage() {
  const activeTodos = useTaskStore((state) => state.activeTodos());
  const renderItem = ({ item }: { item: (typeof activeTodos)[0] }) => {
    return <ListItem todo={item} />;
  };
  return (
    <View
      style={[{ width: "90%" }, globalStyles.boxShadow]}
      className="bg-element-violet-2 h-fit rounded-md overflow-hidden"
    >
      <FlatList data={activeTodos} renderItem={renderItem} />
      <Footer />
    </View>
  );
}
