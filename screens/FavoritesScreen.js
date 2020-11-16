import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

export default function FavoritesScreen({ navigation }) {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");

  return <MealList displayedMeals={favMeals} navigation={navigation} />;
}

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorite Meals",
};

const style = StyleSheet.create({});
