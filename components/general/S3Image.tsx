import { Figure } from "react-bootstrap";
import styles from "./s3image.module.scss";

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
  /** The border to put around the image. */
  imageBorder?: string;
}

/** Component for easily displaying images in blog. */
function Image({ path, caption, maxWidth, imageBorder }: Props) {
  return (
    <div className={styles.container}>
      <Figure style={{ maxWidth }}>
        <Figure.Image
          src={PUBLIC_IMAGE_URL + path}
          style={{ border: imageBorder }}
        />
        {caption && (
          <Figure.Caption className={styles.caption}>{caption}</Figure.Caption>
        )}
      </Figure>
    </div>
  );
}

export default Image;
