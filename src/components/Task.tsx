import { StyleSheet, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

import { colors } from "../config/colors";
import { Checkbox } from "./Checkbox";
import { Text } from "./Text";

export type Props = {
  description: string;
  done: boolean;
};

type TaskProps = {
  onChecked: () => void;
  onRemove: () => void;
} & Props;

export function Task({ description, done, onChecked, onRemove }: TaskProps) {
  const styles = stylesFunction(done);

  return (
    <View style={styles.container}>
      <Checkbox checked={done} onPress={onChecked} />
      <Text style={styles.text}>{description}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Feather name="trash-2" size={24} color={colors.gray[300]} />
      </TouchableOpacity>
    </View>
  );
}

const stylesFunction = (done: boolean) =>
  StyleSheet.create({
    container: {
      height: 64,
      flexDirection: "row",
      backgroundColor: colors.gray[500],
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.gray[400],
      paddingVertical: 12,
      paddingHorizontal: 12,
      alignItems: "center",
      justifyContent: "flex-start",
      marginHorizontal: 24,
      marginVertical: 8,
    },
    text: {
      flex: 1,
      marginLeft: 8,
      fontSize: 14,
      lineHeight: 24,
      color: done ? colors.gray[300] : colors.gray[100],
      textDecorationLine: done ? "line-through" : "none",
    },
  });
