import axios from 'axios';
import { path } from '../constantes';

export const getCliente =async (id)=>{
    return await axios.get(`${path}clientes/${id}`);
}

export const createCliente =async (cliente)=>{
    return await axios.post(`${path}clientes`, cliente);
}