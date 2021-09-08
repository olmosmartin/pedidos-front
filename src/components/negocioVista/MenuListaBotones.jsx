import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from "react-router-dom"


import '../negocioDetalle/menuLista.css';
import { fetchProductosIdNegocio } from '../../redux/actions/productoAction';
import { MenuCard } from '../negocioDetalle/MenuCard';
import { FiltrosAcordeonNegocioDetalle } from '../negocioDetalle/FiltrosAcordeonNegocioDetalle';
import { MenuCardBotones } from './MenuCard-Botones';

export const MenuListaBotones = () => {
    const buscador = useSelector((state) => state.productoReducer)
    const dispatch = useDispatch();

    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const idNegocio = '612e72a068f079e9dd47813d'/*query.get("id")*/;
    const history = useHistory()

    const handleSubmit = () => {

        history.push(`/platoIngreso?id=${idNegocio}`);
    }
    useEffect(() => {
        dispatch(fetchProductosIdNegocio(idNegocio))
    }, [])

    return (
        <div className="">
            <div className="row justify-content-center ">
                <div className="space"></div>
                {
                    buscador.isLoading ?
                        <div className="spaces">
                            <div className="spinner-grow text-dark" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-grow text-dark" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-grow text-dark" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-grow text-dark" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>

                        </div>

                        :
                        <>
                             
                            <div className="col">
                             
                            </div>
                            <div className="col">
                                {buscador.productos.length >= 1 && !buscador.error ?

                                    <div className="">
                                        {buscador.productos[0]?.map((producto, i) => (
                                            <MenuCardBotones key={i} nombre={producto.nombre} imagen={producto.imagen} precio={producto.precio} />
                                        ))
                                        }
                                        <div>
                                            <button className="btn btn-danger" type="submit" /*onClick={handleSubmit} */style={{marginTop: '25px'}}><i class="fa fa-plus" aria-hidden="true"></i> Agregar plato al menú</button>
                                        </div>
                                    </div>
                                    
                                    :
                                    null
                                    
                                }
                                {
                                    buscador.error !== '' && buscador.productos.length === 0 ?
                                        <span className="text-danger"> {buscador.error} </span>
                                        :
                                        null
                                }
                            </div>
                            <div className="col">
                                <p> </p>
                            </div>
                        </>
                }

            </div>
        </div>
    )
}