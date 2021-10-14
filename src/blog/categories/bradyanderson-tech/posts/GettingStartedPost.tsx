import BlogPost from "../../../blog-components/page-templates/BlogPost";
import Image from "../../../blog-components/Image";
import { BlogPostProps } from "../../../../../types/Sitemap";
import ExternalLink from "../../../blog-components/ExternalLink";
import Paragraph from "../../../blog-components/Paragraph";

function GettingStartedPost(props: BlogPostProps) {
  return (
    <BlogPost {...props}>
      <Image
        path="/blog/categories/bradyanderson-tech/posts/getting-started/homepage.png"
        caption="The homepage on 07/25/2021."
        maxWidth="32rem"
      />

      <Paragraph>
        For the most part, this is a retroactive account of the technologies I
        used to build this website. I intended to write my first blog post on
        June 17th, the day I made my first commit. That didn't quite happen as
        life got in the way and it took me a bit longer than expected to set up
        the skeleton of this website. Things are far from perfect, but I
        started. I guess that's the important part. Anyway, let's go through
        some of what I used to create this site:
      </Paragraph>

      <h2>React</h2>
      <Paragraph>
        For the most part, this is a retroactive account of the technologies I
        used to build this website. I intended to write my first blog post on
        June 17th, the day I made my first commit. That didn't quite happen as
        life got in the way and it took me a bit longer than expected to set up
        the skeleton of this website. Things are far from perfect, but I
        started. I guess that's the important part. Anyway, let's go through
        some of what I used to create this site:
      </Paragraph>

      <h2>Node.js / Express</h2>
      <Paragraph>
        Node.js with Express is awesome. It's not a blazingly fast back-end
        framework, but it lets me use the same programming language for both the
        front-end and back-end? Up to this point, all of the content on this
        website is static, so I don't actually need a back-end right now. But
        maybe I will sometime soon! I thought it was better to structure the
        project as though it had a back-end for now. If my needs change, I
        should be able to easily replace this Express backend with something
        else.
      </Paragraph>

      <h2>TypeScript</h2>
      <Paragraph>
        Sometimes I wonder how I ever wrote websites using JavaScript instead of
        TypeScript. Yeah, it takes a little bit of extra work to get things set
        up and you'll have to type a little bit of extra code, but being able to
        type-check my code has saved me from so many mistakes. Because of that,
        I'm writing the front-end and back-end using TypeScript.
      </Paragraph>

      <h2>Heroku</h2>
      <Paragraph>
        I should admit that I don't know much about hosting. However, I know
        that is Heroku makes it unbelievably simple to get your code out to the
        web through its command-line interface. Also, because so few people will
        probably be looking at this site, it's essentially free. I hosted my old
        site on Heroku for years and never paid a cent, yet it was reliable
        enough that I never had to worry about my website being inaccessible.
      </Paragraph>

      <Paragraph>
        <span style={{ textDecoration: "underline" }}>Edit (07/30/2021)</span>:
        I pretty quickly moved from Heroku to AWS for hosting.
      </Paragraph>

      <h2>Links</h2>
      <ul>
        <li>
          <ExternalLink link="https://github.com/bradyaanderson/bradyanderson.tech-next">
            bradyanderson.tech GitHub Repo
          </ExternalLink>
        </li>
        <li>
          <ExternalLink link="https://reactjs.org/">React</ExternalLink>
        </li>
        <li>
          <ExternalLink link="https://expressjs.com/">Express</ExternalLink>
        </li>
        <li>
          <ExternalLink link="https://www.typescriptlang.org/">
            TypeScript
          </ExternalLink>
        </li>
        <li>
          <ExternalLink link="https://www.heroku.com/">Heroku</ExternalLink>
        </li>
      </ul>
    </BlogPost>
  );
}

export default GettingStartedPost;
