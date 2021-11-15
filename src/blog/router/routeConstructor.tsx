import { BlogCategoryRoutes, BlogPostRoutes } from "../../../types/Sitemap";
import * as path from "path";
import { join } from "path";
import { Route, Switch } from "react-router-dom";
import BlogPost from "../blog-components/page-templates/BlogPost";
import { FunctionComponent } from "react";

/**
 * Creates routing for blog categories.
 *
 * @param routes The BlogCategoryRoutes to use when constructing routes.
 * @param baseRoute The base route to use when constructing paths. Example: If "bradyanderson.tech/blog" is the
 * base path, then a route path for "test" category will be "bradyanderson.tech/test".
 */
function getCategoryRoutes(routes: BlogCategoryRoutes, baseRoute: string) {
  return Object.keys(routes).map((categoryBaseName) => {
    const {
      routes: childRoutes,
      Component: CategoryComponent,
      title,
    } = routes[categoryBaseName];
    const pathName = join(baseRoute, categoryBaseName);

    const postRoutes = getPostRoutes(childRoutes, title, pathName);
    return (
      <Route path={pathName} key={categoryBaseName}>
        <Switch>
          {postRoutes.map((route) => route)}
          <Route exact path={pathName}>
            <CategoryComponent title={title} routes={childRoutes} />
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
 * @param categoryTitle The title of the category which the post is under.
 * @param categoryPath The path of the category which the post is under.
 */
function getPostRoutes(
  routes: BlogPostRoutes,
  categoryTitle: string,
  categoryPath: string
) {
  return Object.keys(routes).map((postBaseName) => {
    const { Component: PostComponent, title, date } = routes[postBaseName];
    const categoryBaseName = path.basename(categoryPath);
    const pathName = join(categoryPath, postBaseName);
    const BlogPostWrapper: FunctionComponent = ({ children }) => (
      <BlogPost
        title={title}
        date={date}
        categoryTitle={categoryTitle}
        categoryBaseName={categoryBaseName}
      >
        {children}
      </BlogPost>
    );

    return (
      <Route path={pathName} key={postBaseName}>
        <PostComponent BlogPost={BlogPostWrapper} />
      </Route>
    );
  });
}

export default getCategoryRoutes;
