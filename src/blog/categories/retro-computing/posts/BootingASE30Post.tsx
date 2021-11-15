import Image from "../../../blog-components/Image";
import { BlogPostProps } from "../../../../../types/Sitemap";
import ExternalLink from "../../../blog-components/ExternalLink";
import Paragraph from "../../../blog-components/Paragraph";

function BootingASE30Post({ BlogPost }: BlogPostProps) {
  const imageDirectory =
    "/blog/categories/retro-computing/posts/booting-an-se30";
  return (
    <BlogPost>
      <Paragraph>
        In my last post, I wrote about how I discovered my Macintosh SE/30
        didn't have a hard drive. This explained why the computer didn't boot to
        an operating system when I turned it on. On a modern computer, this
        would be pretty problematic. I suppose you could boot off a flash drive
        or even a CD, but the experience would be sub-optimal.
      </Paragraph>
      <Paragraph>
        Luckily, these old black & white Macintosh computers didn't always have
        long-term storage, so they can pretty easily be used only floppy disks.
        The only problem is that I didn't own any floppy disks...
      </Paragraph>
      <Paragraph>
        About a week later though, I was a proud owner of 50 recycled
        high-density floppy disks from eBay and a cheap external USB floppy
        drive from Amazon.
      </Paragraph>

      <Image
        path={`${imageDirectory}/floppies.jpg`}
        caption="My stack of recycled floppies. A lot of them are old Windows disks."
        maxWidth="24rem"
      />

      <Paragraph>
        One of the best parts of the SE/30 is that it has a high-density floppy
        disk drive built-in. Most of the earlier models of the Macintosh came
        with a 400K or 800K floppy drive. It's much harder to find these disks,
        and I'm not sure they make external USB drives that can write to them.
      </Paragraph>
      <Paragraph>
        Now that I had to the disk, I had to track down an OS Image to image to
        the floppy disk. The Internet Archive made this pretty simple by
        providing the two ISO images for{" "}
        <ExternalLink link="https://archive.org/details/mac_MacOS_6.0.8">
          macOS System 6.0.8 boot disk and system additions disk
        </ExternalLink>
        .
      </Paragraph>
      <Paragraph>
        Note: The SE/30 could easily run macOS System 7, but System 6 is better
        suited for systems without hard drives.
      </Paragraph>

      <Image
        path={`${imageDirectory}/write.jpg`}
        caption="The cheap USB floppy drive that I got off Amazon."
        maxWidth="24rem"
      />

      <Paragraph>
        Getting System 6 imaged to floppy disk took longer than expected. I used{" "}
        <ExternalLink link="http://www.winimage.com/download.htm">
          WinImage
        </ExternalLink>{" "}
        to write the images. For more details on how to create a boot disk using
        WinImage, checkout this Terry Stewart's Blog Post on{" "}
        <ExternalLink link="https://www.classic-computers.org.nz/blog/2011-12-29-disk-from-images-mac.htm">
          Making vintage Macintosh boot or system disks
        </ExternalLink>
        .
      </Paragraph>
      <Paragraph>
        Writing an image to a floppy disk already takes a couple of minutes even
        though it can only hold 1.44MB. However, after writing the image
        WinImage would verify that the image was correct. This step would fail
        almost every time. I tried booting off a disk that failed to verify a
        few times but had no luck. It took almost 2 hours of constant retries
        before I got a disk that passed the verify step.
      </Paragraph>

      <Paragraph>
        I don't know why it took so long to create a usable boot disk. I have a
        few guesses though:
        <ul>
          <li>My use of recycled floppy disks.</li>
          <ul>
            <li>
              {" "}
              Who knows how much use these disks had seen before I got to them.
            </li>
          </ul>
          <li>
            The cheap USB floppy drive I was using.
            <ul>
              <li>
                I've had a few USB floppy drives before and they all look the
                same but have a different sticker logo attached to them. I'm
                pretty sure they are just mass-produced for pennies, bought by a
                reseller, and sold at a mark-up.
              </li>
            </ul>
          </li>
        </ul>
      </Paragraph>

      <Image
        path={`${imageDirectory}/welcome.jpg`}
        caption="The welcome message. The weird camera angle is to try and reduce some of the lines you see when trying to capture a picture of a CRT."
        maxWidth="16rem"
      />

      <Paragraph>
        After spending so long constantly restarting WinImage, I was ready to
        give up. Right before I packed up for the night though, I noticed the
        write had passed 50% verification. Then it passed 75%, then 90%, and
        finally 100%. I couldn't believe it.
      </Paragraph>
      <Paragraph>
        I ejected the disk for the USB drive and nervously inserted it into my
        Macintosh. I turned on the power and after a few seconds, I saw "Welcome
        to Macintosh." I let out a little bit of a yell when this happened. I
        was not expecting it to work.
      </Paragraph>
      <Paragraph>
        There wasn't much I could do when the OS finished loading. Using the
        mouse I was able to open the calculator and check out a few of the other
        built-in apps. I noticed my keyboard didn't work though... But that
        would be a problem for a different night.
      </Paragraph>
    </BlogPost>
  );
}

export default BootingASE30Post;
