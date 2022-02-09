import Link from "next/link";
import * as path from "path";

interface Props {
  /** The title of the category to be displayed to user. */
  readonly categoryTitle: string;
  /** The URL path to the category/ */
  readonly categoryPath: string;
}

/** Navigates to a blog category. */
function CategoryNavigator({ categoryTitle, categoryPath }: Props) {
  const baseName = path.basename(categoryPath);
  return (
    <li className={`${baseName}-category-navigation`}>
      <Link href={categoryPath}>{categoryTitle}</Link>
    </li>
  );
}

export default CategoryNavigator;
