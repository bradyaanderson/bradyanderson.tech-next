import React from "react";
import Switch from "react-bootstrap/Switch";
import { Route, useRouteMatch } from "react-router-dom";
import BradyAndersonTechIndex from "./BradyAndersonTechIndex";
import GettingStartedPost from "./posts/Getting-Started";

/** Routing for bradyanderson.tech blog category. */
function BradyAndersonTechCategory() {
  const match = useRouteMatch();
  return (
    <>
      <Switch className="blog-category-switch">
        <Route path={`${match.path}/getting-started/`}>
          <GettingStartedPost />
        </Route>
        <Route exact path={`${match.path}/`}>
          <BradyAndersonTechIndex />
        </Route>
      </Switch>
    </>
  );
}

export default BradyAndersonTechCategory;
