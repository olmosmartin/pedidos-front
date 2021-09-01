import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"

import './negocioHeader.css'
import {  getNegocio } from '../../api/negocioServices'


export const NegocioHeader = () => {
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

    console.log("negocio:"+JSON.stringify(negocio?.data) )
    return (
        <div className="fondoNegocioDetalle">
            <div className="container mb-3">
                <h3 className="">  { negocio?.data?.nombre }  </h3>
                <small>{ negocio?.data?.email }</small>
                <br></br>
                <small>{ negocio?.data?.telefono }</small>
            </div>
        </div>
    )
}
