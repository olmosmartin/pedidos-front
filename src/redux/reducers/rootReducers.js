import { combineReducers } from "redux";
import buscadorReducer from "./buscadorReducer";

const rootReducers = combineReducers({
    buscadorReducer,
});

export default rootReducers;