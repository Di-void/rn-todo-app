import { Pressable, Text } from "react-native";

interface ButtonProps {
  label: React.ReactNode | string;
  action: () => void;
}

export default function CustomButton({ label, action }: ButtonProps) {
  return (
    <Pressable
      className=""
      onPress={action}
      hitSlop={{ bottom: 15, left: 15, right: 15, top: 15 }}
    >
      {typeof label === "string" ? (
        <Text className="text-gray-400 capitalize tracking-wider">{label}</Text>
      ) : (
        label
      )}
    </Pressable>
  );
}
