import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "grey",
    margin: 5,
  },
  text: {
    fontFamily: "lobster",
  },
});
