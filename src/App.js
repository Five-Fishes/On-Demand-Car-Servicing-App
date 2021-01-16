import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen, SignUpScreen, ProfileScreen, SignInScreen, SettingsScreen,
  AppointmentScreen, FavouriteScreen } from "./pages";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
          name="SignIn"
          component={SignInScreen}
          options={{ title: "Sign In" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Appointment"
          component={AppointmentScreen}
          options={{ title: "Appointment" }}
          />
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

        <Stack.Screen
          name="Favourite"
          component={FavouriteScreen}
          options={{ title: "Favourite" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
