import axios from 'axios';
import { path } from '../constantes';


export const usuarioLogin =async (usuario)=>{
    return await axios.post(`${path}usuarios/login`, usuario);
}

export const getUsuario =async (id)=>{
    return await axios.get(`${path}usuarios/${id}`);
}


export const passwordReset =async (email)=>{
    return await axios({
        method: "POST",
        url: `${path}usuarios/password_reset`,
        data:{email:email},
    })

}

export const passwordChange =async (password, token)=>{
    if (token){
    return await axios({
        method: "POST",
        url: `${path}usuarios/password_change`,
        data:{password:password},
        headers: {
            //'Content-Type': 'application/json',
            "auth-token": token
        }
    })
    } else {
    return await axios({
        method: "POST",
        url: `${path}usuarios/password_change`,
        data:{password:password},
        headers: {
            //'Content-Type': 'application/json',
            "auth-token": sessionStorage.getItem('token')
        }
    })
    }
}