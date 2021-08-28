import React, { useState, } from 'react'
import { TextoPresentacion } from '../../components/home/TextoPresentacion';
import { useHistory, } from "react-router-dom" // para cambiar de ruta


export const FormHome = () => {
    const history = useHistory()
    const [valueSelect, setValueSelect] = useState(0);

    const handleSubmit = (e) => {
        console.log("submit: "+valueSelect);
        history.push(`/negocios?id=${valueSelect}`);
    }
    
    const handleChange = (e) => {
        setValueSelect(e.target.value);
    }

    return (
        <div className="row justify-content-center">
            <div className="col-6 ">
                <TextoPresentacion />
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <select className="custom-select" style={{flex:"auto"}} id="inputGroupSelect04" onChange={handleChange}>
                            <option defaultValue>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <div className="input-group-append">
                            <button className="btn btn-danger" type="submit">Button</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
