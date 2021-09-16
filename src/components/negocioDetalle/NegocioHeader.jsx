import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"

import './negocioHeader.css'
import { getNegocio } from '../../api/negocioServices';


export const NegocioHeader = () => {
    const [negocio, setNegocio] = useState();
    const {search} = useLocation();
    const query = new URLSearchParams(search);
    const idNegocio = query.get("id"); 

    const cargar = async (id)=>{

        const res = await getNegocio(id);
        setNegocio(res.data)
    }

    useEffect(() => {
        cargar(idNegocio)
    }, [])

    return (
        <div className="fondoNegocioDetalle">
            <div className="container mb-3">
                <h3 className="">  { negocio?.usuario?.nombre }  </h3>
                <small>{ negocio?.usuario?.email }</small>
                <br></br>
                <small>{ negocio?.usuario?.telefono }</small>
            </div>
        </div>
    )
}
