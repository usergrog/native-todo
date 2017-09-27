import React from "react";
import { StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";

const ProgressView = () => (
  <View style={styles.progressBox}>
    <Progress.Circle borderWidth={3} size={50} indeterminate={true} />
  </View>
);

const styles = StyleSheet.create({
  progressBox: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ProgressView;
