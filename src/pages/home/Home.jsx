import React, {useEffect, useState} from 'react'
import { Pedidos } from '../../components/pedidoActual/Pedidos';
import './home.css';
import { NavBar } from '../../components/navBar/NavBar'
import { FormHome } from '../../components/home/FormHome';
import { Footer } from '../../components/footer/Footer';
import { TopNegocios } from '../../components/topNegocios/TopNegocios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNegocio, topNegociosAtempt } from '../../redux/actions/negocioAction';
import { Loading } from '../../components/loading/Loading';

export const Home = () => {
    const dispatch = useDispatch();
    const buscador = useSelector((state) => state.negocioReducer)
    const [tipoUsuario, setTipoUsuario] = useState(sessionStorage.getItem('role'))

    useEffect(() => {
        setTipoUsuario(sessionStorage.getItem('role'))
        dispatch(topNegociosAtempt())
    }, [dispatch])
    
    return (
        buscador.isLoading ?<Loading/>:
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
            <>
            <h1>Nuestros negocios mejor valorados:</h1>
            <TopNegocios/>
            </>
            }
        </div>
        
        <Footer/>
        </>
    )
}
