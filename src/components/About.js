import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class About extends React.Component {
  static navigationOptions = {
    title: "About"
  };

  render() {
    return (
      <View>
        <Text>About</Text>
      </View>
    );
  }
}
