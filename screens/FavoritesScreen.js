import React from "react";
import { StyleSheet, View, Text } from "react-native";

import MealList from "../components/MealList";
import { useSelector } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

export default function FavoritesScreen({ navigation }) {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  return <MealList displayedMeals={favMeals} navigation={navigation} />;
}

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite Meals"
            iconName="ios-menu"
            onPress={() => navData.navigation.toggleDrawer()}
          />
        </HeaderButtons>
      );
    },
  };
};

const style = StyleSheet.create({});
