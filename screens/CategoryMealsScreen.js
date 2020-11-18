import React from "react";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummy-data";

import MealList from "../components/MealList";

export default function CategoryMealsScreen({ navigation }) {
  const catId = navigation.getParam("categoryId");

  const availableMeals = useSelector((state) => state.meals.meals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) !== -1
  );

  return <MealList displayedMeals={displayedMeals} navigation={navigation} />;
}

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};
