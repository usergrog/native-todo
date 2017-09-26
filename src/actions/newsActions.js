import { LOAD_NEWS, NEWS_LOADED, SEARCH_NEWS } from "./actionTypes";
import NYT_API_KEY from "../config/nytApiKey";

export const loadNews = () => {
  const req = fetch(
    `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${NYT_API_KEY}`
  );

  return dispatch => {
    dispatch(fetchNews());
    req.then(response => response.json()).then(responseJson => {
      dispatch(newsFetched(responseJson.results));
    });
  };
};

export function newsFetched(news) {
  return {
    type: NEWS_LOADED,
    news
  };
}

export function fetchNews() {
  return {
    type: LOAD_NEWS
  };
}

export const searchNews = searchTerm => ({
  type: SEARCH_NEWS,
  payload: searchTerm
});

export const getTime = () => ({
  type: "GET_TIME"
});
