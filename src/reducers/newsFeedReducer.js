import { LOAD_NEWS, NEWS_LOADED } from "../actions/actionTypes";

const initialState = {
  news: [],
  time: undefined,
  newsLoading: false
};

export const newsFeedReducer = (state = initialState, action = {}) => {
  var d = new Date();

  switch (action.type) {
    case LOAD_NEWS:
      return { ...state, newsLoading: true };
    case NEWS_LOADED:
      console.log("NEWS_LOADED", action.news);
      return { ...state, news: action.news, newsLoading: false };
    case "GET_TIME":
      console.log("reducer get time ", d.getTime());
      return { ...state, time: d.getTime() };
    default:
      return state;
  }
};
