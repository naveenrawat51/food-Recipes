import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import Colors from "../constants/Colors";
import CommonStyle from "../constants/commonStyle";

import { CATEGORIES } from "../data/dummy-data";

export default function CategoriesScreen(props) {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: { categoryId: itemData.item.id },
          })
        }
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
}

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
  ...CommonStyle.headerStyle,
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 50,
  },
});
