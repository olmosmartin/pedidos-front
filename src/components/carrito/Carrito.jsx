import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { limpiarCarrito } from '../../redux/actions/carritoAction';
import { CarritoRow } from './CarritoRow'
import { ModalCrearPedido } from './modal/ModalCrearPedido';

export const Carrito = () => {
    var suma=0
    const dispatch = useDispatch();
    const carrito = useSelector((state) => state.carritoShopping)
    
    return (
        <>
        <div className="card sticky-top mt-4"  style={{ flexDirection: 'column', padding: '10px', top: "100px"}}>
            {carrito.productos.length>=1?
            <h4><i className="fa fa-shopping-cart" aria-hidden="true"></i>  Carrito</h4>
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

            <div className="column">
                {carrito.productos.length>=1 && <button type="button" className="btn btn-success m-4" data-toggle="modal" data-target="#exampleModalCenter">Finalizar pedido</button>}
                {carrito.productos.length>=1 && <button type="button" className="btn btn-danger m-4" onClick={ () => {dispatch(limpiarCarrito())} } >Borrar todo</button>}
            </div>

        </div>
        <ModalCrearPedido/>

        </>
    )
}
