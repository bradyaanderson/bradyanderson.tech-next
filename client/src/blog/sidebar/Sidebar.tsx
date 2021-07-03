import Category from "./Category";
import "../../assests/stylesheets/blog/sidebar/Sidebar.scss";

/** Blog sidebar. Used for navigating blog. */
function Sidebar() {
  return (
    <div className="sidebar">
      <Category
        name="Category 1"
        path="/category1"
        subCategories={{ "link 1": "/test", "link 2": "/test2" }}
      />
      <Category
        name="Category 2"
        path="/category2"
        subCategories={{ "link 1": "/test", "link 2": "/test2" }}
      />
      <Category
        name="Category 3"
        path="/category3"
        subCategories={{ "link 1": "/test", "link 2": "/test2" }}
      />
    </div>
  );
}

export default Sidebar;
