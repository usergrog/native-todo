import { Navigation } from "react-native-navigation";

import Drawer from "./screens/Drawer";
import About from "./components/About";
// import MoviesList from './modules/movies/MoviesList';
// import Movie from './modules/movies/Movie';
// import Search from './modules/movies/Search';

export function registerScreens(store, Provider) {
  Navigation.registerComponent("owntodo.About", () => About, store, Provider);
  // Navigation.registerComponent(
  //   "owntodo.Movies",
  //   () => Movies,
  //   store,
  //   Provider
  // );
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
