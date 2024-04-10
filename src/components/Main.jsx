import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Route, Routes } from "react-router-native";
import Intro from "./Intro";
import SignIn from "./SignIn";
import Login from "./Login";

const Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
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
