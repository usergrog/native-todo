import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import LoginContainer from "./src/containers/LoginContainer";
import About from "./src/components/About";
import { StackNavigator } from "react-navigation";

const Navigator = StackNavigator({
  Login: { screen: LoginContainer },
  About: { screen: About }
});

export default class OwnTodo extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator style={styles.mainScreen} />
        {/* <View style={styles.mainScreen}>
          <LoginContainer />
        </View> */}
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  mainScreen: {}
});

AppRegistry.registerComponent("OwnTodo", () => OwnTodo);
