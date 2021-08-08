interface Route {
  title: string;
  shortTitle?: string;
  routes: {
    [key: string]: Route;
  };
}

export interface Sitemap {
  index: Route;
}

export default Sitemap;
