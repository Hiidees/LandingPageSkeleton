import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeProvider from "./PageProvider/HomeProvider";

export default function RouteProvider() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeProvider} />
      </Switch>
    </BrowserRouter>
  );
}
