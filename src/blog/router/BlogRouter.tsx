import { Route, Switch, useRouteMatch } from "react-router-dom";
import sitemap from "../../sitemap/sitemap";
import getCategoryRoutes from "./getCategoryRoutes";
import BlogIndex from "../BlogIndex";

/** Router for blog. */
function BlogRouter() {
  const { routes } = sitemap.index.routes.blog;
  const { path: currentPath } = useRouteMatch();
  const categoryRoutes = getCategoryRoutes(routes, currentPath);

  return (
    <Switch>
      {categoryRoutes.map((categoryRoute) => categoryRoute)}
      <Route exact path={currentPath}>
        <BlogIndex />
      </Route>
    </Switch>
  );
}

export default BlogRouter;
