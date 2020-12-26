import React from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Background from "../../components/shared/PageBackground/PageBackground";
import SettingsStyle from "./SettingsStyle";

const Settings = ({navigation}) => {

  const optionItems = [
    {
      Name: "Change Profile Setting",
      Navigate: ""
    },
    {
      Name: "Manage Privacy",
      Navigate: ""
    },
    {
      Name: "Delete History",
      Navigate: ""
    }
  ];

  // const [optionItems, setOptionItems] = useState();
  
  // useEffect(() => {
  //   setOptionItems();
  // });

  return (
    <Background>
      <View style={SettingsStyle.container}>
        <FlatList
          style={SettingsStyle.listView}
          data={optionItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={SettingsStyle.itemList}
              onPress={() => {
                Alert.alert("Clicked on "+item.Name)
                // TODO: navigate to repective page
                // navigation.navigate(item.Navigate)
              }}
            >
              <Text>{ item.Name }</Text>
            </TouchableOpacity>
          )}
        >
        </FlatList>
      </View>
    </Background>
  );
};

export default Settings;
