
import React from 'react'




export const FechaHora= (e) => {
    const date = new Date(e.fecha);
    
    //date=e.fecha
    const fecha = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()
    const hora = date.getHours()+':'+date.getMinutes()
    /*var date = e.fecha;
    var fecha = date.substring(0, 10);
    var hora = date.substring(16, 11);*/
    return (
        <>{hora} -- {fecha}

        </>
    )
}