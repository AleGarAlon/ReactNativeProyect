import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>FUnciona el router</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
