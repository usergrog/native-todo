import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 25,
    paddingTop: 24,
    justifyContent: "flex-start",
    backgroundColor: "#222a"
  },
  drawerList: {},
  drawerListIcon: {
    width: 27
  },
  drawerListItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 23
  },
  drawerListSubItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 23,
    marginLeft: 10
  },
  drawerListItemText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    paddingLeft: 15,
    flex: 1
  },
  drawerListSubItemText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    paddingLeft: 20,
    flex: 1
  },
  linearGradient: {
    // top: 0,
    // left: 0,
    // right: 0,
    // height: 248,
    // position: 'absolute'
    flex: 1
  },
  _version: {
    color: "#3c3c3c",
    position: "absolute",
    bottom: 25,
    marginLeft: 53
  }
});

export default styles;
