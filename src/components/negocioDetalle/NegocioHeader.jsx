import React from 'react';
import { useLocation } from "react-router-dom" 

import './negocioHeader.css'


export const NegocioHeader = () => {

    const {search} = useLocation();
    const query = new URLSearchParams(search);
    const nombreNegocio = query.get("nombre");

    return (
        <div className="fondoNegocioDetalle">
            <div className="container mb-3">
                <h3 className=""> {nombreNegocio}</h3>
                <small>Detalles</small>
            </div>
        </div>
    )
}
