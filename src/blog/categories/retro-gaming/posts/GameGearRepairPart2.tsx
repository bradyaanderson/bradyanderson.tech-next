import BlogPost from "../../../blog-components/BlogPost";
import { BlogPostProps } from "../../../../../types/Sitemap";
import BlogParagraph from "../../../blog-components/BlogParagraph";
import BlogImage from "../../../blog-components/BlogImage";
import BlogEmbeddedYouTubeVideo from "../../../blog-components/BlogEmbeddedYouTubeVideo";
import { Link } from "react-router-dom";
import BlogLink from "../../../blog-components/BlogLink";

function GameGearRepairPart2({ title }: BlogPostProps) {
  const baseImagePath = "/blog/categories/retro-gaming/game-gear-repair-part-2";
  return (
    <BlogPost title={title} date="10/02/2021">
      <BlogParagraph>
        In <Link to={"game-gear-repair-part-1"}>part 1</Link>, I started my
        repair of a broken Game Gear by disassembling it and cleaning corrosion
        off of its PCBs. I mentioned how even after the cleaning, the Game Gear
        would only stay powered on for about a second, which was probably
        because of old capacitors (a very common problem with Game Gears). Now
        it was time to try replacing the capacitors.
      </BlogParagraph>
      <BlogParagraph>
        I figured I’d start with recapping the power PCB first. If I had more
        experience with repairs, I might have been able to diagnose the problem
        with the Game Gear before I started. My logic, though, was that because
        of the problem with the console staying powered on, I should start with
        the component responsible for regulating power.
      </BlogParagraph>
      <BlogParagraph>
        I brought out my soldering iron and desoldered all the capacitors on the
        power PCB. These capacitors are through-hole. This made desoldering
        simple because I could find where each capacitor was soldered on the
        back of the board, heat this solder with my iron, and pull on the
        capacitor on the opposite side to remove it. I used solder wick to clean
        up the excess solder. Once I had removed all three capacitors, my board
        looked like this:
      </BlogParagraph>

      <BlogImage
        path={`${baseImagePath}/CapacitorsRemoved.jpg`}
        caption="The Power PCB with capacitors removed."
        maxWidth="24rem"
      />

      <BlogParagraph>
        In the picture above, you can see how each location where a capacitor
        used to be is marked with a unique number. In the case of the power PCB
        on my Game Gear,AC the capacitors are labeled as C5, C11, and C12 (some
        Game Gears have slightly different board layouts). Before taking off
        each capacitor, I had recorded each capacitor’s capacitance and voltage:
        <ul>
          <li>C5 - 22μF 35V</li>
          <li>C11 - 100μF 25V</li>
          <li>C13 - 820μF 6.3V</li>
        </ul>
      </BlogParagraph>
      <BlogParagraph>
        I had done little with capacitors since high school AP physics, but I
        remembered that the voltage written on a capacitor is the maximum
        voltage it can withstand. So using a capacitor with a higher voltage
        rating shouldn’t pose any issue. I then learned that I didn’t need to
        match the capacitance exactly, but could use ones with a slightly higher
        capacitance. I decided I wouldn’t exceed 20% of the original
        capacitance. This came in handy, as I already owned some capacitors that
        met these criteria. For example, I had a 1000μF 10v capacitor which I
        could use for C13 instead of exactly matching 820μF 6.3V. There were a
        few capacitors like C5 (22μF 35V) that I didn’t have a suitable
        replacement for, so I ordered a capacitor kit online.
      </BlogParagraph>
      <BlogParagraph>
        While I waited for the new capacitors to arrive, I had some fun with
        some jumper wires, a breadboard, and the capacitors I already had to see
        if I could get the power PCB working properly. This reminded me of
        another thing I learned in physics, which is that total capacitance of
        capacitors in series is calculated by adding up the reciprocal of each
        capacitor’s capacitance and then taking the reciprocal of that value (
        <BlogLink link="https://www.khanacademy.org/science/physics/circuits-topic/circuits-with-capacitors/v/capacitors-series">
          Khan Academy
        </BlogLink>{" "}
        can help explain that). Although that sounds complicated, with some
        planning you create a circuit with that capacitance you need pretty
        easily on a breadboard. In my case, I used three 100μF in series (that’s
        a total capacitance of 33.33μF) to substitute for C5’s 22μF capacitor.
      </BlogParagraph>
      <BlogParagraph>
        After hooking everything up to the breadboard, I turned on the power and
        saw no smoke. That seemed like a good sign, so I got out my multimeter
        and tested the voltages coming off of the pinout of the power PCB.
        Looking at the Game Gear Power PCB schematic (which I found{" "}
        <BlogLink link="https://console5.com/wiki/Game_Gear">here</BlogLink>), I
        saw that two of the pins should read 5V and one pin should read 35V.
        Sure enough, that’s what I saw when testing each pin with the
        multimeter.
      </BlogParagraph>

      <BlogImage
        path={`${baseImagePath}/Breadboard.jpg`}
        caption="The Power PCB connected to a breadboard. Here I'm testing the pin which should read 34 volts."
        maxWidth="16rem"
      />

      <BlogParagraph>
        I connected all the Game Gear’s PCBs together and turned on the power,
        but the console would still only power on for about a second before
        shutting off. I waited for the replacement capacitors to arrive before
        attempting more repairs.
      </BlogParagraph>
      <BlogParagraph>
        A few days later, the new capacitors had arrived. I got out all my
        soldering equipment and started recapping. This was my first time
        soldering on through-hole capacitors, and I actually enjoyed it a lot
        more than working with on-board capacitors since I didn’t have to
        struggle to hold the capacitor in place.
      </BlogParagraph>

      <BlogImage
        path={`${baseImagePath}/ReplacedCapacitors.jpg`}
        caption="The Power PCB with new capacitors installed."
        maxWidth="24rem"
      />

      <BlogParagraph>
        Once I finished soldering all the capacitors into place, I tested the
        console again, but it didn’t stay powered on. I tried one more thing.
        Right next to the jumper which connects the power PCB to the main PCB is
        capacitor C68. This is a 100μF 6.3V on my Game Gear’s main board. I
        don’t know the true purpose of this capacitor, but it was so close to
        the power components that I figured it might have something to do with
        regulating power, so I replaced it.
      </BlogParagraph>

      <BlogImage
        path={`${baseImagePath}/MainBoardReplacement.jpg`}
        caption="Here you can see the new capacitor I've installed in place of C68 next to the blue jumper wire connector."
        maxWidth="24rem"
      />
      <BlogParagraph>
        I wasn’t expecting this to work, so it surprised me when I reattached
        all parts of the Game Gear, turned it on and saw it stay on. I was even
        more surprised when I inserted Sonic 2 into the skeleton of a console I
        was holding, turned it on, and saw the Sonic 2 logo appear:
      </BlogParagraph>

      <BlogEmbeddedYouTubeVideo url="https://www.youtube.com/embed/v6fKlSTHOZI" />

      <BlogParagraph>
        Honestly, I bought this Game Gear knowing that I might never play a game
        on it, but now things were seeming much different. I could have probably
        put it back together at this point and started playing, but there were
        still a bunch of original capacitors that could go bad. Therefore, I
        called it a night, but I would return to replace the rest soon.
      </BlogParagraph>
      <BlogParagraph>
        <Link to={"game-gear-repair-part-3"}>Continued in part 3.</Link>
      </BlogParagraph>
    </BlogPost>
  );
}

export default GameGearRepairPart2;
