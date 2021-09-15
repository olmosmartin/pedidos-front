import React, { useEffect } from 'react'



import { NavBar } from '../../components/navBar/NavBar';
import { Footer } from '../../components/footer/Footer'
import { NegocioHeader } from '../../components/negocioVista/NegocioHeader';
import { NegocioVistaBody } from '../../components/negocioVista/NegocioVistaBody';
export const NegocioVista = () => {

    return (
    <>
        <div>
            <NavBar/>
            <NegocioHeader/>
            <NegocioVistaBody/>
            <Footer/>
        </div>
        </>
    )
}
