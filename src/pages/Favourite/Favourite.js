import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Background from "../../components/shared/PageBackground";
import FavouriteList from "./FavouriteList";
import FavouriteStyle from "./FavouriteStyle";
import { Component } from "react";
class Favourite extends Component {
  constructor(props) {
    super(props);

    // enable width and height to be flexible with different orientation
    this.state = {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    };

    this.onLayout = this.onLayout.bind(this);
  }
  onLayout(e) {
    this.setState({
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    });
  }

  render() {
    return (
      <Background>
        <View style={FavouriteStyle.toolbar}>
          <Text
            style={{
              color: "#FFFFFF",
              alignSelf: "center",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: 30,
              lineHeight: 31,
              letterSpacing: 0.05,
            }}
          >
            Favourites
          </Text>
        </View>

        <View style={FavouriteStyle.container}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginLeft: 20,
              paddingRight: 20,
              minHeight: 52,
            }}
          >
            <TouchableOpacity style={[FavouriteStyle.button]}>
              <Text style={FavouriteStyle.buttonText}>Services</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[FavouriteStyle.button]}>
              <Text style={FavouriteStyle.buttonText}>Workshop</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 12 }}>
            <ScrollView
              contentInset={{ bottom: 30 }}
              style={FavouriteStyle.linearlayout}
            >
              <FavouriteList />
            </ScrollView>
          </View>
        </View>
      </Background>
    );
  }
}
export default Favourite;
