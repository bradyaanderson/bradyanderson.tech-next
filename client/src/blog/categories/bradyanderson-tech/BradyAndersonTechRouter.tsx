import React from "react";
import Switch from "react-bootstrap/Switch";
import { Route, useRouteMatch } from "react-router-dom";
import BradyAndersonTechIndex from "./BradyAndersonTechIndex";
import GettingStartedPost from "./posts/GettingStartedPost";
import CustomHoverDomainForHerokuApp from "./posts/CustomHoverDomainForHerokuAppPost";

/** Routing for bradyanderson.tech blog category. */
function BradyAndersonTechRouter() {
  const match = useRouteMatch();
  return (
    <Switch className="blog-category-switch">
      <Route path={`${match.path}/getting-started/`}>
        <GettingStartedPost />
      </Route>
      <Route path={`${match.path}/custom-hover-domain-for-heroku-app/`}>
        <CustomHoverDomainForHerokuApp />
      </Route>
      <Route exact path={`${match.path}/`}>
        <BradyAndersonTechIndex />
      </Route>
    </Switch>
  );
}

export default BradyAndersonTechRouter;
