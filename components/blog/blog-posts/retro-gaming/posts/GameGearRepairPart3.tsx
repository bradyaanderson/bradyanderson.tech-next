import Image from "../../../../general/S3Image";
import Paragraph from "../../../../general/Paragraph";
import Link from "next/link";
import EmbeddedYouTubeVideo from "../../../../general/EmbeddedYoutubeVideo";

function GameGearRepairPart3() {
  const baseImagePath = "/blog/categories/retro-gaming/game-gear-repair-part-3";
  return (
    <div>
      <Paragraph>
        In <Link href={"game-gear-repair-part-2"}>part 2</Link>, I replaced the
        capacitors on the power PCB of my Game Gear and one capacitor (C68) on
        the main PCB. After these replacements, I could power the console on and
        even boot into a game. I knew that even though the console worked now, I
        should replace all the other original capacitors to prevent possible
        future failures.
      </Paragraph>
      <Paragraph>
        I started with the main PCB. This board has a lot of capacitors. My PCB,
        which is model IC BD GG MAIN USA VA1 837-9024, has 12 capacitors. Just
        like with the power PCB, before removing them, I recorded each
        capacitor’s capacitance and voltage:
        <ul>
          <li>C1 - 33μF 6.3V</li>
          <li>C4 - 10μF 6.3V</li>
          <li>C11 - 10μF 6.3V</li>
          <li>C14 - 10μF 6.3V</li>
          <li>C42 - 10μF 6.3V</li>
          <li>C43 - 22μF 6.3V</li>
          <li>C45 - 4.7μF 6.3V</li>
          <li>C47 - 68μF 6.3V</li>
          <li>C49 - 100μF 6.3V</li>
          <li>C54 - 0.47μF 6.3V</li>
          <li>C55 - 0.47μF 6.3V</li>
          <li>C68 - 100μF 6.3V (replaced in part 2)</li>
        </ul>
      </Paragraph>

      <Image
        path={`${baseImagePath}/MainBoardBefore.jpg`}
        caption="The main PCB before recapping (almost). I forgot to take a picture before starting, so you'll notice that some capacitors have already been replaced."
        maxWidth="28rem"
      />

      <Paragraph>
        Ideally, I think I would have used a hot air gun to remove the
        capacitors, but I only have a soldering iron. Using the tip of the iron,
        I could heat the existing solder and use pliers to remove the old
        capacitors. If some of the old solder was being stubborn and not
        melting, I would add new solder to the tip and then heat the old solder.
        I learned from (attempting) to fix my Macintosh SE/30 that I need to be
        careful not to pull too hard or I could damage the traces on the PCB.
        This time, I didn’t run into any issues.
      </Paragraph>
      <Paragraph>
        I got out my solder wick and used it to clean up the residual solder
        still on the capacitor pads. I also used isopropyl alcohol to clean the
        pads and surrounding area to make sure everything was free of any
        electrolytic juice that may have come out of the old capacitors.
      </Paragraph>
      <Paragraph>
        Applying the new capacitors was a little more difficult than I was
        intending. First, I had to find a capacitor that would be compatible.
        Then I would take the legs of the capacitor and bend it into a shape
        that would allow me to solder it to the pads. Finally, I would solder
        the legs to the pads, accounting for the polarity of the capacitor. The
        Game Gear’s PCBs have a “+” where the positive end of the capacitor
        should go. This last task really required 3 hands (one to hold that
        capacitor and two to solder it), but I made due usually by lying the
        capacitor so that at least one leg was touching a pad. I suspect someone
        with more experience or better equipment would find a much easier way to
        do this.After an hour, I had replaced every capacitor:
      </Paragraph>

      <Image
        path={`${baseImagePath}/MainBoardAfter.jpg`}
        caption="The main PCB after recapping. My soldering isn't the best, but everything is attached."
        maxWidth="28rem"
      />

      <Paragraph>
        That just left the sound PCB in need of recapping. Before recapping this
        board, I plugged everything back together to make sure the console would
        still power on. It did. I also tested the headphone jack and speaker. It
        did not surprise me to discover that the sound coming out of them was
        nearly inaudible. Luckily, replacing the capacitors should also fix that
        problem.
      </Paragraph>
      <Paragraph>
        Again, I recorded the values associated with each capacitor on the sound
        PCB before removing them:
        <ul>
          <li>C1 - 100μF 6.3V</li>
          <li>C2 - 100μF 6.3V</li>
          <li>C3 - 100μF 6.3V</li>
          <li>C5 - 47μF 4V</li>
          <li>C7 - 47μF 4V</li>
        </ul>
      </Paragraph>
      <Paragraph>
        These are also on-board capacitors, so the experience was almost exactly
        the same as replacing the capacitors on the main PCB. Here’s the
        finished result:
      </Paragraph>

      <Image
        path={`${baseImagePath}/SoundBoardAfter.jpg`}
        caption="The sound PCB after recapping."
        maxWidth="28rem"
      />

      <Paragraph>
        I assembled all the boards back together and connected the speaker. This
        time, I heard music when Sonic 2 booted on the console. And with that,
        all capacitors had been replaced on all three PCBs. Assembling the rest
        of the console was pretty simple. I had to clip some of the metal
        shielding that goes around the game cart because of some capacitors
        sticking out more than they used to, but otherwise it went smoothly.
      </Paragraph>

      <Image
        path={`${baseImagePath}/BackOfCase.jpg`}
        caption="Here's sound and power PCB attached to the case. You can see where I had to snip the metal shielding to make run for the new capacitors."
        maxWidth="28rem"
      />

      <Paragraph>
        Once all parts were inside the console case and securely together, I
        found 6 AA batteries to test that the console could run off battery
        power (up to this point I had been powering it from an outlet). It
        worked without issue.
      </Paragraph>

      <EmbeddedYouTubeVideo url="https://www.youtube.com/embed/q3sS_utkTZM" />

      <Paragraph>
        Although I haven’t repaired a ton of electronics, the Game Gear was
        definitely the most complicated repair I had accomplished. If anyone
        else is looking for a good console to try out a repair on, I think the
        Game Gear was a great experience. Broken consoles are cheap and although
        the repair took some work, nothing required extensive knowledge to fix.
        Once you're finished, you have a great library of relatively cheap games
        to play. I’ve started playing Sonic 2, and I’m looking forward to
        playing some of the other games I own like Ecco the Dolphin and NBA Jam.
      </Paragraph>
    </div>
  );
}

export default GameGearRepairPart3;
