import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoryMealsScreen({ navigation }) {
  const catId = navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return (
    <View>
      <Text>Category Meals Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to details page"
        onPress={() => navigation.navigate({ routeName: "MealDetail" })}
      />
    </View>
  );
}

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const style = StyleSheet.create({});
