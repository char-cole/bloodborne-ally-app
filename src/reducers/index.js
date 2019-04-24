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
  return [];
}

function chaliceCheck(state=false, action) {
  if (action.type === "FALSE_TO_TRUE") {
    return true;
  }
  else if (action.type === "TRUE_TO_FALSE") {
    return false;
  }
  return state;
}

function nothing(state="", action) {
  if (action.type === "NOTHING_UPDATED") return action.value
  return state
}

const rootReducer = combineReducers({
  allTypes, searchString, currentResults, chaliceCheck, nothing
});

export default rootReducer;