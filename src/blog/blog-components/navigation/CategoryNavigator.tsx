import { Link } from "react-router-dom";

interface Props {
  categoryName: string;
  path: string;
}

/** Navigates to a blog category */
function CategoryNavigator({ categoryName, path }: Props) {
  return (
    <li>
      <Link to={path}>{categoryName}</Link>
    </li>
  );
}

export default CategoryNavigator;
