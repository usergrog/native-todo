import React, { Component, PropTypes } from "react";
import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../styles/Drawer";

class Drawer extends Component {
  constructor(props) {
    super(props);
    this._goToAbout = this._goToAbout.bind(this);
    this._goToAboutModal = this._goToAboutModal.bind(this);
    this._openSearch = this._openSearch.bind(this);
    this._toggleDrawer = this._toggleDrawer.bind(this);
  }

  _openSearch() {
    this._toggleDrawer();
    this.props.navigator.showModal({
      screen: "movieapp.Search",
      title: "Search"
    });
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
          <TouchableOpacity onPress={this._openSearch}>
            <View style={styles.drawerListItem}>
              {iconSearch}
              <Text style={styles.drawerListItemText}>Search</Text>
            </View>
          </TouchableOpacity>
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
