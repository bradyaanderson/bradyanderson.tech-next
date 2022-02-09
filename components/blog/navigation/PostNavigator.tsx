import moment from "moment";
import Link from "next/link";
import { PostDetails } from "../../../types/Blog";

interface Props {
  postDetails: PostDetails;
}

/** A component that navigates to a post when clicked */
function PostNavigator({ postDetails }: Props) {
  const { title, date, link, category } = postDetails;
  const dateString = moment(date).format("MM/DD/YYYY");
  return (
    <Link href={link} passHref>
      <div
        className={`blog-post-navigator-link blog-post-navigator-container ${category}-post-navigation`}
      >
        <span className="blog-post-navigator-title">{title}</span>
        <span className="blog-post-navigator-date">{dateString}</span>
      </div>
    </Link>
  );
}

export default PostNavigator;
