import BlogPost from "../../../blog-components/BlogPost";
import { BlogPostProps } from "../../../../../types/Sitemap";

function FixingFloppyDrive({ title }: BlogPostProps) {
  return (
    <BlogPost title={title} date="09/14/2021">
      <p>Contents coming soon...</p>
    </BlogPost>
  );
}

export default FixingFloppyDrive;
