import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import MealItem from "../components/MealItem";

export default function MealList({ displayedMeals, navigation }) {
  const displayItem = (itemData) => {
    return (
      <MealItem
        {...itemData.item}
        onSelectedItem={() => {
          navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={displayItem}
        style={{ width: "80%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
