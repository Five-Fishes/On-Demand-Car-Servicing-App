import React from "react";
import { View, TextInput, Text, Alert, StyleSheet, ToolbarAndroidComponent} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Background from "../../components/shared/PageBackground";
import AppointmentList from "./AppointmentList";

const AppointmentListPage = ({navigation}) => {  
  return (
      <Background>
        <Text style ={{
            color:"#FFFFFF",
            position: "absolute",
            width: 229,
            height: 44,
            left: 103,
            top: 44,
            fontFamily: "Arial",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 30,
            lineHeight:31,
            letterSpacing:0.05,
          }}>
            Appointment
        </Text>

        <View style = {styles.container}>
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
              Today
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
              Tomorrow
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style = {{              
                position: "absolute",
                padding: 7,
                width: 106,
                height: 37,
                left: 286,
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
              Any Date
            </Text>
          </TouchableOpacity>
        </View>

        <View style = {styles.linearlayout}>
          <AppointmentList/>
        </View>
      </Background>
    );
};


  const styles = StyleSheet.create ({

    toolbar:{
      position:"absolute",
      backgroundColor:'#AAAAAA',
      top:30,
      bottom:10,
      //flexDirection:'row'
  },
    //create container style
    container:{
      flexDirection:"column",
      flex:1,
      position: "absolute",
      width: 411,
      height: 638, 
      top: 125,
      borderRadius: 40,
      backgroundColor: "#FFFFFF",
    },

    linearlayout:{
      position: "absolute",
      width: 411,
      height: 400, 
      top: 245,
      backgroundColor: "#FFFFFF",
    }
  });

  export default AppointmentListPage;