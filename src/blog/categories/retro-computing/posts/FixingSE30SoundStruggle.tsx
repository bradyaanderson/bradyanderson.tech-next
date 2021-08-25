import BlogPost from "../../../../common/BlogPost";
import BlogLink from "../../../../common/BlogLink";

function FixingSE30SoundStruggle() {
  return (
    <BlogPost
      title="The Struggle to Fix a Macintosh SE/30's Sound"
      date="08/23/2021"
    >
      <pre>
        I often tell people the reason I'm a software engineer is that I'm too
        clumsy to work with real things. I can write clean code, but I struggle
        when working with anything tangible. Despite this, I love working with
        hardware and wish I knew more about electrical engineering. But I don't
        and that means I tend to make mistakes when I work with hardware.
      </pre>
      <pre>
        After installing the SCSI2SD into my Macintosh, I started to fill it
        with software and games. After installing Price of Persia, I launched
        the game and noticed there was no sound. I knew my computer didn't make
        the iconic Mac sound when starting up, but I thought maybe the sound was
        turned down. It doesn't help that the SE/30 does not have a volume
        switch. Volume is instead controlled through the sound application in
        the Macintosh control panel. I had never needed to look at this control
        and when I finally did open it, I saw that the volume was turned all the
        way up.
      </pre>
      <pre>
        After some research, I found a{" "}
        <BlogLink link="http://pc-restorer.com/">
          post on pc-restorer.com
        </BlogLink>{" "}
        that outlined the exact problem I was facing. The post suggests
        replacing 4 capacitors on the logic board to restore the sound.
      </pre>

      {/*  Picture of capacitors */}

      <pre>
        First I located the 4 capacitors mentioned in that post. I had read that
        the best method to pull off capacitors is to grab the capacitor with a
        pair of pliers and twists, gradually increasing the amount of rotation
        until the capacitor comes free. This method worked well, and I was able
        to remove all 4 capacitors without any problems. I then used solder wick
        and a soldering iron to clean up the remaining solder on the capacitor
        pads.
      </pre>

      {/*  Picture of cleaned up capacitor pads */}

      <pre>
        I had bought some electrolytic capacitors and used these to replace the
        capacitors I had just removed. I'm still new to soldering, so I made a
        lot of mistakes. The biggest mistake I made was not buying soldering
        flux, so it was hard to get the solder to stick to the board. After a
        lot of attempts, I had all 4 capacitors soldered in their correct
        location.
      </pre>

      <pre>
        I reconnected the logic board to the other components of the computer
        and tried turning it on. On start-up, I heard a "bong" sound. This was
        the first time I heard my SE/30 produced noise. Unfortunately, any
        excitement I had from hearing the "bong" quickly faded when a
        checkerboard pattern appeared on the screen instead of the normal
        "Welcome to Macintosh" message. Uh oh...
      </pre>
      <pre>
        I panicked and tried looking at the 4 capacitors I had just replaced to
        make sure they were connected and in the correct orientation. I didn't
        see anything wrong with them. The "bong" I heard confirmed that some
        capacitors had gone bad and replacing them might fix some issues, so
        decided to try replacing every capacitor on the board.
      </pre>

      {/*  Empty board*/}

      <pre>
        I removed only capacitors on the board that seemed easy to replace. I
        would leave the through-hole capacitors for another time. I even removed
        the new capacitors that I had just soldered to the board (I don't
        remember why. Maybe I thought reinstalling them could help fix the
        issue?). However, this process didn't go smoothly. While removing
        capacitors C6 and C12, I accidentally removed the pad and some of the
        wire trace that allowed the capacitors to connect to the board.
      </pre>
      <pre>
        At this point, I didn't know what to do now that I had missing pads and
        broken traces. How do I fix this?
      </pre>

      {/*Missing pad*/}

      <pre>
        I learned that it's possible to use wire to reestablish a connection
        between a capacitor and the board, even when a trace has been broken. I
        knew there was a high chance I could mess that up. I need to practice
        soldering on PCBs, but let's be honest, a Macintosh SE/30 logic board is
        not the place to do that.
      </pre>
      <pre>
        Instead, I found an individual on eBay who was offering a service to
        replace capacitors on old Macintosh logic boards. I sent them a message
        showing them the issue and they said they could fix my board. I was a
        little hesitant to ship off my board, but I packaged it up and sent it
        off to Pennsylvania.
      </pre>

      {/* Fixed logic board */}

      <pre>
        Less than a week later, the logic board was back in my hands and it
        looked great. As well as replacing the capacitors (include the ones that
        went through the board), the board had also been ultrasonically cleaned
        and had the battery replaced.
      </pre>
      <pre>
        I was so excited to get the board back that I forgot to reinstall the
        RAM before putting the board back into the SE/30. Of course, it didn't
        boot this time, but I pretty quickly realized what I did wrong. After
        replacing the RAM, I flipped the power switch, heard the iconic
        Macintosh chime, and then saw "Welcome to Macintosh" appear on the
        screen. I couldn't believe it. I was pretty sure I would never be able
        to use my SE/30 again after my failed soldering attempts, but I was back
        in business. I learned a lot from almost killing my SE/30. I'm not sure
        that I'll need to solder more capacitors onto PCBs anytime soon, but I
        know what mistakes not to make the next time.
      </pre>
      <pre>
        Finally, I can't recommend the service I used to repair my board after
        my mishap. I've included a link to this service below.
      </pre>

      <h2>Links</h2>
      <ul>
        <li>
          <BlogLink link="http://pc-restorer.com/repairing-a-macintosh-se30-with-no-sound/">
            Repairing a Macintosh SE/30 with No Sound
          </BlogLink>
        </li>
        <li>
          <BlogLink link="ebay.com/itm/253935420702">
            Classic Macintosh logic board capacitor + battery service
          </BlogLink>
        </li>
      </ul>
    </BlogPost>
  );
}

export default FixingSE30SoundStruggle;
