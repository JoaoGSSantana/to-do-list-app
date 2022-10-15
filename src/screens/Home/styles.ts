import { StyleSheet } from "react-native";
import { colors } from "../../config/colors";

export const stylesFunction = (focused: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.gray[600],
    },
    inputForm: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: -(54 / 2),
      paddingHorizontal: 24,
    },
    input: {
      flex: 1,
      paddingHorizontal: 16,
      paddingVertical: 16,
      margin: 4,
      width: "100%",
      backgroundColor: colors.gray[500],
      borderRadius: 6,
      borderWidth: 1,
      borderColor: focused ? colors.purple.dark : colors.gray[500],
      height: 54,
      color: colors.gray[100],
      fontSize: 16,
      fontFamily: "Inter_400Regular",
    },
    text: {
      fontSize: 16,
      color: colors.gray[100],
      fontWeight: "bold",
      alignSelf: "center",
    },
  });
