import { View, Text } from "react-native";
import React from "react";
import { Link } from "react-router-native";

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link to="/">
        <Text>to intro</Text>
      </Link>
    </View>
  );
};

export default SignIn;
