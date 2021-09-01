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
                            <label htmlFor="exampleInputEmail1">Correo electrónico</label>
                            <input className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Ingrese su email"
                            />
                        </div>
                        <button type="submit" className="btn btn-danger">Comenzar</button>
                    </form> 
                </div>
            </div>
        </div>
    )
}