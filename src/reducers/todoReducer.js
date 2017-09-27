import {
  RECEIVED_GROUPS,
  RECEIVED_TODOS,
  SELECT_GROUP
} from "../actions/todoActions";

export const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVED_TODOS:
      return Object.assign({}, state, { todos: action.todos });
    // case ADD_TODO:
    //     return {todos: action.todos}
    case RECEIVED_GROUPS:
      return Object.assign({}, state, { groups: action.groups });
    case SELECT_GROUP:
      return Object.assign({}, state, { selectedGroup: action.selectedGroup });
    case "LOGOUT":
      return Object.assign({}, state, {
        selectedGroup: undefined,
        todos: undefined,
        groups: undefined
      });
    default:
      return state;
  }
};
