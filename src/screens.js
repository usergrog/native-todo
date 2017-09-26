import { Navigation } from "react-native-navigation";

import Drawer from "./screens/Drawer";
import About from "./screens/About";
import LoginContainer from "./containers/LoginContainer";
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
  // Navigation.registerComponent(
  //   "movieapp.MoviesList",
  //   () => MoviesList,
  //   store,
  //   Provider
  // );
  // Navigation.registerComponent(
  //   "movieapp.Search",
  //   () => Search,
  //   store,
  //   Provider
  // );
  Navigation.registerComponent("owntodo.Drawer", () => Drawer);
}
