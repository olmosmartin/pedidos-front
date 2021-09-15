import React from 'react'
import { useDispatch } from 'react-redux';
import { agregarProductoAction, removerProductoAction } from '../../redux/actions/carritoAction';
import './carritoRow.css'


export const CarritoRow = (props) => {
    const dispatch = useDispatch();

    const producto = [
        {
            id: props.id,
            nombre: props.nombre,
            precio: props.precio,
            cantidad: 1
        }
    ]
    const handleClickAdd = () => {
        dispatch(agregarProductoAction(producto))
    }

    const handleClickDelete = () => {
        dispatch(removerProductoAction(producto))
    }

    return (
    
        <div className="carritoItem">
            <div class="container "style={{ margin: '5px'}}>
                <div class="row g-1">
                    <div class="col-6">
                    <   p>{props.nombre}</p>
                    </div>
                    <div class="col-6">
                    <button type="button" class="btn btn-success" onClick={handleClickAdd}>+</button>
                        <a class="btn btn-default" >{props.cantidad}</a>
                        <button type="button" class="btn btn-danger" onClick={handleClickDelete}>-</button>
                        
                    </div>
                    Precio: ${props.precio}
                </div>
            </div>
        </div>
       
    )
}
