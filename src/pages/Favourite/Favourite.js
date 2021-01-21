import React from "react";
import { View, Text, ScrollView, SafeAreaView} from "react-native";
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

        <View style = {{flex:1, flexDirection:'row', marginLeft:20, paddingRight:20, minHeight:52, flexGrow:1}}>
          <TouchableOpacity 
            style = {[FavouriteStyle.button]}>
            <Text style ={FavouriteStyle.buttonText}>
              Services
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style = {[FavouriteStyle.button]}>
            <Text style ={FavouriteStyle.buttonText}>
              Workshop
            </Text>
          </TouchableOpacity>

          </View>

          <View style = {{flex:12}}>
          <ScrollView contentInset= {{bottom: 30}} style = {FavouriteStyle.linearlayout}>
            <FavouriteList/>
          </ScrollView>
          </View>
        </View>    
      </Background>
    );
};
export default Favourite;