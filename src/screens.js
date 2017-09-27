import {Navigation} from "react-native-navigation";

import DrawerContainer from "./containers/DrawerContainer";
import About from "./screens/About";
import LoginContainer from "./containers/LoginContainer";
import FirebaseTodoContainer from "./containers/FirebaseTodoContainer";
import AddGroupContainer from "./containers/AddGroupContainer";

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
  Navigation.registerComponent(
    "owntodo.AddGroup",
    () => AddGroupContainer,
    store,
    Provider
  );
  Navigation.registerComponent(
    "owntodo.Drawer",
    () => DrawerContainer,
    store,
    Provider
  );
}
