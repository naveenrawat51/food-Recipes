import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealItem from "../components/MealItem";

export default function CategoryMealsScreen({ navigation }) {
  const catId = navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) !== -1
  );

  const displayItem = (itemData) => {
    return <MealItem {...itemData.item} onSelectedItem={() => {}} />;
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={displayItem}
        style={{ width: "80%" }}
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
