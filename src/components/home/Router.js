import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../../App";
import Recipe from "./Recipe";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/simple_meal_finder/" component={App}  exact/>
      <Route path="/simple_meal_finder/recipe/:id" component={Recipe} />
    </Switch>
  </BrowserRouter>
);

export default Router;