import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Text, FlatList, View, StyleSheet } from "react-native";
import * as globalStyles from "../styles/global";
import NewsItem from "./NewsItem";

export default class NewsFeed extends PureComponent {
  constructor(props) {
    super(props);

    // this.ds = new ListView.DataSource({
    //   rowHasChanged: (row1, row2) => row1.title !== row2.title
    // });
    // this.state = {
    //   dataSource: this.ds.cloneWithRows(this.props.news)
    // };

    this.refresh = this.refresh.bind(this);
  }

  componentWillMount() {
    this.refresh();
  }

  componentWillReceiveProps(nextProps) {
    // this.setState({
    //   dataSource: this.state.dataSource.cloneWithRows(nextProps.news)
    // });
  }

  refresh() {
    if (this.props.loadNews) {
      this.props.loadNews();
    }
  }

  renderRow({ item }) {
    return <NewsItem {...item} />;
  }

  _keyExtractor = (item, index) => index;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.news}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderRow}
        />
      </View>
    );
  }
}

NewsFeed.propTypes = {
  listStyles: View.propTypes.style,
  news: PropTypes.arrayOf(PropTypes.object)
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24
    // flex: 1,
  }
});
