import React from 'react'

import { NavBar } from '../../components/navBar/NavBar';
import { NegocioHeader } from '../../components/negocioDetalle/NegocioHeader'
import { Footer } from '../../components/footer/Footer';
import { NegocioBody } from '../../components/negocioDetalle/NegocioBody';


export const NegocioDetalle = () => {
    return (
        <div>
            <NavBar/>
            <NegocioHeader/>
            <NegocioBody/>
            <Footer/>
        </div>
    )
}
