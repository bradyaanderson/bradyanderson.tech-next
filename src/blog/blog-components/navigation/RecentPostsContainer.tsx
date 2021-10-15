import PostNavigator from "./PostNavigator";

interface Props {
  postTitleToLink: any;
}

/** A container that allows for navigation to different blog categories */
function CategoryNavigationContainer({ postTitleToLink }: Props) {
  return (
    <div className="category-navigation-container">
      <h2>Recent Posts</h2>
      {/*<ul>*/}
      {/*  {Object.keys(categoryNameToPath).map((categoryName) => (*/}
      {/*    <CategoryNavigator*/}
      {/*      categoryName={categoryName}*/}
      {/*      path={categoryNameToPath[categoryName]}*/}
      {/*      key={categoryName}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</ul>*/}
      <PostNavigator />
      <PostNavigator />
      <PostNavigator />
    </div>
  );
}

export default CategoryNavigationContainer;
