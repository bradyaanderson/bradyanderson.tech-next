import "../assests/stylesheets/blog/Blog.scss";
import Sidebar from "./sidebar/Sidebar";
import React from "react";
import Switch from "react-bootstrap/Switch";
import { Route, useRouteMatch } from "react-router-dom";
import BlogIndex from "./BlogIndex";
import BradyAndersonTechRouter from "./categories/bradyanderson-tech/BradyAndersonTechRouter";
import RetroComputingRouter from "./categories/retro-computing/RetroComputingRouter";
import RetroGamingRouter from "./categories/retro-gaming/RetroGamingRouter";

/** Routing and skeleton for blog. */
function Blog() {
  const match = useRouteMatch();
  return (
    <div className="blog-container">
      <Sidebar />
      <div className="blog-content">
        <Switch>
          <Route path={`${match.path}/bradyanderson.tech`}>
            <BradyAndersonTechRouter />
          </Route>
          <Route path={`${match.path}/retro-computing`}>
            <RetroComputingRouter />
          </Route>
          <Route path={`${match.path}/retro-gaming`}>
            <RetroGamingRouter />
          </Route>
          <Route exact path={`${match.path}/`}>
            <BlogIndex />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Blog;
