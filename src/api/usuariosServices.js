import axios from 'axios';
import { path } from '../constantes';


export const usuarioLogin =async (usuario)=>{
    return await axios.post(`${path}usuarios/login`, usuario);
}