import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";

export default function AppLayout() {
  return (
    <SafeAreaView>
      <Slot />
    </SafeAreaView>
  );
}
