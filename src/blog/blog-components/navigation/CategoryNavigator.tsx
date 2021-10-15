import { Link } from "react-router-dom";
import * as path from "path";

interface Props {
  categoryName: string;
  categoryPath: string;
}

/** Navigates to a blog category */
function CategoryNavigator({ categoryName, categoryPath }: Props) {
  const baseName = path.basename(categoryPath);
  return (
    <li className={`${baseName}-category-navigation`}>
      <Link to={categoryPath}>{categoryName}</Link>
    </li>
  );
}

export default CategoryNavigator;
