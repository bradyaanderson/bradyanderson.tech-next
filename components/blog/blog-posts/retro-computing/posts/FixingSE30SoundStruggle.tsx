import Figure from "../../../../general/Figure";
import Paragraph from "../../../../general/Paragraph";
import ExternalLink from "../../../../general/ExternalLink";

function FixingSE30SoundStruggle() {
  const imageBasePath =
    "/blog/categories/retro-computing/posts/fixing-macintosh-se30-sound-struggle";
  return (
    <div>
      <Paragraph>
        I often tell people I'm a software engineer because I'm too clumsy to
        work with real things. Writing code feels natural, but I struggle to
        work with anything tangible. Even so, I love working with hardware, even
        if that means I often make mistakes.
      </Paragraph>
      <Paragraph>
        After installing SCSI2SD into my Macintosh SE/30, I filled it with
        software and games. After installing Price of Persia, I launched the
        game and noticed there was no sound. I knew my computer didn't make the
        iconic Mac sound when starting up, but I thought the volume was just
        low. It also doesn't help that on the SE/30, volume can only be
        controlled through the sound application and not a physical knob. I had
        never needed to open this application before, and when I finally opened
        it, I saw that the volume was turned up all the way.
      </Paragraph>
      <Paragraph>
        After some research, I found a{" "}
        <ExternalLink link="https://www.tasteofhome.com/recipes/summer-bounty-ratatouille/">
          post on pc-restorer.com
        </ExternalLink>{" "}
        that outlined the exact problem I was facing. The post explains that my
        sound issue was most likely because of aging capacitors and replacing 4
        capacitors on the logic board should restore the sound.
      </Paragraph>

      <Figure
        path={`${imageBasePath}/Capacitors.jpg`}
        caption="Capacitors C3 - C6. You can see they no longer appear flat against the board due to age."
        width={256}
        height={341}
      />

      <Paragraph>
        First, I located the 4 capacitors mentioned in that post. I had read
        that the best method to pull off capacitors is to grab the capacitor
        with a pair of pliers and twists, gradually increasing the amount of
        rotation until the capacitor comes free. This method worked well, and I
        removed all 4 capacitors with no problems. I then used solder wick and a
        soldering iron to clean up the residual solder left by the capacitors.
      </Paragraph>

      <Figure
        path={`${imageBasePath}/RemovedCapacitors.jpg`}
        caption="Capacitors C3 - C6 removed. Looking back, I can see that I didn't do a great job."
        width={256}
        height={273}
      />

      <Paragraph>
        I had bought some electrolytic capacitors and used these to replace the
        capacitors I had just removed. I'm still new to soldering, so I made a
        lot of mistakes. The biggest mistake I made was not buying soldering
        flux, so my solder was not sticking to the correct places on the board.
        After a lot of attempts, though, I had all 4 capacitors soldered in
        their correct location.
      </Paragraph>

      <Paragraph>
        I reconnected the logic board to the other components of the computer
        and tried turning it on. On start-up, I heard a "bong" sound. This was
        the first time I heard my SE/30 produced noise. Unfortunately, any
        excitement I had from hearing sound quickly faded when a checkerboard
        pattern appeared on the screen instead of the normal "Welcome to
        Macintosh" message. Uh oh...
      </Paragraph>
      <Paragraph>
        I panicked and double-checked the 4 capacitors I had just replaced to
        make sure they were connected and in the correct orientation. I saw
        nothing wrong with them. The sound I heard when turning on the machine
        confirmed that some capacitors had gone bad. I decided to try replacing
        more capacitors on the board, just in case others that had stopped
        working.
      </Paragraph>

      <Figure
        path={`${imageBasePath}/RemovedCapacitorsFull.jpg`}
        caption="The logic board after removing all non-through-hold capacitors."
        width={384}
        height={400}
      />

      <Paragraph>
        I removed the capacitors on the board, which seemed easy to replace,
        leaving the through-hole capacitors for another time. I even removed the
        new capacitors that I had just soldered to the board (I don't remember
        why. Maybe I thought reinstalling them could help fix the issue?).
        However, this process didn't go smoothly. While removing capacitors C6
        and C12, I accidentally removed the pad and some of the wire trace that
        connects the capacitors to the board. I didn't know what to do now that
        I had missing pads and broken traces.
      </Paragraph>

      <Paragraph>
        After some more research, I learned that it's possible to use wire to
        take the place of a broken trace. However, I knew I could mess that up.
        I need to practice soldering on PCBs, but let's be honest, a Macintosh
        SE/30 logic board is not the place to do that.
      </Paragraph>
      <Paragraph>
        Instead, I found an individual on eBay who was offering a service to
        replace capacitors on old Macintosh logic boards. I sent them a message
        showing them the issue, and they said they could fix my board even with
        the broken traces. I was a little hesitant to ship off my logic board,
        but I went ahead, packaged it up, and got it sent out.
      </Paragraph>

      <Figure
        path={`${imageBasePath}/ReplacedCapacitors.jpg`}
        caption="The board after being returned from capacitor replacement and cleaning."
        width={384}
        height={407}
      />

      <Paragraph>
        Less than a week later, the logic board was back in my hands and it
        looked great. As well as replacing the capacitors (include the ones that
        went through the board), the board had also been ultrasonically cleaned
        and had the battery replaced.
      </Paragraph>
      <Paragraph>
        I was so excited to get the board back; I forgot to reinstall the RAM.
        Of course, it didn't boot this time, but I pretty quickly realized what
        I did wrong. After reinstalling the RAM, I flipped the power switch,
        heard the iconic Macintosh chime, and then saw "Welcome to Macintosh"
        appear on the screen. I couldn't believe it. I was pretty sure I could
        never use my SE/30 again after my failed capacitor replacement attempt.
      </Paragraph>
      <Paragraph>
        I learned a lot from almost killing my SE/30. I'm not sure that I'll
        need to solder more capacitors onto PCBs anytime soon, but I know what
        mistakes not to make the next time. Finally, I can't recommend the
        service I used to repair my board after my mishap. I've included a link
        to this service below.
      </Paragraph>

      <h2>Links</h2>
      <ul>
        <li>
          <ExternalLink link="http://pc-restorer.com/repairing-a-macintosh-se30-with-no-sound/">
            Repairing a Macintosh SE/30 with No Sound
          </ExternalLink>
        </li>
        <li>
          <ExternalLink link="https://ebay.com/itm/253935420702">
            Classic Macintosh logic board capacitor + battery service
          </ExternalLink>
        </li>
      </ul>
    </div>
  );
}

export default FixingSE30SoundStruggle;
