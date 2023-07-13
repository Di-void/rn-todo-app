import { Pressable } from "react-native";
import { Text } from "react-native";
import globalStyle from "../style";

interface ButtonProps {
  label: React.ReactNode | string;
  action: () => void;
}

const CustomButton = ({ label, action }: ButtonProps) => {
  return (
    <Pressable
      className=""
      onPress={action}
      hitSlop={{ bottom: 15, left: 15, right: 15, top: 15 }}
    >
      {typeof label === "string" ? (
        <Text
          style={globalStyle.fontStyle}
          className="text-gray-400 capitalize tracking-wider"
        >
          {label}
        </Text>
      ) : (
        label
      )}
    </Pressable>
  );
};

export default CustomButton;
