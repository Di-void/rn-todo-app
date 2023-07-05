import { View, Text } from "react-native";

interface ScreenWrapperProps {
  children: React.ReactNode;
}

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  return <View>{children}</View>;
};

export default ScreenWrapper;
