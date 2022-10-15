import { ReactNode } from "react";
import {
  StyleSheet,
  Text as TextPrimitive,
  TextProps as TextPrimitiveProps,
  TextStyle,
} from "react-native";

type TextProps = { children: string; style?: TextStyle } & TextPrimitiveProps;

export function Text({ children, style = styles.text, ...props }: TextProps) {
  const fontStyle =
    style?.fontWeight === "bold" ? styles.textBold : styles.text;

  return <TextPrimitive style={[style, fontStyle]}>{children}</TextPrimitive>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Inter_400Regular",
    fontWeight: "normal",
  },
  textBold: {
    fontFamily: "Inter_700Bold",
    fontWeight: "normal",
  },
});
