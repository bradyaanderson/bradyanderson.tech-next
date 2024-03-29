import Paragraph from "../../../../general/Paragraph";
import Figure from "../../../../general/Figure";
import ExternalLink from "../../../../general/ExternalLink";

function CustomHoverDomainForHerokuAppPost() {
  return (
    <div>
      <Paragraph>
        When you create an application in{" "}
        <ExternalLink link="https://www.heroku.com/">Heroku</ExternalLink>, you
        also get a Heroku domain where you can access the app.{" "}
        <span style={{ textDecoration: "line-through" }}>
          In the case of bradyanderson.tech, you can also find this site at
          development-new.herokuapp.com .
        </span>
        The Heroku domain was great for when I first started because I could
        simply pull up this URL on my phone and test out how easy it was to use
        the site on a mobile device. Now that I'm ready for others to visit this
        site though, it's time to set the custom domain.
      </Paragraph>
      <Paragraph>
        Many years ago, I bought the domain bradyanderson.tech from{" "}
        <ExternalLink link="https://www.hover.com/">hover.com</ExternalLink>.
        One problem I've had with Hover is that there are not a ton of resources
        that explain how to configure your domain. Because of that, I had to
        read through a few references before bradyanderson.tech was actually
        pointing to my Heroku application. Here is a recount of what I learned:
      </Paragraph>

      <h2>Step 1: Configure Heroku Domain Settings</h2>
      <Paragraph>
        First I needed to configure the domain settings on my Heroku
        application. Domain settings are found on the application dashboard
        within the settings tab.
      </Paragraph>
      <Figure
        path="/blog/categories/development/posts/custom-hover-domain-for-heroku-app/herokuDomainSettings.png"
        caption="Heroku domain settings."
        width={736}
        height={133}
      />
      <Paragraph>
        I clicked "Add Domain" and added "www.bradyanderson.tech" as the domain
        name (Note: the "www." is needed). I then copied the DNS target value,
        that's the hidden-blueberry-zold... value. I would need this value
        later.
      </Paragraph>

      <h2>Step 2: Configure Hover DNS</h2>
      <Paragraph>
        Next, I configured the Hover DNS settings. These settings are found in
        the Hover control panel in the DNS tab.
      </Paragraph>
      <Figure
        path="/blog/categories/development/posts/custom-hover-domain-for-heroku-app/hoverDNSSettings.png"
        caption="Hover DNS Settings."
        width={736}
        height={227}
      />
      <Paragraph>
        The important thing here was that Type CNAME with Host www is set to
        that value copied from the Heroku domain settings. I also needed to make
        sure Type A with host * and @ set to "64.98.145.30" (this IP address
        points to url.hover.com).
      </Paragraph>

      <h2>Step 3: Set Up Domain Forwarding</h2>
      <Paragraph>
        One thing I noticed is that I was able to access my website by typing in
        the URL "www.bradyanderson.tech", but not "bradyanderson.tech. Not
        including "www.", would result in an error saying the website could not
        be reached. It's not surprising that this happens due to how I
        configured the DNS.
      </Paragraph>
      <Figure
        path="/blog/categories/development/posts/custom-hover-domain-for-heroku-app/hoverForward.png"
        caption="Hover Forward Settings."
        width={736}
        height={123}
      />
      <Paragraph>
        Luckily the fix is pretty easy. I simply set up a forward on Hover so
        that "bradyanderson.tech" would redirect to "www.bradyanderson.tech".
      </Paragraph>

      <h2>Step 4: Upgrade my Heroku Dyno Because of SSL Issues</h2>
      <Paragraph>
        I was seeing an error in the browser console that read
        "ERR_SSL_PROTOCOL_ERROR". I didn't spend too much time trying to figure
        out why this was happening and just decided to get an SSL certificate
        for my domain. The simple solution was to upgrade to Heroku's Hobby tier
        which provides an SSL cert. This step was a little unfortunate because I
        haven't paid for Heroku in the past, but $7.00 a month isn't bad.
      </Paragraph>

      <h2>Step 5: Wait</h2>
      <Paragraph>
        It took about 15 minutes for the global DNS server to be updated and the
        SSL certificate to be signed. After that, I was able to access my Heroku
        app through the domain bradyanderson.tech on all of my devices.
      </Paragraph>

      <h2>References</h2>
      <ul>
        <li>
          <ExternalLink link="https://devcenter.heroku.com/articles/custom-domains">
            Heroku Custom Domain Names For Apps
          </ExternalLink>
        </li>
        <li>
          <ExternalLink link="http://brendan-quinn.xyz/post/pointing-hover-domain-to-your-heroku-app/">
            Pointing Hover Domain to Your Heroku App
          </ExternalLink>
        </li>
      </ul>
    </div>
  );
}

export default CustomHoverDomainForHerokuAppPost;
