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

function chaliceCheck(state=false, action) {
  if (action.type === "FALSE_TO_TRUE") {
    return true;
  }
  return state;
}

const rootReducer = combineReducers({
  allTypes, searchString, currentResults, chaliceCheck
});

export default rootReducer;