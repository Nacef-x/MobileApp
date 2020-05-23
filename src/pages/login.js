import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import { compose } from "redux";
//import { Field, reduxForm } from "redux-form";

//import InputText from "../components/InputText";
//import { loginUser } from "../actions/auth.actions";
import Logo from "../components/Katomi_logo";
import Form from "../components/form";
//import Loader from "../components/Loader";
import { Actions } from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#455a64",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row",
  },
  signupText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 16,
  },
  signupButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    width: 300,
    backgroundColor: "#1c313a",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
  },
});

export default class Login extends Component {
  signup() {
    Actions.signup();
  }
  render() {
    <View style={styles.container}>
      <Logo />
      <Form type="Login" />
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Do not have an account yet?</Text>
        <TouchableOpacity onPress={this.signup}>
          <Text style={styles.signupButton}> Signup</Text>
        </TouchableOpacity>
      </View>
    </View>;
  }
}
