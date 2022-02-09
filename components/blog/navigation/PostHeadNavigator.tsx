import Link from "next/link";

interface Props {
  currentCategoryTitle: string;
  currentPostTitle: string;
  category: string;
}

/** Component for navigating back to blog home and parent category. */
function CategoryHeadNavigator({
  currentCategoryTitle,
  currentPostTitle,
    category
}: Props) {
  console.log(category);
  return (
    <div className="head-navigator category-head-navigator">
      <span>
        <Link href={"/blog"}>Blog Home</Link>
      </span>
      <span> / </span>
      <span>
        <Link href={`/blog/${category}`}>{currentCategoryTitle}</Link>
      </span>
      <span> / </span>
      <span className="head-navigator-current-location">
        {currentPostTitle}
      </span>
    </div>
  );
}

export default CategoryHeadNavigator;
