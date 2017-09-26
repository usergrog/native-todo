import React, { Component, PropTypes } from "react";
import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../styles/Drawer";

class Drawer extends Component {
  constructor(props) {
    super(props);
    this._goToAbout = this._goToAbout.bind(this);
    this._goToAboutModal = this._goToAboutModal.bind(this);
    this._openLogin = this._openLogin.bind(this);
    this._doLogout = this._doLogout.bind(this);
    this._toggleDrawer = this._toggleDrawer.bind(this);
  }

  _openLogin() {
    this._toggleDrawer();
    this.props.navigator.push({
      screen: "owntodo.Login",
      title: "Login"
    });
  }

  _doLogout() {
    this._toggleDrawer();
    this.props.signOut();
  }

  _goToAboutModal() {
    this._toggleDrawer();
    this.props.navigator.showModal({
      screen: "owntodo.About",
      title: "About+"
    });
  }

  _goToAbout() {
    this._toggleDrawer();
    this.props.navigator.push({
      screen: "owntodo.About"
    });
  }

  _toggleDrawer() {
    this.props.navigator.toggleDrawer({
      to: "closed",
      side: "left",
      animated: true
    });
  }

  renderLoginSection() {
    return this.props.userId ? (
      <TouchableOpacity onPress={this._doLogout}>
        <View style={styles.drawerListItem}>
          <Text style={styles.drawerListItemText}>Logout</Text>
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={this._openLogin}>
        <View style={styles.drawerListItem}>
          <Text style={styles.drawerListItemText}>Login</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const iconSearch = (
      <Icon
        name="md-search"
        size={26}
        color="#9F9F9F"
        style={[styles.drawerListIcon, { paddingLeft: 2 }]}
      />
    );
    const iconMovies = (
      <Icon
        name="md-film"
        size={26}
        color="#9F9F9F"
        style={[styles.drawerListIcon, { paddingLeft: 3 }]}
      />
    );
    const iconTV = (
      <Icon
        name="ios-desktop"
        size={26}
        color="#9F9F9F"
        style={styles.drawerListIcon}
      />
    );
    return (
      <View style={styles.container}>
        <View style={styles.drawerList}>
          {this.renderLoginSection()}
          <TouchableOpacity onPress={this._goToAbout}>
            <View style={styles.drawerListItem}>
              {iconMovies}
              <Text style={styles.drawerListItemText}>About</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._goToAboutModal}>
            <View style={styles.drawerListItem}>
              {iconMovies}
              <Text style={styles.drawerListItemText}>About modal</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.drawerListItem}>
            {iconTV}
            <Text
              style={styles.drawerListItemText}
              onPress={() =>
                ToastAndroid.show("Coming Soon!", ToastAndroid.SHORT)}
            >
              TV Shows
            </Text>
          </View>
        </View>
        <Text style={styles._version}>{/* 'v1.0.0' */}</Text>
      </View>
    );
  }
}

export default Drawer;
