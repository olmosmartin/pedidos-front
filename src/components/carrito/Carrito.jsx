import React from 'react'
import { useSelector } from 'react-redux';

import { CarritoRow } from './CarritoRow'

/*
const productoPrueba = [
    {
        id:1,
        nombre:"prueba1",
        precio: 123,
        cantidad: 1
    }
]
*/

export const Carrito = () => {
    var suma=0

    const carrito = useSelector((state) => state.carritoShopping)
    
    return (
        <div className="card"  style={{ flexDirection: 'column', padding: '10px'}}>
            {carrito.productos.length>1?
            <h4><i class="fa fa-shopping-cart" aria-hidden="true"></i>  Carrito</h4>
            :<p style={{ textAlign: 'center'}}>Haz click en un producto para agregarlo</p>}
            {
            carrito.productos.map( (item, i) => {
                if(item.id!==0){
                suma=suma+((item.precio)*item.cantidad)
                return <CarritoRow key={i} id={item.id} nombre={item.nombre} precio={item.precio*item.cantidad} cantidad={item.cantidad}/>
                }
            })
            }
            Total: ${suma}
            {carrito.productos.length>1 && <button type="button" class="btn btn-success">Finalizar pedido</button>}
            
        </div>
    )
}
