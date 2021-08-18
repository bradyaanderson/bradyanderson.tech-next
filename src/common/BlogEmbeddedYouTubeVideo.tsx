import "../assests/stylesheets/common/BlogEmbeddedYouTubeVideo.scss";

interface Props {
  /** The URL of the YouTube video to embed. */
  url: string;
}
function BlogEmbeddedYouTubeVideo({ url }: Props) {
  return (
    <div className="blog-embedded-youtube-video">
      <iframe
        className="youtube-iframe"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default BlogEmbeddedYouTubeVideo;
