import { BlogPostRoutes } from "../../../types/Sitemap";
import { join } from "path";
import { Route } from "react-router-dom";

/**
 * Creates routing for blog posts.
 *
 * @param routes The BlogPostRoutes to use when constructing routes.
 * @param categoryPath The path of the category which the post will be under.
 */
function getPostRoutes(routes: BlogPostRoutes, categoryPath: string) {
  return Object.keys(routes).map((key) => {
    const { Component: PostComponent } = routes[key];
    const path = join(categoryPath, key);
    return (
      <Route path={path} key={key}>
        <PostComponent />
      </Route>
    );
  });
}

export default getPostRoutes;
