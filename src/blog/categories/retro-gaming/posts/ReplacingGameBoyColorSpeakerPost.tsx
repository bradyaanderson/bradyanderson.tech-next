import BlogPost from "../../../blog-components/BlogPost";
import BlogEmbeddedYouTubeVideo from "../../../blog-components/BlogEmbeddedYouTubeVideo";
import BlogImage from "../../../blog-components/BlogImage";
import { BlogPostProps } from "../../../../../types/Sitemap";
import BlogParagraph from "../../../blog-components/BlogParagraph";

function ReplacingGameBoyColorSpeakerPost(props: BlogPostProps) {
  const imageBasePath =
    "/blog/categories/retro-gaming/replacing-game-boy-color-speaker";
  return (
    <BlogPost {...props}>
      <BlogParagraph>
        A few years ago, I got a Game Boy Color. Unfortunately, the speaker
        never worked. However, The headphone jack worked, so I wasn't too
        bothered by this. But I decided it was finally time to fix the speaker.
      </BlogParagraph>

      <BlogImage
        path={`${imageBasePath}/GameBoyColor.jpg`}
        caption="My Game Boy Color before replacing the speaker."
        maxWidth="16rem"
      />

      <BlogParagraph>
        One thing that's nice about fixing gaming consoles, as opposed to retro
        computers, is that parts are abundant and usually pretty cheap. The Game
        Boy Color speaker is probably one of the best examples of this. I was
        able to find a replacement on eBay for $4 with free shipping (search
        "Game Boy Color Speaker" on eBay if you're looking for a replacement).
      </BlogParagraph>
      <BlogParagraph>
        After the speaker arrived, I sat down with it, a soldering iron, a
        screwdriver and the Game Boy Color, and I got to work. I used a tri-wing
        screwdriver bit to remove the back of the handheld. If you're familiar
        with Nintendo consoles, then you are probably also aware of how most of
        their older consoles are held together with these tri-wing screws.
      </BlogParagraph>
      <BlogParagraph>
        It's not hard to access the speaker on the Game Boy color. As you can
        see in the picture below, it's mostly exposed once you remove the back
        panel.
      </BlogParagraph>

      <BlogImage
        path={`${imageBasePath}/BackCoverRemoved.jpg`}
        caption="The Game Boy Color with back panel removed."
        maxWidth="24rem"
      />

      <BlogParagraph>
        I went ahead and unscrewed the logic board from the front panel, but
        decided not to completely detach the board from the screen. This would
        give me plenty of space to access the old speaker.
      </BlogParagraph>
      <BlogParagraph>
        There are two wires that connect the speaker to the board. Using the
        soldering iron, I was able to desolder the speaker from these wires.
        Once I got it removed, it was evident that the speaker had water damage.
        That explains why it no longer worked.
      </BlogParagraph>

      <BlogImage
        path={`${imageBasePath}/OldSpeaker.jpg`}
        caption="The old speaker, rusted from water damage."
        maxWidth="16rem"
      />

      <BlogParagraph>
        I then took the wires that I had just desoldered from the old speaker
        and soldered them to the new speaker. I had made sure to connect the
        wires in the same position on the new speaker as the old, although I'm
        not sure if it mattered.
      </BlogParagraph>

      <BlogImage
        path={`${imageBasePath}/NewSpeaker.jpg`}
        caption="The new speaker after soldering it to speaker wires."
        maxWidth="16rem"
      />

      <BlogParagraph>
        The last step was to reassemble the Game Boy Color. After that, I put in
        Tetris powered it on. I immediately heard the iconic Game Boy start-up
        noise. I waited a few more seconds for the opening title screen to
        appear and hit start. The Tetris theme then started playing loud and
        clear. It seems like the fix was a success.
      </BlogParagraph>

      <BlogParagraph>
        Here is a video of me powering up the console for the first time after
        the replacement:
      </BlogParagraph>
      <BlogEmbeddedYouTubeVideo url="https://www.youtube.com/embed/QwxYQYpomgs" />

      <BlogParagraph>
        It's been a while since I've worked on a game console, and this was a
        great reintroduction to it. Replacing a Game Boy Color speaker is both
        easy and cheap, so I would highly recommend giving it a shot if you are
        facing the same issue with your console.
      </BlogParagraph>
    </BlogPost>
  );
}

export default ReplacingGameBoyColorSpeakerPost;
