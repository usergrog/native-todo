import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import PropTypes from "prop-types";
import ErrorView from "../components/ErrorView";

export class AddGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { groupTitle: "" };
    this.onPressAddGroup = this.onPressAddGroup.bind(this);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {this.props.appError && <ErrorView appError={this.props.appError}/>}
        <View>
          <TextInput
            style={styles.editText}
            onChangeText={groupTitle => this.setState({ groupTitle })}
            placeholder="Group Title"
            value={this.state.groupTitle}
          />
          <View style={styles.addGroupButton}>
            <Button
              onPress={this.onPressAddGroup}
              title="Add group"
              color="#841584"
            />
          </View>
        </View>
      </View>
    );
  }

  onPressAddGroup() {
    if (this.state.groupTitle) {
      this.props.addGroup({
        text: this.state.groupTitle,
        isShared: false,
        uid: this.props.userId
      });
      this.setState({ groupTitle: "" });
      this.props.navigator.pop({
        animated: true,
        animationType: "fade"
      });
    } else {
      this.props.showError("Please input title for group");
    }
  }
}

AddGroup.propTypes = {
  userId: PropTypes.string.isRequired,
  addGroup: PropTypes.func.isRequired,
  showError: PropTypes.func.isRequired,
  showProgress: PropTypes.boolean,
  navigator: PropTypes.object.isRequired,
  appError: PropTypes.string
};

const styles = StyleSheet.create({
  editText: {
    height: 40,
    width: 300,
    padding: 4,
    borderColor: "gray",
    borderWidth: 1
  },
  addGroupButton: {
    width: 200,
    padding: 4,
    alignSelf: 'center'
  }
});
