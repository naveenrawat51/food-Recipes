import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";

const FilterSwitch = ({ label, value, onChange }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        value={value}
        onValueChange={onChange}
      ></Switch>
    </View>
  );
};
export default function FiltersScreen({ navigation }) {
  const [isGluteFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGluteFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    console.log(appliedFilters);
  }, [isGluteFree, isVegetarian, isVegan]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Filter Meals</Text>
      <FilterSwitch
        label="Gluten-free"
        value={isGluteFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
}

FiltersScreen.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Filter Meals"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      );
    },
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Save"
            iconName="ios-save"
            onPress={() => {
              navigation.getParam("save")();
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
});
