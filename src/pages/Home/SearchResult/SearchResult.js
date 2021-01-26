import { Button, List, ListItem, Text } from "native-base";
import React, { useState } from "react";
import { Image, View, Alert } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { StackActions } from "@react-navigation/native";

import PageBackground from "../../../components/shared/PageBackground";
import SearchResultStyle from "./SearchResultStyle";

const SearchResult = ({ navigation, route }) => {
  const { filter, searchText } = route.params;
  const [searchResult, setSearchResult] = useState([
    {
      id: 1,
      by: "Provided by ABC star",
      distance: "3.9km",
      image:
        "https://previews.123rf.com/images/mauro1969/mauro19691412/mauro1969141200036/34208622-the-car-workshop-for-repairs-and-setups.jpg",
      name: "ABC Towing",
    },
    {
      id: 2,
      by: "Provided by ABC star",
      distance: "3.9km",
      image:
        "https://previews.123rf.com/images/mauro1969/mauro19691412/mauro1969141200036/34208622-the-car-workshop-for-repairs-and-setups.jpg",
      name: "ABC Towing",
    },
    {
      id: 3,
      by: "Provided by ABC star",
      distance: "3.9km",
      image:
        "https://previews.123rf.com/images/mauro1969/mauro19691412/mauro1969141200036/34208622-the-car-workshop-for-repairs-and-setups.jpg",
      name: "ABC Towing",
    },
    {
      id: 4,
      by: "Provided by ABC star",
      distance: "3.9km",
      image:
        "https://previews.123rf.com/images/mauro1969/mauro19691412/mauro1969141200036/34208622-the-car-workshop-for-repairs-and-setups.jpg",
      name: "ABC Towing",
    },
    {
      id: 5,
      by: "Provided by ABC star",
      distance: "3.9km",
      image:
        "https://previews.123rf.com/images/mauro1969/mauro19691412/mauro1969141200036/34208622-the-car-workshop-for-repairs-and-setups.jpg",
      name: "ABC Towing",
    },
    {
      id: 6,
      by: "Provided by ABC star",
      distance: "3.9km",
      image:
        "https://previews.123rf.com/images/mauro1969/mauro19691412/mauro1969141200036/34208622-the-car-workshop-for-repairs-and-setups.jpg",
      name: "ABC Towing",
    },
  ]);
  const bookNowBtnHandler = () => {
    Alert.alert(
      "Are you sure to book now?",
      "Book now will request for this service immediately, this action is irreversible",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed");
            navigation.dispatch(StackActions.popToTop());
          },
        },
      ]
    );
  };
  return (
    <PageBackground>
      <ScrollView
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={SearchResultStyle.appbar}>
          <Text style={SearchResultStyle.title}>{searchText}</Text>
        </View>
        <View style={SearchResultStyle.card}>
          <List>
            {searchResult.map((branch) => (
              <ListItem key={branch.id}>
                <View style={SearchResultStyle.imageContainer}>
                  <Image
                    source={{ uri: branch.image }}
                    style={SearchResultStyle.image}
                  />
                </View>

                <View style={{ padding: 20, flex: 3 }}>
                  <Text
                    style={{
                      textAlign: "left",
                      alignSelf: "stretch",
                      fontSize: 18,
                    }}
                  >
                    {branch.name}
                  </Text>
                  <Text
                    style={{
                      textAlign: "left",
                      alignSelf: "stretch",
                      fontStyle: "italic",
                      fontSize: 12,
                    }}
                  >
                    {branch.by}
                  </Text>
                  <Text
                    style={{
                      textAlign: "left",
                      alignSelf: "stretch",
                      fontStyle: "italic",
                      fontSize: 14,
                    }}
                  >
                    {branch.distance}
                  </Text>
                  <Button rounded small success onPress={bookNowBtnHandler}>
                    <Text style={{ fontSize: 12, fontWeight: "800" }}>
                      Book Now
                    </Text>
                  </Button>
                </View>
              </ListItem>
            ))}
          </List>
        </View>
      </ScrollView>
    </PageBackground>
  );
};

export default SearchResult;
