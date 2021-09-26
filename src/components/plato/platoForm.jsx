import React, { useState } from 'react'
import { useLocation } from "react-router-dom"
import FormData from 'form-data';
import { toast } from 'react-toastify';
//import axios from 'axios';
import { agregarPlato } from '../../api/negocioServices';
import { Loading } from '../loading/Loading';


export const PlatoForm = () => {
    var bodyFormData = new FormData();

    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const idNegocio = query.get("id");

    const [nombre, setNombre] = useState(" ")
    const [descripcion, setDescripcion] = useState(" ")
    const [precio, setPrecio] = useState(" ")
    const [archivo, setArchivo] = useState(" ")
    const [isLoading, setIsLoading] = useState(false)

    const handleChangeNombre = (e) => {
        setNombre(e.target.value)
    }
    const handleChangeDescripcion = (e) => {
        setDescripcion(e.target.value)

    }
    const handleChangePrecio = (e) => {
        setPrecio(e.target.value)
    }
    const handleFileChosen = (file) => {
        setArchivo(file)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        bodyFormData.append('nombre', nombre)
        bodyFormData.append('descripcion', descripcion)
        bodyFormData.append('precio', precio)
        bodyFormData.append('file', archivo)

        for (var value of bodyFormData.values()) {
            console.log("BODYFORMDATA: " + value)
        }

        setIsLoading(true)
        agregarPlato(idNegocio, bodyFormData)
            .then(function (response) {
            //handle success
            console.log(JSON.stringify(response))
            toast.success("plato creado")
            console.log(response);
        }).catch(function (response) {
            //handle error
            toast.error("Problemas en la creacion")
            console.log(response);
        }).finally(
            setIsLoading(false)
        )
        //history.push(`/negocioVista?id=${idNegocio}`);
    }

    return (
        isLoading?<Loading/>:
            <div className="card" style={{ width: "50%", left: "25%", textAlign: "center" }}>
                <div className="card-body" >
                    <h5 className="card-title" >Ingrese su plato</h5>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                id="floatingInput1"
                                placeholder="Ingrese el nombre del plato"
                                onChange={handleChangeNombre}
                                required
                            />
                            <label htmlFor="floatingInput1">Ingrese nombre del plato</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control"
                                type="text"
                                name="descripcion"
                                id="floatingInput2"
                                aria-describedby="descripcion"
                                placeholder="Ingrese la descripción de su plato"
                                onChange={handleChangeDescripcion}
                                required
                            />
                            <label htmlFor="floatingInput2">Descripción</label>
                        </div>
                        <div className="form-floating mb-3">

                            <input className="form-control"
                                type="text"
                                name="precio"
                                id="floatingInput3"
                                aria-describedby="precio"
                                placeholder="Ingrese el precio de su plato"
                                onChange={handleChangePrecio}
                                required
                            />
                            <label htmlFor="floatingInput3">Precio</label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Seleccionar imagen</label>
                            <input className="form-control" type="file" name="imagen" id="formFile" onChange={e => handleFileChosen(e.target.files[0])} />
                        </div>

                        <button type="submit" className="btn btn-danger">Guardar</button>
                    </form>
                </div>
            </div>

    )
}

