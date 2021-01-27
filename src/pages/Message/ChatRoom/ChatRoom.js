import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { useQuery, gql, useMutation } from "@apollo/client";

import { getUserId } from "../../../utils/AuthUtils";
import { Image } from "react-native";

const MESSAGES_QUERY = gql`
  query GetMessages($filter: String) {
    getMessages(filter: $filter) {
      id
      _id
      chatID
      messageType
      messageText
      image
      audio
      video
      text
      user {
        _id
      }
      sender {
        id
        type
        firstName
        lastName
      }
      createdAt
    }
  }
`;

const SEND_MESSAGE = gql`
  mutation CreateMessage($messageInput: MessageInput!) {
    createMessage(messageInput: $messageInput) {
      id
      _id
      chatID
      messageType
      messageText
      sender {
        id
        type
        firstName
        lastName
      }
      user {
        _id
      }
      createdAt
    }
  }
`;

const ChatRoom = ({ route }) => {
  /**
   * states
   */
  const [userId, setUserId] = useState("");

  /**
   * gql
   */
  const { data, error, loading } = useQuery(MESSAGES_QUERY, {
    variables: {
      filter: JSON.stringify({ chatID: route.params.conversationId }),
    },
    pollInterval: 500,
  });
  const [sendMessage, { error: sendMessageError }] = useMutation(SEND_MESSAGE);

  useEffect(() => {
    (async () => {
      const id = await getUserId();
      setUserId(id);
    })();
  });

  if (data) {
    console.log("data :>> ", data);
  }

  if (error) {
    alert(error.message);
  }

  if (sendMessageError) {
    alert(sendMessageError.message);
  }

  const onSend = (message) => {
    const newMessage = {
      messageType: "TEXT",
      messageText: message[0].text,
      chatID: route.params.conversationId,
    };
    console.log("message :>> ", message);
    sendMessage({ variables: { messageInput: newMessage } });
  };

  return (
    <>
      {data && (
        <GiftedChat
          messages={data?.getMessages || []}
          renderAvatar={() => {
            return (
              <Image
                source={{
                  uri:
                    "https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png",
                }}
                style={{ height: 25, width: 25, borderRadius: 25 }}
              />
            );
          }}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: userId || 1,
          }}
        />
      )}
    </>
  );
};

export default ChatRoom;
