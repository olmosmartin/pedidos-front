import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

import { Loading } from '../loading/Loading'
import { FechaHora } from '../negocioPedidos/fechaHora';
import { Puntuar } from './Puntuar';


export const PedidoRow = (props) => {
    const negocios = useSelector((state) => state.negocioReducer)
    let nombre=""
    
    const [isLoading, setIsLoading] = useState(false)
    const [toglePuntuar, setToglePuntuar] = useState(false)

    const handleClickPuntuar = () => {
        toglePuntuar? setToglePuntuar(false): setToglePuntuar(true)
    }

    useEffect(() => {
        
    }, [toglePuntuar])

    negocios.negocio[0]?.map((negocio, i) => (
        //console.log(negocio.usuario.nombre + negocio._id)
        negocio._id === props.negocioId? nombre=negocio.usuario.nombre:null
    ))

    return (
        isLoading ? <Loading /> :
            <div className="cardPedido col mt-4" style={props.estado === 'FINALIZADO' ? { backgroundColor: 'rgb(160, 226, 160)' } : null} >
                
                {props.productos.length >= 1 ?
                    
                    <div className="card-body">
                        <h5 className="card-title">{props.estado} -- {props.fecha &&<FechaHora fecha= {props.fecha}/>}</h5>
                        {nombre}
                        {props.productos?.map((productosArray) => (
                            <div className="row g-1" style={{ borderStyle: 'solid', borderWidth: 'thin', margin: 3 }} >
                                <div className="col-6">
                                    <p className="card-text">{productosArray.producto.nombre}</p>
                                </div>
                                <div className="col-6">
                                    <p className="card-text"> X {productosArray.cantidad}</p>
                                </div>
                            </div>))
                        }
                        <div className="card-body justify-content-center">
                        </div>
                        {!props.puntuacion&&
                        <>
                        {toglePuntuar?<button className="btn btn-danger" onClick={handleClickPuntuar}>Cerrar</button>:<button className="btn btn-success" onClick={handleClickPuntuar}>Puntuar</button>}
                        </>
                        }
                        {toglePuntuar&&<Puntuar idPedido={props.id}/>}
                    </div> :
                    null}

            </div>
    )
}
