import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { MEALS } from "../data/dummy-data";

export default function MealDetailScreen({ navigation }) {
  const mealId = navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
}

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
  };
};
const style = StyleSheet.create({});
