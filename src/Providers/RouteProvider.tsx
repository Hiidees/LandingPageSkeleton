import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeProvider from "./PageProvider/HomeProvider";
import React from "react";
import DigitalMarketingProvider from "./PageProvider/DigitalMarketingProvider";
import MicaMachoProvider from "./PageProvider/MicaMachoProvider";
import OtherProjectProvider from "./PageProvider/OtherProjectProvider";
import ContactProvider from "./PageProvider/ContactProvider";
import NotFoundProvider from "./PageProvider/NotFoundProvider";

export default function RouteProvider() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeProvider} />
          <Route
            exact
            path="/digitalmarketing"
            component={DigitalMarketingProvider}
          />
          <Route exact path="/micamacho" component={MicaMachoProvider} />
          <Route exact path="/altriprogetti" component={OtherProjectProvider} />
          <Route exact path="/contatti" component={ContactProvider} />
          <Route path="*" component={NotFoundProvider} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}
