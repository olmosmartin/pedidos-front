import { combineReducers } from "redux";
import negocioReducer from "./negocioReducer";

const rootReducers = combineReducers({
    negocioReducer,
});

export default rootReducers;