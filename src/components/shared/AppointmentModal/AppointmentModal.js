import {
  Button,
  Text,
  Radio,
  List,
  ListItem,
  Right,
  Left,
  DatePicker,
} from "native-base";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Modal, View } from "react-native";
import { useLazyQuery, gql, useMutation } from "@apollo/client";

import AppointmentModalStyle from "./AppointmentModalStyle";
import { getUserId } from "../../../utils/AuthUtils";
import { ScrollView } from "react-native-gesture-handler";

const USER_QUERY = gql`
  query User($id: String!) {
    user(id: $id) {
      id
      lastName
      firstName
      dateOfBirth
      favouriteBranch {
        favouriteBranchID
      }
      vehicle {
        vehicleType
        vehicleBrand
        vehicleModel
        vehiclePlateNumber
        id
      }
    }
  }
`;

const CREATE_APPOINTMENT_MUTATION = gql`
  mutation CreateAppointment($appointmentInput: AppointmentInput!) {
    createAppointment(appointmentInput: $appointmentInput) {
      id
    }
  }
`;

const AppointmentModal = ({
  modalVisible,
  setModalVisible,
  branchID,
  serviceID,
}) => {
  /**
   * states
   */
  const [newAppointment, setNewAppointment] = useState({
    id: null,
    appointmentDate: new Date(), //OK
    customerID: "", // OK
    branchID: "", // Get from one lvl up
    vehicleID: "", // OK
    serviceID: "", // get from one lvl up
    appointmentStatus: "PENDING", // OK
  });
  const [selectedVehicle, setSelectedVehicle] = useState();

  /**
   * gql
   */
  const [
    createAppointment,
    { data: createAppointmentData, error: createAppointmentError },
  ] = useMutation(CREATE_APPOINTMENT_MUTATION, {
    variables: {
      appointmentInput: newAppointment,
    },
  });
  const [getUser, { data: userData, error: userError }] = useLazyQuery(
    USER_QUERY,
    {
      variables: { id: newAppointment.customerID },
    }
  );

  /**
   * flow control
   */
  useEffect(() => {
    (async () => {
      const userId = await getUserId();
      let newState = { ...newAppointment };
      newState.customerID = userId;
      setNewAppointment(newState);
      getUser();
    })();
    let newState = newAppointment;
    newState.branchID = branchID;
    newState.serviceID = JSON.parse(serviceID).services;
    setNewAppointment(newState);
  }, []);

  if (userError) {
    console.log("userError :>> ", userError);
  }

  if (createAppointmentError) {
    console.log("createAppointmentError :>> ", createAppointmentError);
  }

  const handleRadioValueChange = (value) => {
    let newState = newAppointment;
    newState.vehicleID = value;
    setNewAppointment(newState);
    setSelectedVehicle(value);
  };

  const handleDateChange = (newDate) => {
    let newState = newAppointment;
    newState.appointmentDate = newDate.toDateString();
    setNewAppointment(newState);
  };

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent
      presentationStyle="overFullScreen"
    >
      <View style={{ flexDirection: "row", height: "100%", width: "100%" }}>
        <View style={AppointmentModalStyle.container}>
          <View style={AppointmentModalStyle.popup}>
            <ScrollView>
              <Text style={AppointmentModalStyle.title}>
                Schedule an appointment
              </Text>
              <Text style={AppointmentModalStyle.subTitle}>Date</Text>
              <DatePicker
                defaultDate={new Date()}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select date"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={handleDateChange}
                disabled={false}
              />
              <Text style={AppointmentModalStyle.subTitle}>Vehicle</Text>
              <List>
                {userData &&
                  userData.user.vehicle.map((vehicle) => (
                    <ListItem
                      key={vehicle.id}
                      onPress={() => handleRadioValueChange(vehicle.id)}
                    >
                      <Left>
                        <Text>{vehicle.vehiclePlateNumber}</Text>
                      </Left>
                      <Right>
                        <Radio selected={vehicle.id === selectedVehicle} />
                      </Right>
                    </ListItem>
                  ))}
              </List>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button warning onPress={() => setModalVisible(false)}>
                  <Text>Cancel</Text>
                </Button>
                <Button
                  success
                  onPress={() => {
                    createAppointment();
                    setModalVisible(false);
                  }}
                >
                  <Text>Confirm</Text>
                </Button>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AppointmentModal;
