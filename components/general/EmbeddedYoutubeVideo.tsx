import { memo } from "react";
import styles from "./embedded-youtube-video.module.scss";

interface Props {
  /** The URL of the YouTube video to embed. */
  url: string;
}

/** Component for embedding/displaying a YouTube video. */
function EmbeddedYouTubeVideo({ url }: Props) {
  return (
    <div className={styles.blogEmbeddedYoutubeVideo}>
      <iframe
        className={styles.youtubeIframe}
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default memo(EmbeddedYouTubeVideo);
