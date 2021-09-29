import axios from 'axios';
import { path } from '../constantes';


export const getNegocios = async ()=>{
    return await axios.get(`${path}negocios`);
}

export const getNegocio = async (id)=>{
    return await axios.get(`${path}negocios/${id}`);
}

export const getNegocioLocalidad = async (localidad)=>{
    return await axios.get(`${path}negocios?ciudad=${localidad}`);
}

export const createNegocio =async (negocio)=>{
    return await axios.post(`${path}negocios`, negocio);
}

export const agregarPlato =async (idNegocio, plato)=>{
    
    return await axios({
        method: "POST",
        url: `https://pedidosya-api.herokuapp.com/negocios/${idNegocio}/productos`,
        data: plato,
        headers: {
            //'Content-Type': 'application/json',
            "auth-token": sessionStorage.getItem('token')
        }
    })
}

export const eliminarPlato =async (idNegocio, idProducto)=>{
    
    return await axios({
        method: "DELETE",
        url: `https://pedidosya-api.herokuapp.com/negocios/${idNegocio}/productos/${idProducto}`,
        
        headers: {
            //'Content-Type': 'application/json',
            "auth-token": sessionStorage.getItem('token')
        }
    })
}

/*
export const actualizarNegocio =async (id, negocio)=>{
    return await axios.put(`${path}/negocios/${id}`, negocio);
}

export const deleteNegocio =async (id)=>{
    return await axios.delete(`${path}/negocios/${id}`);
}
*/