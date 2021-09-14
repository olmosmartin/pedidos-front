import { combineReducers } from "redux";
import negocioReducer from "./negocioReducer";
import productoReducer from "./productoReducer"
import carritoShopping from "./carritoReducer";
import clienteReducer from "./clienteReducer";

const rootReducers = combineReducers({
    negocioReducer,
    productoReducer,
    carritoShopping,
    clienteReducer,
});

export default rootReducers;