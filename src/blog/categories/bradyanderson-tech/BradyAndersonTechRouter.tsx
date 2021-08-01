import React from "react";
import Switch from "react-bootstrap/Switch";
import { Route, useRouteMatch } from "react-router-dom";
import BradyAndersonTechIndex from "./BradyAndersonTechIndex";
import GettingStartedPost from "./posts/GettingStartedPost";
import CustomHoverDomainForHerokuApp from "./posts/CustomHoverDomainForHerokuAppPost";
import MovingToAwsPost from "./posts/MovingToAwsPost";

/** Routing for bradyanderson.tech blog category. */
function BradyAndersonTechRouter() {
  const { path } = useRouteMatch();
  return (
    <Switch className="blog-category-switch">
      <Route path={`${path}/getting-started/`}>
        <GettingStartedPost />
      </Route>
      <Route path={`${path}/custom-hover-domain-for-heroku-app/`}>
        <CustomHoverDomainForHerokuApp />
      </Route>
      <Route path={`${path}/moving-to-aws/`}>
        <MovingToAwsPost />
      </Route>
      <Route exact path={`${path}/`}>
        <BradyAndersonTechIndex />
      </Route>
    </Switch>
  );
}

export default BradyAndersonTechRouter;
