import Image from "../../../blog-components/Image";
import ExternalLink from "../../../blog-components/ExternalLink";
import Paragraph from "../../../blog-components/Paragraph";
import { BlogPostProps } from "../../../../../types/Sitemap";

function OpeningAMacSE30Post({ BlogPost }: BlogPostProps) {
  const imageBasePath =
    "/blog/categories/retro-computing/posts/opening-a-mac-se-30";

  return (
    <BlogPost>
      <Paragraph>
        On June 13th, I saw a Macintosh SE/30 at an antique store by my
        apartment. I've always wanted a retro Apple computer, but I knew almost
        nothing about them. After doing a little research, I learned that the
        SE/30 was the last and most powerful version of the compact black &
        white Macs produced. Pretty soon after learning this, I decided to
        purchase the computer.
      </Paragraph>

      <Image
        path={`${imageBasePath}/MacSE30.jpg`}
        maxWidth={"16rem"}
        caption="My Macintosh SE/30."
      />

      <Paragraph>
        I took the computer home, plugged it in, and saw an image of a floppy
        disk with a question mark in the middle. It seemed like this computer
        was unable to boot to an operating system. This was a little odd because
        the SE/30 originally came with a hard drive, but maybe the hard drive on
        this one was removed or not working? I'd have to open it to find out.
        The only problem is that I didn't have a screwdriver that was long
        enough to open the case.
      </Paragraph>

      <Image
        path={`${imageBasePath}/NoBoot.jpg`}
        maxWidth={"16rem"}
        caption="This is the image that shows when the SE/30 does not have any media to boot from."
      />

      <Paragraph>
        A few days later, I had secured myself a 12-inch T15 screwdriver. I
        needed a long screwdriver to be able to reach two of the hard-to-reach
        screws on the case, but 12-inches was a little overkill. I probably
        would have been okay with a 6-inch screwdriver.
      </Paragraph>

      <Image
        path={`${imageBasePath}/OpeningCase.jpg`}
        maxWidth={"16rem"}
        caption="Using a 12-inch T15 screwdriver to reach the hard to reach screws."
      />

      <Paragraph>
        I should stress that old CRTs can be dangerous and the CRT in this
        Macintosh is no exception. Luckily the SE/30 contains a bleeder resistor
        that should discharge the CRT, but I'm handling this machine as though
        that resistor isn't working and staying far away from the CRT
        components.
      </Paragraph>

      <Image
        path={`${imageBasePath}/CRT.jpg`}
        maxWidth={"24rem"}
        caption="The CRT (Needs some cleaning)."
      />

      <Paragraph>
        After sliding off the case, I got my first look inside the machine. The
        internals were due for some cleaning, but things looked pretty good for
        a 30-year-old computer.
      </Paragraph>
      <Paragraph>
        Sure enough, the one thing I don't see is a hard drive. That explains
        why the machine won't boot to an operating system.
      </Paragraph>

      <Image
        path={`${imageBasePath}/NoHardDrive.jpg`}
        maxWidth={"16rem"}
        caption="If there was a hard drive, it would sit under the CRT."
      />

      <Paragraph>
        Before I put the computer back together, I decided to take a look at the
        logic board and expansion card that came with this machine. I'll be back
        to do more with these components later.
      </Paragraph>

      <Image
        path={`${imageBasePath}/LogicBoard.jpg`}
        maxWidth={"24rem"}
        caption="If there was a hard drive, it would sit under the CRT."
      />

      <Paragraph>
        And of course, I wanted to take a quick look at the 16MHz Motorola 68030
        processor.
      </Paragraph>

      <Image
        path={`${imageBasePath}/Processor.jpg`}
        maxWidth={"16rem"}
        caption="The Motorola 68030."
      />

      <h2>Links</h2>
      <Paragraph>
        Here are some of the videos that taught me how to open the case on my
        Macintosh SE/30:
      </Paragraph>
      <ul>
        <li>
          <ExternalLink link="https://youtu.be/wXWlJFrX19s">
            The 8-bit Guy's Macintosh SE Restoration
          </ExternalLink>
        </li>
        <li>
          <ExternalLink link="https://youtu.be/bTNYQzDh_fI">
            Branchus Creations' Macintosh SE/30 Live Teardown
          </ExternalLink>
        </li>
      </ul>
    </BlogPost>
  );
}

export default OpeningAMacSE30Post;
