import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

class TodoItem extends Component {
  _onPressUp(){
    console.log('up', this.props.todos.length, this.props.todo.orderVal)
    if (this.props.todos.length > this.props.todo.orderVal) {
      console.log('up2')
      this.props.changePriority(this.props.todo, 1)
    }
  }

  _onPressDown(){
    console.log('down', this.props.todos.length, this.props.todo.orderVal)
    if (this.props.todo.orderVal > 1) {
      console.log('down2')
      this.props.changePriority(this.props.todo, -1)
    }
  }

  _onToggle() {
    this.props.toggleTodo(this.props.todo);
  }

  _onPressDeleteButton() {
    this.props.removeTodo(this.props.todo);
  }

  render() {
    return (
      <View style={styles.todoItem}>
        <View style={styles.todoSubItem}>
          <TouchableWithoutFeedback onPress={this._onToggle.bind(this)}>
            <View>
              {this.props.todo.isFinished ? (
                <Icon
                  style={styles.todoCheckBox}
                  name="check-box"
                  size={18}
                  color="#000000"
                />
              ) : (
                <Icon
                  style={styles.todoCheckBox}
                  name="check-box-outline-blank"
                  size={18}
                  color="#000000"
                />
              )}
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.todoText}>{this.props.todo.text}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={this._onPressUp.bind(this)}
            style={styles.todoDeleteUpDown}
          >
            <Icon name="arrow-drop-up" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressDown.bind(this)}
            style={styles.todoDeleteUpDown}
          >
            <Icon name="arrow-drop-down" size={24} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this._onPressDeleteButton.bind(this)}
            style={styles.todoDeleteBtn}
          >
            <Icon name="delete" size={18} color="#f00" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: "#dfd",
    borderColor: "gray",
    borderWidth: 0.5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  todoSubItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  todoCheckBox: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  todoText: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    textAlignVertical: "center"
  },
  todoDeleteBtn: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  todoDeleteUpDown: {
    paddingVertical: 6,
    paddingHorizontal: 5
  }
});

TodoItem.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired,
  changePriority: PropTypes.func.isRequired
};

export default TodoItem;
