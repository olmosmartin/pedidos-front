import React,{useState} from 'react'
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
    console.log("CARRITO: " +JSON.stringify(carrito))
    carrito.productos.map(item => {
        console.log("ITEM: "+item.nombre)
    })
    return (
        <div className="card"  style={{ flexDirection: 'column' }}>
            {carrito.productos.length>1?
            <p>Carrito</p>
            :<p>Haz click en un producto para agregarlo</p>}
            {
            carrito.productos.map( (item, i) => {
                if(item.id!==0){
                suma=suma+((item.precio)*item.cantidad)
                return <CarritoRow key={i} id={item.id} nombre={item.nombre} precio={item.precio} cantidad={item.cantidad}/>
                }
            })
            }
            total:{suma}
            {carrito.productos.length>1 && <button type="button" class="btn btn-success">Finalizar pedido</button>}
        
        </div>
    )
}
