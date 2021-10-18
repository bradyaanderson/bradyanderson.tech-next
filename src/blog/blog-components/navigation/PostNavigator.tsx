import { PostDetails } from "../../types";
import { Link } from "react-router-dom";
import moment from "moment";

interface Props {
  postDetails: PostDetails;
}

/** A component that navigates to a post when clicked */
function PostNavigator({ postDetails }: Props) {
  const { title, date, link, category } = postDetails;
  const dateString = moment(date).format("MM/DD/YYYY");
  return (
    <Link to={link} className={"blog-post-navigator-link"}>
      <div
        className={`blog-post-navigator-container ${category}-post-navigation`}
      >
        <span className="blog-post-navigator-title">{title}</span>
        <span className="blog-post-navigator-date">{dateString}</span>
      </div>
    </Link>
  );
}

export default PostNavigator;
