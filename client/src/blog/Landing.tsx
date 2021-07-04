import BlogPage from "./BlogPage";
import { blogLandingText0 } from "./text/landingText";
import "../assests/stylesheets/blog/Blog.scss";

/** Blog landing page */
function Landing() {
  return (
    <BlogPage>
      <h1>Welcome</h1>
      <pre>{blogLandingText0}</pre>
    </BlogPage>
  );
}

export default Landing;
