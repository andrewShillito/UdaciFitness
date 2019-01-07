import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome, Entypo } from '@expo/vector-icons';

export default function UdaciStepper({ max, unit, step, value, onIcrement, onDecrement }) {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={onDecrement}>
          <FontAwesome name="minus" size={30} color={"black"}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onIcrement}>
          <FontAwesome name="plus" size={30} color={"black"}/>
        </TouchableOpacity>
      </View>
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  );
}
