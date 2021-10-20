import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';

import { Home } from "./pages/home/Home";
import { NegocioScreen } from "./pages/negocios/NegocioScreen"
import { NegocioDetalle } from "./pages/negocioDetalle/NegocioDetalle";
import { NegocioRegistro } from "./pages/negocioRegistro/NegocioRegistro"
import { platoIngreso } from "./pages/platoIngreso/platoIngreso";
import { NegocioVista } from "./pages/negocioVista/negocioVista";
import { IniciarSesion } from "./pages/iniciarSesion/IniciarSesion";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClienteRegistro } from "./pages/clienteRegistro/clienteRegistro";
import { RepartidorRegistro } from "./pages/repartidorRegistro/repartidorRegistro";
import { HistorialPedidosScreen } from "./pages/historialPedidos/HistorialPedidosScreen"
import { RepartidorVista } from "./pages/repartidorVista/RepartidorVista";
import { PedidoDetalleRepartidorCard } from "./components/repartidorVista/pedidoRepartidorDetalle/PedidoDetalleRepartidorCard";
import { ModificarPlato } from "./components/plato/modificarPlato/ModificarPlato";
import { RepartidorHistorialPedidosScreen } from "./pages/repartidorHistorialPedidos/RepartidorHistorialScreen";
import { PaswordResetScreen } from "./pages/passwordReset/PaswordResetScreen";
import { RecuperarContraseñaScreen } from "./pages/recuperarContraseña/RecuperarContraseñaScreen";


export default function Routes() {
    return (
        <Router>
            <ToastContainer/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/negocios" component={NegocioScreen}/>
                <Route exact path="/negocio" component={NegocioDetalle}/>
                <Route exact path="/negocioRegistro" component={NegocioRegistro}/>
                <Route exact path="/platoIngreso" component={platoIngreso}/>
                <Route exact path="/negocioVista" component={NegocioVista}/>
                <Route exact path="/iniciarSesion" component={IniciarSesion}/>
                <Route exact path="/clienteRegistro" component={ClienteRegistro}/>
                <Route exact path="/repartidorRegistro" component={RepartidorRegistro}/>
                <Route exact path="/pedidosRealizados" component={HistorialPedidosScreen}/>
                <Route exact path="/repartidorVista" component={RepartidorVista}/>
                <Route exact path="/pedidoDetalleRepartidor" component={PedidoDetalleRepartidorCard}/>
                <Route exact path="/modificarPlato" component={ModificarPlato}/>
                <Route exact path="/repartidorHistorial" component={RepartidorHistorialPedidosScreen}/>
                <Route exact path="/passwordReset" component={PaswordResetScreen}/>
                <Route exact path="/recuperarContraseña" component={RecuperarContraseñaScreen}/>
            </Switch>
        </Router>
    )
}
