import * as path from "path";
import { join } from "path";
import { BlogCategoryRoutes, BlogPostRoutes } from "../types/Sitemap";
import { NameToPathMap, PostDetails } from "../types/Blog";

const BaseRoute = "/blog";

/**
 * Returns a map of category to link.
 * @param routes The {@link BlogCategoryRoutes}.
 */
export function getCategoryToLink(routes: BlogCategoryRoutes) {
  const categoryToLink: NameToPathMap = {};
  Object.keys(routes).forEach((category) => {
    const path = join(BaseRoute, category);
    const { title } = routes[category];
    categoryToLink[title] = path;
  });
  return categoryToLink;
}

/**
 * Compares post time. Will return 1 if the time of a is before b. Meant to be used with sort().
 * Most recent post will be first. Earliest post will be last.
 **/
const compareTime = (a: PostDetails, b: PostDetails) => {
  return a.date.isBefore(b.date) ? 1 : -1;
};

/**
 * Returns a list of post details sorted with most recent posts first.
 * @param routes The {@link BlogCategoryRoutes}.
 */
export function getRecentPostDetails(routes: BlogCategoryRoutes) {
  const posts: PostDetails[] = getPostDetailsFromCategoryRoutes(routes);
  posts.sort(compareTime);
  return posts;
}

/**
 * Returns a list of post details for a category sorted with most recent posts first.
 * @param categoryPath The URL path for the category relative to.
 * @param routes The {@link BlogPostRoutes} for the category.
 */
export function getRecentCategoryPostDetails(
  categoryPath: string,
  routes: BlogPostRoutes
) {
  const posts: PostDetails[] = getPostDetailsFromPostRoutes(
    categoryPath,
    routes
  );
  posts.sort(compareTime);
  return posts;
}

/**
 * Compiles a list of all post details. List is not sorted.
 * @param routes The {@link BlogCategoryRoutes}.
 */
function getPostDetailsFromCategoryRoutes(routes: BlogCategoryRoutes) {
  let postDetails: PostDetails[] = [];
  Object.keys(routes).forEach((category) => {
    const categoryPath = join(BaseRoute, category);
    const { routes: postRoutes } = routes[category];
    const categoryPostDetails = getPostDetailsFromPostRoutes(
      categoryPath,
      postRoutes
    );
    postDetails = postDetails.concat(categoryPostDetails);
  });
  return postDetails;
}

/**
 * Compiles a list of all post details. List is not sorted.
 */
/**
 *
 * @param categoryPath The URL path for the category relative to.
 * @param routes The {@link BlogPostRoutes} for the category.
 */
function getPostDetailsFromPostRoutes(
  categoryPath: string,
  routes: BlogPostRoutes
) {
  const postDetails: PostDetails[] = [];
  const category = path.basename(categoryPath);
  Object.keys(routes).forEach((post) => {
    const link = join(categoryPath, post);
    const { title, date } = routes[post];
    const postDetail: PostDetails = { title, link, category, date };
    postDetails.push(postDetail);
  });
  return postDetails;
}
