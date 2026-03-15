import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles";

import Categories from "../../utils/categoriesObj/categories.utils";

const Directory = () => (
  <DirectoryContainer>
    {Categories.map((category) => (
      <DirectoryItem key={category.id} category={category} />
    ))}
  </DirectoryContainer>
);

export default Directory;
