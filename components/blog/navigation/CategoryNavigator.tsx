import Link from "next/link";
import * as path from "path";
import { blogCategoryToColorMap } from "../../../constants/constants";

interface Props {
  /** The title of the category to be displayed to user. */
  readonly categoryTitle: string;
  /** The URL path to the category/ */
  readonly categoryPath: string;
}

/** Navigates to a blog category. */
function CategoryNavigator({ categoryTitle, categoryPath }: Props) {
  const basename = path.basename(categoryPath);
  return (
    <li>
      <Link
        href={categoryPath}
        style={{ color: blogCategoryToColorMap[basename] }}
      >
        {categoryTitle}
      </Link>
    </li>
  );
}

export default CategoryNavigator;
