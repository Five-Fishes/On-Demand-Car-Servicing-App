import React, { useEffect, useState } from "react";
import { View, TextInput, Text, Alert, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import SignInStyle from "./SignInStyle";
import Background from "../../components/shared/PageBackground/PageBackground";

const SignIn = ({ navigation, setIsAuthenticated }) => {
  const [image, setImage] = useState();

  useEffect(() => {
    setImage(require("../../staticResources/images/cafixLogo.png"));
  });

  return (
    <Background>
      {image && (
        <View style={SignInStyle.container}>
          <ImageBackground
            source={image}
            style={{
              alignSelf: "center",
              width: "101%",
              flex: 3,
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
          />
          <View style={{ flex: 5 }}>
            <View style={SignInStyle.inputBorder}>
              <TextInput
                placeholder="Username"
                textContentType="name"
                underlineColorAndroid="#FFFFFF"
                placeholderTextColor="#FFFFFF"
                style={SignInStyle.input}
              />
            </View>

            <View style={SignInStyle.inputBorder}>
              <TextInput
                placeholder="Password"
                textContentType="password"
                underlineColorAndroid="#FFFFFF"
                placeholderTextColor="#FFFFFF"
                style={SignInStyle.input}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                setIsAuthenticated(true);
              }}
              style={{
                marginVertical: 50,
                width: "30%",
                backgroundColor: "transparent",
                alignSelf: "baseline",
                alignSelf: "center",
                borderColor: "#FFFFFF",
                borderWidth: 1,
                padding: 5,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  alignSelf: "center",
                  fontWeight: "bold",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
            <Text
              style={{ alignSelf: "center", margin: 5, color: "#FFFFFF" }}
              onPress={() =>
                Alert.alert(
                  "Hahaha none of my business. Go figure out yourself"
                )
              }
            >
              Forgot your password?
            </Text>
            <Text
              style={{ alignSelf: "center", margin: 5, color: "#1C4687" }}
              onPress={() => navigation.navigate("SignUp")}
            >
              Register Here
            </Text>
          </View>
        </View>
      )}
    </Background>
  );
};

export default SignIn;
