import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../../pages";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Home"
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
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
