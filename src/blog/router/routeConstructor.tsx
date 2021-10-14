import { BlogCategoryRoutes, BlogPostRoutes } from "../../../types/Sitemap";
import { join } from "path";
import { Route, Switch } from "react-router-dom";

/**
 * Creates routing for blog categories.
 *
 * @param routes The BlogCategoryRoutes to use when constructing routes.
 * @param baseRoute The base route to use when constructing paths. Example: If "bradyanderson.tech/blog" is the
 * base path, then a route path for "test" category will be "bradyanderson.tech/test".
 */
function getCategoryRoutes(routes: BlogCategoryRoutes, baseRoute: string) {
  return Object.keys(routes).map((key) => {
    const {
      routes: childRoutes,
      Component: CategoryComponent,
      title,
    } = routes[key];
    const path = join(baseRoute, key);

    const postRoutes = getPostRoutes(childRoutes, path);
    return (
      <Route path={path} key={key}>
        <Switch>
          {postRoutes.map((route) => route)}
          <Route exact path={path}>
            <CategoryComponent title={title} />
          </Route>
        </Switch>
      </Route>
    );
  });
}

/**
 * Creates routing for blog posts.
 *
 * @param routes The BlogPostRoutes to use when constructing routes.
 * @param categoryPath The path of the category which the post will be under.
 */
function getPostRoutes(routes: BlogPostRoutes, categoryPath: string) {
  return Object.keys(routes).map((key) => {
    const { Component: PostComponent, title, date } = routes[key];
    const path = join(categoryPath, key);
    return (
      <Route path={path} key={key}>
        <PostComponent title={title} date={date} />
      </Route>
    );
  });
}

export default getCategoryRoutes;
