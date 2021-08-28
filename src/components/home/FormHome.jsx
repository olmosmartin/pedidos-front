import React from 'react'
import { TextoPresentacion } from '../../components/home/TextoPresentacion';


export const FormHome = () => {
    return (
            <div className="row justify-content-center">
                <div className="col-6 ">
                    <TextoPresentacion/>

                    <select class="form-select" aria-label="Default select example">
                        <option selected>Selecciona una localidad</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
    )
}
