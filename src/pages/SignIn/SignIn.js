import React, { useEffect, useState } from "react";
import { View, TextInput, Text, Alert, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useMutation, gql } from "@apollo/client";

import SignInStyle from "./SignInStyle";
import Background from "../../components/shared/PageBackground/PageBackground";
import { signIn } from "../../utils/AuthUtils";

const LOG_IN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      token
    }
  }
`;

const SignIn = ({ navigation, setIsAuthenticated }) => {
  const [image, setImage] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data: loginData, error: loginError }] = useMutation(LOG_IN, {
    variables: {
      email: email,
      password: password,
    },
  });

  const handleEmailChanged = (txt) => {
    setEmail(txt);
  };

  const handlePasswordChanged = (txt) => {
    setPassword(txt);
  };

  useEffect(() => {
    setImage(require("../../staticResources/images/cafixLogo.png"));
  });

  if (loginData) {
    if (loginData.login.token.length > 0) {
      signIn(loginData.login.token);
      setIsAuthenticated(true);
    } else {
      alert("login failed");
    }
  }

  if (loginError) {
    console.log("loginError :>> ", loginError.message);
  }

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
                value={email}
                onChangeText={handleEmailChanged}
                placeholder="email"
                textContentType="emailAddress"
                underlineColorAndroid="#FFFFFF"
                placeholderTextColor="#FFFFFF"
                style={SignInStyle.input}
              />
            </View>

            <View style={SignInStyle.inputBorder}>
              <TextInput
                value={password}
                onChangeText={handlePasswordChanged}
                placeholder="Password"
                textContentType="password"
                underlineColorAndroid="#FFFFFF"
                secureTextEntry={true}
                placeholderTextColor="#FFFFFF"
                style={SignInStyle.input}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                console.log("Pressed");
                login();
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
