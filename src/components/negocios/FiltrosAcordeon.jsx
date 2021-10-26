import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { ordenarRanking } from '../../redux/actions/negocioAction';


export const FiltrosAcordeon = () => {
    const dispatch = useDispatch();
    const [buttonFilterPress, setButtonFilterPress] = useState(false)

    const handleClickOrdenarRanking = () => {
        dispatch(ordenarRanking())
        setButtonFilterPress(true)
    }

    const quitarFiltro = () => {
        dispatch(ordenarRanking())
        setButtonFilterPress(false)
    }
    return (
        <>
            <div className="accordion accordion-flush col" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Filtrar por:
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Contenido proximamente...
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Ordenar por:
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            {!buttonFilterPress&&<button className="btn btn-primary m-2" onClick={handleClickOrdenarRanking}>Ranking</button>}
                            {buttonFilterPress&&<button className="btn btn-danger" onClick={quitarFiltro}>Quitar orden</button>}
                        </div>
                    </div>
                </div>
                {/*
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Opciones #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
                */}
            </div>
        </>
    )
}
