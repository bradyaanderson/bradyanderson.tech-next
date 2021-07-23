import BlogPost from "../../BlogPost";
import { bradyAndersonTechIndexText } from "../../text/bradyanderson-tech/bradyAndersonTechIndexText";

/** Index for bradyanderson.tech blog section */
function BradyAndersonTechIndex() {
  return (
    <BlogPost title="bradyanderson.tech">
      <div>
        <pre>{bradyAndersonTechIndexText}</pre>
        <pre>
          If you want to check out any of the code for this website, it can be
          found here:{" "}
          <a href="https://github.com/bradyaanderson/bradyanderson.tech-next">
            https://github.com/bradyaanderson/bradyanderson.tech-next
          </a>
          .
        </pre>
      </div>
    </BlogPost>
  );
}

export default BradyAndersonTechIndex;
