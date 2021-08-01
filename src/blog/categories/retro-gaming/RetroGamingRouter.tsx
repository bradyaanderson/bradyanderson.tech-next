import React from "react";
import Switch from "react-bootstrap/Switch";
import { Route, useRouteMatch } from "react-router-dom";
import RetroGamingIndex from "./RetroGamingIndex";
import ReplacingGameBoyColorSpeakerPost from "./posts/ReplacingGameBoyColorSpeakerPost";

/** Routing for Retro Gaming blog category. */
function RetroComputingRouter() {
  const match = useRouteMatch();
  return (
    <Switch className="blog-category-switch">
      <Route path={`${match.path}/replacing-game-boy-color-speaker/`}>
        <ReplacingGameBoyColorSpeakerPost />
      </Route>
      <Route exact path={`${match.path}/`}>
        <RetroGamingIndex />
      </Route>
    </Switch>
  );
}

export default RetroComputingRouter;
