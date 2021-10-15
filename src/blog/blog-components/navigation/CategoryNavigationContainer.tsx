import { CategoryNameToPath } from "../../types";
import CategoryNavigator from "./CategoryNavigator";

interface Props {
  categoryNameToPath: CategoryNameToPath;
}

/** A container that allows for navigation to different blog categories */
function CategoryNavigationContainer({ categoryNameToPath }: Props) {
  return (
    <div className="category-navigation-container">
      <h2>Categories</h2>
      <ul>
        {Object.keys(categoryNameToPath).map((categoryName) => (
          <CategoryNavigator
            categoryName={categoryName}
            categoryPath={categoryNameToPath[categoryName]}
            key={categoryName}
          />
        ))}
      </ul>
    </div>
  );
}

export default CategoryNavigationContainer;
