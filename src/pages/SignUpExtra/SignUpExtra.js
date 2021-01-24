import { Text, Input, Item, Label, Button, CheckBox } from "native-base";
import React, { useState, useEffect } from "react";
import { View, ScrollView, ImageBackground } from "react-native";

import { Background } from "../../components/shared";
import SignUpExtraStyle from "./SignUpExtraStyle";

const SignUpExtra = ({ navigation, setIsAuthenticated }) => {
  const [image, setImage] = useState();

  useEffect(() => {
    setImage(require("../../staticResources/images/cafixLogo.png"));
  });

  const onSignUpBtnHandler = () => {
    setIsAuthenticated(true);
  };
  return (
    <Background>
      <ScrollView alwaysBounceVertical style={{ width: "100%" }}>
        <ImageBackground source={image} style={SignUpExtraStyle.image} />
        <View style={SignUpExtraStyle.card}>
          <Text style={SignUpExtraStyle.title}>Hi! Welcome to CaFix!</Text>
          <Text style={SignUpExtraStyle.subtitle}>just a few things more </Text>
          <View style={SignUpExtraStyle.form}>
            <View style={{ flexDirection: "row" }}>
              <Item style={SignUpExtraStyle.firstNameInput} floatingLabel>
                <Label>First Name</Label>
                <Input />
              </Item>
              <Item style={SignUpExtraStyle.lastNameInput} floatingLabel>
                <Label>Last Name</Label>
                <Input />
              </Item>
            </View>
            <Item style={SignUpExtraStyle.input} floatingLabel>
              <Label>Date of Birth</Label>
              <Input />
            </Item>
            <Item style={SignUpExtraStyle.input} floatingLabel>
              <Label>Phone Number</Label>
              <Input />
            </Item>
            <Item style={SignUpExtraStyle.input} floatingLabel>
              <Label>Vehicle Type</Label>
              <Input />
            </Item>
            <Item style={SignUpExtraStyle.input} floatingLabel>
              <Label>Vehicle Model</Label>
              <Input />
            </Item>
            <Item style={SignUpExtraStyle.input} floatingLabel>
              <Label>Vehicle Brand</Label>
              <Input />
            </Item>
            <Item style={SignUpExtraStyle.input} floatingLabel>
              <Label>Vehicle Plate Number</Label>
              <Input />
            </Item>
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                marginTop: 7,
              }}
            >
              <CheckBox color="gray" />
              <Text style={{ left: 25, fontSize: 14, fontWeight: "400" }}>
                I agree that all the information given is correct.
              </Text>
            </View>

            <Button
              rounded
              style={SignUpExtraStyle.button}
              onPress={onSignUpBtnHandler}
            >
              <Text style={SignUpExtraStyle.buttonText}>Submit</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
};

export default SignUpExtra;
