import React from "react";
import { StyleSheet, View, Text } from "react-native";

import MealList from "../components/MealList";
import { useSelector } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import DefaultText from "../components/DefaultText";

export default function FavoritesScreen({ navigation }) {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No Favorite meals found. Start adding some!!</DefaultText>
      </View>
    );
  }
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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
