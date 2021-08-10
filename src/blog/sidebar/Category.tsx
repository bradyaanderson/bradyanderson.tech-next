import { Link } from "react-router-dom";
import SubCategory from "./SubCategory";
import "../../assests/stylesheets/blog/sidebar/Sidebar.scss";
import { join } from "path";

interface Props {
  /** Name displayed for category */
  display: string;
  /** Router link used when category is clicked */
  subdirectory: string;
  /** Object map of subcategory name (display) to path */
  subCategories: SubCategories;
}

/**
 * Structure for storing subcategories.
 */
export interface SubCategories {
  [key: string]: string;
}

/** Main category in sidebar nav. Contains children subcategories. Routes to category root when clicked. */
function Category({ display, subdirectory, subCategories }: Props) {
  const subCategoryKeys = Object.keys(subCategories);
  const categoryPath = join("/", "blog", subdirectory);

  return (
    <div className="sidebar-category">
      {/* Main category display */}
      <Link to={categoryPath}>
        <span>{display}</span>
      </Link>
      {/* Sub-category displays */}
      {subCategoryKeys.map((subCategoryName, index) => (
        <SubCategory
          name={subCategoryName}
          subCategory={subCategories[subCategoryName]}
          categoryPath={categoryPath}
          key={index}
        />
      ))}
    </div>
  );
}

export default Category;
