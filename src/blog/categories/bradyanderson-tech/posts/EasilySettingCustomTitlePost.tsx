import BlogPost from "../../../blog-components/page-templates/BlogPost";
import { BlogPostProps } from "../../../../../types/Sitemap";
import Paragraph from "../../../blog-components/Paragraph";
import Image from "../../../blog-components/Image";
import ExternalLink from "../../../blog-components/ExternalLink";
import Code from "../../../blog-components/Code";

function EasilySettingCustomTitlePost(props: BlogPostProps) {
  const baseAssetPath =
    "/blog/categories/bradyanderson-tech/posts/dynamically-updating-html-title";

  return (
    <BlogPost {...props}>
      <Paragraph>
        On this website, I use{" "}
        <ExternalLink link="https://github.com/facebook/react">
          React
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink link="https://github.com/remix-run/react-router">
          React Router
        </ExternalLink>{" "}
        to control the content displayed. You’ll notice that as you navigate
        through this site, the URL in your browser will update as you access
        different links. However, you may also notice that your browser doesn’t
        load an entirely new page every time you click on a link. This is
        easiest to see with the navbar. No matter which internal link you
        access, the navbar will not rerender. This is React Router at work.
      </Paragraph>
      <Paragraph>
        By using React and React Router, I drastically cut down the amount of
        boilerplate I have to write, but I’ve also obfuscated some parts of the
        HTML document. One part that is easy to forget about is the HTML{" "}
        <ExternalLink link="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head">
          head
        </ExternalLink>
        , which contains metadata about a webpage. Within the head, you’ll find
        the webpage’s title which is displayed in the tab for this webpage. It
        also helps with search engine optimization and accessibility, among
        other things.
      </Paragraph>

      <Paragraph>Here's what a basic HTML head looks like:</Paragraph>

      <Code
        language="html"
        path={baseAssetPath}
        filename="htmlHeadExample.html.txt"
      />

      <Paragraph>
        In the code for this website, I only had an HTML head in one place:{" "}
        <ExternalLink
          link="https://github.com/bradyaanderson/bradyanderson.tech-next/blob/ef1805cd928237d5139163ebbb5
ef688a4031c5b/public/index.html"
        >
          index.html
        </ExternalLink>
        . So, no matter where you navigated, you would always see the title of
        the page as “bradyanderson.tech”.
      </Paragraph>

      <Image
        path={`${baseAssetPath}/BeforeTitleUpdate.png`}
        maxWidth="28rem"
        caption='Each route displays "bradyanderson.tech".'
      />

      <Paragraph>
        After digging through Stack Overflow and other forums for how to
        dynamically update the title on a one-page React application, I came
        across the NPM package{" "}
        <ExternalLink link="https://www.npmjs.com/package/react-helmet">
          React Helmut
        </ExternalLink>
        . This package describes itself as a React component that “will manage
        all of your changes to the document head.” Also, the National Football
        League maintains Helmut, so the name is perfect. (I did not know the NFL
        published open-source code).
      </Paragraph>
      <Paragraph>
        Using Helmut is extremely simple. The one thing to keep in mind is that
        “nested or latter components will override duplicate changes”. Other
        than that, just throw the Helmut component into your application code
        and you can expect that the head of your document will update:
      </Paragraph>

      <Code
        language="typescript"
        path={baseAssetPath}
        filename="helmutExample.tsx.txt"
      />

      <Paragraph>
        For this site, I have a{" "}
        <ExternalLink link="https://github.com/bradyaanderson/bradyanderson.tech-next/blob/05d18b341f6ae31b4c8f2c0c1245659a11f6c6af/src/blog/blog-components/BlogPost.tsx">
          BlogPost
        </ExternalLink>{" "}
        component which acts as a base component for every blog post you see.
        This component has a title prop, which is a string that displays at the
        top of every post. I updated this component so that this the title would
        also be populated as the HTML title:
      </Paragraph>

      <Code
        language="typescript"
        path={baseAssetPath}
        filename="helmutUsageExample.tsx.txt"
      />

      <Paragraph>
        Now, as you navigate around this website, you’ll notice that your tab
        will display a unique title for each blog post or other section that you
        visit.
      </Paragraph>

      <Image
        path={`${baseAssetPath}/AfterTitleUpdate.png`}
        maxWidth="28rem"
        caption="Each route now has a unique title."
      />

      <Paragraph>
        Helmut provides an elegant and easy-to-use solution for dynamically
        updating the title while using React and React Router. I will definitely
        add it to my list of packages that I should include in any future
        projects.
      </Paragraph>
    </BlogPost>
  );
}

export default EasilySettingCustomTitlePost;
