import { CATEGORY_DATA, PRODUCT_DATA } from "@/server-data/server-data";

export const getCategory = (category) =>
  CATEGORY_DATA.find((cat) => cat.category === category);

export const findProduct = (id, category, subCategory) =>
  PRODUCT_DATA.find(
    (item) =>
      item.id == id &&
      item.category === category &&
      item.subCategory === subCategory
  );
