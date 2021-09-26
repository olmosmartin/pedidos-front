import React, { useState, useEffect} from 'react'
import { useHistory, } from "react-router-dom" // para cambiar de ruta
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getNominatimReverse } from '../../api/nominatim';


export const FormRepartidor = () => {
    const [position, setPosition] = useState({ longitud:0, latitud:0 })
    const [errorPosition, setErrorPosition] = useState(true)
    const history = useHistory()
    const [valueSelect, setValueSelect] = useState({title: 'Ver todos', codigo: 0});
    const [inputValue, setInputValue] = React.useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function(position){
                setPosition({
                    longitud: position.coords.longitude,
                    latitud: position.coords.latitude
                })
                setErrorPosition(false)
            },
            function (error){
                setErrorPosition(true)
            },
            { enableHighAccuracy:true }
        )
        
    }, [])

    const handleSubmit = (e) => {
        history.push(`/negocios?ciudad=${valueSelect.title}`);
    }

    const traerDireccion = async() => {
        const direccionjson = await getNominatimReverse(position.latitud, position.longitud)
        var ciudad = ""
        JSON.stringify(direccionjson.data.address.town)?ciudad=JSON.stringify(direccionjson.data.address.town):ciudad=JSON.stringify(direccionjson.data.address.city)
        return ciudad
    }

    const handleSubmitAutodetect = async(e) => {
        e.preventDefault()
        var ciudad = await traerDireccion()
        
        history.push(`/negocios?ciudad=${ciudad.split('"').join('')}`);
    }

    const handleChange = (newValue) => {
        setValueSelect(newValue);
    }

    const localidades = [
        { title: 'Remedios de Escalada', codigo: 1 },
        { title: 'Lanús Este', codigo: 2 },
        { title: 'Lanús Oeste', codigo: 3 },
    ]

    return (
        <div className="row justify-content-center">
            <div className="col-6 ">
                {/*
                <form onSubmit={handleSubmit}>
                    <div className="input-group" style={{flexDirection: "row", alignItems: "center", }}>
                    <Autocomplete
                        value={valueSelect}
                        id="combo-box-demo"
                        options={localidades}
                        getOptionLabel={(option) => option.title}
                        style={{ width: 300 }}
                        onChange={(e, newValue) => handleChange(newValue)}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                          }}
                        inputValue={inputValue}
                        renderInput={(params) => <TextField {...params} label="Selecciona una ciudad" style={{ backgroundColor: "white" }} />}
                    />
                    <div className="input-group-append">
                            <button className="btn btn-danger m-2 p-2" style={{borderRadius:30, height:50}} type="submit">Buscar</button>
                    </div>
                    </div>
                </form>
                */}
                <form onSubmit={handleSubmitAutodetect}>
                <div className="input-group-append">
                    {errorPosition?<p className="text-white">O habilita la ubicación para buscar por tu ciudad</p>:<button className="btn btn-danger m-2 p-2" style={{borderRadius:30}} type="submit">Buscar en mi ubicación</button>}     
                </div>
                </form>
            </div>
        </div>
    )
}
