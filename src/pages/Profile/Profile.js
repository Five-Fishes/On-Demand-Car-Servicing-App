import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { List, ListItem } from "native-base";
import styles from "./ProfileStyle";
import { useState } from "react";

import { Background } from "../../components/shared";
import ProfileStyle from "./ProfileStyle";

const profilePlaceHolder = require("../../assests/placeholder-profile.jpg");

const Profile = () => {
  const [lst, setLst] = useState([
    {
      Id: 1,
      VehicleType: "Sedan",
      VechicleBrand: "Toyota",
      VechicleModel: "Vois 2020",
      VehiclePlateNumber: "WWW1234",
    },
    {
      Id: 2,
      VehicleType: "Sedan",
      VechicleBrand: "Honda",
      VechicleModel: "City 2020",
      VehiclePlateNumber: "WWW5678",
    },
  ]);
  const [lst2, setLst2] = useState([
    {
      Id: 1,
      Branch: "Car Clinic PJ",
      Amount: "299",
    },
    {
      Id: 2,
      Branch: "Car Clinic PJ",
      Amount: "299",
    },
  ]);

  return (
    <Background>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: "100%",
        }}
      >
        <View style={ProfileStyle.appbar}>
          <Text
            style={{
              color: "#FFFFFF",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: 30,
              textAlign: "center",
              marginBottom: 20,
              marginHorizontal: 40,
              marginTop: 40,
            }}
          >
            Profile
          </Text>
        </View>
        <Image style={styles.profileImg} source={profilePlaceHolder} />
        <View style={styles.userInfoContainer}>
          <Text style={styles.username}>Paul Choi</Text>

          <List>
            <ListItem>
              <Text style={styles.sectionTitle}>Vechicle Details</Text>
            </ListItem>
            {lst.map((vehicle) => (
              <ListItem
                key={"vehicle-" + vehicle.Id}
                style={styles.listEleContainer}
              >
                <Text style={styles.listElement}>
                  {vehicle.VehiclePlateNumber} - {vehicle.VechicleBrand}{" "}
                  {vehicle.VechicleModel}
                </Text>
              </ListItem>
            ))}

            <ListItem>
              <Text style={styles.sectionTitle}>History</Text>
            </ListItem>
            {lst2.map((item) => (
              <ListItem
                key={"history-" + item.Id}
                style={styles.listEleContainer}
              >
                <Text style={styles.listElement}>
                  Workshop: {item.Branch}
                  {"\n"}
                  Amount: {item.Amount}
                </Text>
              </ListItem>
            ))}
          </List>
        </View>
      </ScrollView>
    </Background>
  );
};

export default Profile;
