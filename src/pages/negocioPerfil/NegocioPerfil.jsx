import React from 'react'

import { NavBar } from '../../components/navBar/NavBar';

import { Footer } from '../../components/footer/Footer';
import { NegocioPerfilCard } from '../../components/negocioPerfil/NegocioPerfilCard';



export const NegocioPerfil = () => {



    return (
        <div>
            <NavBar/>
            
            <>
            <div className="">
                    <div className="container" >
                    <NegocioPerfilCard/>
                    </div>
            </div>
            </>

            <Footer/>
        </div>
    )
}
