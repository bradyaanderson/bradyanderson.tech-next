import "../assests/stylesheets/blog/Blog.scss";
import Sidebar from "./sidebar/Sidebar";
import React from "react";
import Switch from "react-bootstrap/Switch";
import { Route, useRouteMatch } from "react-router-dom";
import BlogIndex from "./BlogIndex";
import BradyAndersonTechIndex from "./posts/bradyanderson-tech/BradyAndersonTechIndex";

/** Blog landing page */
function Blog() {
  const match = useRouteMatch();
  return (
    <>
      <Sidebar />
      <Switch>
        <Route exact path={`${match.path}/bradyanderson.tech`}>
          <BradyAndersonTechIndex />
        </Route>
        <Route exact path={`${match.path}/`}>
          <BlogIndex />
        </Route>
      </Switch>
    </>
  );
}

export default Blog;
