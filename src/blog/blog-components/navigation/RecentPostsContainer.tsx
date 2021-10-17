import PostNavigator from "./PostNavigator";
import { PostDetails } from "../../types";

interface Props {
  postDetailsList: PostDetails[];
}

/** A container that allows for navigation to recent blog posts */
function RecentPostsContainer({ postDetailsList }: Props) {
  return (
    <div className="category-navigation-container">
      <h2>Recent Posts</h2>
      {postDetailsList.map((postDetails) => (
        <PostNavigator postDetails={postDetails} key={postDetails.title} />
      ))}
    </div>
  );
}

export default RecentPostsContainer;