import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";
import Icon from "react-native-vector-icons/MaterialIcons";

class TodoItemComp extends Component {
  handleRemove = e => {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  };

  onToggle() {
    this.props.toggleTodo(this.props.todo);
  }

  render() {
    return (
      <View style={styles.todoItem}>
        <TouchableWithoutFeedback onPress={this.onToggle.bind(this)}>
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
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

const TodoItem = connect(mapStateToProps, mapDispatchToProps)(TodoItemComp);

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: "#dfd",
    borderColor: "gray",
    borderWidth: 0.5,
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
  }
});

export default TodoItem;
