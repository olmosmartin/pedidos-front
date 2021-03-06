import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';

import { getNegocio } from '../../api/negocioServices'
import { VerPuntuacion } from '../negocios/VerPuntuacion';
import { MapVista } from './map/MapVista';
import { PedidosCard } from './pedidosCard';
import { setNegocioSelected } from '../../redux/actions/negocioAction';
import { Loading } from '../loading/Loading';


export const NegocioPerfilCard = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.negocioReducer.isLoading);

    const {search} = useLocation();
    const query = new URLSearchParams(search);
    const idNegocio = query.get("id"); 
    const [negocio, setNegocio] = useState();

    const cargar = async (id)=>{
        const res = await getNegocio(id);
        setNegocio(res.data)
    }

    useEffect(() => {
        dispatch(setNegocioSelected(idNegocio));
        cargar(idNegocio)
    }, [idNegocio, dispatch])

    return (
    loading? <Loading/>:<>
        <div className="card text-center mb-3" style={{ marginTop:'80px',marginLeft:'25%',marginRigth:'25%',width: "30rem",  }}>
        
        
            <div className="card-body" >
                <h3 className="card-title-top" style={{textDecorationLine: "underline"}}>{ negocio?.usuario?.nombre }</h3>    
                <div className="row" >
                    <div className="col" >
                        <img src={negocio?.imagen} className="img-fluid" alt="..." width="150px"/>
                    </div>
                    <div className="col" >
                        <p className="card-text ">Telefono: { negocio?.usuario?.telefono }</p>
                        <p className="card-text">Email: { negocio?.usuario?.email }</p>
                        <p className="card-text">Puntuacion: <VerPuntuacion puntuacion={negocio?.puntuacionTotal/negocio?.puntuacionCount}/></p>
                    </div>
                    
                    
                </div>
                {loading? <Loading/>:<MapVista/>}
                <PedidosCard/>
            </div>
        </div> 
       
            
     </>
    )
}
