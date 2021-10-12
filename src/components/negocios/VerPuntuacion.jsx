import { render } from '@testing-library/react'
import React from 'react'
import './verPuntuacion.css'
export const VerPuntuacion = (props) => {

  return (
    (props.puntuacion>=4.0 && props.puntuacion<5.0) &&<p class="colorLightGreen"><i class="fa fa-star" aria-hidden="true"></i> {props.puntuacion}</p>
   /*props.puntuacion>=1.0 && props.puntuacion<2.0 &&<p class="colorRed"><i class="fa fa-star" aria-hidden="true"></i> {props.puntuacion}</p>,
   props.puntuacion>=2.0 && props.puntuacion<3.0 &&<p class="colorOrange"><i class="fa fa-star" aria-hidden="true"></i> {props.puntuacion}</p>,
   props.puntuacion>=3.0 && props.puntuacion<4.0 &&<p class="colorYellow"><i class="fa fa-star" aria-hidden="true"></i> {props.puntuacion}</p>,
    props.puntuacion>=4.0 && props.puntuacion<5.0 &&<p class="colorLigthGreen"><i class="fa fa-star" aria-hidden="true"></i> {props.puntuacion}</p>,
    props.puntuacion==5 &&<p class="colorGreen"><i class="fa fa-star" aria-hidden="true"></i> {props.puntuacion}</p>
   */
  )
}
