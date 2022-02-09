import Link from "next/link";

interface Props {
  /** The title of the current category. Will be displayed to user. */
  currentCategoryTitle: string;
  /** The title of the current post. Will be displayed to user. */
  currentPostTitle: string;
  /** The category name found in the URL. Helps navigate back to category. Example: retro-gaming */
  categoryBasename: string;
}

/** Component for navigating back to blog home and parent category found at the top of blog posts. */
function CategoryHeadNavigator({
  currentCategoryTitle,
  currentPostTitle,
  categoryBasename,
}: Props) {
  return (
    <div className="head-navigator category-head-navigator">
      <span>
        <Link href={"/blog"}>Blog Home</Link>
      </span>
      <span> / </span>
      <span>
        <Link href={`/blog/${categoryBasename}`}>{currentCategoryTitle}</Link>
      </span>
      <span> / </span>
      <span className="head-navigator-current-location">
        {currentPostTitle}
      </span>
    </div>
  );
}

export default CategoryHeadNavigator;
