import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';

import { Home } from "./pages/home/Home";
import { NegocioScreen } from "./pages/negocios/NegocioScreen"
import { NegocioDetalle } from "./pages/negocioDetalle/NegocioDetalle";
import { NegocioRegistro } from "./pages/negocioRegistro/NegocioRegistro"
import { platoIngreso } from "./pages/platoIngreso/platoIngreso";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/negocios" component={NegocioScreen}/>
                <Route exact path="/negocio" component={NegocioDetalle}/>
                <Route exact path="/negocioRegistro" component={NegocioRegistro}/>
                <Route exact path="/platoIngreso" component={platoIngreso}/>
            </Switch>
        </Router>
    )
}
