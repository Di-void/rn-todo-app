import { View, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Footer from "../components/Footer";
import globalStyles from "../style";
import { useTaskStore } from "../stores/task-store";

export default function CompletedPage() {
  const completedTodos = useTaskStore((state) => state.completedTodos());
  const renderItem = ({ item }: { item: (typeof completedTodos)[0] }) => {
    return <ListItem todo={item} />;
  };
  return (
    <View
      style={[{ width: "90%" }, globalStyles.boxShadow]}
      className="bg-element-violet-2 h-fit rounded-md overflow-hidden"
    >
      <FlatList data={completedTodos} renderItem={renderItem} />
      <Footer />
    </View>
  );
}
