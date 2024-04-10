import { View, Text } from "react-native";
import React from "react";
import { Link } from "react-router-native";

const Intro = () => {
  return (
    <View>
      <Text>Esta es la pagina de intro, probando...</Text>
      <Link to="/signin">
        <Text>to signin</Text>
      </Link>
      <Link to="/login">
        <Text>to login</Text>
      </Link>
    </View>
  );
};

export default Intro;
