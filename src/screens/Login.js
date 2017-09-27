import React, { Component } from "react";
import { Button, View, Text, TextInput, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import ErrorView from "../components/ErrorView";

class Login extends Component {
  constructor(props) {
    super(props);
    this.onPressLogin = this.onPressLogin.bind(this);
  }
  static navigationOptions = {
    title: "Login"
  };

  state = {
    username: "",
    password: ""
  };

  onPressLogin() {
    //console.log("username", this.state.username);
    this.props.loginAndRedirect(this.state.username, this.state.password);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userId) {
      this.props.navigator.popToRoot({
        animated: true,
        animationType: "fade"
      });
    }
  }

  render() {
    return (
      <View style={styles.loginBox}>
        <Text style={{ marginBottom: 10 }}>Login</Text>
        {this.props.appError && <ErrorView appError={this.props.appError}/>}
        <TextInput
          style={styles.editBox}
          onChangeText={username => this.setState({ username })}
          placeholder="username"
          keyboardType="email-address"
          multiline={false}
          value={this.state.text}
        />
        <TextInput
          style={[styles.editBox, { marginTop: 10 }]}
          onChangeText={password => this.setState({ password })}
          placeholder="password"
          multiline={false}
          returnKeyType="send"
          onSubmitEditing={this.onPressLogin}
          secureTextEntry={true}
          value={this.state.text}
        />
        <View style={styles.loginButton}>
          <Button onPress={this.onPressLogin} title="Login" color="#841584" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  editBox: {
    height: 40,
    width: 300,
    padding: 4,
    borderColor: "gray",
    borderWidth: 1
  },
  loginBox: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  loginButton: {
    marginTop: 10
  }
});

Login.propTypes = {
  userId: PropTypes.string,
  appError: PropTypes.string,
  showError: PropTypes.func.isRequired,
  showProgress: PropTypes.boolean,
  navigator: PropTypes.object.isRequired,
  selectedGroup: PropTypes.object
};


export default Login;
