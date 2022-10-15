import { Image, StyleSheet, View } from "react-native";
import Logo from "../assets/img/logo.png";
import { colors } from "../config/colors";

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[700],
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    height: 172,
  },
  image: {
    width: 112,
    height: 32,
  },
});
