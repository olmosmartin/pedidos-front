import axios from 'axios';
import { path } from '../constantes';


export const usuarioLogin =async (usuario)=>{
    return await axios.post(`${path}usuarios/login`, usuario);
}

export const getUsuario =async (id)=>{
    return await axios.get(`${path}usuarios/${id}`);
}