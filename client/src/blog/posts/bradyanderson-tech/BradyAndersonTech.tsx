import React from "react";
import Switch from "react-bootstrap/Switch";
import { Route, useRouteMatch } from "react-router-dom";
import BradyAndersonTechIndex from "./BradyAndersonTechIndex";
import TestPage from "./posts/Test";

/** Routing for bradyanderson.tech blog category. */
function BradyAndersonTechCategory() {
  const match = useRouteMatch();
  return (
    <>
      <Switch className="blog-category-switch">
        <Route path={`${match.path}/test/`}>
          <TestPage />
        </Route>
        <Route exact path={`${match.path}/`}>
          <BradyAndersonTechIndex />
        </Route>
      </Switch>
    </>
  );
}

export default BradyAndersonTechCategory;
