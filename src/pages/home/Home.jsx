import React from 'react'
//import { useDispatch, useSelector } from 'react-redux';

import './home.css';
import { NavBar } from '../../components/navBar/NavBar'
import { FormHome } from '../../components/home/FormHome';
import { Footer } from '../../components/footer/Footer';

import { agregarProductoAction, removerProductoAction } from '../../redux/actions/carritoAction';

const productoPrueba = [
    {
        id:1,
        nombre:"prueba1",
        precio: 123,
        cantidad: 1
    }
]

const productoPrueba2 = [
    {
        id:2,
        nombre:"prueba2",
        precio: 321,
        cantidad: 1
    }
]

export const Home = () => {
    /*
    const carrito = useSelector((state) => state.carritoShopping)
    const dispatch = useDispatch();
*/
    return (
        <>
        <NavBar/>
        <div className="fondo">
            <div className="container">
                <FormHome/>
            </div>
        </div>
        {
/*
        <button 
            className="btn btn-dark m-4"
            onClick={()=>{ dispatch(agregarProductoAction(productoPrueba)) }}> 
            Agregar
        </button>

        <button 
            className="btn btn-dark m-4"
            onClick={()=>{ dispatch(agregarProductoAction(productoPrueba2)) }}> 
            Agregar2
        </button>

        <button 
            className="btn btn-dark m-4"
            onClick={()=>{ dispatch(removerProductoAction(productoPrueba)) }}> 
            Eliminar
        </button>
*/
}
        
        <div style={{margin:100}}>
            <h3>MAS CONTENIDO PROXIMAMENTE</h3>
        </div>
        
        <Footer/>
        </>
    )
}
