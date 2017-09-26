import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";
import Drawer from "../screens/Drawer";

const mapStateToProps = state => {
  return {
    userId: state.authReducer.userId
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
