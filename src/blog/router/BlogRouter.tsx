import { Route, Switch, useRouteMatch } from "react-router-dom";
import sitemap from "../../about/sitemap";
import getCategoryRoutes from "./getCategoryRoutes";
import BlogIndex from "../BlogIndex";

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
