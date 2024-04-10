import { View, Text } from "react-native";
import React from "react";
import { Link } from "react-router-native";

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
      <Link to="/">
        <Text>to intro</Text>
      </Link>
    </View>
  );
};

export default Login;
