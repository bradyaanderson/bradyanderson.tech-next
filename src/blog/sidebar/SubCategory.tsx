import { Link } from "react-router-dom";
import "../../assests/stylesheets/blog/sidebar/Sidebar.scss";
import { join } from "path";

interface Props {
  /** Name displayed for sub-category */
  name: string;
  /** The subcategory. Used in the URL path. */
  subCategory: string;
  /** The path for the parent category */
  categoryPath: string;
}

/** Sub-category in sidebar nav. Routes to sub-category blog post when clicked. */
function SubCategory({ name, subCategory, categoryPath }: Props) {
  const path = join(categoryPath, subCategory);
  return (
    <div className="sidebar-sub-category">
      <span>
        &gt;&nbsp;
        <Link to={path}>{name}</Link>
      </span>
    </div>
  );
}

export default SubCategory;
