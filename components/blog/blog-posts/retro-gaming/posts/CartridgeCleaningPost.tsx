import Image from "../../../../general/S3Image";
import Paragraph from "../../../../general/Paragraph";

function CartridgeCleaningPost() {
  const baseImagePath = "/blog/categories/retro-gaming/cart-cleaning";
  return (
    <div>
      <Paragraph>
        Every so often, I come across a poorly listed eBay auction that’s priced
        significantly lower than the value of what’s being sold. Last week I
        came across an auction titled, “nintendo games nes” which had no item
        description and only two pictures. I opened up the listing and counted
        32 Nintendo Entertainment System (NES) games between the two pictures.
        There were less than 10 minutes left and there was only 1 bid of $70. I
        did some quick math and figured this lot as pictured would be worth at
        least $200 dollars as pictures. Right before time ran out, I submitted a
        bid and won the auction for just 100 dollars and a few cents.
      </Paragraph>
      <Paragraph>
        This was one of the more risky auctions I’ve taken part in on eBay. I
        hoped I would receive everything pictured, but the lack of description
        left me anxiously waiting to see what would arrive. Luckily, I didn’t
        have to wait long though because just 2 days later, a large package
        arrived not with 32 NES games like I was expecting, but 47:
      </Paragraph>

      <Image
        path={`${baseImagePath}/Lot.jpg`}
        maxWidth="38rem"
        caption="The 47 games I received. All games are in decent condition, but need some clean up."
      />

      <Paragraph>
        There were even some gems I wasn’t expecting: Contra, Super Mario Bros.
        1+2+3, Mike Tyson’s Punch-Out, The Legend of Zelda 1+2. At an average of
        just over $2 per game, I was feeling pretty good about my purchase.
        However, the games were definitely in some basic restoration before I
        could add them to my game shelf.{" "}
      </Paragraph>
      <Paragraph>Here is the process I used for cleaning each game:</Paragraph>

      <h2>Case Cleaning/Removing Permanent Marker</h2>
      <Paragraph>
        Besides the normal dirt and grime that you would expect on a 30+ year
        old cartridge game, several of the games in this lot were marked with
        permanent markers. Through years of collecting, I’ve found it pretty
        common to find games marked with a previous owner’s name, but this might
        have been the first time I’ve seen someone permanently mark a selling
        price on a cartridge.
      </Paragraph>

      <Image
        path={`${baseImagePath}/CartBefore.jpg`}
        maxWidth="16rem"
        caption="Super Mario Bros 3 before cleaning."
      />

      <Paragraph>
        I started by using a Mr. Clean Magic Eraser. This was the first time
        I’ve used one for cartridge cleaning, but I was pretty happy with the
        results. I had to be careful not to get the cartridge label wet, since
        this could damage it. This cleaned the cartridge pretty well, but the
        permanent marker would need some additional work.
      </Paragraph>

      <Image
        path={`${baseImagePath}/CartMagicEraser.jpg`}
        maxWidth="32rem"
        caption="Super Mario Bros 3 after Magic Eraser."
      />

      <Paragraph>
        Isopropyl alcohol applied paper towel or fabric cloth has been my go-to
        for cartridge cleaning in the past. It’s usually effective, even on
        permanent markers with a lot of scrubbing.
      </Paragraph>

      <Image
        path={`${baseImagePath}/CartAlcohol.jpg`}
        maxWidth="32rem"
        caption="Super Mario Bros 3 after isopropyl alcohol."
      />

      <Paragraph>
        I had read online that dry-erase markers can remove permanent markers.
        As counter-intuitive as this sounds, it actually helped remove some
        marks on cartridges. I applied some dry-erase marker over the existing
        marks, waited about a minute for it to dry, and then used a slightly
        damp rag to remove it.
      </Paragraph>

      <Image
        path={`${baseImagePath}/CartMarkerBefore.jpg`}
        maxWidth="32rem"
        caption="Super Mario Bros 3 with dry erase marker applied."
      />
      <Image
        path={`${baseImagePath}/CartMarkerAfter.jpg`}
        maxWidth="32rem"
        caption="Super Mario Bros 3 after whipping off dry erase marker."
      />

      <Paragraph>
        Even after these three techniques, some marker marks would still be
        visible, so I repeated the process as many times as needed. Each pass,
        the marker faded each time, and by the end, I had almost completely
        removed it.
      </Paragraph>

      <Image
        path={`${baseImagePath}/CartAfter.jpg`}
        maxWidth="16rem"
        caption="Super Mario Bros 3 after multiple cleaning passes. The markings are almost gone, but I may come back later to do more."
      />

      <h2>Contact Cleaning</h2>
      <Paragraph>
        A lot of the games I received didn’t work when I first put them in my
        NES. I’m guessing these games have gone years, maybe even a decade or
        two, without being played. An old myth is that blowing on a cartridge
        before putting it into the system will fix things. In reality, blowing
        on the cartridge does nothing and may actually lead to corrosion on the
        contacts. Instead, I would clean all cartridges with proven techniques.
      </Paragraph>
      <Paragraph>
        It’s possible to clean the contacts without opening up the cartridge,
        but I’ve found it works best when you can get direct access to the
        contacts. I used a Gamebit screwdriver to get direct access to the PCB
        (some older carts use small flathead screws instead of the Gamebit screw
        on most carts).
      </Paragraph>

      <Image
        path={`${baseImagePath}/CartOpen.jpg`}
        maxWidth="20rem"
        caption="Back of an NES cartridge with the Gamebit screwdriver."
      />

      <Paragraph>
        Just like case cleaning, isopropyl alcohol has also been my go-to for
        cleaning pins in the past. I dipped a cotton-swab in a small amount of
        alcohol and applied it in a circular motion over the pins. This normally
        works pretty well, but these carts were more stubborn than most.
      </Paragraph>

      <Image
        path={`${baseImagePath}/PinsAlcohol.jpg`}
        maxWidth="32rem"
        caption="Applying isopropyl alcohol to contact pins."
      />

      <Paragraph>
        When alcohol wasn’t enough, I used metal polish. I’ve used both liquid
        polish (like Brasso) in the past, but this time I had wadding polish.
        The wadding polish worked great. I would tear off a small chunk, scrub
        both the front and back of all the pins, and then wash off the polish
        with a bit of isopropyl alcohol.
      </Paragraph>

      <Image
        path={`${baseImagePath}/PinsPolish.jpg`}
        maxWidth="32rem"
        caption="Polishing contact pins with wadding metal polish."
      />

      <Paragraph>
        After using alcohol and metal polish, I was almost always able to get a
        game to start the next time I put it into the system.
      </Paragraph>

      <Image
        path={`${baseImagePath}/NESOn.jpg`}
        maxWidth="26rem"
        caption="Super Mario Bros 3 working after contact cleaning."
      />

      <h2>A while later...</h2>
      <Paragraph>
        After much cleaning and polishing, I had made significant work on
        restoring many of the 47 cartridges. There were two games with more
        significant damage that I couldn’t get working right now, but I may have
        luck later. This just goes to show how resilient cartridges with 45
        completely working. I think I can confidently say this is the best eBay
        auction I have ever won.
      </Paragraph>
    </div>
  );
}

export default CartridgeCleaningPost;
