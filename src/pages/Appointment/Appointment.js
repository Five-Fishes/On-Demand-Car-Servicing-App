import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Background from "../../components/shared/PageBackground";
import AppointmentList from "./AppointmentList";
import AppointmentStyle from "./AppointmentStyle";

const Appointment = () => {
  return (
    <Background>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View style={AppointmentStyle.appbar}>
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
            Appointment
          </Text>
        </View>
        <View style={{ backgroundColor: "#1C4687", minHeight: 600 }}>
          <View style={AppointmentStyle.container}>
            <View
              style={{
                flexDirection: "row",
                minHeight: 60,
                justifyContent: "space-evenly",
                marginVertical: 30,
              }}
            >
              <TouchableOpacity style={AppointmentStyle.button}>
                <Text style={AppointmentStyle.buttonText}>Today</Text>
              </TouchableOpacity>

              <TouchableOpacity style={AppointmentStyle.button}>
                <Text style={AppointmentStyle.buttonText}>Tomorrow</Text>
              </TouchableOpacity>

              <TouchableOpacity style={AppointmentStyle.button}>
                <Text style={AppointmentStyle.buttonText}>Any Date</Text>
              </TouchableOpacity>
            </View>

            <AppointmentList />
          </View>
        </View>
      </ScrollView>
    </Background>
  );
};

export default Appointment;
