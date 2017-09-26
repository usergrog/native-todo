import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import TodoItem from "../components/TodoItem";
import * as actionCreators from "../actions";
import { bindActionCreators } from "redux";

class FirebaseTodoList extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }
  componentWillMount() {
    console.log("userId", this.props.userId);
    if (
      (this.props.todos === undefined || this.props.todos.length === 0) &&
      this.props.userId !== ""
    ) {
      // this.props.fetchTodos()
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.refs.newTodoTitle.value) {
      this.props.addTodo({
        text: this.refs.newTodoTitle.value,
        isFinished: false
      });
      this.refs.todosForm.reset();
    } else {
      this.props.showError("Please input title for todo");
    }
  };

  allowDrop = event => {
    event.preventDefault();
  };

  drop = (event, todoTarget) => {
    event.preventDefault();
    this.props.changePriority(todoTarget, this.daggedTodo);
  };

  dragStart = (event, todoSource) => {
    this.daggedTodo = todoSource;
  };

  renderLogin() {
    return (
      <View>
        <Text>Please Login</Text>
      </View>
    );
  }

  renderList() {
    return (
      <View>
        <Text>List here</Text>
      </View>
    );
  }

  render() {
    if (this.props.userId) {
      return this.renderList();
    } else {
      return this.renderLogin();
    }
  }
}

export default FirebaseTodoList;
