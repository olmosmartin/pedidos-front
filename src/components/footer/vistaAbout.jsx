import React from 'react'
import { PreguntasFrecuentes } from './preguntasFrecuentes'
export const VistaAbout = () => {
    return (
        <>
            <div class="accordion accordion-flush" id="accordionFlushExample" style={{ marginTop: '80px', marginLeft: '25px', marginRigth: '25px' }}>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            ¿Quienes Somos?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <p> Somos una empresa de tecnologia destinada al Q-Commerce y delivery. Pedilo Ya es una aplicación web pensada para que los clientes que necesiten pedir comida desde sus hogares  puedan lograrlo de una forma facil y rapida, nuestra aplicación se encarga de conectar a personas con restaurantes de su zona para que puedan dar un vistazo a su menú y terminar eligiendo el platillo de su preferencia. Por otra parte la aplicación tambien se encarga de conectar el pedido con un repartidor que se encargara del delivery desde el restaurant hasta el domiciolio de la persona que realizo el pedido.</p>
                            <h5>Contacto</h5>
                            <p>Email: <a style={{ color: '#000' }} href=''>contacto@pediloya.com</a></p>
                            <p>Teléfono: 1123443255</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Equipo
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <li> Baez, Pablo Ezequiel </li>
                            <li> Gargiulo, Sandra Marcela </li>
                            <li> Lucero, Jose Maximiliano </li>
                            <li> Olmos, Martin </li>
                            <li> Trezza, Nicolás Nahuel </li>
                            <li> Yone, Juan Ignacio </li>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Preguntas Frecuentes
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                                
                                  <PreguntasFrecuentes/>  
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}