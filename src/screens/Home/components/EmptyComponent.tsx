import { Image, StyleSheet, View } from "react-native";
import { Text } from "../../../components/Text";

import Clipboard from "../../../assets/img/clipboard.png";
import { colors } from "../../../config/colors";

export function EmptyComponent() {
  return (
    <View style={styles.container}>
      <Image source={Clipboard} style={styles.image} />
      <Text style={styles.textBold}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    marginHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.transparent,
    borderTopColor: colors.gray[400],
    borderTopWidth: 1,
  },
  image: {
    height: 84,
    width: 84,
    marginBottom: 16,
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 24,
    textAlign: "center",
    color: colors.gray[300],
  },
  text: {
    fontSize: 14,
    lineHeight: 16,
    textAlign: "center",
    color: colors.gray[300],
  },
});
