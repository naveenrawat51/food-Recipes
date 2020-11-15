import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

export default function CategoryMealsScreen({ navigation }) {
  return (
    <View>
      <Text>Category Meals Screen</Text>
      <Button
        title="Go to details page"
        onPress={() => navigation.navigate({ routeName: "MealDetail" })}
      />
    </View>
  );
}

const style = StyleSheet.create({});
