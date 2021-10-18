import { Link } from "react-router-dom";

interface Props {
  currentCategoryTitle: string;
}

/** Component for navigating back to blog home from category */
function CategoryHeadNavigator({ currentCategoryTitle }: Props) {
  return (
    <div className="head-navigator category-head-navigator">
      <span>
        <Link to={"."}>Blog Home</Link>
      </span>
      <span> / </span>
      <span className="head-navigator-current-location">
        {currentCategoryTitle}
      </span>
    </div>
  );
}

export default CategoryHeadNavigator;
