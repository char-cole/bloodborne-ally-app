import {combineReducers} from "redux";

function allTypes(state=[]) {
  return state;
}

function searchString(state="", action) {
  if (action.type === "SEARCH_UPDATED") {
    return action.value;
  }
  return state;
}

function currentResults(state=[], action) {
  if (action.type === "RESULTS_UPDATED") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  allTypes, searchString, currentResults
});

export default rootReducer;