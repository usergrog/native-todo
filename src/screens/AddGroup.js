import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import * as PropTypes from "react-native";

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
        <View>
          <TextInput
            style={styles.editText}
            onChangeText={groupTitle => this.setState({ groupTitle })}
            placeholder="Todo Title"
            value={this.state.groupTitle}
          />
          <Button
            onPress={this.onPressAddGroup}
            style={styles.addTodoButton}
            title="Add"
            color="#841584"
          />

          <Text>AddGroup</Text>
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
      this.props.showError("Please input title for todo");
    }
  }
}

// AddGroup.propTypes = {
//   userId: PropTypes.string,
//   addGroup: PropTypes.func.isRequired,
//   showError: PropTypes.func.isRequired,
//   showProgress: PropTypes.boolean,
//   navigator: PropTypes.object.isRequired
// };

const styles = StyleSheet.create({
  editText: {}
});
