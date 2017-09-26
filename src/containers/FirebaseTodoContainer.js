import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";
import FirebaseTodoList from "../screens/FirebaseTotoList";

const mapStateToProps = state => {
  console.log("listOOPS ", state.authReducer.userId);
  return {
    todos: state.todoReducer.todos,
    selectedGroup: state.todoReducer.selectedGroup,
    userId: state.authReducer.userId
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FirebaseTodoList);
