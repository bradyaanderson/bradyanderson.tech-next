import BlogPost from "../../../../common/BlogPost";
import BlogImage from "../../../../common/BlogImage";
import { BlogPostProps } from "../../../../../types/Sitemap";

const imageBasePath =
  "/blog/categories/retro-computing/posts/se30-keyboard-fix";

function FixingKeyboardPost({ title }: BlogPostProps) {
  return (
    <BlogPost title={title} date="08/14/2021">
      <pre>
        When trying to solve a problem, I can sometimes fail to see the simple
        solution right in front of me. This time, however, I'm glad to admit
        that I didn't fall into this trap.
      </pre>
      <pre>
        As mentioned in my last blog post, the keyboard that came with my
        Macintosh SE/30 didn't seem to be working. I assumed the worst and took
        a quick look at replacements on eBay. The prices varied a lot, but it
        seemed like it could cost me up to 60 dollars to get a new keyboard
        compatible with my SE/30. Because of that, I decided to take a stab at
        trying to fix the keyboard myself.
      </pre>

      <BlogImage
        path={`${imageBasePath}/keyboard.jpg`}
        maxWidth="32rem"
        caption="The Apple II Keyboard that came with my SE/30."
      />

      <pre>
        I got out my screwdriver so that I could get to the internals of the
        keyboard, but then I remembered to check the cable that connects the
        keyboard to the computer. This cable is an Apple Desktop Bus (ADB)
        cable. The pinout on this cable has four pins which, for the most part,
        are unprotected and can break easily. After taking a quick look, I
        noticed a pin was bent out of shape. I tried straightening the pin and
        it snapped... Whoops.
      </pre>

      <BlogImage
        path={`${imageBasePath}/bentPin.jpg`}
        maxWidth="32rem"
        caption="You can see the bent pin here. I did my best to try and make it as clear as possible, but I do not have a good macro camera."
      />

      <pre>
        I found myself back on eBay searching for an ADB cable. They were around
        $10. Not bad, but it would also take a week for the cable to get here,
        and I was dying to use the Macintosh.
      </pre>
      <pre>
        Earlier, while attempting to fix the ADB cable, I kept thinking about
        how familiar it looked and also how similar this problem was to when I
        was trying to fix the S-Video output on my PlayStation 2. That's when it
        clicked: not only was the problem similar, but ADB and S-Video use the
        same pinout.
      </pre>
      <pre>
        This changed things a bit. Not only is it a lot easier to find an
        S-Video cable (Amazon can deliver one in 2 days for $5), but I already
        had a spare S-Video cable.
      </pre>

      <pre>
        Like a lot of people I know, I have a big mess of cables stored away.
        I've always kept these cables with the assumption that I may need one of
        these cables someday, and this was a perfect example of how I may in
        fact "need one of these cables someday." So I dug through the mess and
        eventually found an S-Video cable.
      </pre>

      <BlogImage
        path={`${imageBasePath}/messOfCables.jpg`}
        maxWidth="16rem"
        caption="My mess of cables. There is an S-Video cable in here somewhere."
      />

      <pre>
        I double-checked that the ADB and S-Video cable looked the same and sure
        enough, they did. Plugging the cable into the port on the SE/30 and the
        keyboard also confirmed this.
      </pre>

      <BlogImage
        path={`${imageBasePath}/comparison.jpg`}
        maxWidth="24rem"
        caption="ADB compared to S-Video. Again, I've adjusted some settings to try and make the pinouts more visible, but it's still pretty hard to see."
      />
      <pre>
        Finally, I turned on the SE/30, waited for it to boot, and opened the
        text editor that came with macOS 6. My instinct is to type "Hello World"
        anytime I'm presented with a text editor and don't know what to type, so
        that's exactly what I did.
      </pre>

      <BlogImage
        path={`${imageBasePath}/helloWorld.jpg`}
        maxWidth="20rem"
        caption='"Hello World" typed into the text editor on the SE/30.'
      />

      <pre>
        And there it was on the screen: "Hello World". The first words that I
        had ever typed on my SE/30.
      </pre>
      <pre>
        In some ways, the solution to fixing my keyboard was a little
        anti-climactic, but I'm pretty happy with it. I'm glad I didn't spend a
        lot of time tearing apart the keyboard and ultimately not finding the
        problem, and I'm also glad that I found a simpler solution than buying a
        new ADB cable. There will still be times in the future that I miss
        simple solutions like this, but maybe I'll remember how I fixed my Apple
        Keyboard II and check the simple things before I dive in too deep.
      </pre>
    </BlogPost>
  );
}

export default FixingKeyboardPost;
