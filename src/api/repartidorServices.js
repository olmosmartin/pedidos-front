import axios from 'axios';
import { path } from '../constantes';


export const getRepartidor = async (id)=>{
    return await axios.get(`${path}repartidores/${id}`);
}

export const createRepartidor =async (repartidor)=>{
    return await axios.post(`${path}repartidores`, repartidor);
}