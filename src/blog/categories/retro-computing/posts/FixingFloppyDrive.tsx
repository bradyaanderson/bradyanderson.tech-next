import BlogPost from "../../../blog-components/page-templates/BlogPost";
import { BlogPostProps } from "../../../../../types/Sitemap";
import Paragraph from "../../../blog-components/Paragraph";
import Image from "../../../blog-components/Image";
import EmbeddedYouTubeVideo from "../../../blog-components/EmbeddedYouTubeVideo";

function FixingFloppyDrive(props: BlogPostProps) {
  const baseImagePath =
    "/blog/categories/retro-computing/posts/floppy-drive-fix";
  return (
    <BlogPost {...props}>
      <Paragraph>
        After retrobrighting my Macintosh SE/30’s case, I reinstalled all the
        internal components back into the case. I spent some time testing some
        already installed software and then inserted a floppy disk. The computer
        was able to read the disk without issue, but when I tried to eject it, I
        heard a whirring sound coming from the floppy drive. The disk didn’t
        eject from the drive. I tried again, but the disk continued to stay in
        the machine.
      </Paragraph>
      <Paragraph>
        Unlike a lot of floppy disk drives, the 1.4 MB SuperDrive in the
        Macintosh SE/30 does not provide an easy way to eject disks manually.
        There is a small hole in the case next to the floppy disk entry, which
        lets you force eject if you stick in something small like a paperclip. I
        used a paperclip to manually eject disks for a few days, but eventually,
        I got annoyed and decided it was time to fix the problem.
      </Paragraph>
      <Paragraph>
        First, I took apart my SE/30 and removed the floppy disk drive from the
        inside:
      </Paragraph>

      <Image
        path={`${baseImagePath}/FloppyDriveInCase.jpg`}
        maxWidth="26rem"
        caption="The 1.4 MB SuperDrive still in metal cage."
      />

      <Paragraph>
        Next, I removed the 4 Phillips head that attaches the SuperDrive to the
        metal cage. The screws were tighter than I expected. I almost stripped
        one screw head.
      </Paragraph>
      <Paragraph>
        I didn’t know what was causing the auto-eject mechanism to fail, but I
        figured the best place to start would be the motor which ejects the
        disk. I found a YouTube video from Branchus Creations, walked through
        the different parts of the floppy disk drive, including where to find
        the auto-eject motor:
      </Paragraph>

      <Image
        path={`${baseImagePath}/FloppyDriveInk.jpg`}
        maxWidth="26rem"
        caption="Floppy drive with auto-eject motor outlined."
      />

      <Paragraph>
        I removed the motor and opened it up to reveal the gears inside:
      </Paragraph>

      <Image
        path={`${baseImagePath}/EjectMotor.jpg`}
        maxWidth="26rem"
        caption="The eject motor after removing cover and exposing gears."
      />

      <Paragraph>
        Another thing I learned from watching the Branchus Creations video is
        that the yellow gear (see above) in many of these motors is degrading
        and the teeth are wearing down. My yellow gear looked okay at first
        until I removed it to inspect:
      </Paragraph>

      <Image
        path={`${baseImagePath}/Gears.jpg`}
        maxWidth="26rem"
        caption="A regular motor gear next to the broken yellow gear."
      />

      <Paragraph>
        Sure enough, some teeth on my gear were missing. This was most likely
        the reason my floppy drive failed to eject.
      </Paragraph>
      <Paragraph>
        Thanks to 3D printing, it’s easy to get a replacement gear. I found one
        on eBay for about $9. That felt like a lot of money given how small the
        part is and cheap it is to 3D print something. I may have to get my own
        3D printer some day.
      </Paragraph>

      <Image
        path={`${baseImagePath}/3DPrintedGear.jpg`}
        maxWidth="18rem"
        caption="The 3D printed gear that I purchased."
      />

      <Paragraph>
        When the 3D printed replacement gear arrived, I installed it into the
        floppy drive motor and put everything back together. I turned on the
        Mac, waited for it to boot, and inserted a floppy disk. The floppy disk
        icon appeared on the desktop, and I dragged it to the trash can (a
        shortcut for ejecting a disk). This time, the disk popped right out:
      </Paragraph>

      <EmbeddedYouTubeVideo url="https://www.youtube.com/embed/fXSZAb9PV8Q" />

      <Paragraph>
        Now that my drive is working again, I still have a little work to do.
        The eject mechanism is a lot louder now. I probably just need to give
        the drive a good clean and regrease the eject motor now that I’ve
        introduced a new gear. Other than that, it’s great to no longer have to
        use a paperclip to remove eject floppy disks from my Macintosh. Maybe
        now I can finally spend less time on fixing the hardware of this machine
        and start experimenting with the software.
      </Paragraph>
    </BlogPost>
  );
}

export default FixingFloppyDrive;
