import React, { Component } from "react";
import { View, Text, Image, FlatList, ScrollView } from "react-native";
import { List, ListItem } from "native-base";
import { Background } from "../../components/shared";
import styles from "./ProfileStyle";

const profilePlaceHolder = require("../../assests/placeholder-profile.jpg");

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vechileList: [
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
      ],
      historyList: [
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
      ],
    };
  }

  render() {
    return (
      <Background>
        <ScrollView style={{
          width: "98%"
        }}>
          <Image style={styles.profileImg} source={profilePlaceHolder} />
          <View style={styles.userInfoContainer}>
            <Text style={styles.username}>Paul Choi</Text>

            <List>
              <ListItem itemDivider>
                <Text style={styles.sectionTitle}>Vechicle Details</Text>
              </ListItem>
              {this.state.vechileList.map(vehicle => (
                <ListItem key={"vehicle-"+vehicle.Id} style={styles.listEleContainer}>
                  <Text style={styles.listElement}>
                    {vehicle.VehiclePlateNumber} - {vehicle.VechicleBrand}{" "}
                    {vehicle.VechicleModel}
                  </Text>
                </ListItem>
              ))}

              <ListItem itemDivider>
                <Text style={styles.sectionTitle}>History</Text>
              </ListItem>
              {this.state.historyList.map(item => (
                <ListItem key={"history-"+item.Id} style={styles.listEleContainer}>
                  <Text style={styles.listElement}>
                    Workshop: {item.Branch}{"\n"}
                    Amount: {item.Amount}
                  </Text>
                </ListItem>
              ))}
            </List>
          </View>
        </ScrollView>
      </Background>
    );
  }
}

export default Profile;
