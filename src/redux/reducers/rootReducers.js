import { combineReducers } from "redux";
import negocioReducer from "./negocioReducer";
import productoReducer from "./productoReducer"

const rootReducers = combineReducers({
    negocioReducer,
    productoReducer,
    
});

export default rootReducers;