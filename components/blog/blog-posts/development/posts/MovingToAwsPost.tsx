import Paragraph from "../../../../general/Paragraph";
import ExternalLink from "../../../../general/ExternalLink";

function MovingToAwsPost() {
  return (
    <div>
      <Paragraph>
        Well, that didn't last long... I was planning some upcoming posts for
        this blog and I realized that I'm going to need ample space to post
        pictures. When I started looking into the best way to host static
        content on Heroku, I was seeing only two options:
        <ol className="blog-list">
          <li>Host the content on AWS (or somewhere similar).</li>
          <li>Pay a bunch of money.</li>
        </ol>
      </Paragraph>
      <Paragraph>
        Upgrading my Heroku dyno to the hobby tier for $7 per month was about as
        much as I'm willing to spend on hosting right now, so option 2 is off
        the table. Option 1 seemed like a much better plan, but then I thought,
        "Why only host my static content on AWS? I might as well go all the
        way." So I did go all the way and now bradyanderson.tech is completely
        off of Heroku and running 100% off AWS.
      </Paragraph>
      <Paragraph>
        It's only been a day, but I'm already liking AWS a lot. Specifically,
        AWS Amplify made it incredibly simple to get my app up and running in
        less than an hour. They even had a{" "}
        <ExternalLink link="https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/">
          tutorial
        </ExternalLink>{" "}
        that taught me almost everything I needed to know in just a few minutes.
        I should say that I'm not surprised that AWS is this polished given just
        how much of the web is hosted on it. I'm looking forward to learning
        more about AWS (and also paying less for hosting).
      </Paragraph>
      <Paragraph>
        <span style={{ textDecoration: "underline" }}>On a side note</span>: I
        also moved from Hover to Google Domains for the bradyanderson.tech
        domain name. This will save me $10 dollars a year! It should also be
        slightly easier to configure the domain, so that's a plus.
      </Paragraph>
    </div>
  );
}

export default MovingToAwsPost;
