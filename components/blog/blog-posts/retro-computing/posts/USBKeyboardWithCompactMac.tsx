import Figure from "../../../../general/Figure";
import Paragraph from "../../../../general/Paragraph";
import ExternalLink from "../../../../general/ExternalLink";
import Link from "next/link";

function USBKeyboardWithCompactMac() {
  const baseAssetPath = `/blog/categories/retro-computing/posts/usb-keyboard-with-compact-mac`;
  return (
    <div>
      <Paragraph>
        As I learn to write code for my Macintosh SE/30, I’ve tried to pretend
        that I am a programmer in the 90s. Instead of learning from the
        internet, I’ve used 30-year-old documentation and reference books to
        teach me what I need to know. This has been a blast. However, there is
        one thing that has really bothered me: the keyboard.
      </Paragraph>

      <Figure
        path={`${baseAssetPath}/AppleKeyboardII.jpg`}
        width={512}
        height={203}
        caption={"My Apple Keyboard II."}
      />

      <Paragraph>
        One of my{" "}
        <Link href={"/blog/retro-computing/apple-ii-keyboard-fix"}>
          first posts
        </Link>{" "}
        on this blog was about the Apple Keyboard II that came with my mac.
        Besides the layout of the arrow keys, it looks and functions just like
        any modern keyboard that Apple makes. What’s not modern about this
        keyboard is its keyswitches.
      </Paragraph>

      <Figure
        path={`${baseAssetPath}/switches.jpg`}
        width={384}
        height={257}
        caption={
          "The buckling rubber sleeve switches on the Apple Keyboard II."
        }
      />

      <Paragraph>
        This type of keyswitch is known as a buckling rubber sleeve. I’m not a
        fan of these rubber sleeves, mostly because of how difficult they make
        the keyboard to clean, but they just seem to require more force than I’m
        used to when typing. I wouldn’t say I’m picky about my keyboards, but
        when you spend hours every day using one, you have some preferences.
      </Paragraph>

      <Figure
        path={`${baseAssetPath}/HHKB.jpg`}
        width={384}
        height={255}
        caption={"The keyboard I use everyday: The Happy Hacking Keyboard."}
      />

      <Paragraph>
        One of my favorite purchases from last year (besides my SE/30) was a
        Happy Hacking Keyboard (HHKB). As a programmer, I realized I should
        invest in a nice keyboard given that I used it all day, every day. I
        love how compact the HHKB is, making it extremely easy to transport. It
        has a nice sound when you press a key, but it’s also quiet (I’m not a
        huge fan of the loud clack some mechanical keyboards produce). Best of
        all, it feels great to type on.
      </Paragraph>
      <Paragraph>
        That led me to trying to figure out how to use my HHKB with my Macintosh
        SE/30. The HHKB can be connected via Bluetooth or USB to computers. Of
        course bluetooth was out of the question, but USB is also pretty
        difficult to work with given that the standard for USB was released in
        1996 and the SE/30 came out in 1989. As I mentioned in another post, my
        SE/30 uses Apple Desktop Bus (ADB) for keyboard and mouse connections.
        So I would need some sort of USB to ADB interface.
      </Paragraph>
      <Paragraph>
        Luckily, I’m not the first one who wanted to use a modern keyboard with
        a vintage Apple computer. After some searching, I came across the{" "}
        <ExternalLink link={"https://www.bigmessowires.com/usb-wombat/"}>
          ADB-USB Wombat Input Converter
        </ExternalLink>{" "}
        and ordered one myself.
      </Paragraph>

      <Figure
        path={`${baseAssetPath}/Wombat.jpg`}
        width={256}
        height={341}
        caption={"The ADB-USB Wombat."}
      />

      <Paragraph>
        Hooking my HHKB up via the Wombat was simple. The only thing I needed to
        verify was that the jumper wires were set to USB and not ADB (the Wombat
        can also connect an ADB keyboard to a modern computer via USB). Once
        that was set, all I needed to do was connect the Wombat to my SE/30 via
        ADB and connect my USB keyboard to the Wombat. Just like that, I could
        type on my SE/30 with my HHKB.{" "}
      </Paragraph>

      <Figure
        path={`${baseAssetPath}/HHKBWithMac.jpg`}
        width={256}
        height={341}
        caption={"Using the Wombat to connect my HHKB to the SE/30."}
      />

      <Paragraph>
        I’m very glad there are still people out there tinkering with old
        computers, just like me. Using the Wombat and my HHKB should make
        programming even more enjoyable on SE/30.
      </Paragraph>
    </div>
  );
}

export default USBKeyboardWithCompactMac;
