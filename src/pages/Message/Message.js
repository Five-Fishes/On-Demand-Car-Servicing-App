import { Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { List, ListItem, Spinner } from "native-base";
import { gql, useQuery } from "@apollo/client";

import MessageStyle from "./MessageStyle";

const CONVERSATION_QUERY = gql`
  query GetConversations($filter: String, $users: [ID!]) {
    getConversations(filter: $filter, users: $users) {
      id
      type
      conversationName
      members {
        ... {
          type
          firstName
          lastName
          contactNo
        }
      }
    }
  }
`;
const Message = ({ navigation }) => {
  const [conversations, setConversations] = useState([
    {
      name: "ABC",
      time: "12:00",
      message: "Hello there",
    },
    {
      name: "ABC",
      time: "12:00",
      message: "Hello there",
    },
    {
      name: "ABC",
      time: "12:00",
      message: "Hello there",
    },
    {
      name: "ABC",
      time: "12:00",
      message: "Hello there",
    },
    {
      name: "ABC",
      time: "12:00",
      message: "Hello there",
    },
    {
      name: "ABC",
      time: "12:00",
      message: "Hello there",
    },
    {
      name: "ABC",
      time: "12:00",
      message: "Hello there",
    },
    {
      name: "ABC",
      time: "12:00",
      message: "Hello there",
    },
    {
      name: "ABC",
      time: "12:00",
      message: "Hello there",
    },
    {
      name: "ABC",
      time: "12:00",
      message: "Hello there",
    },
    {
      name: "ABC",
      time: "12:00",
      message: "Hello there",
    },
  ]);

  const {
    data: conversationsData,
    error: conversationsError,
    loading: conversationsLoading,
  } = useQuery(CONVERSATION_QUERY, {
    variables: {
      filter: "{}",
    },
  });

  if (conversationsData) {
    console.log("conversationsData :>> ", conversationsData);
  }

  if (conversationsError) {
    console.log("conversationsError :>> ", conversationsError);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={MessageStyle.appbar}>
        <Text style={MessageStyle.title}>Messages</Text>
      </View>
      <View style={{ minHeight: 600 }}>
        {conversationsLoading ? (
          <Spinner color="blue" />
        ) : (
          <List>
            {conversationsData &&
              conversationsData.getConversations.map((conversation) => (
                <ListItem
                  key={conversation.id}
                  onPress={() => {
                    navigation.navigate("ChatRoom", {
                      conversationId: conversation.id,
                    });
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        flex: 1.5,
                      }}
                    >
                      <Image
                        source={{
                          uri:
                            "https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png",
                        }}
                        style={{ width: 50, height: 50 }}
                      ></Image>
                    </View>
                    <View style={{ flex: 5, padding: 10 }}>
                      <Text style={MessageStyle.name}>
                        {conversation.conversationName}
                      </Text>
                      <Text style={MessageStyle.message}>chat with me!</Text>
                    </View>
                    <View style={{ flex: 2, padding: 10 }}>
                      <Text style={MessageStyle.time}>
                        {`${new Date().getHours()} : ${new Date().getMinutes()} ${
                          new Date().getHours() < 12 ? "am" : "pm"
                        }`}
                      </Text>
                    </View>
                  </View>
                </ListItem>
              ))}
          </List>
        )}
      </View>
    </ScrollView>
  );
};

export default Message;
