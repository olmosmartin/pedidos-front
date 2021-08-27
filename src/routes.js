import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';

import { Home } from "./pages/home/Home";


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>  
            </Switch>
        </Router>
    )
}
