//types
export const AGREGAR_PRODUCTO = 'AGREGAR_PRODUCTO'
export const REMOVER_PRODUCTO = 'REMOVER_PRODUCTO'

//actions
export const agregarProductoAction = (producto) => {
    return{
        type: AGREGAR_PRODUCTO,
        //payload:{
            productos: producto,
        //}
    }
}

export const removerProductoAction = (producto) => {
    return{
        type: REMOVER_PRODUCTO,
        productos: producto
    }
}