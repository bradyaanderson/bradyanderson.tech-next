import moment from "moment";

/** Props for all components in blog map */
export interface BlogComponentProps {
  title: string;
}

/** Props for Blog Index */
export interface BlogIndexProps extends BlogComponentProps {}

/** Props for Blog Category */
export interface BlogCategoryProps extends BlogComponentProps {}

/** Props for Blog Posts */
export interface BlogPostProps extends BlogComponentProps {
  date: moment.Moment;
}

/** Basic Blog Route */
export interface BlogRoute extends BlogComponentProps {
  shortTitle?: string;
}

/** Blog Category Route */
export interface BlogCategoryRoute extends BlogRoute, BlogCategoryProps {
  Component: (props: BlogCategoryProps) => JSX.Element;
  routes: BlogPostRoutes;
}

/** Blog Post Route */
export interface BlogPostRoute extends BlogRoute, BlogPostProps {
  Component: (props: BlogPostProps) => JSX.Element;
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
export interface BlogMap {
  Component: (props: BlogIndexProps) => JSX.Element;
  title: string;
  routes: BlogCategoryRoutes;
}
