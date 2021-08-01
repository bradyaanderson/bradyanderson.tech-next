import { Figure } from "react-bootstrap";
import "../assests/stylesheets/common/ImageWithCaption.scss";

interface Props {
  src: string;
  caption: string;
  maxWidth: string;
}

function ImageWithCaption({ src, caption, maxWidth }: Props) {
  return (
    <div className="image-wth-caption-container">
      <Figure style={{ maxWidth: maxWidth }}>
        <Figure.Image src={src} />
        <Figure.Caption className="caption">{caption}</Figure.Caption>
      </Figure>
    </div>
  );
}

export default ImageWithCaption;
