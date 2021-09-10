import { AGREGAR_PRODUCTO, REMOVER_PRODUCTO } from "../actions/carritoAction";

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
            /*
            console.log("PRODUCTOS: "+JSON.stringify(state.productos))
            console.log("ELQUELLEGA: "+JSON.stringify(action.productos))
            console.log("ITEMCARRITO"+ItemEnCarritoObject)
            */
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
            /*
            console.log("PRODUCTOS: "+JSON.stringify(state.productos))
            console.log("ELQUELLEGA: "+JSON.stringify(action.productos[0].id))
            console.log("ITEMCARRITO"+JSON.stringify(ItemEnCarritoObject))
            */
            if(ItemEnCarritoObject ){
                ItemEnCarritoObject.cantidad-=1
            }
            
            let listanueva=[]

            if (ItemEnCarritoObject.cantidad===0){
                listanueva=state.productos.filter( producto => producto.id !== action.productos[0].id )
            }

            return ItemEnCarritoObject.cantidad!==0?
            {
                ...state
            }:
            {
                ...state,
                productos: listanueva
            }
        }

        default:
            return state;
    }


}

export default carritoShopping;