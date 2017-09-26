import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";
import NewsFeed from "../components/NewsFeed";

const mapStateToProps = state => {
  console.log("state.news", state.newsFeedReducer.news);
  return {
    news: state.newsFeedReducer.news
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
