import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useLazyQuery, gql } from "@apollo/client";

import Background from "../../components/shared/PageBackground";
import FavouriteList from "./FavouriteList";
import FavouriteStyle from "./FavouriteStyle";
import { getUserId } from "../../utils/AuthUtils";
import { Spinner } from "native-base";

const USER_QUERY = `
query User($id: String!){
  user(id: $id){
    favouriteBranch{
      favouriteBranchID
    }
  }
}
`;

const BRANCH_QUERY = gql`
  query Branch($id: ID!) {
    branch(id: $id) {
      id
      companyId
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

const Favourite = () => {
  const [isServices, setIsServices] = useState(true);
  const [userId, setUserId] = useState("");
  const [favourite, setFavourite] = useState([]);

  const [
    getFavourite,
    { data: favouriteData, error: favouriteError, loading },
  ] = useLazyQuery(USER_QUERY, {
    variables: { id: userId },
  });

  useEffect(() => {
    (async () => {
      const id = await getUserId();
      setUserId(id);
      getFavourite();
    })();
  });

  if (favouriteError) {
    console.log("favouriteError :>> ", favouriteError);
  }

  return (
    <Background>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={FavouriteStyle.appbar}>
          <Text
            style={{
              color: "#FFFFFF",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: 30,
              textAlign: "center",
              margin: 40,
            }}
          >
            Favourites
          </Text>
        </View>
        <View style={{ backgroundColor: "#1C4687", minHeight: 600 }}>
          <View style={FavouriteStyle.container}>
            {/* <View
              style={{
                flexDirection: "row",
                minHeight: 60,
                justifyContent: "space-evenly",
                marginVertical: 30,
              }}
            >
              <TouchableOpacity
                style={FavouriteStyle.button}
                onPress={() => setIsServices(true)}
              >
                <Text style={FavouriteStyle.buttonText}>Services</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={FavouriteStyle.button}
                onPress={() => setIsServices(false)}
              >
                <Text style={FavouriteStyle.buttonText}>Workshop</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  padding: 7,
                  height: 37,
                  backgroundColor: "transparent",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "transparent",
                    fontSize: 16,
                    fontStyle: "normal",
                    fontWeight: "600",
                  }}
                >
                  apperent
                </Text>
              </TouchableOpacity>
            </View> */}
            {loading ? (
              <Spinner color="blue" />
            ) : (
              <FavouriteList isServices={isServices} />
            )}
          </View>
        </View>
      </ScrollView>
    </Background>
  );
};
export default Favourite;
