import { useSelector } from 'react-redux';


export const Positions = () => {
    const negocioSelected = useSelector(state => state.negocioReducer.negocioSelected);

    const marcadores = {
            name: negocioSelected?.usuario?.nombre,
            direccion: negocioSelected?.direccion?.calle + negocioSelected?.direccion?.numero,
            geometry:[ negocioSelected.direccion?.latitud, negocioSelected.direccion?.longitud ]
    }


    return {
        "places": marcadores
    }
}
