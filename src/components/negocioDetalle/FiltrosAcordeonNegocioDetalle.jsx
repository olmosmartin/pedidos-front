import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filtrarProductoPorTipo } from '../../redux/actions/productoAction';
import { fetchProductosIdNegocio } from '../../redux/actions/productoAction';


export const FiltrosAcordeonNegocioDetalle = (props) => {
    const dispatch = useDispatch();
    const [buttonFilterPress, setButtonFilterPress] = useState(false)

    const handleClickSinTACC = () => {
        dispatch(filtrarProductoPorTipo("sin TACC"))
        setButtonFilterPress(true)
    }

    const handleClickVegana = () => {
        dispatch(filtrarProductoPorTipo("vegana"))
        setButtonFilterPress(true)
    }

    const quitarFiltro = () => {
        dispatch(fetchProductosIdNegocio(props.idNegocio))
        setButtonFilterPress(false)
    }

    return (
        <>
            <div className="accordion accordion-flush col" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Filtros.
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            {!buttonFilterPress&&<button className="btn btn-primary m-2" onClick={handleClickSinTACC}>Sin TACC</button>}
                            {!buttonFilterPress&&<button className="btn btn-primary" onClick={handleClickVegana}>Vegana</button>}
                            {buttonFilterPress&&<button className="btn btn-danger" onClick={quitarFiltro}>Quitar filtro</button>}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Ordenamiento.
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Ordenamientos proximamente...
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
