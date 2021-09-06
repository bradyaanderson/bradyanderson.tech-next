import { Route, Switch, useRouteMatch } from "react-router-dom";
import BlogIndex from "../BlogIndex";
import getCategoryRoutes from "./routeConstructor";
import blogMap from "../blogMap";

/** Router for blog. */
function BlogRouter() {
  const { routes } = blogMap;
  const { path: currentPath } = useRouteMatch();
  const categoryRoutes = getCategoryRoutes(routes, currentPath);

  return (
    <Switch>
      {categoryRoutes.map((CategoryRoute) => CategoryRoute)}
      <Route exact path={currentPath}>
        <BlogIndex title="Blog" />
      </Route>
    </Switch>
  );
}

export default BlogRouter;
