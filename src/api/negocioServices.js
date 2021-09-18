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

export const agregarPlato =async (id, plato)=>{
    return await axios.post(`${path}negocios/${id}/productos`, plato);
}

/*
export const actualizarNegocio =async (id, negocio)=>{
    return await axios.put(`${path}/negocios/${id}`, negocio);
}

export const deleteNegocio =async (id)=>{
    return await axios.delete(`${path}/negocios/${id}`);
}
*/