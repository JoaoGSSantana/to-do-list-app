import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import { colors } from "../config/colors";

export function Button({ onPress, ...props }: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name="add-circle-outline" color={colors.gray[100]} size={16} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 52,
    width: 52,
    backgroundColor: colors.blue.dark,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
});
