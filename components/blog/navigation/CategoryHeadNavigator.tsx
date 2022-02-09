import Link from "next/link";

interface Props {
  /** The title of the current category. Will be displayed to user. */
  readonly currentCategoryTitle: string;
}

/** Component for navigating back to blog home from category found at the top of category pages. */
function CategoryHeadNavigator({ currentCategoryTitle }: Props) {
  return (
    <div className="head-navigator category-head-navigator">
      <span>
        <Link href={"/blog"}>Blog Home</Link>
      </span>
      <span> / </span>
      <span className="head-navigator-current-location">
        {currentCategoryTitle}
      </span>
    </div>
  );
}

export default CategoryHeadNavigator;
