import { Link } from "react-router-dom";
import SubCategory from "./SubCategory";
import "../../assests/stylesheets/blog/sidebar/Sidebar.scss";

interface Props {
  /** Name displayed for category */
  name: string;
  /** Router link used when category is clicked */
  path: string;
  /** Object map of subcategory name (display) to path */
  subCategories: {
    [key: string]: string;
  };
}

/** Main category in sidebar nav. Contains children subcategories. Routes to category root when clicked. */
function Category({ name, path, subCategories }: Props) {
  const subCategoryKeys = Object.keys(subCategories);

  return (
    <div className="sidebar-category">
      {/* Main category display */}
      <Link to={`/blog${path}`}>
        <span>{name}</span>
      </Link>
      {/* Sub-category displays */}
      {subCategoryKeys.map((subCategoryName, index) => (
        <SubCategory
          name={subCategoryName}
          path={subCategories[subCategoryName]}
          key={index}
        />
      ))}
    </div>
  );
}

export default Category;
