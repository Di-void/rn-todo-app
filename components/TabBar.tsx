import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import globalStyles from "../style";

const tabs = [
  { id: 1, label: "all", route: "/" },
  { id: 2, label: "active", route: "/active" },
  { id: 3, label: "completed", route: "/completed" },
] as const;

export default function TabBar() {
  const [val, setVal] = useState(0);
  return (
    <View
      className="bg-element-violet-2 w-[95%] p-4 rounded-md items-center"
      style={globalStyles.boxShadow}
    >
      <View className="flex-row justify-between" style={{ width: "80%" }}>
        {tabs.map(({ id, label, route }, index) => (
          <Link href={route} asChild key={id}>
            <TouchableOpacity onPress={() => setVal(index)}>
              <Text
                className={`${
                  index === val ? "text-active-blue" : "text-gray-400"
                } capitalize font-extrabold text-lg`}
                style={globalStyles.fontStyle}
              >
                {label}
              </Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </View>
  );
}

interface TabButtonProps {
  linkLabel: string;
  route: string;
}

function TabButton({ linkLabel, route }: TabButtonProps) {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Link href={route} asChild>
        <TouchableOpacity
          onPress={() => setClicked(true)}
          onBlur={() => setClicked(false)}
        >
          <Text
            className={`capitalize font-extrabold text-lg`}
            style={{ color: clicked ? "blue" : "red" }}
          >
            {linkLabel}
          </Text>
        </TouchableOpacity>
      </Link>
    </>
  );
}
