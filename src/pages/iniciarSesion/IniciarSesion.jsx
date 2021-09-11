import React from 'react'

import { IniciarSesionCard } from '../../components/iniciarSesion/IniciarSesionCard'
import { NavBar } from '../../components/navBar/NavBar'
import { Footer } from '../../components/footer/Footer'

export const IniciarSesion = () => {
    return (
        <>
            <NavBar />
            <div className="container" style={{paddingTop:'15%', marginBottom: '15%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'center'}}>
                <div className="row col-6">
                    <IniciarSesionCard />
                </div>
            </div>
            <Footer />
        </>
    )
}
