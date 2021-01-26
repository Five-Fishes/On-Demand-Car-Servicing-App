import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MessageScreen, ChatRoomScreen } from "../../pages";

const Stack = createStackNavigator();

const MessageStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Message"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: "#1C4687",
          borderBottomWidth: 0,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Message"
        component={MessageScreen}
        options={{ title: "Message" }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{ title: "Chat Room" }}
      />
    </Stack.Navigator>
  );
};

export default MessageStack;
