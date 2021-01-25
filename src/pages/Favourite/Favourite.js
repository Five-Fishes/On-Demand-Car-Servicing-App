import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Background from "../../components/shared/PageBackground";
import FavouriteList from "./FavouriteList";
import FavouriteStyle from "./FavouriteStyle";

const Favourite = () => {
  return (
    <Background>
      <ScrollView style={{ width: "100%", height: "100%" }}>
        <View style={FavouriteStyle.appbar}>
          <Text
            style={{
              color: "#FFFFFF",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: 30,
              textAlign: "center",
              margin: 40,
            }}
          >
            Favourites
          </Text>
        </View>
        <View style={{ backgroundColor: "#1C4687", minHeight: 600 }}>
          <View style={FavouriteStyle.container}>
            <View
              style={{
                alignContent: "space-between",
                flexDirection: "row",
                marginHorizontal: 20,
                marginTop: 30,
                marginBottom: 50,
                minHeight: 52,
              }}
            >
              <TouchableOpacity style={FavouriteStyle.button}>
                <Text style={FavouriteStyle.buttonText}>Services</Text>
              </TouchableOpacity>

              <TouchableOpacity style={FavouriteStyle.button}>
                <Text style={FavouriteStyle.buttonText}>Workshop</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: "transparent" }}>
                <Text style={FavouriteStyle.buttonText}></Text>
              </TouchableOpacity>
            </View>

            <FavouriteList style={{}} />
          </View>
        </View>
      </ScrollView>
    </Background>
  );
};
export default Favourite;
