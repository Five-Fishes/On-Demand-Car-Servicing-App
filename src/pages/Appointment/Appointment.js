import React from "react";
import { View, Text, ScrollView, SafeAreaView} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Background from "../../components/shared/PageBackground";
import AppointmentList from "./AppointmentList";
import AppointmentStyle from "./AppointmentStyle";

const Appointment = ({navigation}) => {  
  return (
      <Background>
        <View style = {AppointmentStyle.toolbar}>
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

        <View style = {AppointmentStyle.container}>

        <View style = {{flex:1, flexDirection:'row', marginLeft:20, minHeight:52, paddingRight:20, flexGrow:1}}> 
          <TouchableOpacity style = {AppointmentStyle.button}>
            <Text style ={AppointmentStyle.buttonText}>
              Today
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style = {AppointmentStyle.button}>
            <Text style ={AppointmentStyle.buttonText}>
              Tomorrow
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style = {AppointmentStyle.button}>
            <Text style ={AppointmentStyle.buttonText}>
              Any Date
            </Text>
          </TouchableOpacity>
        </View>

          <View style = {{flex:12}}> 
            <ScrollView contentInset= {{bottom: 30}} style = {AppointmentStyle.linearlayout}>
              <AppointmentList/>
            </ScrollView>
          </View>
          
        </View>    
      </Background>
    );
};
export default Appointment;