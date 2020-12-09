import React from "react";
import { View, TextInput, Text, Alert, ImageBackground } from "react-native";
import SignInStyle from "./SignInStyle";
import Background from "../../components/shared/PageBackground";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignIn = () => {
  return (
    <Background>
      <View style={SignInStyle.container}>
        <ImageBackground
          source={require("../../staticResources/images/cafixLogo.png")}
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
              Alert.alert("Login Pressed");
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
            onPress={() => Alert.alert("Register Here Pressed")}
          >
            Register Here
          </Text>
        </View>
      </View>
    </Background>
  );
};

export default SignIn;
