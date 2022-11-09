import moment from "moment";
import Link from "next/link";
import { PostDetails } from "../../../types/Blog";
import styles from "./blog-navigator.module.scss";
import { blogCategoryToColorMap } from "../../../constants/constants";

interface Props {
  /** Details about the post */
  postDetails: PostDetails;
}

/** A component that navigates to a post when clicked */
function PostNavigator({ postDetails }: Props) {
  const { title, date, link, category } = postDetails;
  const dateString = moment(date).format("MM/DD/YYYY");
  return (
    <Link href={link} passHref>
      <div
        className={styles.blogPostNavigatorLink}
        style={{ background: blogCategoryToColorMap[category] }}
      >
        <span className={styles.blogPostNavigatorTitle}>{title}</span>
        <span className={styles.blogPostNavigatorDate}>{dateString}</span>
      </div>
    </Link>
  );
}

export default PostNavigator;
