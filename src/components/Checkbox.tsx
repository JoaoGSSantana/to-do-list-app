import { StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colors } from "../config/colors";

type CheckboxProps = {
  checked: boolean;
  onPress: () => void;
};

export function Checkbox({ checked, onPress }: CheckboxProps) {
  const styles = stylesFunction(checked);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {checked && (
        <MaterialIcons name="check" size={20} color={colors.gray[100]} />
      )}
    </TouchableOpacity>
  );
}

const stylesFunction = (checked: boolean) =>
  StyleSheet.create({
    container: {
      borderRadius: 100,
      borderWidth: 2,
      borderColor: checked ? colors.purple.dark : colors.blue.default,
      height: 24,
      width: 24,
      backgroundColor: checked ? colors.purple.dark : colors.transparent,
      justifyContent: "center",
      alignItems: "center",
    },
  });
