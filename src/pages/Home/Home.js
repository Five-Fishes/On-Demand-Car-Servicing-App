import { Image, View, ScrollView, SafeAreaView, Dimensions} from "react-native";
import * as React from "react";
import { Text, TouchableOpacity} from "react-native";
import { Background } from "../../components/shared";
import HomeStyle from "./HomeStyle";
import { Component } from "react";
import {Header, Item, Input, Icon, Button} from 'native-base';

const CarTowing = require("../../staticResources/images/CarTowing.png");
const Diagnostic = require("../../staticResources/images/Diagnostic.png");
const TyreReplacement = require("../../staticResources/images/TyreReplacement.png");
const BatteryReplacement = require("../../staticResources/images/BatteryReplacement.png");

class Home extends Component {
  constructor(props) {
    super(props);

    // enable width and height to be flexible with different orientation
    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    }

    this.onLayout = this.onLayout.bind(this);

  }
  onLayout(e) {
    this.setState({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    });
  }
  render(){  
  return(
    <Background>
      
      <View style = {{flex:1}}>
      <ScrollView >
        
      <View style = {[HomeStyle.searchbar,{borderBottomColor: 'transparent'}]} >
       <Header searchBar rounded style = {{backgroundColor: 'transparent'}}>  
          <Item style = {{backgroundColor:"#FFFFFF"}}>
            <Input placeholder="Search Services Nearby" style = {{opacity: 0.44,fontSize: 14, paddingStart: 20}}/>
          </Item>
          <Button transparent>
          <Icon name="ios-search" style = {{color: "#FFFFFF"}} />
          </Button>
        </Header>
        
      </View>


      <View style = {[HomeStyle.mainContainer]}>
      
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
        
      <View onLayout={this.onLayout} style = {[HomeStyle.categoryContainer,{height:this.state.height/3.2}]}
      > 
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

      <Text style = {[HomeStyle.title, {paddingTop:47}]}>
          Top Recommended Services
        </Text>
        
      <SafeAreaView style={[HomeStyle.scrollableLayout]} >     
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style = {{paddingBottom:37}}>
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingBottom:59}}>
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

      
      </View>
      
      </ScrollView>
      </View>

    </Background>
  
  );
      }
}
export default Home;

