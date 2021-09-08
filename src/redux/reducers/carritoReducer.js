import { AGREGAR_PRODUCTO, REMOVER_PRODUCTO, REMOVER_TODOS } from "../actions/carritoAction";

const inicial_state = {
    productos:[
        {
            id:0
        }
    ],
}

const carritoShopping = (state = inicial_state, action) => {

    switch (action.type) {
        case AGREGAR_PRODUCTO: {
            let ItemEnCarritoObject = state.productos.find(producto=>producto.id===action.productos[0].id)
            console.log("PRODUCTOS: "+JSON.stringify(state.productos))
            console.log("ELQUELLEGA: "+JSON.stringify(action.productos[0].id))
            console.log("ITEMCARRITO"+ItemEnCarritoObject)
            
            ItemEnCarritoObject?ItemEnCarritoObject.cantidad+=1:console.log("nuevo item")

            return ItemEnCarritoObject?
            {
                ...state
            }:
            {
                ...state,
                productos: [...state.productos, action.productos[0]]
            }
        }

        case REMOVER_PRODUCTO: {
            let ItemEnCarritoObject = state.productos.find(producto=>producto.id===action.productos[0].id)
            console.log("PRODUCTOS: "+JSON.stringify(state.productos))
            console.log("ELQUELLEGA: "+JSON.stringify(action.productos[0].id))
            console.log("ITEMCARRITO"+JSON.stringify(ItemEnCarritoObject))
            
            ItemEnCarritoObject?
            ItemEnCarritoObject.cantidad-=1:
            console.log("nuevo item")
            
            let listanueva=[]

            ItemEnCarritoObject.cantidad===0?
            listanueva=state.productos.filter( producto => producto !== action.productos[0] ):
            console.log("removido")
            console.log("listanueva"+JSON.stringify(listanueva))

            return ItemEnCarritoObject?
            {
                ...state
            }:
            {
                ...state,
                productos: [...state.productos, action.productos[0]]
            }
            /*
            return {
                ...state,
                productos: state.productos.filter( i => i.id === action.payload.id)
            }
            */
        }
/*
        case REMOVER_TODOS: {
            
            return {
                ...state,
                pokemon: state.pokemon + action.payload.cant
            }
            
        }
*/
        default:
            return state;
    }


}

export default carritoShopping;