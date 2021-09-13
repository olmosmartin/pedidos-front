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
            </Switch>
        </Router>
    )
}
