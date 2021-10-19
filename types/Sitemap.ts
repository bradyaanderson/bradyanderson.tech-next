import moment from "moment";

/** Props for all components in blog map */
export interface BlogComponentProps {
  title: string;
}

/** Props for Blog Index */
export interface BlogIndexProps extends BlogComponentProps {
  routes: BlogCategoryRoutes;
}

/** Props for Blog Category */
export interface BlogCategoryProps extends BlogComponentProps {
  routes: BlogPostRoutes;
}

/** Props for Blog Posts */
export interface BlogPostProps extends BlogComponentProps {
  date: moment.Moment;
  categoryTitle: string;
  categoryBaseName: string;
}

/** Basic Blog Route */
export interface BlogRoute extends BlogComponentProps {
  title: string;
  shortTitle?: string;
}

/** Blog Category Route */
export interface BlogCategoryRoute extends BlogRoute {
  Component: (props: BlogCategoryProps) => JSX.Element;
  routes: BlogPostRoutes;
}

/** Blog Post Route */
export interface BlogPostRoute extends BlogRoute {
  Component: (props: BlogPostProps) => JSX.Element;
  date: moment.Moment;
}

/** Structure for storing Blog Post Routes in sitemap. */
export interface BlogCategoryRoutes {
  [key: string]: BlogCategoryRoute;
}

/** Structure for storing Blog Post Routes in sitemap. */
export interface BlogPostRoutes {
  [key: string]: BlogPostRoute;
}

/** Structure of blog routes */
export interface BlogMap extends BlogIndexProps {
  Component: (props: BlogIndexProps) => JSX.Element;
}
