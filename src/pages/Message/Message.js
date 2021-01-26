import { Text, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { List, ListItem } from "native-base";

import MessageStyle from "./MessageStyle";

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

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={MessageStyle.appbar}>
        <Text style={MessageStyle.title}>Messages</Text>
      </View>
      <View style={{ minHeight: 600 }}>
        <List>
          {conversations.map((conversation, index) => (
            <ListItem
              key={index}
              onPress={() => {
                navigation.navigate("ChatRoom");
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: "red",
                    flex: 1,
                  }}
                />
                <View style={{ flex: 4, padding: 10 }}>
                  <Text style={MessageStyle.name}>{conversation.name}</Text>
                  <Text style={MessageStyle.message}>
                    {conversation.message}
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 10 }}>
                  <Text style={MessageStyle.time}>{conversation.time}</Text>
                </View>
              </View>
            </ListItem>
          ))}
        </List>
      </View>
    </ScrollView>
  );
};

export default Message;
