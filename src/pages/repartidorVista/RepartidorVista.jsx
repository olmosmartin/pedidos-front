import React from 'react'

import { NavBar } from '../../components/navBar/NavBar'
import { RepartidorHeader } from '../../components/repartidorVista/RepartidorHeader'
import { RepartidorBody } from '../../components/repartidorVista/RepartidorBody'
import { Footer } from '../../components/footer/Footer'


export const RepartidorVista = () => {
    return (
        <>
        <NavBar/>
        <RepartidorHeader/>
        <RepartidorBody/>
        <Footer/>
        </>
    )
}
