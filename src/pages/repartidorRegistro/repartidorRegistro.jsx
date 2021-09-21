import React from 'react'
import { RepartidorRegistroCard } from '../../components/repartidorRegistro/RepartidorRegistroCard';


import './repartidorRegistro.css';


export const RepartidorRegistro = () => {
    
    return (
        <>
        <div className="fondoRepartidorRegistro">
                <div className="container">
                   <RepartidorRegistroCard/>
                </div>
        </div>
        </>
    )
}