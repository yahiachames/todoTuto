import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ListScreen from "./screens/ListScreen";

const AppContainer = () => {
  return (
    <View style={styles.container}>
      <ListScreen />
    </View>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: "100%",
    height: "100%",
  },
});
