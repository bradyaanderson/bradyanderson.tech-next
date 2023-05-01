import Paragraph from "../../../../general/Paragraph";
import ExternalLink from "../../../../general/ExternalLink";

function The404RabbitHoldPost() {
  return (
    <div>
      <Paragraph>
        I started with a simple task: display a 404 page when a user tries to
        access a route that doesn’t exist. It sounded easy enough, and it is
        easy with React Router. In fact, you can find exactly how to implement
        this in their{" "}
        <ExternalLink link={"https://v5.reactrouter.com/web/example/no-match"}>
          docs
        </ExternalLink>
        . However, I soon learned it wasn’t truly this simple and that led me
        down a rabbit hole that has completely changed the underlying systems
        behind this website.
      </Paragraph>
      <Paragraph>
        404 has become synonymous with not being able to find something, but
        it’s actually an HTTP status code, meaning the server could not find the
        resource. My website is a simple one page application that uses
        client-side routing (using React Router). Although there is a server
        serving up this application, it’s not concerned about which routes are
        and are not valid. So could I truly create a 404 page with my current
        implementation? No, there is no easy way to send a 404 status code.
      </Paragraph>
      <Paragraph>
        How could I create a real 404 page? There were a few options, but I
        chose to convert my application to a statically rendered application
        using <ExternalLink link={"https://nextjs.org/"}>Next.js</ExternalLink>.
        Next.js has a lot of advantages. The most important of those is that
        it’s a React framework that supports TypeScript right out-of-the-box.
        Although converting a create-react-app to Next.js was no easy task,
        being able to use my existing React components made the transition much
        easier.
      </Paragraph>

      <h2>Pages</h2>
      <Paragraph>
        One of my favorite parts about Next.js is{" "}
        <ExternalLink link={"https://nextjs.org/docs/basic-features/pages"}>
          pages
        </ExternalLink>{" "}
        and how it handles dynamic content. This worked extremely well with my
        blog. On the blog, I have categories and posts. This is reflected in the
        routing as well, where a blog category page will have a route like,
        bradyanderson.tech/blog/[category], and a post will have a route like,
        bradyanderson.tech/blog/[category]/[post]. Using{" "}
        <ExternalLink
          link={
            "https://nextjs.org/docs/basic-features/pages#pages-with-dynamic-routes"
          }
        >
          dynamic routes
        </ExternalLink>
        , I was able to recreate this structure . This will ensure that each
        category page and blog post will share a common template, while also
        giving me the flexibility to dynamically display different content for
        each page.
      </Paragraph>

      <h2>SSG (Static Site Generation)</h2>
      <Paragraph>
        All users on my site see the same content. Before moving to Next.js, my
        application would dynamically update each “page” as the user changed
        routes. This meant the user’s machine was in charge of computing how
        content would be displayed. Although viewing my site was not a huge
        burden to compute, you might expect that old or slow machines could have
        an issue.
      </Paragraph>
      <Paragraph>
        Since the content is always the same, however, I don’t need to push this
        display generation onto each user. That’s why I’m very excited that I
        can now statically generate each page because of Next.js. When I’m
        building my application, it converts all pages into plain HTML. Most of
        my site even works when JavaScript is disabled now (although it doesn't
        look good). As someone who loves older machines, I’m wondering what else
        I could do to make my site more accessible for older hardware.
      </Paragraph>

      <h2>404</h2>
      <Paragraph>
        Finally, and the whole reason for this major update, I am now sending
        real 404 status codes when an invalid route is accessed. Take a look for
        yourself! Access the network tab in your browser's developer tools and
        type in a random route. Sure enough, you’ll see a status code of 404
        returned.
      </Paragraph>
      <Paragraph>
        In the end, this was much more than just creating a 404 page for my
        website. I was able to learn a whole new framework, while also setting
        myself up to continue to build this site over time. I might have gone
        down the rabbit hole, but it was worth it.
      </Paragraph>
    </div>
  );
}

export default The404RabbitHoldPost;
