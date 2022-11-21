import Figure from "../../../../general/Figure";
import Paragraph from "../../../../general/Paragraph";
import ExternalLink from "../../../../general/ExternalLink";
import Link from "next/link";
import Code from "../../../../general/Code";

function TakingAndConvertingScreenshotsPost() {
  const baseAssetPath = `/blog/categories/retro-computing/posts/taking-and-converting-screenshots`;
  return (
    <div>
      <Paragraph>
        My{" "}
        <Link href={"/blog/retro-computing/se30-ftp-connection"}>
          last blog post
        </Link>
        , was the first time I used screenshots taken on my Macintosh SE/30. At
        first, I was going to use an emulator to grab screenshots, but I figured
        that using screenshots taken on the actual hardware would be better.
        Getting the screenshots to my Windows PC and then converting them to
        modern/web-friendly format was not trivial however. Here is what I
        learned:
      </Paragraph>

      <h2>Taking Screenshots</h2>
      <Paragraph>
        Sometimes using macOS 7 (that’s the OS installed on my SE/30) feels like
        I’m running a modern operating system even though it’s 30-year-old. I
        was reminded of this when researching how to take screenshots. The
        keyboard shortcut for taking a screenshot is <strong>⌘-shift-3</strong>.
        If you’re a Mac user, you may realize that this is the same command used
        to take full screen screenshots on modern macOS as well.
      </Paragraph>
      <Figure
        path={`${baseAssetPath}/TestScreenshot.png`}
        width={468}
        height={313}
        caption="A screenshot taken on my SE/30."
      />

      <h2>Transferring Screenshots Using Floppy Disks </h2>
      <Paragraph>
        When I take a screenshot on macOS 7, it saves to the root directory of
        the hard drive (it may be possible to configure this, but I haven’t
        figured out how). I copied some screenshots I took onto a newly
        formatted floppy disk. When I moved the disk to my USB floppy disk
        reader on my Windows PC, however, I found I could copy any of the images
        off the disk.
      </Paragraph>
      <Figure
        path={`${baseAssetPath}/DiskFormat.png`}
        width={192}
        height={349}
        caption="Formatting a floppy disk on Windows."
      />
      <Paragraph>
        I tried again, but this time I formatted this disk from Windows (see
        picture above for the settings I used). When I put the disk in my Mac,
        it now shows up as an IBM formatted disk. I again copied some
        screenshots onto the disk and took it back to my Windows PC. This time,
        I could copy the images from the disk to the PC. The names of the disks
        had been changed (I’m guessing this is because of DOS only allowing a
        max of 8 characters for the filename and 3 for the extension), so I
        renamed each file and added “.pict” as the file extension. PICT is the
        format old Mac’s used to save screenshots as. The format is mostly
        unsupported nowadays.
      </Paragraph>
      <Figure
        path={`${baseAssetPath}/FileExplorer.png`}
        width={512}
        height={168}
        caption="Here’s what the files looked like before I transferred them off the floppy disk. You can see how the DOS format has shortened their original names."
      />

      <h2>Transferring Screenshots Using FTP</h2>
      <Paragraph>
        I recently set up an FTP client on the SE/30 so I can easily move files
        between computers. This was by far easier than using a floppy disk for
        transfers. For more details on the FTP, check out this{" "}
        <Link href={"/blog/retro-computing/se30-ftp-connection"}>post</Link>.
      </Paragraph>
      <Figure
        path={`${baseAssetPath}/Fetch.png`}
        width={468}
        height={313}
        caption="Transferring files via FTP."
      />

      <h2>Converting PICT Screenshots to PNG (Microsoft Word Hack)</h2>
      <Paragraph>
        I had a bit of trouble even viewing PICT files on Windows. Apparently
        PhotoShop partially supports the format, but I don’t have a PhotoShop
        subscription. The only other application I could find where I could view
        PICT files was Apple QuickTime. Apple no longer suggests that users have
        Windows QuickTime installed because of vulnerabilities, so this was less
        than ideal. That was until I found I could drag the PICT files into
        Microsoft Word and they would display. I could then right-click on the
        image and select “Save Picture As”, which would export the image as a
        PNG. In my time searching the internet for how to convert PICT files, I
        had never seen this listed as an option, so this was a surprise.
      </Paragraph>
      <Figure
        path={`${baseAssetPath}/Word.png`}
        width={384}
        height={407}
        caption="Saving a PICT file in Microsoft Word."
      />
      <Paragraph>
        I found a{" "}
        <ExternalLink link="https://support.microsoft.com/en-us/office/support-for-pict-images-is-being-turned-off-in-office-for-windows-e2c35537-f029-4f10-8650-211b388e20e8">
          blog post from Microsoft
        </ExternalLink>{" "}
        saying they were removing the support for PICT in Microsoft Word. My
        laptop is running the latest version of Word from Office 365, so maybe
        it’s just taking a very long time for this to take effect? It wouldn’t
        surprise me if this method is no longer viable in the future.
      </Paragraph>

      <h2>Converting PICT Screenshots to PNG (ImageMagick)</h2>
      <Figure
        path={`${baseAssetPath}/Convert.png`}
        width={672}
        height={190}
        caption="Converting a directory of screenshots using ImageMagick and Ubuntu WSL."
      />
      <Paragraph>
        Finding that Word could convert PICT was pretty cool, but it seemed like
        a hack, and I would prefer if I could convert pictures in bulk. That’s
        when I came across{" "}
        <ExternalLink link="https://github.com/ImageMagick/ImageMagick">
          ImageMagick
        </ExternalLink>
        . ImageMagick is an awesome tool that makes it super simple to convert
        almost any image into almost any format. I installed the command-line
        version of ImageMagick onto WSL Ubuntu.
      </Paragraph>
      <Paragraph>
        Converting a file called “screenshot.pict” to a png is as simple as:
      </Paragraph>
      <Code
        language="shell"
        path={baseAssetPath}
        filename="convertOneFile.sh.txt"
      />
      <Paragraph>
        Converting a whole directory full of .pict files to pngs is just as
        simple:
      </Paragraph>
      <Code
        language="shell"
        path={baseAssetPath}
        filename="convertMultipleFiles.sh.txt"
      />
      <Paragraph>
        This way is definitely much faster than using Word and it’s really cool
        how simple the command-line interface is. I bet I will use this tool a
        lot in the future.
      </Paragraph>
    </div>
  );
}

export default TakingAndConvertingScreenshotsPost;
