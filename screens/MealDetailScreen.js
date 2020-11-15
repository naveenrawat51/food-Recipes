import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MEALS } from "../data/dummy-data";
import CustomHeaderButton from "../components/CustomHeaderButton";

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
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-star-outline"
            onPress={() => console.log("naveen")}
          />
        </HeaderButtons>
      );
    },
  };
};
const style = StyleSheet.create({});
