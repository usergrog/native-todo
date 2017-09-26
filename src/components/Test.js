import React from "react";
import { Text, StyleSheet, View, TouchableHighlight } from "react-native";

const Test = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Redux Examples</Text>
      <TouchableHighlight
        style={styles.button}
        onPress={() => props.fetchData()}
      >
        <Text style={styles.buttonText}>Load Data</Text>
      </TouchableHighlight>
      <View style={styles.mainContent}>
        {props.dataReducer.isFetching && <Text>Loading</Text>}
        {props.dataReducer.data.length ? (
          props.dataReducer.data.map((person, i) => {
            return (
              <View key={i}>
                <Text>Name: {person.name}</Text>
                <Text>Age: {person.age}</Text>
              </View>
            );
          })
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: "center"
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b7eff"
  },
  buttonText: {
    color: "white"
  },
  mainContent: {
    margin: 10
  }
});

export default Test;
