import { LinearGradient } from "expo-linear-gradient";
import { Button, Text } from "native-base";
import React from "react";
import { useState } from "react";
import { Modal, View, Alert, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import PageBackground from "../PageBackground";
import BranchDetailsModalStyle from "./BranchDetailsModalStyle";

const BranchDetailsModal = ({ id, modalVisible, setModalVisible }) => {
  const [branchDetails, setBranchDetails] = useState({
    name: "ABC Towing",
    company: "ABC Sdn Bhd",
    price: "RM 98.00",
    rating: "4.5",
    distance: "13.2km",
    details:
      "This Service is top tiered towing by reducing risk of scratching car bodies. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Non enim praesent elementum facilisis leo vel fringilla est. Senectus et netus et malesuada fames ac turpis egestas. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Vitae auctor eu augue ut lectus.",
    reviews: "ajdklsajldjajsdlkaj",
  });
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.Alertalert("Ayoo modal closed");
      }}
    >
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
                    fontWeight: "600",
                    color: "#FFFFFF",
                    position: "absolute",
                  }}
                >
                  ‹
                </Text>
                <Text style={BranchDetailsModalStyle.title}>
                  {branchDetails.name}
                </Text>
              </LinearGradient>
            </ImageBackground>
          </View>
          <View style={BranchDetailsModalStyle.card}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 3, justifyContent: "flex-end" }}>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                  {branchDetails.name}
                </Text>
                <Text style={{ fontStyle: "italic", fontSize: 16 }}>
                  {branchDetails.company}
                </Text>
                <Text style={{ fontStyle: "italic", fontSize: 16 }}>
                  {`${branchDetails.distance} away`}
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
                  estimated price
                </Text>
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
                  {branchDetails.price}
                </Text>
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
                Service Details
              </Text>
              <Text>{branchDetails.details}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 20,
              }}
            >
              <Button rounded small primary>
                <Text>Book Now</Text>
              </Button>
              <Button rounded small success>
                <Text>Appointment</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </PageBackground>
    </Modal>
  );
};

export default BranchDetailsModal;
