import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
// import NavBar from "../components/NavBar";

const routes = (
  <div>
    {/* <NavBar /> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default routes;
