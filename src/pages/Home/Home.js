import { Image, View, ScrollView, SafeAreaView } from "react-native";
import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Background } from "../../components/shared";
import HomeStyle from "./HomeStyle";

const CarTowing = require("../../staticResources/images/CarTowing.png");
const Diagnostic = require("../../staticResources/images/Diagnostic.png");
const TyreReplacement = require("../../staticResources/images/TyreReplacement.png");
const BatteryReplacement = require("../../staticResources/images/BatteryReplacement.png");

const Home = ({navigation}) => {
  return(
    <Background>
      
      <View style = {HomeStyle.mainContainer}>
      <ScrollView>
        <Text style = {{
          color:"#686060", 
          paddingLeft: 32,
          paddingTop: 18,
          fontSize:22,
          fontFamily:"Arial",
          fontStyle:"normal",
          fontWeight:"600",
        }
        }>
          Categories
        </Text>

      <View style = {HomeStyle.categoryContainer}>
      <TouchableOpacity style = {HomeStyle.imageContainer}>
         <Image source = {CarTowing} style = {HomeStyle.img}/>
         <Text style = {HomeStyle.imgText}>
           Car Towing 
         </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {HomeStyle.imageContainer}>
         <Image source = {Diagnostic} style = {HomeStyle.img}/>
         <Text style = {HomeStyle.imgText}>
           Diagnostic
         </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {HomeStyle.imageContainer}>
         <Image source = {TyreReplacement} style = {HomeStyle.img}/>
         <Text style = {HomeStyle.imgText}>
           Tyre Replacement
         </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {HomeStyle.imageContainer}>
         <Image source = {BatteryReplacement} style = {HomeStyle.img}/>
         <Text style = {HomeStyle.imgText}>
           Battery Replacement
         </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {HomeStyle.imageContainer}>
      <Image source = {BatteryReplacement} style = {HomeStyle.img}/>
         <Text style = {HomeStyle.imgText}>
           Repair
         </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {HomeStyle.imageContainer}>
      <Image source = {BatteryReplacement} style = {HomeStyle.img}/>
         <Text style = {HomeStyle.imgText}>
           Others
         </Text>
      </TouchableOpacity>

      </View>
      
      <Text style = {HomeStyle.title}>          
          Top Recommended Services
        </Text>
        
      <SafeAreaView style={[HomeStyle.scrollableLayout]} >
        <ScrollView horizontal>
        <TouchableOpacity style = {HomeStyle.recommendedContainer}>
          
        </TouchableOpacity>

        <TouchableOpacity style = {HomeStyle.recommendedContainer}>
          
        </TouchableOpacity>

        <TouchableOpacity style = {HomeStyle.recommendedContainer}>
          
        </TouchableOpacity>

        <TouchableOpacity style = {HomeStyle.recommendedContainer}>
          
        </TouchableOpacity>

        <TouchableOpacity style = {HomeStyle.recommendedContainer}>
          
        </TouchableOpacity>
        
        </ScrollView>
      </SafeAreaView>

      <Text style = {HomeStyle.title}>
          Top Rated Services
        </Text>
      <SafeAreaView style={[HomeStyle.scrollableLayout]} >
        <ScrollView horizontal>
        <TouchableOpacity style = {HomeStyle.recommendedContainer}>
          
        </TouchableOpacity>

        <TouchableOpacity style = {HomeStyle.recommendedContainer}>
          
        </TouchableOpacity>

        <TouchableOpacity style = {HomeStyle.recommendedContainer}>
          
        </TouchableOpacity>

        <TouchableOpacity style = {HomeStyle.recommendedContainer}>
          
        </TouchableOpacity>

        <TouchableOpacity style = {HomeStyle.recommendedContainer}>
          
        </TouchableOpacity>
        
        </ScrollView>
      </SafeAreaView>

      </ScrollView>
      </View>
      
      
    </Background>
  );
};

export default Home;

