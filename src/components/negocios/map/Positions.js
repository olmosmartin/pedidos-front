import { useSelector } from 'react-redux';


export const Positions = () => {
    const buscador = useSelector((state) => state.negocioReducer)

    const marcadores = buscador.negocio[0]?.map((negocio) => {
        return {
            name: negocio.usuario.nombre,
            direccion: negocio?.direccion?.calle + negocio?.direccion?.numero,
            geometry:[ negocio.direccion?.latitud, negocio.direccion?.longitud ]
        }
    })


    return {
        "places": marcadores
    }
}
