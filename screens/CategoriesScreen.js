import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const renderGridItem = (itemData) => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};
export default function CategoriesScreen({ navigation }) {
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 70,
  },
});
