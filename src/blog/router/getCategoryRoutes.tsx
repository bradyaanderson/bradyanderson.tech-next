import { BlogCategoryRoutes } from "../../../types/Sitemap";
import { join } from "path";
import { Route, Switch } from "react-router-dom";
import getPostRoutes from "./getPostRoutes";

/**
 * Creates routing for blog categories.
 *
 * @param routes The BlogCategoryRoutes to use when constructing routes.
 * @param baseRoute The base route to use when constructing paths. Example: If "bradyanderson.tech/blog" is the
 * base path, then a route path for "test" category will be "bradyanderson.tech/test".
 */
function getCategoryRoutes(routes: BlogCategoryRoutes, baseRoute: string) {
  return Object.keys(routes).map((key) => {
    const { routes: childRoutes, Component: CategoryComponent } = routes[key];
    const path = join(baseRoute, key);

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
