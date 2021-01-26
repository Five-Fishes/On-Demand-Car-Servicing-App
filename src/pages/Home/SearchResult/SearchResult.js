import { Button, List, ListItem, Spinner, Text } from "native-base";
import React, { useState } from "react";
import { Image, View, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { StackActions } from "@react-navigation/native";
import { useQuery, gql } from "@apollo/client";

import PageBackground from "../../../components/shared/PageBackground";
import { BranchDetailsModal } from "../../../components/shared";
import SearchResultStyle from "./SearchResultStyle";

const BRANCHES_QUERY = gql`
  query Branches($filter: String!) {
    branches(filter: $filter) {
      id
      companyId
      branchAddr
      branchContactNo
      hasDispatchService
    }
  }
`;

const SearchResult = ({ navigation, route }) => {
  const { filter, searchText } = route.params;

  const [selectedId, setSelectedId] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const {
    data: branchesData,
    error: branchesError,
    loading: branchesLoading,
  } = useQuery(BRANCHES_QUERY, { variables: { filter: filter } });

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

  if (branchesError) {
    console.log("errorGettingBranches.message :>> ", branchesError.message);
  }

  const branchItemHandler = (id) => {
    setSelectedId(id);
    setModalVisible(true);
  };

  return (
    <PageBackground>
      <BranchDetailsModal
        id={selectedId}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        serviceId={filter}
      />
      <ScrollView
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={SearchResultStyle.appbar}>
          <Text style={SearchResultStyle.title}>{searchText}</Text>
        </View>
        <View style={SearchResultStyle.card}>
          {branchesLoading ? (
            <Spinner color="blue" />
          ) : (
            <List>
              {branchesData &&
                branchesData.branches.map((branch) => (
                  <ListItem
                    key={branch.id}
                    onPress={() => branchItemHandler(branch.id)}
                  >
                    <View style={SearchResultStyle.imageContainer}>
                      <Image
                        source={{
                          uri:
                            "https://previews.123rf.com/images/mauro1969/mauro19691412/mauro1969141200036/34208622-the-car-workshop-for-repairs-and-setups.jpg",
                        }}
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
                        {branch.branchAddr}
                      </Text>
                      <Text
                        style={{
                          textAlign: "left",
                          alignSelf: "stretch",
                          fontStyle: "italic",
                          fontSize: 12,
                        }}
                      >
                        {branch.branchContactNo}
                      </Text>
                      <Text
                        style={{
                          textAlign: "left",
                          alignSelf: "stretch",
                          fontStyle: "italic",
                          fontSize: 14,
                        }}
                      >
                        {branch.hasDispatchService
                          ? "On call"
                          : "Not available"}
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
          )}
        </View>
      </ScrollView>
    </PageBackground>
  );
};

export default SearchResult;
