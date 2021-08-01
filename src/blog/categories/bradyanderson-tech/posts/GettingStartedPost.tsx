import BlogPost from "../../../BlogPost";
import { gettingStartedText } from "../../../text/bradyanderson-tech/gettingStartedText";
import ImageWithCaption from "../../../../common/ImageWithCaption";

const { open, react, express, heroku, typescript } = gettingStartedText;

function GettingStartedPost() {
  return (
    <BlogPost title="Getting Started" date="07/25/2021">
      <ImageWithCaption
        src="/blog/categories/bradyanderson-tech/posts/getting-started/homepage.png"
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
          <a href="https://github.com/bradyaanderson/bradyanderson.tech-next">
            bradyanderson.tech GitHub Repo
          </a>
        </li>
        <li>
          <a href="https://reactjs.org/">React</a>
        </li>
        <li>
          <a href="https://expressjs.com/">Express</a>
        </li>
        <li>
          <a href="https://www.typescriptlang.org/">TypeScript</a>
        </li>
        <li>
          <a href="https://www.heroku.com/">Heroku</a>
        </li>
      </ul>
    </BlogPost>
  );
}

export default GettingStartedPost;
