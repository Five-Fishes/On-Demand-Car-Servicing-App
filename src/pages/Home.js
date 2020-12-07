import * as React from "react";
import { Button, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#8872AD",
      }}
    >
      <LinearGradient
        colors={["#1C4687", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />
      <Text>Home Screen</Text>
      <Button
        title="next page"
        backgroundColor="#ffffff"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
};

export default Home;
