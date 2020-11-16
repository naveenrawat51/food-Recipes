import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

export default function CategoriesScreen(props) {
  const renderGridItem = (itemData) => (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onSelect={() => {
        props.navigation.navigate({
          routeName: "CategoryMeals",
          params: { categoryId: itemData.item.id },
        });
      }}
    />
  );

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
}

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-menu"
            onPress={() => navData.navigation.toggleDrawer()}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({});
