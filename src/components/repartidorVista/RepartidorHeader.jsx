import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"

import { getRepartidor } from '../../api/repartidorServices'

export const RepartidorHeader = () => {
    const {search} = useLocation();
    const query = new URLSearchParams(search);
    const idRepartidor = query.get("id"); 
    const [repartidor, setRepartidor] = useState();

    const cargar = async (id)=>{
        const res = await getRepartidor(id);
        setRepartidor(res.data)
    }

    useEffect(() => {
        cargar(idRepartidor)
    }, [idRepartidor])

    return (
        <div className="fondoNegocioDetalle">
            <div className="container mb-3">
                <h3 className="">  { repartidor?.usuario?.nombre }  </h3>
                <small>{ repartidor?.usuario?.email }</small>
                <br></br>
                <small>{ repartidor?.usuario?.telefono }</small>
            </div>
        </div>
    )
}
