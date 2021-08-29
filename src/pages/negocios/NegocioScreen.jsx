import React from 'react'
import { useLocation } from "react-router-dom" 
import ListaNegocios from '../../components/negocios/ListaNegocios';


export const NegocioScreen = (props) => {
    const {search} = useLocation();
    const query = new URLSearchParams(search);
    const idNegocio = query.get("id");
    
    return (
        <div>
            negocios:{idNegocio}
            <ListaNegocios/>
        </div>
    )
}
