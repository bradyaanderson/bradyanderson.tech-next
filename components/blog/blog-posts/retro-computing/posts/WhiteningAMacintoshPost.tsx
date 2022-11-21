import Figure from "../../../../general/Figure";
import Paragraph from "../../../../general/Paragraph";

function WhiteningAMacintoshPost() {
  const baseImagePath =
    "/blog/categories/retro-computing/posts/whitening-a-macintosh";
  return (
    <div>
      <Paragraph>
        When exposed to UV light, the plastic on some older electronics will
        turn yellow over time. The discoloration on doesn’t affect the
        electronics, but bright-white plastic will gain a yellowish-brown tint.
        My Macintosh SE/30 was no exception to the yellowing problem, and I was
        hoping to restore it to its original color.
      </Paragraph>

      <Figure
        path={`${baseImagePath}/BeforeFront.jpg`}
        width={256}
        height={341}
        caption="The front-side of my Macintosh before whitening."
      />
      <Figure
        path={`${baseImagePath}/BeforeBack.jpg`}
        width={256}
        height={341}
        caption="The back-side of my Macintosh before whitening."
      />

      <Paragraph>
        Many retro computer enthusiasts are familiar with retrobright, a mixture
        of chemicals that can restore plastics to their original white color.
        There are several recipes for retrobright, but almost all contain
        hydrogen peroxide and laundry booster.
      </Paragraph>

      <Paragraph>
        I chose to use the original recipe for retrobright. Most of the
        ingredients for this recipe can be purchased at any grocery store or
        online, but getting 10-15% hydrogen peroxide is more difficult. I
        eventually found 40 Volume Clear Developer at Sally Beauty, which
        contains 12% hydrogen peroxide. After obtaining all the ingredients
        needed for making retrobright, I mixed it up according to the
        instructions to create the retrobright gel.
      </Paragraph>

      <Figure
        path={`${baseImagePath}/Retrobright.jpg`}
        width={256}
        height={322}
        caption="The retrobright gel mixture."
      />

      <Paragraph>
        Before making the gel, I had dismantled my SE/30 to remove all
        electronics. That left me with the plastic case. I rinsed off the case
        with a garden hose to remove any dirt and dust that had accumulated over
        the years. After that, I put on gloves and started rubbing retrobright
        onto the plastic. Once I covered an area in gel, I tightly covered that
        area in plastic wrap and massaged the wrap to create an even coating
        underneath. When all the pieces were coated and covered with wrap, I
        moved them into the sun to start the whitening process. Every 1-2 hours,
        I would rotate the pieces so that each side would get even sun exposure
        throughout the day.
      </Paragraph>

      <Figure
        path={`${baseImagePath}/PartsInSun.jpg`}
        width={384}
        height={261}
        caption="The retrobright gel mixture."
      />

      <Paragraph>
        I can’t stress enough the importance of being safe while applying the
        retrobright solution. 12% hydrogen peroxide is strong and not good if it
        stays on your skin. I ended up getting solution under my glove during
        the process and had bright-white marks on my fingers for several hours.
      </Paragraph>

      <Figure
        path={`${baseImagePath}/Skin.jpg`}
        width={320}
        height={322}
        caption="My hand after applying retrobright mixture. I washed and scrubbed thoroughly, but that didn't help. "
      />

      <Paragraph>
        After 8 hours in the sun, I took the case pieces back inside and washed
        them thoroughly with water. However, there was still some visible
        yellowing, so I repeated the same process the next day. After the second
        day, it was looking much better and most of the yellowing was gone.
        Evenly coating the main computer chassis had been difficult, so
        whitening was a little uneven on this piece. I may try different
        whitening techniques later, but I was happy with the results from my
        first time retrobrighting a computer.
      </Paragraph>

      <Figure
        path={`${baseImagePath}/AfterFront.jpg`}
        width={256}
        height={341}
        caption="The front-side after retrobright. It's a little splotchy, but the the yellowing is gone."
      />
      <Figure
        path={`${baseImagePath}/AfterBack.jpg`}
        width={256}
        height={341}
        caption="The back-side after retrobright. It's also a little splotchy."
      />
      <Figure
        path={`${baseImagePath}/AfterFrontOnly.jpg`}
        width={256}
        height={341}
        caption="The front panel after retrobright. I'm pretty happy with how this turned out."
      />
    </div>
  );
}

export default WhiteningAMacintoshPost;
