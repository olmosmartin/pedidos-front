import { useSelector } from 'react-redux';


export const Positions = () => {
    const pedidoREDUX = useSelector((state) => state.pedidoReducer)

    let retornoMarcadores=[]

    retornoMarcadores=[...retornoMarcadores, {
        name: `Cliente: ${pedidoREDUX.pedidoSelected?.cliente?.direccion?.calle} ${pedidoREDUX.pedidoSelected?.cliente?.direccion?.numero}`,
        geometry: [
            pedidoREDUX.pedidoSelected?.cliente?.direccion?.latitud,
            pedidoREDUX.pedidoSelected?.cliente?.direccion?.longitud
        ]
    }]

    retornoMarcadores=[...retornoMarcadores, {
        name: `Negocio: ${pedidoREDUX.pedidoSelected?.negocio?.direccion?.calle} ${pedidoREDUX.pedidoSelected?.negocio?.direccion?.numero}`,
        geometry: [
            pedidoREDUX.pedidoSelected?.negocio?.direccion?.latitud,
            pedidoREDUX.pedidoSelected?.negocio?.direccion?.longitud
        ]
    }]

    return {
        "places": retornoMarcadores
    }
}
