import BlogPost from "../../../blog-components/BlogPost";
import BlogImage from "../../../blog-components/BlogImage";
import { BlogPostProps } from "../../../../../types/Sitemap";
import BlogLink from "../../../blog-components/BlogLink";
import BlogParagraph from "../../../blog-components/BlogParagraph";

function OpeningAMacSE30Post({ title }: BlogPostProps) {
  const imageBasePath =
    "/blog/categories/retro-computing/posts/opening-a-mac-se-30";

  return (
    <BlogPost
      title={title}
      date="08/05/2021 (based off an Instagram story from 06/16/2021)"
    >
      <BlogParagraph>
        On June 13th, I saw a Macintosh SE/30 at an antique store by my
        apartment. I've always wanted a retro Apple computer, but I knew almost
        nothing about them. After doing a little research, I learned that the
        SE/30 was the last and most powerful version of the compact black &
        white Macs produced. Pretty soon after learning this, I decided to
        purchase the computer.
      </BlogParagraph>

      <BlogImage
        path={`${imageBasePath}/MacSE30.jpg`}
        maxWidth={"16rem"}
        caption="My Macintosh SE/30."
      />

      <BlogParagraph>
        I took the computer home, plugged it in, and saw an image of a floppy
        disk with a question mark in the middle. It seemed like this computer
        was unable to boot to an operating system. This was a little odd because
        the SE/30 originally came with a hard drive, but maybe the hard drive on
        this one was removed or not working? I'd have to open it to find out.
        The only problem is that I didn't have a screwdriver that was long
        enough to open the case.
      </BlogParagraph>

      <BlogImage
        path={`${imageBasePath}/NoBoot.jpg`}
        maxWidth={"16rem"}
        caption="This is the image that shows when the SE/30 does not have any media to boot from."
      />

      <BlogParagraph>
        A few days later, I had secured myself a 12-inch T15 screwdriver. I
        needed a long screwdriver to be able to reach two of the hard-to-reach
        screws on the case, but 12-inches was a little overkill. I probably
        would have been okay with a 6-inch screwdriver.
      </BlogParagraph>

      <BlogImage
        path={`${imageBasePath}/OpeningCase.jpg`}
        maxWidth={"16rem"}
        caption="Using a 12-inch T15 screwdriver to reach the hard to reach screws."
      />

      <BlogParagraph>
        I should stress that old CRTs can be dangerous and the CRT in this
        Macintosh is no exception. Luckily the SE/30 contains a bleeder resistor
        that should discharge the CRT, but I'm handling this machine as though
        that resistor isn't working and staying far away from the CRT
        components.
      </BlogParagraph>

      <BlogImage
        path={`${imageBasePath}/CRT.jpg`}
        maxWidth={"24rem"}
        caption="The CRT (Needs some cleaning)."
      />

      <BlogParagraph>
        After sliding off the case, I got my first look inside the machine. The
        internals were due for some cleaning, but things looked pretty good for
        a 30-year-old computer.
      </BlogParagraph>
      <BlogParagraph>
        Sure enough, the one thing I don't see is a hard drive. That explains
        why the machine won't boot to an operating system.
      </BlogParagraph>

      <BlogImage
        path={`${imageBasePath}/NoHardDrive.jpg`}
        maxWidth={"16rem"}
        caption="If there was a hard drive, it would sit under the CRT."
      />

      <BlogParagraph>
        Before I put the computer back together, I decided to take a look at the
        logic board and expansion card that came with this machine. I'll be back
        to do more with these components later.
      </BlogParagraph>

      <BlogImage
        path={`${imageBasePath}/LogicBoard.jpg`}
        maxWidth={"24rem"}
        caption="If there was a hard drive, it would sit under the CRT."
      />

      <BlogParagraph>
        And of course, I wanted to take a quick look at the 16MHz Motorola 68030
        processor.
      </BlogParagraph>

      <BlogImage
        path={`${imageBasePath}/Processor.jpg`}
        maxWidth={"16rem"}
        caption="The Motorola 68030."
      />

      <h2>Links</h2>
      <BlogParagraph>
        Here are some of the videos that taught me how to open the case on my
        Macintosh SE/30:
      </BlogParagraph>
      <ul>
        <li>
          <BlogLink link="https://youtu.be/wXWlJFrX19s">
            The 8-bit Guy's Macintosh SE Restoration
          </BlogLink>
        </li>
        <li>
          <BlogLink link="https://youtu.be/bTNYQzDh_fI">
            Branchus Creations' Macintosh SE/30 Live Teardown
          </BlogLink>
        </li>
      </ul>
    </BlogPost>
  );
}

export default OpeningAMacSE30Post;
