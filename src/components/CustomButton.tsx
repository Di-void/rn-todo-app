import { Pressable } from "react-native";
import { Text } from "react-native";

interface ButtonProps {
  label: React.ReactNode | string;
  action: () => void;
}

const CustomButton = ({ label, action }: ButtonProps) => {
  return (
    <Pressable className="" onPress={action}>
      {typeof label === "string" ? (
        <Text className="text-gray-400 capitalize tracking-wider">{label}</Text>
      ) : (
        label
      )}
    </Pressable>
  );
};

export default CustomButton;
