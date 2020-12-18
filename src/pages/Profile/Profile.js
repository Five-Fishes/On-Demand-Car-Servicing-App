import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { ListItem } from 'native-base';
import { Background } from "../../components/shared";
import styles from "./ProfileStyle";

const profilePlaceHolder = require("../../assests/placeholder-profile.jpg");

class Profile extends Component {
    constructor (props) {
        super(props)
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
                    Amount: "299"
                },
                {
                    Id: 2,
                    Branch: "Car Clinic PJ",
                    Amount: "299"
                }
            ]
        }
    }

    render() {
        return (
            <Background>
                <View 
                    style={{
                        marginTop: "20%",
                        zIndex: 10,
                    }}
                >
                <Image style={styles.profileImg} source={profilePlaceHolder} />
                </View>
                <View style={styles.userInfoContainer}>
                    <Text style={styles.username}>
                        Paul Choi
                    </Text>

                    <Text style={styles.sectionTitle}>
                        Vechicle Details
                    </Text>
                    <FlatList
                        style={{maxHeight: 80}}
                        data={this.state.vechileList}
                        keyExtractor={(item, index) => item.Id}
                        renderItem={({item}) => 
                            <View style={styles.listEleContainer}>
                                <Text style={styles.listElement}>
                                    {item.VehiclePlateNumber} - {item.VechicleBrand} {item.VechicleModel}
                                </Text>
                            </View>
                        }
                    >
                    </FlatList>

                    <Text style={styles.sectionTitle}>
                        History
                    </Text>
                    <FlatList
                        data={this.state.historyList}
                        keyExtractor={(item, index) => item.Id}
                        renderItem={({item}) => 
                            <View style={styles.listEleContainer}>
                                <Text style={styles.listElement}>Workshop: {item.Branch}</Text>
                                <Text style={styles.listElement}>Amount: {item.Amount}</Text>
                            </View>
                        }
                    >
                        <Text>Caroline Aaron</Text>
                    </FlatList>
                </View>
            </Background>
        );
    }
};

export default Profile;
