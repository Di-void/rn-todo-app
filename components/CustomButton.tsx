import { Pressable, Text } from "react-native";
import globalStyles from "../style";

interface ButtonProps {
  label: React.ReactNode | string;
  action: () => void;
}

export default function CustomButton({ label, action }: ButtonProps) {
  return (
    <Pressable
      onPress={action}
      hitSlop={{ bottom: 15, left: 15, right: 15, top: 15 }}
    >
      {typeof label === "string" ? (
        <Text
          className="text-gray-400 capitalize tracking-wider"
          style={globalStyles.fontStyle}
        >
          {label}
        </Text>
      ) : (
        label
      )}
    </Pressable>
  );
}
