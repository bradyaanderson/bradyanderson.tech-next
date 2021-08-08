import { BlogCategoryRoutes } from "../../../types/Sitemap";
import { join } from "path";
import { Route, Switch } from "react-router-dom";
import getPostRoutes from "./getPostRoutes";

function getCategoryRoutes(routes: BlogCategoryRoutes, currentPath: string) {
  return Object.keys(routes).map((key) => {
    const { routes: childRoutes, Component: CategoryComponent } = routes[key];
    const path = join(currentPath, key);

    const postRoutes = getPostRoutes(childRoutes, path);
    return (
      <Route path={path} key={key}>
        <Switch>
          {postRoutes.map((route) => route)}
          <Route exact path={path}>
            <CategoryComponent />
          </Route>
        </Switch>
      </Route>
    );
  });
}

export default getCategoryRoutes;
