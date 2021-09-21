import axios from 'axios';
import { path } from '../constantes';


export const createRepartidor =async (repartidor)=>{
    return await axios.post(`${path}repartidores`, repartidor);
}