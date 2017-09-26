import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Byline from "./Byline";
import AppText from "./AppText";
import Thumbnail from "./Thumbnail";
import * as globalStyles from "../styles/global";

export default class NewsItem extends Component {
  constructor(props) {
    super(props);

    // this.onLongPress = this.onLongPress.bind(this);
  }

  render() {
    const {
      style,
      multimedia,
      title,
      byline,
      created_date,
      location,
      description
      // onPress
    } = this.props;
    const accentColor =
      globalStyles.ACCENT_COLORS[
        this.props.index % globalStyles.ACCENT_COLORS.length
      ];
    return (
      <TouchableOpacity style={style}>
        <View>
          {/* <Thumbnail
            url={imageUrl}
            titleText={title}
            accentColor={accentColor}
            style={styles.thumbnail}
          /> */}
          <View style={styles.content}>
            <Text>{title}</Text>
            <Byline author={byline} date={created_date} location={location} />
            <AppText>{title}</AppText>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

NewsItem.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  created_date: PropTypes.string.isRequired,
  byline: PropTypes.string.isRequired,
  location: PropTypes.string,
  index: PropTypes.number.isRequired,
  style: View.propTypes.style
};

const styles = StyleSheet.create({
  thumbnail: {
    marginBottom: 5
  },
  content: {
    paddingHorizontal: 5
  }
});
