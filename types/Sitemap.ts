/** Basic Sitemap Route */
export interface Route {
  title: string;
}

/** Basic Blog Route */
export interface BlogRoute extends Route {
  Component: () => JSX.Element;
  shortTitle?: string;
}

/** Blog Post Route */
export interface BlogPostRoute extends BlogRoute {}

/** Structure for storing Blog Post Routes in sitemap. */
export interface BlogPostRoutes {
  [key: string]: BlogPostRoute;
}

/** Blog Category Route. Contains Blog Post child routes */
export interface BlogCategoryRoute extends BlogPostRoute {
  routes: BlogPostRoutes;
}

/** Structure for storing Blog Category Routes in sitemap. */
export interface BlogCategoryRoutes {
  [key: string]: BlogCategoryRoute;
}

/** Structure of blog routes */
export interface BlogIndex extends BlogRoute {
  routes: BlogCategoryRoutes;
}

/** Structure of site routes for custom sitemap */
export interface Sitemap {
  index: {
    routes: {
      blog: BlogIndex;
      about: Route;
    };
  };
}

export default Sitemap;
