import BlogLink from "../../../common/BlogLink";
import BlogPost from "../../../common/BlogPost";
import { bradyAndersonTechIndexText } from "../../text/bradyanderson-tech/bradyAndersonTechIndexText";

/** Index for bradyanderson.tech blog category */
function BradyAndersonTechIndex() {
  return (
    <BlogPost title="bradyanderson.tech">
      <div>
        <pre>{bradyAndersonTechIndexText}</pre>
        <pre>
          If you want to check out any of the code for this website, it can be
          found here:{" "}
          <BlogLink link="https://github.com/bradyaanderson/bradyanderson.tech-next">
            https://github.com/bradyaanderson/bradyanderson.tech-next
          </BlogLink>
          .
        </pre>
      </div>
    </BlogPost>
  );
}

export default BradyAndersonTechIndex;
