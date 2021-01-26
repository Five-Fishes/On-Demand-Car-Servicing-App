import { LinearGradient } from "expo-linear-gradient";
import { Button, Spinner, Text, List, ListItem } from "native-base";
import React from "react";
import { Modal, View, Alert, ImageBackground, Linking } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { gql, useQuery } from "@apollo/client";

import PageBackground from "../PageBackground";
import BranchDetailsModalStyle from "./BranchDetailsModalStyle";
import AppointmentModal from "../AppointmentModal";
import { useState } from "react";

const BRANCH_QUERY = gql`
  query Branch($id: ID!) {
    branch(id: $id) {
      id
      companyId
      branchAddr
      branchContactNo
      hasDispatchService
      businesshours {
        mon {
          open
          break
          close
        }
      }
      services {
        id
        serviceNm
        serviceType
        isInHouseAvailable
        isDispatchAvailable
        estimatedServiceTime
      }
    }
  }
`;

const BranchDetailsModal = ({
  id,
  modalVisible,
  setModalVisible,
  serviceId,
}) => {
  const {
    data: branchData,
    error: branchError,
    loading: branchLoading,
  } = useQuery(BRANCH_QUERY, { variables: { id: id } });
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  if (branchError) {
    const message = branchError.message;
    console.log("message :>> ", message);
  }

  const handlePhoneNoPressed = () => {
    if (branchData) Linking.openURL(`tel:${branchData.branch.branchContactNo}`);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <AppointmentModal
        modalVisible={showAppointmentModal}
        setModalVisible={setShowAppointmentModal}
        serviceID={serviceId}
        branchID={id}
      />
      <PageBackground>
        <ScrollView style={{ width: "100%" }}>
          <View style={BranchDetailsModalStyle.appbar}>
            <ImageBackground
              source={{
                uri:
                  "https://www.towingservicekl.com/wp-content/uploads/2016/01/long-distance-towing-service-kuala-lumpur.jpg",
              }}
              style={{}}
            >
              <LinearGradient colors={["#8C8C8C", "transparent"]}>
                <Text
                  onPress={() => setModalVisible(false)}
                  style={{
                    fontSize: 60,
                    left: 20,
                    top: 20,
                    width: 30,
                    fontWeight: "600",
                    color: "#FFFFFF",
                    position: "absolute",
                  }}
                >
                  ‹
                </Text>
                <Text style={BranchDetailsModalStyle.title}>
                  {branchData && branchData.branch.branchAddr}
                </Text>
              </LinearGradient>
            </ImageBackground>
          </View>
          <View style={BranchDetailsModalStyle.card}>
            {branchLoading ? (
              <Spinner color="blue" />
            ) : (
              <>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 3, justifyContent: "flex-end" }}>
                    <Text
                      style={{ fontSize: 25, fontWeight: "bold" }}
                      numberOfLines={1}
                      onPress={handlePhoneNoPressed}
                    >
                      {branchData && branchData.branch.branchContactNo}
                    </Text>
                    <Text style={{ fontStyle: "italic", fontSize: 16 }}>
                      {branchData &&
                        `Opens at ${branchData.branch.businesshours.mon.open}`}
                    </Text>
                    <Text style={{ fontStyle: "italic", fontSize: 16 }}>
                      {branchData &&
                        `Closes at ${branchData.branch.businesshours.mon.close}`}
                    </Text>
                  </View>
                  <View style={{ flex: 2, justifyContent: "space-between" }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontStyle: "italic",
                        alignSelf: "flex-end",
                        textAlign: "right",
                      }}
                    >
                      Dispatch
                    </Text>
                    {branchData && branchData.branch.hasDispatchService ? (
                      <Text
                        style={{
                          padding: 3,
                          fontSize: 14,
                          margin: 1,
                          alignSelf: "flex-end",
                          color: "#FFFFFF",
                          textAlign: "right",
                          backgroundColor: "#4F892B",
                        }}
                      >
                        Available
                      </Text>
                    ) : (
                      <Text
                        style={{
                          padding: 3,
                          fontSize: 14,
                          margin: 1,
                          alignSelf: "flex-end",
                          color: "#BF3941",
                          textAlign: "right",
                          backgroundColor: "#4F892B",
                        }}
                      >
                        Un-available
                      </Text>
                    )}
                    <Text
                      style={{
                        padding: 3,
                        fontSize: 14,
                        margin: 1,
                        alignSelf: "flex-end",
                        color: "#FFFFFF",
                        textAlign: "right",
                        backgroundColor: "#EFB92E",
                      }}
                    >
                      Add to favourute
                    </Text>
                  </View>
                </View>
                <View style={BranchDetailsModalStyle.section}>
                  <Text style={BranchDetailsModalStyle.sectionTitle}>
                    Other Services
                  </Text>
                  <List>
                    {branchData &&
                      branchData.branch.services.map((service) => (
                        <ListItem key={service.id}>
                          <View style={{ alignContent: "space-between" }}>
                            <Text
                              style={{
                                fontSize: 12,
                                marginBottom: 6,
                                textAlign: "left",
                                alignSelf: "stretch",
                              }}
                            >{`• This branch provides ${service.serviceNm} service`}</Text>
                            <Text
                              style={{
                                fontSize: 12,
                                marginBottom: 6,
                                textAlign: "left",
                                alignSelf: "stretch",
                              }}
                            >
                              {`• In house service: ${
                                service.isInHouseAvailable
                                  ? "available"
                                  : "unavailable"
                              }`}
                            </Text>
                            <Text
                              style={{
                                fontSize: 12,
                                marginBottom: 6,
                                textAlign: "left",
                                alignSelf: "stretch",
                              }}
                            >
                              {service.isDispatchAvailable
                                ? "• Service is available whenever you are! We will bring the service to you as long as you are within the supported area."
                                : "• This service only has house support"}
                            </Text>
                            <Text
                              style={{
                                fontSize: 12,
                                marginBottom: 6,
                                textAlign: "left",
                                alignSelf: "stretch",
                              }}
                            >{`• Estimated service time: ${service.estimatedServiceTime} hour`}</Text>
                          </View>
                        </ListItem>
                      ))}
                  </List>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 20,
                  }}
                >
                  <Button
                    rounded
                    small
                    primary
                    onPress={() => {
                      if (serviceId) {
                        const currentServiceId = JSON.parse(serviceId).services;
                        console.log("currentServiceId :>> ", currentServiceId);
                      }
                    }}
                  >
                    <Text>Book Now</Text>
                  </Button>
                  <Button
                    rounded
                    small
                    success
                    onPress={() => setShowAppointmentModal(true)}
                  >
                    <Text>Appointment</Text>
                  </Button>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      </PageBackground>
    </Modal>
  );
};

export default BranchDetailsModal;
