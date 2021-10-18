import {
  Redirect,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import BlogIndex from "../BlogIndex";
import getCategoryRoutes from "./routeConstructor";
import blogMap from "../blogMap";
import React from "react";

/** Router for blog. */
function BlogRouter() {
  const { routes } = blogMap;
  const { path: currentPath } = useRouteMatch();
  const categoryRoutes = getCategoryRoutes(routes, currentPath);
  const { pathname } = useLocation();

  return (
    <Switch>
      {/* Remove trailing slashes from urls */}
      <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
      {categoryRoutes.map((CategoryRoute) => CategoryRoute)}
      <Route exact path={currentPath}>
        <BlogIndex title="Blog" routes={routes} />
      </Route>
    </Switch>
  );
}

export default BlogRouter;
