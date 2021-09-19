import { AGREGAR_PRODUCTO, REMOVER_PRODUCTO, REMOVER_TODO, SUMAR_UNO, RESTAR_UNO } from "../actions/carritoAction";

const inicial_state = {
    productos:[],
}

const carritoShopping = (state = inicial_state, action) => {

    switch (action.type) {
        case AGREGAR_PRODUCTO: {
            return{
                ...state,
                productos: [...state.productos, action.productos[0]]
            }
        }

        case REMOVER_PRODUCTO: {
            let listanueva=[]

            listanueva=state.productos.filter( producto => producto.id !== action.productos[0].id )

            return {
                ...state,
                productos: listanueva
            }
        }

        case SUMAR_UNO:{
            let ItemEnCarritoObject = state.productos.find(producto=>producto.id===action.productos[0].id)

            ItemEnCarritoObject.cantidad+=1
            return {
                ...state,
                
            }
        }

        case RESTAR_UNO:{
            let ItemEnCarritoObject = state.productos.find(producto=>producto.id===action.productos[0].id)
            ItemEnCarritoObject.cantidad-=1

            return {
                ...state,
            }
        }

        case REMOVER_TODO: {

            return {
                ...state,
                productos: []
            }

        }

        default:
            return state;
    }


}

export default carritoShopping;