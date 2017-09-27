import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "../styles/Drawer";

class Drawer extends Component {
  constructor(props) {
    super(props);
    this._goToAbout = this._goToAbout.bind(this);
    this._goToAboutModal = this._goToAboutModal.bind(this);
    this._openLogin = this._openLogin.bind(this);
    this._doLogout = this._doLogout.bind(this);
    this._toggleDrawer = this._toggleDrawer.bind(this);
    this._addGroup = this._addGroup.bind(this);
    this.icon = this.icon.bind(this);
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
          {this.icon("exit-to-app")}
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

  _selectGroup(group) {
    this._toggleDrawer();
    this.props.selectGroupAndFetchTodos(group);
  }

  _addGroup() {
    this._toggleDrawer();
    this.props.navigator.push({screen: 'owntodo.AddGroup', title: 'Add group'})
  }

  renderGroupsSection() {
    console.log("oopsGroups", this.props.groups);
    return (
      <View>
        {this.props.groups &&
          this.props.groups.map(group => (
            <TouchableOpacity
              key={group.id}
              onPress={() => this._selectGroup(group)}
            >
              <View style={styles.drawerListSubItem}>
                {this.icon(
                  "grade",
                  this.props.selectedGroup.id === group.id
                    ? "#0000ff"
                    : "#9F9F9F"
                )}
                <Text style={styles.drawerListSubItemText}>{group.text}</Text>
              </View>
            </TouchableOpacity>
          ))}
        <TouchableOpacity onPress={this._addGroup}>
          <View style={styles.drawerListSubItem}>
            {this.icon("add-box", "#9F9F9F")}
            <Text style={styles.drawerListSubItemText}>Add group</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  icon = (iconName, color = "#9F9F9F") => (
    <Icon
      name={iconName}
      size={26}
      color={color}
      style={[styles.drawerListIcon, { paddingLeft: 2 }]}
    />
  );

  render() {
    console.log("render drawer", this.props.groups);
    return (
      <View style={styles.container}>
        <View style={styles.drawerList}>
          {/*groups*/}
          <View style={styles.drawerListItem}>
            {this.icon("group-work")}
            <Text style={styles.drawerListItemText}>Groups</Text>
          </View>
          {this.renderGroupsSection()}
          {/*about*/}
          <TouchableOpacity onPress={this._goToAbout}>
            <View style={styles.drawerListItem}>
              {this.icon("info")}
              <Text style={styles.drawerListItemText}>About</Text>
            </View>
          </TouchableOpacity>
          {/*login/logout*/}
          {this.renderLoginSection()}
        </View>
      </View>
    );
  }
}

Drawer.propTypes = {
  userId: PropTypes.string,
  navigator: PropTypes.object.isRequired,
  groups: PropTypes.array,
  signOut: PropTypes.func.isRequired,
  selectedGroup: PropTypes.object,
  selectGroupAndFetchTodos: PropTypes.func.isRequired
};
export default Drawer;
