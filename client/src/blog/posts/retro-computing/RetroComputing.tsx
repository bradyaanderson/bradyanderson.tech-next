import React from "react";
import Switch from "react-bootstrap/Switch";
import { Route, useRouteMatch } from "react-router-dom";
import RetroComputingIndex from "./RetroComputingIndex";
import OpeningAMacSE30Post from "./posts/OpeningAMacSE30Post";

/** Routing for Retro Computing blog category. */
function BradyAndersonTechCategory() {
  const match = useRouteMatch();
  return (
    <Switch className="blog-category-switch">
      <Route path={`${match.path}/opening-a-mac-se30/`}>
        <OpeningAMacSE30Post />
      </Route>
      <Route exact path={`${match.path}/`}>
        <RetroComputingIndex />
      </Route>
    </Switch>
  );
}

export default BradyAndersonTechCategory;
