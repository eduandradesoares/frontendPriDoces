import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "../components/menu/menu";


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/home" component={Menu}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;