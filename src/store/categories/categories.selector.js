import { createSelector } from "reselect";

//export const selectCategories = (state) => state.categories.categories;

export const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories,
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, el) => {
      const { title, items } = el;
      acc[title.toLowerCase()] = items;

      return acc;
    }, {}),
);
