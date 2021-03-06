import {Provider} from "react-redux";
import {store} from "./store";
import {Navigation} from "react-native-navigation";
import {registerScreens} from "./screens";

registerScreens(store, Provider);

const navigatorStyle = {
  statusBarColor: "black",
  statusBarTextColorScheme: "light",
  navigationBarColor: "black",
  navBarBackgroundColor: "#0a0a0a",
  navBarTextColor: "white",
  navBarButtonColor: "white",
  tabBarButtonColor: "red",
  tabBarSelectedButtonColor: "red",
  tabBarBackgroundColor: "white",
  topBarElevationShadowEnabled: false,
  navBarHideOnScroll: true,
  tabBarHidden: true,
  drawUnderTabBar: true
};

Navigation.startSingleScreenApp({
  screen: {
    screen: "owntodo.TodoList",
    title: "TodoList",
    navigatorStyle,
    leftButtons: [
      {
        id: "sideMenu"
      }
    ]
  },
  drawer: {
    left: {
      screen: "owntodo.Drawer"
    }
  }
});
