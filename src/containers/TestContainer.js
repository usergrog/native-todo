import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Test from "../components/Test";
import * as actionCreators from "../actions";

const mapStateToProps = state => {
  return {
    appData: state.dataReducer.appData,
    dataReducer: state.dataReducer,
    news: state.newsFeedReducer.news,
    time: state.newsFeedReducer.time
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Test);
