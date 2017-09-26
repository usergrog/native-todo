import React, { Component, PropTypes } from "react";
import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import styles from "../styles/Drawer";

class Drawer extends Component {
  constructor(props) {
    super(props);
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
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.7)", "rgba(0,0,0, 0.9)", "rgba(0,0,0, 1)"]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <View style={styles.drawerList}>
            <TouchableOpacity onPress={this._openSearch}>
              <View style={styles.drawerListItem}>
                {iconSearch}
                <Text style={styles.drawerListItemText}>Search</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._goToMovies}>
              <View style={styles.drawerListItem}>
                {iconMovies}
                <Text style={styles.drawerListItemText}>Movies</Text>
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
      </LinearGradient>
    );
  }
}

export default Drawer;
