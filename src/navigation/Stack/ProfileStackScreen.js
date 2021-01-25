import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen, SettingsScreen } from "../../pages";

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Profile"
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
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Setting" }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
