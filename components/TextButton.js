import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { purple } from "../utils/colors"

export default function TextBtn({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: "center",
    color: purple,
  },
});
