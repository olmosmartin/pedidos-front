import React from 'react'
import { useLocation } from "react-router-dom" 

import ListaNegocios from '../../components/negocios/ListaNegocios';
import { NavBar } from '../../components/navBar/NavBar';
import { Footer } from '../../components/footer/Footer'

export const NegocioScreen = (props) => {
    const {search} = useLocation();
    const query = new URLSearchParams(search);
    const idNegocio = query.get("id");
    
    return (
        <div>
            <NavBar/>
            negocios:{idNegocio}
            <ListaNegocios/>
            <Footer/>
        </div>
    )
}
