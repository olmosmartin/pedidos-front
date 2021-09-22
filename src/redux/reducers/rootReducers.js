import { combineReducers } from "redux";
import negocioReducer from "./negocioReducer";
import productoReducer from "./productoReducer"
import carritoShopping from "./carritoReducer";
import clienteReducer from "./clienteReducer";
import pedidoReducer from "./pedidoReducer";
const rootReducers = combineReducers({
    negocioReducer,
    productoReducer,
    carritoShopping,
    clienteReducer,
    pedidoReducer
});

export default rootReducers;