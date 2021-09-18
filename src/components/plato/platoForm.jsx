import React, { useState, useEffect} from 'react'
import { TextoPresentacion } from '../../components/home/TextoPresentacion';
import { useHistory, } from "react-router-dom" // para cambiar de ruta


export const PlatoForm = () => {

    /*
    const handleChangeNombre = (e) => {
        console.log(e.target.value)
    }

    const handleChangeDescripcion = (e) => {
        console.log(e.target.value)
    }

    const handleChangePrecio = (e) => {
        console.log(e.target.value)
    }

    const handleFileChosen = (file) => {
        console.log(file)
    }
    */

    return (
        
        <body>
            
            <div className="card" style={{ width: "50%",left: "25%", textAlign: "center" }}>
                <div className="card-body" >
                    <h5 className="card-title" >Ingrese su plato</h5>
                    <form /*onSubmit={(e) => handleSubmit(e)}*/>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                id="floatingInput1"
                                placeholder="Ingrese el nombre del plato"
                                //onChange={handleChangeNombre}
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
                                //onChange={handleChangeDescripcion}
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
                                //onChange={handleChangePrecio}
                                required
                            />
                            <label htmlFor="floatingInput3">Precio</label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Seleccionar imagen</label>
                            <input className="form-control" type="file" name="imagen" id="formFile" /*onChange={e => handleFileChosen(e.target.files[0])}*/ />
                        </div>


                        <button type="submit" className="btn btn-danger">Guardar</button>
                    </form>
                </div>
            </div>
       
        
        </body>
    )
}

