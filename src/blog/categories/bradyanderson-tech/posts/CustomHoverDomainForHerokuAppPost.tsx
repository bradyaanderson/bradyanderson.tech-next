import BlogPost from "../../../../common/BlogPost";
import BlogImage from "../../../../common/BlogImage";
import BlogLink from "../../../../common/BlogLink";
import { BlogPostProps } from "../../../../../types/Sitemap";

function CustomHoverDomainForHerokuAppPost({ title }: BlogPostProps) {
  return (
    <BlogPost title={title} date="07/27/2021">
      <pre>
        When you create an application in{" "}
        <BlogLink link="https://www.heroku.com/">Heroku</BlogLink>, you also get
        a Heroku domain where you can access the app. In the case of
        bradyanderson.tech, you can also find this site at{" "}
        <BlogLink link="https://bradyanderson-tech-new.herokuapp.com">
          bradyanderson-tech-new.herokuapp.com
        </BlogLink>
        . The Heroku domain was great for when I first started because I could
        simply pull up this URL on my phone and test out how easy it was to use
        the site on a mobile device. Now that I'm ready for others to visit this
        site though, it's time to set the custom domain.
      </pre>
      <pre>
        Many years ago, I bought the domain bradyanderson.tech from{" "}
        <BlogLink link="https://www.hover.com/">hover.com</BlogLink>. One
        problem I've had with Hover is that there are not a ton of resources
        that explain how to configure your domain. Because of that, I had to
        read through a few references before bradyanderson.tech was actually
        pointing to my Heroku application. Here is a recount of what I learned:
      </pre>

      <h2>Step 1: Configure Heroku Domain Settings</h2>
      <pre>
        First I needed to configure the domain settings on my Heroku
        application. Domain settings are found on the application dashboard
        within the settings tab.
      </pre>
      <BlogImage
        path="/blog/categories/bradyanderson-tech/posts/custom-hover-domain-for-heroku-app/herokuDomainSettings.png"
        caption="Heroku domain settings."
        maxWidth="48rem"
      />
      <pre>
        I clicked "Add Domain" and added "www.bradyanderson.tech" as the domain
        name (Note: the "www." is needed). I then copied the DNS target value,
        that's the hidden-blueberry-zold... value. I would need this value
        later.
      </pre>

      <h2>Step 2: Configure Hover DNS</h2>
      <pre>
        Next, I configured the Hover DNS settings. These settings are found in
        the Hover control panel in the DNS tab.
      </pre>
      <BlogImage
        path="/blog/categories/bradyanderson-tech/posts/custom-hover-domain-for-heroku-app/hoverDNSSettings.png"
        caption="Hover DNS Settings."
        maxWidth="48rem"
      />
      <pre>
        The important thing here was that Type CNAME with Host www is set to
        that value copied from the Heroku domain settings. I also needed to make
        sure Type A with host * and @ set to "64.98.145.30" (this IP address
        points to url.hover.com).
      </pre>

      <h2>Step 3: Set Up Domain Forwarding</h2>
      <pre>
        One thing I noticed is that I was able to access my website by typing in
        the URL "www.bradyanderson.tech", but not "bradyanderson.tech. Not
        including "www.", would result in an error saying the website could not
        be reached. It's not surprising that this happens due to how I
        configured the DNS.
      </pre>
      <BlogImage
        path="/blog/categories/bradyanderson-tech/posts/custom-hover-domain-for-heroku-app/hoverForward.png"
        caption="Hover Forward Settings."
        maxWidth="48rem"
      />
      <pre>
        Luckily the fix is pretty easy. I simply set up a forward on Hover so
        that "bradyanderson.tech" would redirect to "www.bradyanderson.tech".
      </pre>

      <h2>Step 4: Upgrade my Heroku Dyno Because of SSL Issues</h2>
      <pre>
        I was seeing an error in the browser console that read
        "ERR_SSL_PROTOCOL_ERROR". I didn't spend too much time trying to figure
        out why this was happening and just decided to get an SSL certificate
        for my domain. The simple solution was to upgrade to Heroku's Hobby tier
        which provides an SSL cert. This step was a little unfortunate because I
        haven't paid for Heroku in the past, but $7.00 a month isn't bad.
      </pre>

      <h2>Step 5: Wait</h2>
      <pre>
        It took about 15 minutes for the global DNS server to be updated and the
        SSL certificate to be signed. After that, I was able to access my Heroku
        app through the domain bradyanderson.tech on all of my devices.
      </pre>

      <h2>References</h2>
      <ul>
        <li>
          <BlogLink link="https://devcenter.heroku.com/articles/custom-domains">
            Heroku Custom Domain Names For Apps
          </BlogLink>
        </li>
        <li>
          <BlogLink link="http://brendan-quinn.xyz/post/pointing-hover-domain-to-your-heroku-app/">
            Pointing Hover Domain to Your Heroku App
          </BlogLink>
        </li>
      </ul>
    </BlogPost>
  );
}

export default CustomHoverDomainForHerokuAppPost;
