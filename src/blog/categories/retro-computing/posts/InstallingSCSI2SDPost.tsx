import BlogPost from "../../../blog-components/BlogPost";
import BlogLink from "../../../blog-components/BlogLink";
import BlogEmbeddedYouTubeVideo from "../../../blog-components/BlogEmbeddedYouTubeVideo";
import BlogImage from "../../../blog-components/BlogImage";
import { BlogPostProps } from "../../../../../types/Sitemap";
import BlogParagraph from "../../../blog-components/BlogParagraph";

function InstallingSCSI2SDPost(props: BlogPostProps) {
  const imageBasePath =
    "/blog/categories/retro-computing/posts/installing-scsi2sd-se30";
  return (
    <BlogPost {...props}>
      <BlogParagraph>
        My Macintosh SE/30 did not come with a hard drive when I bought it. All
        SE/30s originally came with a hard drive, so it seems like the one in my
        device had been removed at some point. While searching for replacements
        online, I came across the{" "}
        <BlogLink link="http://www.codesrc.com/mediawiki/index.php/SCSI2SD">
          SCSI2SD
        </BlogLink>{" "}
        which can be used in place of a hard drive. After doing a bit of
        research, I decided this would be the best "hard drive" for my
        Macintosh.
      </BlogParagraph>

      <BlogImage
        path={`${imageBasePath}/SCSI2SD.jpg`}
        maxWidth="16rem"
        caption="The SCSI2SD device."
      />

      <BlogParagraph>
        The SCSI2SD offers a lot of benefits over a traditional hard drive. Most
        importantly, many of the original hard drives that worked with the SE/30
        are starting to fail and are expensive. On top of this, the SCSI2SD
        allows you to have much more storage than the 80MBs that original hard
        drives typically had. Finally, you can initialize and pre-load the SD
        card with an operating system and applications which is increasingly
        important as it becomes harder to find people willing to part with their
        old Macintosh software.
      </BlogParagraph>

      <BlogParagraph>
        There are plenty of tutorials online about how to set up the SCSI2SD to
        run macOS. I won't spend time rehashing those tutorials because they
        already do a great job of saying explaining this (see links below).
        Instead, I'd like to talk about installing the device itself. Especially
        because my SE/30 did not come with any of the cables I needed to connect
        the SCSI2SD to the system which other tutorials did not talk about.
      </BlogParagraph>

      <BlogImage
        path={`${imageBasePath}/Materials.jpg`}
        maxWidth="32rem"
        caption="The materials needed to install the SCSI2SD."
      />

      <BlogParagraph>
        There were 5 things I needed to get the SCSI2SD working:
        <ol>
          <li>SD Card</li>
          <ul>
            <li>
              I picked up a 128GB SD card, but I didn't need that much storage.
              16GB or even 8GB would have been plenty.
            </li>
          </ul>
          <li>SCSI2SD</li>
          <ul>
            <li>
              I purchased mine from{" "}
              <BlogLink link="https://store.inertialcomputing.com/default.asp">
                Inertial Computing.
              </BlogLink>
            </li>
          </ul>

          <li>50-pin SCSI Internal Ribbon Cable</li>
          <ul>
            <li>
              There was an option to purchase at the same time as SCSI2SD from
              Inertial Computer, which is what I did. Can also be found on
              Amazon.
            </li>
          </ul>
          <li>
            4 Pin Molex to 3.5" Floppy Drive 4 Pin Female FDD Power Adapter
            Cable
          </li>
          <ul>
            <li>
              Purchased from{" "}
              <BlogLink link="https://www.amazon.com/gp/product/B0837D3Y5G/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1">
                Amazon
              </BlogLink>
              .
            </li>
          </ul>
          <li>Molex 1x4 M/M 10" Hard Drive Power Cable</li>
          <ul>
            <li>
              Purchased from{" "}
              <BlogLink link="https://www.ebay.com/itm/143540011005">
                eBay
              </BlogLink>
              .
            </li>
          </ul>
        </ol>
      </BlogParagraph>

      <BlogParagraph>
        After everything had arrived and I had set up my formatted my SD card
        and installed macOS 7 on it, I got to work installing the SCSI2SD:
      </BlogParagraph>

      <BlogImage
        path={`${imageBasePath}/Power2Analog.jpg`}
        maxWidth="24rem"
        caption="First I connected the Molex 1x4 cable to the analog board."
      />
      <BlogImage
        path={`${imageBasePath}/PowerCables.jpg`}
        maxWidth="24rem"
        caption="Next, I connected the 4 Pin Molex to 3.5 Floppy to the Molex 1x4 power cable."
      />
      <BlogImage
        path={`${imageBasePath}/SCSIToLogicBoard.jpg`}
        maxWidth="24rem"
        caption="I connected the 50-pin SCSI ribbon cabel to the logic board."
      />
      <BlogImage
        path={`${imageBasePath}/ConnectedSCSI2SD.jpg`}
        maxWidth="24rem"
        caption="Last, I connected the power and SCSI cables to the SCSI2SD."
      />
      <BlogParagraph>
        Once everything was together, I flipped on the system to see if it would
        work. Sure enough, I saw the "Welcome to Macintosh" message appear and,
        after a little bit. The system then started rebuilding the desktop
        image. When that finished, I was able to use macOS like normal. I
        restarted the system and it booted right to the desktop.
      </BlogParagraph>

      <BlogParagraph>
        Here's a video of me starting they system. I originally filmed this for
        an Instagram Story, so apologies for the vertical video.
      </BlogParagraph>
      <BlogEmbeddedYouTubeVideo url="https://www.youtube.com/embed/XCuxafr5Aqo" />

      <BlogParagraph>
        Having long-term storage working on my Macintosh has opened up a lot of
        possibilities for me. I no longer have to constantly flip out floppy
        disks, which was a pain. The SCSI2SD has also allowed me to pre-load my
        system with applications and games that I may have never been able to
        experience otherwise. I'm looking forward to what I'll do next with my
        SE/30.
      </BlogParagraph>

      <h2>Resources</h2>
      <ul>
        <li>
          <BlogLink link="http://www.codesrc.com/mediawiki/index.php/SCSI2SD">
            SCSI2SD Wiki
          </BlogLink>
        </li>
        <li>
          <BlogLink link="http://www.savagetaylor.com/2018/01/05/setting-up-your-vintage-classic-68k-macintosh-using-a-scsi2sd-adapter/">
            SCSI2SD: Using a SCSI2SD adapter to setup your 68k Macintosh
          </BlogLink>
        </li>
      </ul>
    </BlogPost>
  );
}

export default InstallingSCSI2SDPost;
