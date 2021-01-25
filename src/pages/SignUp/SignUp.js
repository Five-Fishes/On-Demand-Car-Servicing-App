import { Text, Input, Item, Label, Button } from "native-base";
import React, { useState, useEffect } from "react";
import { View, ImageBackground } from "react-native";

import { Background } from "../../components/shared";
import SignUpStyle from "./SignUpStyle";

const SignUp = ({ navigation, route }) => {
  const [image, setImage] = useState();

  useEffect(() => {
    setImage(require("../../staticResources/images/cafixLogo.png"));
  });

  const onNextBtnHandler = () => {
    navigation.navigate("SignUpExtra");
  };

  return (
    <Background>
      <View style={SignUpStyle.container}>
        <ImageBackground source={image} style={SignUpStyle.image} />
        <View style={SignUpStyle.card}>
          <Text style={SignUpStyle.title}>Sign Up</Text>
          <View style={SignUpStyle.form}>
            <Item style={SignUpStyle.input} floatingLabel>
              <Label>Email Address</Label>
              <Input />
            </Item>
            <Item style={SignUpStyle.input} floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item>
            <Item style={SignUpStyle.input} floatingLabel>
              <Label>Confirm Password</Label>
              <Input />
            </Item>
            <Button
              rounded
              style={SignUpStyle.button}
              onPress={onNextBtnHandler}
            >
              <Text style={SignUpStyle.buttonText}>Next</Text>
            </Button>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default SignUp;
