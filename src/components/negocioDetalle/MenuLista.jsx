import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"

import { fetchNegocio } from '../../redux/actions/negocioAction';
import { MenuCard } from './MenuCard';
import {  getNegocio } from '../../api/negocioServices'
import './menuLista.css';

const MenuLista = () => {

    const [negocio, setNegocio] = useState([]);
    const {search} = useLocation();
    const query = new URLSearchParams(search);
    const idNegocio = query.get("id"); 

    const cargar = async (id)=>{
        const res = await getNegocio(id);
        setNegocio(() => res)
    }

    useEffect(() => {
        cargar(idNegocio)
    }, [])

    return (
        <div className="">
            <div className="row justify-content-center">
                <div className="mt-8">
                    <h3 className="text-black">Resultado</h3>
                    {
                    negocio?.data?.productos?.map( (producto, i) => (
                        <MenuCard key={i} nombre={producto.nombre} imagen={producto.imagen} precio={producto.precio} />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default MenuLista;

