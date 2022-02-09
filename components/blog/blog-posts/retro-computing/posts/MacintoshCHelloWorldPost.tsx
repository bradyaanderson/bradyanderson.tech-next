import Image from "../../../../general/S3Image";
import { BlogPostProps } from "../../../../../types/Sitemap";
import Paragraph from "../../../../general/Paragraph";
import ExternalLink from "../../../../general/ExternalLink";

function MacintoshCHelloWorldPost({ BlogPost }: BlogPostProps) {
  const baseImagePath =
    "/blog/categories/retro-computing/posts/macintosh-c-hello-world";
  return (
    <BlogPost>
      <Paragraph>
        I’m not an expert at C programming, but I love C. It sometimes feels a
        little antiquated compared to languages like Java or C#, but it’s
        definitely not obsolete. In fact, it excited me to learn that you could
        use C to create applications for 86k Macintoshes. I thought it would be
        fun to try it. Of course, before I did anything too intensive, I wanted
        to create a humble “Hello World” program.
      </Paragraph>
      <Paragraph>
        Even before I could write a Hello World program, I would need to set up
        a development environment. I chose to use THINK C. From my research;
        THINK C is easy to use because it comes with all the tools you need to
        write, build, and debug C code, while also providing the ability to use
        the machine to its full potential (without having to dive into
        assembly). Macintosh Repository hosts a download of{" "}
        <ExternalLink link="https://www.macintoshrepository.org/1417-symantec-think-c-5-0">
          THINK C
        </ExternalLink>
        , meaning it was easy to get and another reason I chose THINK C.
      </Paragraph>

      <Image
        path={`${baseImagePath}/ThinkCInstall.png`}
        maxWidth="32rem"
        caption="Besides the application, THINK C came with several folders of content."
      />

      <Paragraph>
        Once I had THINK C installed, I started the main application. This
        opened up a finder where I could choose to open an existing project or
        create a new one. I clicked “New” and chose a name and location to save
        my new project..
      </Paragraph>

      <Image
        path={`${baseImagePath}/NewProject.png`}
        maxWidth="32rem"
        caption="The new project dialog. I’m choosing to name this new project HelloWorld."
      />

      <Paragraph>
        After clicking “Create”, the THINK C project window appears. It’s pretty
        empty right now, but that’s soon to change.
      </Paragraph>

      <Image
        path={`${baseImagePath}/EmptyProject.png`}
        maxWidth="32rem"
        caption="The empty project window."
      />

      <Paragraph>
        It’s time to code. Using the Apple Menu, I open a new file. (File -{">"}{" "}
        New). I typed out a simple Hello World program. I’ve added no bells or
        whistles to this program. All I want to do is print some text.
      </Paragraph>

      <Image
        path={`${baseImagePath}/Code.png`}
        maxWidth="32rem"
        caption="Here’s my basic Hello World. As you can see, there’s nothing special here. If you wanted, you could compile this code on any modern computer and get the same results."
      />

      <Paragraph>
        I saved my new file as hello.c. Then I navigated back to the THINK C
        project view. Even though I had just saved my new C file, THINK C did
        not automatically add the file to the project. Using the Apple menu, I
        navigated Source -{">"} Add… . This opened a finder dialog. I found the
        hello.c file which I had just created and hit “Add”. I closed the dialog
        by clicking “Done”.
      </Paragraph>
      <Paragraph>
        At this point, I tried to build the application, but it failed. There
        was an error that read “link failed” and some additional information
        stating, “undefined: printf”. I had imported {"<stdio.h>"}, so I wasn’t
        expecting printf to be undefined. After some research, I realized I also
        need to include the ANSI library in the project.
      </Paragraph>
      <Paragraph>
        The ANSI C Standard Library contains {"<studio.h>"} among other standard
        imports. In modern C programming, you wouldn’t need to include this
        library when compiling, but that’s not the case with THINK C. Luckily,
        THINK C came with several libraries pre-installed, including ANSI. Using
        Source -{">"} Add…, I added the ANSI library (I found the library in the
        “C Libraries” folder).
      </Paragraph>

      <Image
        path={`${baseImagePath}/Project.png`}
        maxWidth="32rem"
        caption="My Hello World project after adding hello.c and ANSI library."
      />

      <Paragraph>
        Now it was time to build again. Through the Apple Menu I navigated to
        “Build Application” (Project -{">"} Build Application…). This popped up
        a dialog which read, “Bring the project up to date?” I clicked “Yes”.
        Another pop up appeared which let me choose where I wanted to save the
        application that was to be built. I picked a location, and the
        application started building.
      </Paragraph>
      <Paragraph>
        After a few seconds, the process completed. Using the file finder, I
        found the application I had just built and saved. I double clicked on
        the new application to open it and saw “Hello World!” appear on screen.
      </Paragraph>

      <Image
        path={`${baseImagePath}/HelloWorld.png`}
        maxWidth="32rem"
        caption='"Hello World!" printed on screen'
      />
    </BlogPost>
  );
}

export default MacintoshCHelloWorldPost;
