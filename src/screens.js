import { Navigation } from "react-native-navigation";

import DrawerContainer from "./containers/DrawerContainer";
import About from "./screens/About";
import LoginContainer from "./containers/LoginContainer";
import NewsFeedContainer from "./containers/NewsFeedContainer";
import FirebaseTodoContainer from "./containers/FirebaseTodoContainer";
// import Movie from './modules/movies/Movie';
// import Search from './modules/movies/Search';

export function registerScreens(store, Provider) {
  Navigation.registerComponent(
    "owntodo.Login",
    () => LoginContainer,
    store,
    Provider
  );
  Navigation.registerComponent("owntodo.About", () => About, store, Provider);
  Navigation.registerComponent(
    "owntodo.TodoList",
    () => FirebaseTodoContainer,
    store,
    Provider
  );
  // Navigation.registerComponent(
  //   "owntodo.Login",
  //   () => Login,
  //   store,
  //   Provider
  // );
  Navigation.registerComponent(
    "owntodo.Drawer",
    () => DrawerContainer,
    store,
    Provider
  );
}
