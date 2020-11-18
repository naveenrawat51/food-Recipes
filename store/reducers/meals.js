import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTER } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: [],
  favoriteMeals: [],
  filterApplied: false,
};

export default function mealsReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex !== -1) {
        const updatedFavoriteMeals = [...state.favoriteMeals];
        updatedFavoriteMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavoriteMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case SET_FILTER:
      const appliedFilters = action.filters;
      let isFilterApplied = true;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      if (
        !appliedFilters.lactoseFree &&
        !appliedFilters.glutenFree &&
        !appliedFilters.vegan &&
        !appliedFilters.vegetarian
      ) {
        isFilterApplied = false;
      }
      console.log("updatedFilteredMeals: ", updatedFilteredMeals.length);
      return {
        ...state,
        filteredMeals: updatedFilteredMeals,
        filterApplied: isFilterApplied,
      };
    default:
      return state;
  }
}
