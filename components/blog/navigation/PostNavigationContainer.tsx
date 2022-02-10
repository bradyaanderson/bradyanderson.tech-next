import PostNavigator from "./PostNavigator";
import { PostDetails } from "../../../types/Blog";

interface Props {
  /** List of post details. */
  postDetailsList: PostDetails[];
}

/** A container that allows for navigation to recent blog posts. */
function PostNavigationContainer({ postDetailsList }: Props) {
  return (
    <div className="post-navigation-container">
      <h2>Recent Posts</h2>
      {postDetailsList.map((postDetails) => (
        <PostNavigator postDetails={postDetails} key={postDetails.title} />
      ))}
    </div>
  );
}

export default PostNavigationContainer;
