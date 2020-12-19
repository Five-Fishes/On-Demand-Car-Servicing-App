import React, { useEffect, useState } from "react";
import { View, TextInput, Text, Alert, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import SignInStyle from "./SignInStyle";
import Background from "../../components/shared/PageBackground/PageBackground";

const SignIn = ({ navigation }) => {
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
              width: 300,
              height: 300,
              flex: 3,
            }}
          />
          <View style={{ flex: 5 }}>
            <View style={SignInStyle.inputBorder}>
              <TextInput
                placeholder="Username"
                textContentType="name"
                style={SignInStyle.input}
              />
            </View>

            <View style={SignInStyle.inputBorder}>
              <TextInput
                placeholder="Password"
                textContentType="password"
                style={SignInStyle.input}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}
              style={{
                marginVertical: 50,
                borderRadius: 5,
                backgroundColor: "white",
                alignSelf: "baseline",
                alignSelf: "center",
                padding: 10,
              }}
            >
              <Text>Login</Text>
            </TouchableOpacity>
            <Text
              style={{ alignSelf: "center" }}
              onPress={() => Alert.alert("Forgot Password Pressed")}
            >
              Forgot your password?
            </Text>
            <Text
              style={{ alignSelf: "center" }}
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
