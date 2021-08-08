import { BlogPostRoutes } from "../../../types/Sitemap";
import { join } from "path";
import { Route } from "react-router-dom";

function getPostRoutes(routes: BlogPostRoutes, parentPath: string) {
  return Object.keys(routes).map((key) => {
    const { Component: PostComponent } = routes[key];
    const path = join(parentPath, key);
    return (
      <Route path={path} key={key}>
        <PostComponent />
      </Route>
    );
  });
}

export default getPostRoutes;
