import React, { Component } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { purple, white } from "../utils/colors";

export default class Live extends Component {
  state = {
    coords: null,
    status: "undetermined",
    direction: '',
  }
  askPermission = () => {

  }
  render() {
    const { status, coords, direction } = this.state;

    if (this.state === null) {
      return <ActivityIndicator style={{marginTop: 30}} />
    }

    if (status === "denied") {
      return (
        <View style={styles.center}>
          <Foundation name="alert" size={50}/>
          <Text>Location permissions are required for this feature</Text>
          <TouchableOpacity onPress={this.askPermission} style={styles.button}>
            <Text style={styles.buttonText}>
              Enable
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (status === "undetermined") {
      return (
        <View style={styles.center}>
          <Foundation name="alert" size={50}/>
          <Text>Location services are required for this feature</Text>
          <TouchableOpacity onPress={this.askPermission} style={styles.button}>
            <Text style={styles.buttonText}>
              Enable
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View>
        <Text>Live</Text>
        <Text>{JSON.stringify(this.state)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30,
  },
  button: {
    padding: 10,
    backgroundColor: purple,
    alignSelf: "center",
    borderRadius: 5,
    margin: 20,
  },
  buttonText: {
    color: white,
    fontSize: 20,
  },
});
