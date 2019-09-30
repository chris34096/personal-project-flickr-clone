import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// App components
import Search from "./Search";
import Nav from "./Nav";
import Airplane from "./Airplane";
import Train from "./Train";
import Automobile from "./Automobile";
import NotFound from "./NotFound";

const App = props => (
  <BrowserRouter>
    <div>
      <Nav />
      <div className="photo-container">
        <Switch>
          <Route exact path="/" render={() => <Airplane query="Airplane" />} />
          <Route path="/search" render={() => <Search />} />
          <Route
            path="/Airplane"
            render={() => <Airplane query="Airplane" />}
          />
          <Route path="/Train" render={() => <Train query="Train" />} />
          <Route
            path="/Automobile"
            render={() => <Automobile query="Automobile" />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
