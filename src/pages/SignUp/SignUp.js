import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Background } from "../../components/shared";

const SignUp = () => {
  return (
    <Background>
      <TouchableOpacity
        onPress={() => alert("Not Implemented!")}
        style={{
          backgroundColor: "white",
          padding: 5,
          borderRadius: 5,
          margin: 5,
        }}
      >
        <Text style={{ fontSize: 20, color: "black" }}>Click Me</Text>
      </TouchableOpacity>
    </Background>
  );
};

export default SignUp;
