import "../assests/stylesheets/blog/Blog.scss";
import Sidebar from "./sidebar/Sidebar";
import React from "react";
import Switch from "react-bootstrap/Switch";
import { Route, useRouteMatch } from "react-router-dom";
import BlogIndex from "./BlogIndex";
import BradyAndersonTechCategory from "./posts/bradyanderson-tech/BradyAndersonTech";
import RetroComputingCategory from "./posts/retro-computing/RetroComputing";

/** Routing and skeleton for blog. */
function Blog() {
  const match = useRouteMatch();
  return (
    <div className="blog-container">
      <Sidebar />
      <div className="blog-content">
        <Switch>
          <Route path={`${match.path}/bradyanderson.tech`}>
            <BradyAndersonTechCategory />
          </Route>
          <Route path={`${match.path}/retro-computing`}>
            <RetroComputingCategory />
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
