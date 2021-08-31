import axios from 'axios';
import { path } from '../constantes';


export const getNegocios = async ()=>{
    return await axios.get(`${path}negocios`);
}
