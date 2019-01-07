import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function TextBtn({ children, onPress }) {
  return (
    <TouchableOpacity>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}
