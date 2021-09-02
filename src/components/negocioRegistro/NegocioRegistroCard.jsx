import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import logo from '../../static/img/pediloya.png';
import FormData from 'form-data';
//import { createNegocio } from '../../api/negocioServices'


export const NegocioRegistroCard = () => {

    var bodyFormData = new FormData();

    function handleChangeNombre(evt) {
        console.log("nombre:" + evt.target.value)
        bodyFormData.append('nombre', evt.target.value);
    }
    function handleChangeEmail(evt) {
        console.log("email:" + evt.target.value)
        bodyFormData.append('email', evt.target.value);
    }
    function handleChangeTelefono(evt) {
        console.log("telefono:" + evt.target.value)
        bodyFormData.append('telefono', evt.target.value);
    }
    function handleFileChosen(file) {

        bodyFormData.append('file', file);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("SUBMIT: " + bodyFormData);
        axios({
            method: "POST",
            url: "https://pedidosya-api.herokuapp.com/negocios/",
            data: bodyFormData
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }

    return (
        <div>
            <div className="card" style={{ width: "30rem", textAlign: "center" }}>
                <div className="card-body" >
                    <div className="container-fluid">
                        <Link to="/"> <img src={logo} alt="logo" /> </Link>
                    </div>
                    <h5 className="card-title" >Registro de tu local</h5>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="InputLocal">Nombre del local</label>
                            <input
                                name="nombre"
                                className="form-control"
                                id="InputLocal1"
                                placeholder="Ingrese el nombre del local"
                                onChange={handleChangeNombre}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputEmail">Correo electrónico</label>
                            <input className="form-control"
                                name="email"
                                id="InputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Ingrese la dirección de email de su local"
                                onChange={handleChangeEmail}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputTel">Teléfono</label>
                            <input className="form-control"
                                name="telefono"
                                id="InputTel"
                                aria-describedby="Tel"
                                placeholder="Ingrese el número de teléfono de su local"
                                onChange={handleChangeTelefono}
                            />

                        </div>
                        <div className="form-group">
                            <input type="file" name="imagen" onChange={e => handleFileChosen(e.target.files[0])} />
                        </div>
                        <button type="submit" className="btn btn-danger">Comenzar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}