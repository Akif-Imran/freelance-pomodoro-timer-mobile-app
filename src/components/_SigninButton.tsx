import {
  ImageRequireSource,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import { colors } from "@theme";

interface OwnProps extends TouchableOpacityProps {
  onPress?: () => void;
  imageSource?: ImageRequireSource;
  label: string;
  loading?: boolean;
}
export const _SigninButton: React.FC<OwnProps> = ({ onPress, imageSource }) => {
  return (
    <TouchableOpacity style={styles.main} {...{ onPress }}>
      <Text>_SigninButton</Text>
    </TouchableOpacity>
  );
};

export default _SigninButton;

const styles = StyleSheet.create({
  main: {
    borderColor: colors.primary,
    borderWidth: 1,
  },
});
