import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import Routes from "./src/pages/routes";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
        <Routes />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#455a64",
  },
});
