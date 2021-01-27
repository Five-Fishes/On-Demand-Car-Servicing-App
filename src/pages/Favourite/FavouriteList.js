import React from "react";
import { useState } from "react";
import { Text, View } from "react-native";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";

import FavouriteStyle from "./FavouriteStyle";
import { getUserId } from "../../utils/AuthUtils";
import { BranchDetailsModal } from "../../components/shared";

const GET_FAVOURITELIST = gql`
  query User($id: String!) {
    user(id: $id) {
      favouriteBranch {
        favouriteBranchID
      }
    }
  }
`;

const FavouriteList = ({ isServices }) => {
  const [userId, setuserId] = useState("");
  const [viewBranch, setViewBranch] = useState(false);

  const { error: branchesIdError, data: BranchesId } = useQuery(
    GET_FAVOURITELIST,
    {
      variables: { id: userId },
      pollInterval: 1000,
    }
  );

  useEffect(() => {
    (async () => {
      const Id = await getUserId();
      console.log("Id :>> ", Id);
      setuserId(Id);
    })();
  });

  if (userId) {
    console.log("Yooo");
  }
  if (branchesIdError) {
    console.log("branchesIdError :>> ", branchesIdError);
  }

  if (BranchesId) {
    console.log("BranchesId :>> ", BranchesId);
  }

  const [lst, setLst] = useState([
    {
      ServiceID: 10001,
      ServiceNm: "Tyre Replacement",
      IsDispatchAvailable: "Yes",
      IsInHouseAvailable: "Yes",
      EstimatedServiceTime: "20 minutes",
      ServiceInHistoryOn: "01-01-2021",
    },
    {
      ServiceID: 10002,
      ServiceNm: "Hose Pipe Renew",
      IsDispatchAvailable: "No",
      IsInHouseAvailable: "Yes",
      EstimatedServiceTime: "30 minutes",
      ServiceInHistoryOn: "02-01-2021",
    },
    {
      ServiceID: 10003,
      ServiceNm: "Annual Service - Full Set",
      IsDispatchAvailable: "No",
      IsInHouseAvailable: "Yes",
      EstimatedServiceTime: "4 hours",
      ServiceInHistoryOn: "09-12-2020",
    },
  ]);

  return (
    <View>
      <BranchDetailsModal
        modalVisible={viewBranch}
        setModalVisible={setViewBranch}
      />
      {lst.map((item) => (
        <Text
          key={item.ServiceID}
          style={FavouriteStyle.title}
          onPress={() => setViewBranch(true)}
        >
          Service {item.ServiceID} {"\n"}
          <Text style={FavouriteStyle.content}>
            {item.ServiceNm} on {item.ServiceInHistoryOn} {"\n"}
            in estimated {item.EstimatedServiceTime} of time. {"\n"}
          </Text>
        </Text>
      ))}
    </View>
  );
};

export default FavouriteList;
