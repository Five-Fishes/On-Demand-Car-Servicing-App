import React from "react";
import { useState } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Background from "../../components/shared/PageBackground";
import FavouriteList from "./FavouriteList";
import FavouriteStyle from "./FavouriteStyle";

const Favourite = () => {
  const [isServices, setIsServices] = useState(true);

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
              <TouchableOpacity
                style={FavouriteStyle.button}
                onPress={() => setIsServices(true)}
              >
                <Text style={FavouriteStyle.buttonText}>Services</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={FavouriteStyle.button}
                onPress={() => setIsServices(false)}
              >
                <Text style={FavouriteStyle.buttonText}>Workshop</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  padding: 7,
                  height: 37,
                  backgroundColor: "transparent",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "transparent",
                    fontSize: 16,
                    fontStyle: "normal",
                    fontWeight: "600",
                  }}
                >
                  apperent
                </Text>
              </TouchableOpacity>
            </View>

            <FavouriteList isServices={isServices} />
          </View>
        </View>
      </ScrollView>
    </Background>
  );
};
export default Favourite;
