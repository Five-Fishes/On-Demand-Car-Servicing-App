import React from "react";
import { View, Text, ScrollView} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Background from "../../components/shared/PageBackground";
import AppointmentList from "./AppointmentList";
import AppointmentListStyle from "./AppointmentListStyle";

const AppointmentListPage = ({navigation}) => {  
  return (
      <Background>
        <View style = {AppointmentListStyle.toolbar}>
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
            Appointment
        </Text>
        </View>

        <View style = {AppointmentListStyle.container}>
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

          <ScrollView style = {AppointmentListStyle.linearlayout}>
            <AppointmentList/>
          </ScrollView>

        </View>    
      </Background>
    );
};
export default AppointmentListPage;