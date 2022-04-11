import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem";
import AppButton from "../components/AppButton";

const ListScreen = () => {
  const [data, setData] = useState([
    { name: "fatma" },
    { name: "bedis" },
    { name: "chames" },
  ]);
  return (
    <View style={styles.container}>
      <Text>ListScreen</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <ListItem item={item} />;
        }}
      />
      <View style={styles.btn}>
        <AppButton title={"add"} />
        <AppButton title={"delete"} />
      </View>
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
    borderWidth: 1,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
