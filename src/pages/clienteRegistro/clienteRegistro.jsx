import React from 'react'
import { ClienteRegistroCard } from '../../components/clienteRegistro/ClienteRegistroCard';

import './clienteRegitro.css';


export const ClienteRegistro = () => {
    
    return (
        <>
        <div className="fondoClienteRegistro">
                <div className="container">
                  <ClienteRegistroCard/>
                </div>
        </div>
        </>
    )
}