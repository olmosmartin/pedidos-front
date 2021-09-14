import axios from 'axios';
import { path } from '../constantes';


export const createCliente =async (cliente)=>{
    return await axios.post(`${path}clientes`, cliente);
}