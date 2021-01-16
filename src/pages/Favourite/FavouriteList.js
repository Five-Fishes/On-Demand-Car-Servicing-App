import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import FavouriteStyle from './FavouriteStyle';
   
class FavouriteList extends Component {
    constructor(props){
        super(props); 
        this.state = {
            favouriteService: [
                {
                    ServiceID: 10001,
                    ServiceNm: 'Tyre Replacement',
                    IsDispatchAvailable: 'Yes',
                    IsInHouseAvailable: 'Yes',
                    EstimatedServiceTime: '20 minutes',
                    ServiceInHistoryOn: '01-01-2021'

                },
                {
                    ServiceID: 10002,
                    ServiceNm: 'Hose Pipe Renew',
                    IsDispatchAvailable: 'No',
                    IsInHouseAvailable: 'Yes',
                    EstimatedServiceTime: '30 minutes',
                    ServiceInHistoryOn: '02-01-2021'

                },
                {
                    ServiceID: 10003,
                    ServiceNm: 'Annual Service - Full Set',
                    IsDispatchAvailable: 'No',
                    IsInHouseAvailable: 'Yes',
                    EstimatedServiceTime: '4 hours',
                    ServiceInHistoryOn: '09-12-2020'
                },

            ]
        }
    }
    render(){
        return(
            <View>
                {
                    this.state.favouriteService.map((item) =>(                    
                        <Text key = {item.ServiceID}
                              style={FavouriteStyle.title}> 
                            Appointment {item.ServiceID} {"\n"}
                            <Text style = {FavouriteStyle.content}>
                                {item.ServiceNm} on {item.ServiceInHistoryOn} {"\n"}
                                in estimated {item.EstimatedServiceTime} of time. {"\n"}
                            </Text>
                        </Text>
                    ))
                }
            </View>
            
        )
    }
}

export default FavouriteList;
