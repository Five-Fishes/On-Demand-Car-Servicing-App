import React, { Component } from 'react'
import { Text, View} from 'react-native'
import AppointmentStyle from "./AppointmentStyle"
   
class AppointmentList extends Component {
    constructor(props){
        super(props); 
        this.state = {
            appointment: [
                {
                    AppointmentID: 1,
                    AppointmentDt: '12/12',
                    AppointmentTime: '10:00',
                    ServiceID: 1,
                    ServiceNm: 'Battery Replacement',
                    VehicleID: 'WGC8080',
                    BranchID: 1,
                    BranchNm: 'Bosch Kepong',
                },
                {
                    AppointmentID: 2,
                    AppointmentDt: '14/12',
                    AppointmentTime: '08:00',
                    ServiceID: 2,
                    ServiceNm: 'Tyre Replacement',
                    VehicleID: 'WWC8500',
                    BranchID: 2,
                    BranchNm: 'Bosch Puchong',
                },
                {
                    AppointmentID: 3,
                    AppointmentDt: '15/12',
                    AppointmentTime: '09:00',
                    ServiceID: 3,
                    ServiceNm: 'Normal Service',
                    VehicleID: 'WIC1700',
                    BranchID: 3,
                    BranchNm: 'Elite Auto Service Centre BSD',
                },

            ]
        }
    }
    render(){
        return(
            <View>
                {
                    this.state.appointment.map((item) =>(                    
                        <Text key = {item.AppointmentID}
                              style={AppointmentStyle.title}> 
                            Appointment {item.AppointmentID} {"\n"}
                            <Text style = {AppointmentStyle.content}>
                                On {item.AppointmentDt} At {item.AppointmentTime} {"\n"}
                                {item.ServiceNm} for Vehicle {item.VehicleID} {"\n"}
                                In {item.BranchNm}. {"\n"}
                            </Text>
                        </Text>
                    ))
                }
            </View>
            
        )
    }
}

export default AppointmentList;