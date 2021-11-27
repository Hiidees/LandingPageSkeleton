import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeProvider from "./PageProvider/HomeProvider";
import React from "react";
import ParticlesComponent from "../utils/ParticlesComponent";

export default function RouteProvider() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ParticlesComponent />
        <Switch>
          <Route exact path="/" component={HomeProvider} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}
