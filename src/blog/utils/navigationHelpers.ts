import { BlogCategoryRoutes } from "../../../types/Sitemap";
import { join } from "path";
import { CategoryNameToPath } from "../types";

const BaseRoute = "/blog";

export function buildCategoryToPath(routes: BlogCategoryRoutes) {
  const categoryToLink: CategoryNameToPath = {};
  Object.keys(routes).forEach((key) => {
    const path = join(BaseRoute, key);
    const { title } = routes[key];
    categoryToLink[title] = path;
  });
  return categoryToLink;
}
