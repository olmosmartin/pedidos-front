import { combineReducers } from "redux";
import negocioReducer from "./negocioReducer";
import productoReducer from "./productoReducer"
import carritoShopping from "./carritoReducer";

const rootReducers = combineReducers({
    negocioReducer,
    productoReducer,
    carritoShopping,
    
});

export default rootReducers;