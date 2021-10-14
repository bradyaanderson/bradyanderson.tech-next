import BlogPost from "../../../blog-components/page-template/BlogPost";
import { BlogPostProps } from "../../../../../types/Sitemap";
import BlogParagraph from "../../../blog-components/BlogParagraph";
import BlogImage from "../../../blog-components/BlogImage";
import BlogEmbeddedYouTubeVideo from "../../../blog-components/BlogEmbeddedYouTubeVideo";
import { Link } from "react-router-dom";

function GameGearRepairPart1(props: BlogPostProps) {
  const baseImagePath = "/blog/categories/retro-gaming/game-gear-repair-part-1";
  return (
    <BlogPost {...props}>
      <BlogParagraph>
        The Sega Game Gear came out in 1990, less than 2 years after the
        Nintendo Game Boy. Unlike the Game Boy, though, the Game Gear has a
        back-lit color screen. The Game Gear was truly ahead of its time.
        However, you’ll almost always see them listed online as “for parts only”
        or “as-is”. The console is notorious for its bad capacitors, which means
        almost all Game Gears have stopped working unless someone has taken the
        time to make repairs.
      </BlogParagraph>
      <BlogParagraph>
        I’ve wanted to own a Game Gear for a while, but I was yet to come across
        one that was a reasonable price and worked. After waiting several years,
        I realized I would probably never find a cheap and working Game Gear, so
        I purchased a broken one, intending to fix it. My last repair, a
        Macintosh SE/30 logic board, hadn’t gone so well. However, this Game
        Gear was both cheap and already broken, so I figured it was worth
        trying.
      </BlogParagraph>

      <BlogImage
        path={`${baseImagePath}/GameGear.jpg`}
        maxWidth="32rem"
        caption="The broken Game Gear I purchased."
      />

      <BlogParagraph>
        The Game Gear I purchased arrived looking pretty good. It had some
        scratches and would need a good clean, but overall wasn’t bad. I tried
        to power it on and the screen flashed for half a second and then it
        powered back off.
      </BlogParagraph>
      <BlogParagraph>
        Now that I knew the system wouldn’t work, it was time for disassembly.
        First, I removed the back cover. In order to do this, I needed a small
        Phillips-head screwdriver and a 4.5mm GameBit screwdriver. If you’ve
        ever had to open an old Nintendo cartridge, you probably already own a
        GameBit screwdriver. If not, you can easily find them on Amazon or eBay
        for a few dollars.
      </BlogParagraph>

      <BlogImage
        path={`${baseImagePath}/GameGearBacksideInk.jpg`}
        maxWidth="32rem"
        caption="Back side of the Game Gear. I've marked Phillips-head screws that need to be removed in red and the 4.5mm GameBit screw in green."
      />

      <BlogParagraph>
        After taking out all the screws, I removed the back of the Game Gear to
        expose the internals. Inside, I could see the main PCB, sound PCB, and
        audio PCB:
      </BlogParagraph>

      <BlogImage
        path={`${baseImagePath}/GameGearBackOpen.jpg`}
        maxWidth="26rem"
        caption="The Game Gear after opening the back. On the bottom is the main PCB. The sound and power PCBs are located in the other part."
      />

      <BlogParagraph>
        The sound and power PCBs were both connected to the main PCB through
        some wire connectors. These connectors detach simply by pulling up on
        them. This separated the console into two parts: the front of the
        console, which contained the main PCB, screen, and speakers, and the
        back, which contained the sound and power PCBs. I focused my attention
        on the main board.
      </BlogParagraph>

      <BlogImage
        path={`${baseImagePath}/GameGearMainBoardAttached.jpg`}
        maxWidth="32rem"
        caption="The main PCB still attached to the case. The whole board is corroded, but it is especially evident on the left-side."
      />

      <BlogParagraph>
        The main PCB had clear signs of corrosion. I think this corrosion is
        probably from old capacitors or maybe old AA batteries left in the
        console too long. Luckily, the corrosion had not eaten through the
        circuit board and it looked like all the traces on the board were
        intact. I used another small Phillips-head screwdriver to remove the
        main PCB from the Game Gear case. Flipping over the PCB, I found the
        corrosion had even reached the front of the board.
      </BlogParagraph>

      <BlogImage
        path={`${baseImagePath}/GameGearMainBoardFront.jpg`}
        maxWidth="32rem"
        caption="The front of the main PCB with corrosion."
      />

      <BlogParagraph>
        One of the best ways to get rid of corrosion on PCBs is with an
        ultrasonic cleaner. Unfortunately, I don’t own one, so I clean the board
        with isopropyl alcohol, cotton swabs, and a toothbrush. I dipped the
        cotton swabs and toothbrush in the alcohol and gave each part of the
        main board a thorough scrubbing. Here is a video I took that shows the
        immediate effect the alcohol had on the corrosion:
      </BlogParagraph>

      <BlogEmbeddedYouTubeVideo url="https://www.youtube.com/embed/vgatA45Vgqw" />

      <BlogParagraph>
        After some scrubbing, the main board was looking pretty good. This is
        what it looked like when I finished:
      </BlogParagraph>

      <BlogImage
        path={`${baseImagePath}/GameGearMainBoardCleaned.jpg`}
        maxWidth="32rem"
        caption="The main PCB after being cleaned."
      />

      <BlogParagraph>
        Now it was time to move onto the sound and power PCBs:
      </BlogParagraph>

      <BlogImage
        path={`${baseImagePath}/GameGearPowerAndSoundAttached.jpg`}
        maxWidth="32rem"
        caption="The back side of the Game Gear with sound and power PCBs still attached."
      />

      <BlogParagraph>
        Using my small Phillips-head screwdriver, I removed the metal shielding
        around the game slot. I then used the same screwdriver to remove the
        screws holding the power PCB to the case.
      </BlogParagraph>

      <BlogImage
        path={`${baseImagePath}/GameGearPowerBoard.jpg`}
        maxWidth="26rem"
        caption="The power PCB."
      />

      <BlogParagraph>
        Using the isopropyl alcohol, cotton swabs, and a toothbrush again, I
        gave this board a good clean. Then I moved onto the sound PCB. Removing
        this was a little more complicated. There is a black plastic shield
        which separates the board from the battery compartment. There was just
        some old glue keeping it attached, so I pulled it off and set it aside.
        I could then use my screwdriver to remove any screws keeping the sound
        board attached to the case.
      </BlogParagraph>

      <BlogImage
        path={`${baseImagePath}/GameGearSoundBoard.jpg`}
        maxWidth="26rem"
        caption="The sound PCB."
      />

      <BlogParagraph>
        The sound PCB received the same cleaning treatment as the main and power
        PCBs. Now all PCBs were devoid of corrosion. Just in case this corrosion
        was the reason the Game Gear wouldn’t stay powered on, I connected all
        the components and flipped the power switch. The system again turned on
        and then immediately off. Looks like I’d be needing to replace some
        capacitors.
      </BlogParagraph>
      <BlogParagraph>
        <Link to={"game-gear-repair-part-2"}>Continued in part 2.</Link>
      </BlogParagraph>
    </BlogPost>
  );
}

export default GameGearRepairPart1;
