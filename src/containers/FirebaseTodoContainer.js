import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";
import FirebaseTodoList from "../screens/FirebaseTotoList";

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos,
    selectedGroup: state.todoReducer.selectedGroup,
    userId: state.authReducer.userId,
    showProgress: state.alertReducer.showProgress,
    appError: state.alertReducer.appError
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FirebaseTodoList);
