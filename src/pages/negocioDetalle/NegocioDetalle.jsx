import React from 'react'

import { NavBar } from '../../components/navBar/NavBar';
import { NegocioHeader } from '../../components/negocioDetalle/NegocioHeader'
import { Footer } from '../../components/footer/Footer';


export const NegocioDetalle = () => {
    return (
        <div>
            <NavBar/>
            <NegocioHeader/>
            <div style={{margin:100}}>
                <h3>MENU PROXIMAMENTE</h3>
            </div>
            <Footer/>
        </div>
    )
}
