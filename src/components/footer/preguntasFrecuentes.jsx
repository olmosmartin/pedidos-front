import React from 'react'
export const PreguntasFrecuentes = () => {
    return (
        <>
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        ¿Que es Pedilo ya?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            Pedilo Ya es una aplicación web pensada para que los clientes que necesiten pedir comida desde sus hogares  puedan lograrlo de una forma facil y rapida, nuestra aplicación se encarga de conectar a personas con restaurantes de su zona para que puedan dar un vistazo a su menú y terminar eligiendo el platillo de su preferencia. Por otra parte la aplicación tambien se encarga de conectar el pedido con un repartidor que se encargara del delivery desde el restaurant hasta el domiciolio de la persona que realizo el pedido.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            ¿Como funcionamos?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body">
                            Ingresas seleccionas tu localidad desde la lista desplegable y haces click en el boton 'buscar' o en el boton "Bucar en mi ubicacion", estas busquedas nos llevara a una vista de los negocios de tu zona en los cuales puedes clikear para ver sus menus, a su vez en caso de ser de su preferencia puede realizar una busqueda ordenando por la calificación del negocio; una vez seleccionado el resturant se puede filtrar las comidas del menú utilizando los filtros 'Sin TACC' y 'Vegana'. 
                            Cuando decidimos cual va a ser nuestra eleccion podemos dar click en 'Añadir al carrito' a las comida que queramos permirtiendonos agregar mas cantidades del mismo producto y realizaremos el pedido seleccionando 'Finalizar pedido' esto nos permitira confirmar e ingresar el medio de pago, completaremos el pedido dando click al boton 'Confirmar'.Luego nos quedara esperar el pedido podiendo consultar su estado desde la misma web principal.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            ¿Cuales son los medios de pago?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            Pedilos Ya contempla 3 posibles medios de pago, los mismos son:
                            <li>Efectivo</li>
                            <li>Tarjeta de crédito</li>
                            <li>Tarjeta de débito</li>
                            
                             </div>
                    </div>
                </div>
            </div>
        </>
    )
}