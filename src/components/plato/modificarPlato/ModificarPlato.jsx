import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { NavBar } from '../../../components/navBar/NavBar'
import { Footer } from '../../../components/footer/Footer'
import { getPlato } from '../../../api/negocioServices';
import { Loading } from '../../loading/Loading';
import { ModificarPlatoCard } from './ModificarPlatoCard';


export const ModificarPlato = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [plato, setPlato] = useState([])

    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const idPlato = query.get("idPlato");
    const idNegocio = query.get("idNegocio");

    useEffect(() => {
        const fetchPlato = async()=> {
            setIsLoading(true)
            const platoRes = await getPlato(idNegocio, idPlato)
            setPlato(platoRes.data)
            setIsLoading(false)
        }
        fetchPlato()
    }, [idNegocio, idPlato])

    //console.log("plato: "+JSON.stringify(plato))

    return (

        isLoading ? <Loading /> :
        <>
            <NavBar/>
            <ModificarPlatoCard 
                imagen={plato.imagen}
                nombre={plato.nombre}
                descripcion={plato.descripcion}
                precio={plato.precio}
                descuento={plato.descuento}
                tipo={plato.tipo_comida}
                idNegocio={idNegocio}
                idPlato={idPlato}/>
            <Footer/>
            </>
    )
}
