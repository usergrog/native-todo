import React, {Component} from "react";
import {Button, FlatList, StyleSheet, Text, TextInput, View} from "react-native";
import TodoItemContainer from "../containers/TodoItemContainer";

class FirebaseTodoList extends Component {
  state = {
    todoTitle: ""
  };

  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
    this.onPressAddTodo = this.onPressAddTodo.bind(this);
  }

  renderLogin() {
    return (
      <View>
        <Text>Please Login</Text>
      </View>
    );
  }

  onPressAddTodo() {
    if (this.state.todoTitle) {
      this.props.addTodo({
        text: this.state.todoTitle,
        isFinished: false
      });
      this.setState({ todoTitle: "" });
    } else {
      this.props.showError("Please input title for todo");
    }
  }

  _keyExtractor = (item, index) => index;

  renderRow({ item }) {
    console.log("item", item);
    return <TodoItemContainer todo={item} />;
  }

  renderList() {
    return (
      <View>
        <View style={styles.addTodoBox}>
          <TextInput
            style={styles.editText}
            onChangeText={todoTitle => this.setState({ todoTitle })}
            placeholder="Todo Title"
            value={this.state.todoTitle}
          />
          <Button
            onPress={this.onPressAddTodo}
            style={styles.addTodoButton}
            title="Add"
            color="#841584"
          />
        </View>
        <FlatList
          style={styles.flatList}
          data={this.props.todos}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderRow}
        />
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

const styles = StyleSheet.create({
  editText: {
    width: 300,
    padding: 4,
    borderColor: "gray",
    borderWidth: 1,
    flex: 1
  },
  addTodoBox: {
    maxHeight: 40,
    minHeight: 40,
    flexDirection: "row",
    justifyContent: "center"
  },
  addTodoButton: {
    flex: 1
  },
  flatList: {}
});

export default FirebaseTodoList;
