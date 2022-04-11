import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const AppButton = ({ title }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 50,
    backgroundColor: "grey",
    color: "white",
    margin: 10,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontFamily: "lobster",
  },
});
