import "../assests/stylesheets/blog/Blog.scss";
import Sidebar from "./sidebar/Sidebar";
import React from "react";
import Switch from "react-bootstrap/Switch";
import { Route, useRouteMatch } from "react-router-dom";
import BlogIndex from "./BlogIndex";
import BradyAndersonTechIndex from "./posts/bradyanderson-tech/BradyAndersonTechIndex";
import BradyAndersonTechCategory from "./posts/bradyanderson-tech/BradyAndersonTech";

/** Routing and skeleton for blog. */
function Blog() {
  const match = useRouteMatch();
  return (
    <>
      <Sidebar />
      <Switch>
        <Route path={`${match.path}/bradyanderson.tech`}>
          <BradyAndersonTechCategory />
        </Route>
        <Route exact path={`${match.path}/`}>
          <BlogIndex />
        </Route>
      </Switch>
    </>
  );
}

export default Blog;
