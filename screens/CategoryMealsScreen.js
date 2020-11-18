import React from "react";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummy-data";

import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";
import { StyleSheet, View } from "react-native";

export default function CategoryMealsScreen({ navigation }) {
  const catId = navigation.getParam("categoryId");
  const isFilterAvailable = useSelector((state) => state.meals.filterApplied);
  const availableMeals = useSelector((state) =>
    isFilterAvailable ? state.meals.filteredMeals : state.meals.meals
  );

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) !== -1
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No Meals found, may be check you filters!!</DefaultText>
      </View>
    );
  }

  return <MealList displayedMeals={displayedMeals} navigation={navigation} />;
}

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
