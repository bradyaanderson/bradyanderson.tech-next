import { Figure } from "react-bootstrap";
import "../assests/stylesheets/common/ImageWithCaption.scss";

/** The URL where images are hosted */
const PUBLIC_IMAGE_URL =
  "https://bradyanderson-tech-public.s3.us-east-2.amazonaws.com";

interface Props {
  /** The path to the image. Combined with PUBLIC_IMAGE_URL to get full image URL. */
  path: string;
  /** The text to be displayed under the image. */
  caption?: string;
  /** The max width that the image will be displayed at. */
  maxWidth?: string;
}

/** Component for easily displaying images in blog */
function BlogImage({ path, caption, maxWidth }: Props) {
  return (
    <div className="image-wth-caption-container">
      <Figure style={{ maxWidth }}>
        <Figure.Image src={PUBLIC_IMAGE_URL + path} />
        {caption && (
          <Figure.Caption className="caption">{caption}</Figure.Caption>
        )}
      </Figure>
    </div>
  );
}

export default BlogImage;
