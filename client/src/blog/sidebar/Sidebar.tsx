import Category from "./Category";
import "../../assests/stylesheets/blog/sidebar/Sidebar.scss";

/** Blog sidebar. Used for navigating blog. */
function Sidebar() {
  return (
    <div className="sidebar">
      <Category
        name="bradyanderson.tech"
        path="/bradyanderson.tech"
        subCategories={{}}
      />
      <Category name="Macintosh" path="/macintosh" subCategories={{}} />
      <Category name="Buzz GB" path="/buzz-gb" subCategories={{}} />
    </div>
  );
}

export default Sidebar;
