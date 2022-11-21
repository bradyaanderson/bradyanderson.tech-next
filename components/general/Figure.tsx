import NextImage from "next/image";
import { join } from "path";
import styles from "./figure.module.scss";

/** The URL where images are hosted */
const PUBLIC_IMAGE_URL =
  "https://bradyanderson-tech-public.s3.us-east-2.amazonaws.com";

interface Props {
  /** The path to the image. Combined with PUBLIC_IMAGE_URL to get full image URL. */
  path: string;
  /** The text to be displayed under the image. */
  caption?: string;
  /** The height of the image. */
  height: number;
  /** The width of the image. */
  width: number;
  /** If true, image will not lazy load. */
  priority?: boolean;
}

/** Component for easily displaying images in blog. */
function Figure({ path, caption, width, height, priority }: Props) {
  return (
    <div className={styles.container}>
      <div style={{ width }} className={styles.figure}>
        <figure>
          <NextImage
            src={join(PUBLIC_IMAGE_URL, path)}
            height={height}
            width={width}
            layout={"responsive"}
            priority={priority}
          />
          {caption && (
            <figcaption className={styles.caption}>{caption}</figcaption>
          )}
        </figure>
      </div>
    </div>
  );
}

export default Figure;
