import React from 'react'
import { useLocation } from "react-router-dom" 


export const NegocioScreen = (props) => {
    const {search} = useLocation();
    const query = new URLSearchParams(search);
    const idNegocio = query.get("id");
    
    return (
        <div>
            negocios:{idNegocio}
        </div>
    )
}
