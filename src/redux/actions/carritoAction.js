//types
export const AGREGAR_PRODUCTO = 'AGREGAR_PRODUCTO'
export const REMOVER_PRODUCTO = 'REMOVER_PRODUCTO'
export const REMOVER_TODO = 'REMOVER_TODO'
export const SUMAR_UNO = 'SUMAR_UNO'
export const RESTAR_UNO = 'RESTAR_UNO'


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

export const sumarUno = (producto) => {
    return{
        type: SUMAR_UNO,
        productos: producto
    }
}

export const restarUno = (producto) => {
    return{
        type: RESTAR_UNO,
        productos: producto
    }
}


export const limpiarCarrito = () => {
    return{
        type: REMOVER_TODO,
        productos: []
    }
}