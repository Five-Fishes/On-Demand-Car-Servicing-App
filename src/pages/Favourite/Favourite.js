import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Background from "../../components/shared/PageBackground";
import FavouriteList from "./FavouriteList";
import FavouriteStyle from "./FavouriteStyle";

const Favourite = () => {
  return (
    <Background>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", height: "100%" }}
      >
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
                flexDirection: "row",
                minHeight: 60,
                justifyContent: "space-evenly",
                marginVertical: 30,
              }}
            >
              <TouchableOpacity style={FavouriteStyle.button}>
                <Text style={FavouriteStyle.buttonText}>Services</Text>
              </TouchableOpacity>

              <TouchableOpacity style={FavouriteStyle.button}>
                <Text style={FavouriteStyle.buttonText}>Workshop</Text>
              </TouchableOpacity>

              <TouchableOpacity style={FavouriteStyle.button}>
                <Text style={FavouriteStyle.buttonText}>anything</Text>
              </TouchableOpacity>
            </View>

            <FavouriteList />
          </View>
        </View>
      </ScrollView>
    </Background>
  );
};
export default Favourite;
