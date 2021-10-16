import ExternalLink from "../../blog-components/ExternalLink";
import Paragraph from "../../blog-components/Paragraph";
import BlogCategory from "../../blog-components/page-templates/BlogCategory";
import { BlogCategoryProps } from "../../../../types/Sitemap";

/** Index for Website Update blog category */
function WebsiteUpdatesCategory(props: BlogCategoryProps) {
  return (
    <BlogCategory {...props}>
      <div>
        <Paragraph>
          I bought the domain name bradyanderson.tech several years ago. I used
          it as the URL for my first personal website. It was an okay one-page
          site, but it didn't contain much information besides how to contact
          me. Now it's time for a complete overhaul. This next version of
          bradyanderson.tech is completely new code and I plan on doing a lot
          more.
        </Paragraph>
        <Paragraph>
          I'd like to do is document the creation of this website. The best
          thing about a personal website/blog is that things don't need to be
          perfect. Unlike my day job, a bug won't hurt anybody. This website can
          go down for a few days and it won't really matter. Also, I don't have
          to get things right on the first try. The code here is not meant to be
          messy or fragile, but it's also not meant to be enterprise-standard.
          I've also decided that the number one goal is to write content. The
          design and architecture of this site can be improved over time, but
          don't need to be the main focus. Most importantly, I can experiment
          and learn new things. When I make some progress or learn something
          new, I'll try and write a short update about it.
        </Paragraph>

        <Paragraph>
          If you want to check out any of the code for this website, it can be
          found here:{" "}
          <ExternalLink link="https://github.com/bradyaanderson/bradyanderson.tech-next">
            https://github.com/bradyaanderson/bradyanderson.tech-next
          </ExternalLink>
          .
        </Paragraph>
      </div>
    </BlogCategory>
  );
}

export default WebsiteUpdatesCategory;
