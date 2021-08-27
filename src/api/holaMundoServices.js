import axios from 'axios';
import { path } from '../constantes';


export const holaMundo = async ()=>{
    return await axios.get(`${path}holamundo`);
}

export const otro = async ()=>{
    return await axios.get(`${path}otro`);
}