import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MEALS } from "../data/dummy-data";
import CustomHeaderButton from "../components/CustomHeaderButton";
import DefaultText from "../components/DefaultText";

const ListItem = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <Text>{children}</Text>
    </View>
  );
};

export default function MealDetailScreen({ navigation }) {
  const mealId = navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <ImageBackground
        source={{ uri: selectedMeal.imageUrl }}
        style={styles.image}
      >
        <Text style={styles.name} numberOfLines={1}>
          {selectedMeal.title}
        </Text>
      </ImageBackground>
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>INGREDIENTS</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>STEPS</Text>
      {selectedMeal.steps.map((step, index) => (
        <ListItem key={step}>
          {index + 1}. {step}
        </ListItem>
      ))}
    </ScrollView>
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
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 17,
    textAlign: "center",
  },
  name: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
