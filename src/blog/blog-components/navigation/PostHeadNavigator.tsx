import { Link } from "react-router-dom";

interface Props {
  currentCategoryTitle: string;
  currentPostTitle: string;
}

/** Component for navigating back to blog home and parent category. */
function CategoryHeadNavigator({
  currentCategoryTitle,
  currentPostTitle,
}: Props) {
  return (
    <div className="head-navigator category-head-navigator">
      <span>
        <Link to={".."}>Blog Home</Link>
      </span>
      <span> / </span>
      <span>
        <Link to={"."}>{currentCategoryTitle}</Link>
      </span>
      <span> / </span>
      <span className="head-navigator-current-location">
        {currentPostTitle}
      </span>
    </div>
  );
}

export default CategoryHeadNavigator;
