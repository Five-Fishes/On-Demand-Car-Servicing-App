import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SignInScreen, SignUpScreen } from "./pages";
import {
  HomeStack,
  FavouriteStack,
  AppointmentStack,
  MessageStack,
  ProfileStack,
} from "./navigation/index.js";
import { Icon } from "native-base";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const activeColor = "#2A5BA8";
const inactiveColor = "#000";

const authenticated = true;

const App = () => {
  return authenticated ? (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: activeColor,
          inactiveTintColor: inactiveColor,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: "Home",
            fontWeight: "bold",
            tabBarIcon: ({ color, size }) => {
              <Icon name="home" color={color} size={size} />;
              // <Icon ios='ios-menu' android='md-menu' color={color} size={size} />
            },
          }}
        />
        <Tab.Screen
          name="Favourite"
          component={FavouriteStack}
          options={{
            tabBarLabel: "Favourite",
            fontWeight: "bold",
            tabBarIcon: ({ color, size }) => {
              <Icon
                type="MaterialCommunityIcons"
                name="star-outline"
                color={color}
                size={size}
              />;
            },
          }}
        />
        <Tab.Screen
          name="Appointment"
          component={AppointmentStack}
          options={{
            tabBarLabel: "Appointment",
            fontWeight: "bold",
            tabBarIcon: ({ color, size }) => {
              <Icon
                type="MaterialCommunityIcons"
                name="truck-outline"
                color={color}
                size={size}
              />;
            },
          }}
        />
        <Tab.Screen
          name="Message"
          component={MessageStack}
          options={{
            tabBarLabel: "Message",
            fontWeight: "bold",
            tabBarIcon: ({ color, size }) => {
              <Icon
                type="MaterialCommunityIcons"
                name="email-outline"
                color={color}
                size={size}
              />;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarLabel: "Profile",
            fontWeight: "bold",
            tabBarIcon: ({ color, size }) => {
              <Icon
                ios="ios-person-circle-outline"
                android="md-person-circle-outline"
                color={color}
                size={size}
              />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
