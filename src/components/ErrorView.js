import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress";
import PropTypes from "prop-types";

const ErrorView = (props) => (
  <View style={styles.errorBox}>
    <Text style={{color: '#fff'}}>{props.appError}</Text>
  </View>
);

const styles = StyleSheet.create({
  errorBox: {
    alignSelf: 'center',
    backgroundColor: '#f00',
    padding: 10
  }
});

ErrorView.propTypes = {
  appError: PropTypes.string.isRequired
};

export default ErrorView;
