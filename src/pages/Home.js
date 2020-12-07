import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Background } from "../components/shared";

const Home = ({ navigation }) => {
  return (
    <Background>
      <Text style={{ color: "white" }}>Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
        style={{
          backgroundColor: "white",
          padding: 5,
          borderRadius: 5,
          margin: 5,
        }}
      >
        <Text style={{ fontSize: 20, color: "black" }}>Sign Up</Text>
      </TouchableOpacity>
    </Background>
  );
};

export default Home;
