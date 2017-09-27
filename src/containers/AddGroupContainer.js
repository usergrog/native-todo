import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions";
import {AddGroup} from "../screens/AddGroup";

const mapStateToProps = (state) => {
  return {
    userId: state.authReducer.userId
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddGroup);
