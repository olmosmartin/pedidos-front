import React from 'react'
import { NegocioRegistroCard } from '../../components/negocioRegistro/NegocioRegistroCard';

import './negocioRegistro.css';


export const NegocioRegistro = () => {
    
    return (
        <>
        <div className="fondoNegocioRegistro">
                <div className="container">
                   <NegocioRegistroCard/>
                </div>
        </div>
        </>
    )
}