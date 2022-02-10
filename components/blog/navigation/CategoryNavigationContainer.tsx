import CategoryNavigator from "./CategoryNavigator";
import { NameToPathMap } from "../../../types/Blog";

interface Props {
  /** A map of category name to URL path. */
  readonly categoryNameToPath: NameToPathMap;
}

/** A container that allows for navigation to different blog categories. */
function CategoryNavigationContainer({ categoryNameToPath }: Props) {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {Object.keys(categoryNameToPath).map((categoryName) => (
          <CategoryNavigator
            categoryTitle={categoryName}
            categoryPath={categoryNameToPath[categoryName]}
            key={categoryName}
          />
        ))}
      </ul>
    </div>
  );
}

export default CategoryNavigationContainer;
