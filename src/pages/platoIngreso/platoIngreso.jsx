import React from 'react'



import { NavBar } from '../../components/navBar/NavBar';
import { Footer } from '../../components/footer/Footer'
import { NegocioHeader } from '../../components/negocioDetalle/NegocioHeader';
import { PlatoForm } from '../../components/plato/platoForm';
export const platoIngreso = () => {

    return (
    <>
        <div>
            <NavBar/>
            <NegocioHeader/>
            <PlatoForm/>
            <Footer/>
        </div>
        </>
    )
}
