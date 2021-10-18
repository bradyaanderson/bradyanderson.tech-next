import React from "react";
import IndexRouter from "./IndexRouter";
import { Route, Switch } from "react-router-dom";

/** Root Content **/
function App() {
  return (
    <>
      <Switch>
        <Route path="*">
          <IndexRouter />
        </Route>
      </Switch>
    </>
  );
}

export default App;
