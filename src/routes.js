import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';

import { Home } from "./pages/home/Home";
import { NegocioScreen } from "./pages/negocios/NegocioScreen"
import { NegocioDetalle } from "./pages/negocioDetalle/NegocioDetalle";


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/negocios" component={NegocioScreen}/>
                <Route exact path="/negocio" component={NegocioDetalle}/>
            </Switch>
        </Router>
    )
}
