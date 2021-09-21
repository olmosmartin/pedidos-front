import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from "react-router-dom"

import '../negocioDetalle/menuLista.css';
import { fetchProductosIdNegocio } from '../../redux/actions/productoAction';
import { MenuCard } from '../negocioDetalle/MenuCard';
import { FiltrosAcordeonNegocioDetalle } from '../negocioDetalle/FiltrosAcordeonNegocioDetalle';
import { MenuCardBotones } from './MenuCard-Botones';
import { Loading } from '../loading/Loading';

export const MenuListaBotones = () => {
    const buscador = useSelector((state) => state.productoReducer)
    const dispatch = useDispatch();

    const location = useLocation();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const idNegocio = query.get("id");
    const history = useHistory()


    const handleClickAgregarPlato = ()=>{
        history.push(`/platoIngreso?id=${idNegocio}`);
    }
    
    useEffect(() => {
        dispatch(fetchProductosIdNegocio(idNegocio))
    }, [location])

    return (
        <div className="">
            <div className="row justify-content-center ">
                <div className="space"></div>
                {
                    buscador.isLoading ?
                        <Loading/>
                        :
                        <>
                             
                            <div className="col">
                            <button className="btn btn-danger" type="submit" /*onClick={handleSubmit} */style={{marginTop: '25px',marginLeft:'10px'}}> Promociones</button>
                            <button type="button" className="btn btn-secondary"style={{marginTop: '25px',marginLeft:'5px'}}>Ver Pedidos</button>
                            </div>
                            <div className="col">
                                {buscador.productos.length >= 1 && !buscador.error ?

                                    <div className="">
                                        {buscador.productos[0]?.map((producto, i) => (
                                            <MenuCardBotones key={i} nombre={producto.nombre} imagen={producto.imagen} precio={producto.precio} descripcion={producto.descripcion} />
                                        ))
                                        }
                                        
                                    </div>
                                    
                                    :
                                    null
                                    
                                }
                                <div>
                                    <button className="btn btn-danger" type="submit" onClick={handleClickAgregarPlato} style={{marginTop: '25px'}}><i className="fa fa-plus" aria-hidden="true"></i> Agregar plato al menú</button>
                                            
                                </div>
                                {
                                    buscador.error !== '' && buscador.productos.length === 0 ?
                                        <span className="text-danger"> {buscador.error} </span>
                                        :
                                        null
                                }
                            </div>
                            <div className="col">
                            
                            </div>
                        </>
                }

            </div>
        </div>
    )
}
