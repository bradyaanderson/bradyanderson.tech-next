import Image from "../../../../general/S3Image";
import Paragraph from "../../../../general/Paragraph";
import Link from "next/link";
import ExternalLink from "../../../../general/ExternalLink";

function MacintoshCAdvancedHelloWorld() {
  const baseAssetPath = `/blog/categories/retro-computing/posts/macintosh-c-advanced-hello-world`;
  return (
    <div>
      <Paragraph>
        In my <Link href={"/blog/retro-computing/macintosh-c-hello-world"}>last post</Link>, I created
        a very simple Hello World C program on my Macintosh SE/30 using THINK C.
        This program used printf to print out to the screen. While this worked,
        it isn't the Macintosh-way of doing things. So I'll be taking advantage
        of the Macintosh Toolbox to create a more advanced Hello World program.
      </Paragraph>
      <Paragraph>
        First, what is the Macintosh Toolbox? As the name implies, it's a set of
        tools that assists with creating applications for the Macintosh. These
        tools include things such as a window manager and QuickDraw, which helps
        to draw graphics on the screen. If you've ever used a 68K Mac, you'll
        notice how many programs have a similar look and feel. This is partially
        thanks to the Toolbox and the handy tools it provides to simplify
        application development.
      </Paragraph>

      <Paragraph>
        With the help of the book <em>Macintosh C Programming By Example</em>{" "}
        and <em>Inside Macintosh, Volume I</em>, I could create a Hello World
        program using the Toolbox. I've done my best to explain what is going on
        through comments. You can find the code in this{" "}
        <ExternalLink
          link={
            "https://gist.github.com/bradyaanderson/356d7017e3efc71bcbe427e0798de627"
          }
        >
          GitHub Gist
        </ExternalLink>
        .
      </Paragraph>

      <Paragraph>
        Before I could build the application, I needed to add the MacTraps
        Library to my project. This library contains functions and variables
        related to the Mac Toolbox.
      </Paragraph>
      <Image
        path={`${baseAssetPath}/project.png`}
        maxWidth={"32rem"}
        caption={"The project with c file and MacTraps Library."}
      />

      <Paragraph>
        With the library added, I compiled the program and built a new
        application. Here's what it looked like when I ran it:
      </Paragraph>

      <Image
        path={`${baseAssetPath}/HelloWorld.jpg`}
        maxWidth={"32rem"}
        caption={
          "I couldn't take a screenshot of the program because of the way I'm handling events. As I write programs to handle more advanced events, I hope to fix this."
        }
      />

      <Paragraph>
        And that's the more advanced Hello World program. By taking advantage of
        the Macintosh Toolbox, I've been able to create a program that more
        closely follows how 68k Macintosh programs were written. I'm hoping to
        continue building more advanced programs soon.
      </Paragraph>

      <h2>Resource</h2>
      <ul>
        <li><ExternalLink link={"https://gist.github.com/bradyaanderson/356d7017e3efc71bcbe427e0798de627"}>Source Code</ExternalLink></li>
      </ul>
    </div>
  );
}

export default MacintoshCAdvancedHelloWorld;
