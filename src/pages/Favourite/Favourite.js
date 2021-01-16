import React from "react";
import { View, Text, ScrollView} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Background from "../../components/shared/PageBackground";
import FavouriteList from "./FavouriteList";
import FavouriteStyle from "./FavouriteStyle";

const Favourite = ({navigation}) => {  
  return (
      <Background>
        <View style = {FavouriteStyle.toolbar}>
        <Text style ={{
            color:"#FFFFFF",
            alignSelf: "center",  
            fontFamily: "Arial",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 30,
            lineHeight:31,
            letterSpacing:0.05,
          }}>
            Favourites
        </Text>
        </View>

        <View style = {FavouriteStyle.container}>
          <TouchableOpacity 
            style = {{              
                position: "absolute",
                padding: 7,
                width: 106,
                height: 37,
                left: 20,
                top: 31,
                backgroundColor: "#F9FBFF",
                shadowOffset:{  width: 2,  height: 2,  },
                shadowColor: "black",
                shadowOpacity: 0.25,
                borderRadius: 20,                     
            }}>
            <Text style ={
              { color:"#686060", 
                alignSelf:"center",
                fontSize:16,
                fontFamily:"Arial",
                fontStyle:"normal",
                fontWeight:"600",
              }}>
              Services
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style = {{              
                position: "absolute",
                padding: 7,
                width: 106,
                height: 37,
                left: 153,
                top: 31,
                backgroundColor: "#F9FBFF",
                shadowOffset:{  width: 2,  height: 2,  },
                shadowColor: "black",
                shadowOpacity: 0.25,
                borderRadius: 20,                     
            }}>
            <Text style ={
              { color:"#686060", 
                alignSelf:"center",
                fontSize:16,
                fontFamily:"Arial",
                fontStyle:"normal",
                fontWeight:"600",
              }}>
              Workshop
            </Text>
          </TouchableOpacity>

          <ScrollView style = {FavouriteStyle.linearlayout}>
            <FavouriteList/>
          </ScrollView>

        </View>    
      </Background>
    );
};
export default Favourite;