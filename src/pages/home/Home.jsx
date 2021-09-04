import React from 'react'

import './home.css';
import { NavBar } from '../../components/navBar/NavBar'
import { FormHome } from '../../components/home/FormHome';
import { Footer } from '../../components/footer/Footer';
import { MapVista } from '../../components/map/MapVista';


export const Home = () => {
    return (
        <>
        <NavBar/>
        <div className="fondo">
            <div className="container">
                <FormHome/>
            </div>
        </div>
        <div style={{margin:100}}>
            <h3>MAS CONTENIDO PROXIMAMENTE</h3>
            <MapVista/>
        </div>
        <Footer/>
        </>
    )
}
