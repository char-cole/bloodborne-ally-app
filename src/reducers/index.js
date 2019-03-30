import {combineReducers} from "redux";

function allTypes(state=[], action) {
    return state;
}

const rootReducer = combineReducers({
    allTypes
});

export default rootReducer;