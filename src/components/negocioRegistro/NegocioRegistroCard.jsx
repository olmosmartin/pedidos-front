import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../static/img/pediloya.png';
export const NegocioRegistroCard = () => {

    return (
        <div>
            <div className="card" style={{ width: "30rem", textAlign: "center" }}>
                <div className="card-body" >
                    <div className="container-fluid">
                        <Link  to="/"> <img src={logo} alt="logo" /> </Link>
                    </div>
                    <h5 className="card-title" >Registro de tu local</h5>
                    <form>
                       
                        <div className="form-group">
                            <label htmlFor="InputLocal">Nombre del local</label>
                            <input
                                
                                className="form-control"
                                id="InputLocal1"
                                placeholder="Ingrese el nombre del local"
                            />
                
                        </div>
                           
                        <div className="form-group">
                            <label htmlFor="InputEmail">Correo electrónico</label>
                            <input className="form-control"
                                id="InputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Ingrese la dirección de email de su local"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputTel">Teléfono</label>
                            <input className="form-control"
                                id="InputTel"
                                aria-describedby="Tel"
                                placeholder="Ingrese el número de teléfono de su local"
                            />
                        </div>
                        <div> </div>
                        <button type="submit" className="btn btn-danger">Comenzar</button>
                    </form> 
                </div>
            </div>
        </div>
    )
}