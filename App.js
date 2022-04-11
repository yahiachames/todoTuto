import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from "./AppContainer";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    lobster: require("./assets/fonts/Lobster/Lobster-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else return <AppContainer />;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
