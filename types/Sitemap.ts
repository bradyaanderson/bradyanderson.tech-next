/** Basic Sitemap Route */
interface Route {
  title: string;
}

/** Basic Blog Route */
interface BlogRoute extends Route {
  component: () => JSX.Element;
  shortTitle?: string;
}

/** Blog Post Route */
interface BlogPostRoute extends BlogRoute {}

/** Blog Category Route. Contains Blog Post child routes */
interface BlogCategoryRoute extends BlogPostRoute {
  routes: {
    [key: string]: BlogPostRoute;
  };
}

/** Structure of blog routes */
interface BlogIndex extends BlogRoute {
  routes: {
    [key: string]: BlogCategoryRoute;
  };
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
