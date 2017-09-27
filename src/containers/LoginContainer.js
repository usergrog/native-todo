import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Login from "../screens/Login";
import * as actionCreators from "../actions";

const mapStateToProps = state => {
  return {
    username: state.authReducer.username,
    password: state.authReducer.password,
    userId: state.authReducer.userId,
    appError: state.alertReducer.appError
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
