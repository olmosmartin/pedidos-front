import React, {useEffect, useState} from 'react'
import { Pedidos } from '../../components/pedidoActual/Pedidos';
import './home.css';
import { NavBar } from '../../components/navBar/NavBar'
import { FormHome } from '../../components/home/FormHome';
import { Footer } from '../../components/footer/Footer';


export const Home = () => {
    const [tipoUsuario, setTipoUsuario] = useState(sessionStorage.getItem('role'))

    useEffect(() => {
        setTipoUsuario(sessionStorage.getItem('role'))
    }, [])
    
    return (
        <>
        <NavBar/>
        <div className="fondo">
            <div className="container">
                <FormHome/>
            </div>
        </div>
               
        <div style={{margin:100}}>
            {tipoUsuario==='CLIENTE'?
            <Pedidos/>
            :
            <h3>MAS CONTENIDO PROXIMAMENTE</h3>
            }
        </div>
        
        <Footer/>
        </>
    )
}
