import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Background from "../../components/shared/PageBackground";
import AppointmentList from "./AppointmentList";
import AppointmentStyle from "./AppointmentStyle";
import { Component } from "react";

class Appointment extends Component {
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
        <View style={AppointmentStyle.toolbar}>
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
            Appointment
          </Text>
        </View>

        <View style={AppointmentStyle.container}>
          <View
            onLayout={this.onLayout}
            style={{
              flex: 1,
              flexDirection: "row",
              marginLeft: 20,
              minHeight: 60,
              marginRight: 20,
              justifyContent: "space-between",
              width: this.state.width / 2.5,
              minWidth: 320,
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

          <View style={{ flex: 10 }}>
            <ScrollView
              contentInset={{ bottom: 30 }}
              style={AppointmentStyle.linearlayout}
            >
              <AppointmentList />
            </ScrollView>
          </View>
        </View>
      </Background>
    );
  }
}
export default Appointment;
