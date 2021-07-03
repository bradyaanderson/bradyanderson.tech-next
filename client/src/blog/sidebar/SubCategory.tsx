import { Link } from "react-router-dom";
import "../../assests/stylesheets/blog/sidebar/Sidebar.scss";

interface Props {
  /** Name displayed for sub-category */
  name: string;
  /** Router path used when sub-category is clicked */
  path: string;
}

/** Sub-category in sidebar nav. Routes to sub-category blog post when clicked. */
function SubCategory({ name, path }: Props) {
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
