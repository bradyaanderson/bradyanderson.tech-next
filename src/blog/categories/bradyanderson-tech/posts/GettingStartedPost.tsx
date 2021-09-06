import BlogPost from "../../../../common/BlogPost";
import { gettingStartedText } from "../../../text/bradyanderson-tech/gettingStartedText";
import BlogImage from "../../../../common/BlogImage";
import { BlogPostProps } from "../../../../../types/Sitemap";
import BlogLink from "../../../../common/BlogLink";

const { open, react, express, heroku, typescript } = gettingStartedText;

function GettingStartedPost({ title }: BlogPostProps) {
  return (
    <BlogPost title={title} date="07/25/2021">
      <BlogImage
        path="/blog/categories/bradyanderson-tech/posts/getting-started/homepage.png"
        caption="The homepage on 07/25/2021."
        maxWidth="32rem"
      />
      <pre>{open}</pre>

      <h2>React</h2>
      <pre>{react}</pre>

      <h2>Node.js / Express</h2>
      <pre>{express}</pre>

      <h2>TypeScript</h2>
      <pre>{typescript}</pre>

      <h2>Heroku</h2>
      <pre>{heroku}</pre>
      <pre>
        <span style={{ textDecoration: "underline" }}>Edit (07/30/2021)</span>:
        I pretty quickly moved from Heroku to AWS for hosting.
      </pre>

      <h2>Links</h2>
      <ul>
        <li>
          <BlogLink link="https://github.com/bradyaanderson/bradyanderson.tech-next">
            bradyanderson.tech GitHub Repo
          </BlogLink>
        </li>
        <li>
          <BlogLink link="https://reactjs.org/">React</BlogLink>
        </li>
        <li>
          <BlogLink link="https://expressjs.com/">Express</BlogLink>
        </li>
        <li>
          <BlogLink link="https://www.typescriptlang.org/">TypeScript</BlogLink>
        </li>
        <li>
          <BlogLink link="https://www.heroku.com/">Heroku</BlogLink>
        </li>
      </ul>
    </BlogPost>
  );
}

export default GettingStartedPost;
