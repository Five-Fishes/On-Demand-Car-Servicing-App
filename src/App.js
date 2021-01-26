import * as React from "react";
import { useState, useEffect } from "react";
import { Image, StatusBar } from "react-native";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ApolloProvider } from "@apollo/client";

import {
  HomeStack,
  FavouriteStack,
  AppointmentStack,
  MessageStack,
  ProfileStack,
} from "./navigation/index.js";
import { SignInScreen, SignUpScreen, SignUpExtraScreen } from "./pages";
import { Client } from "./graphql";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const activeColor = "#2A5BA8";
const inactiveColor = "#867A7A";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
  });

  return isAuthenticated ? (
    <>
      <StatusBar backgroundColor="#1C4687" />
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
              tabBarIcon: ({ focused, color, size }) => {
                return focused ? (
                  <Image
                    source={require("../src/staticResources/icons/24/basic/home.png")}
                    style={{ height: 28, width: 30 }}
                    resizeMode="stretch"
                  />
                ) : (
                  <Image
                    source={require("../src/staticResources/icons/24-2/basic/home.png")}
                    style={{ height: 28, width: 30 }}
                    resizeMode="stretch"
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Favourite"
            component={FavouriteStack}
            options={{
              tabBarLabel: "Favourite",
              fontWeight: "bold",
              tabBarIcon: ({ focused, color, size }) => {
                return focused ? (
                  <Image
                    source={require("../src/staticResources/icons/favourite-focused.png")}
                    style={{ height: 28, width: 30 }}
                    resizeMode="stretch"
                  />
                ) : (
                  <Image
                    source={require("../src/staticResources/icons/favourite.png")}
                    style={{ height: 28, width: 30 }}
                    resizeMode="stretch"
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Appointment"
            component={AppointmentStack}
            options={{
              tabBarLabel: "Appointment",
              fontWeight: "bold",
              tabBarIcon: ({ focused, color, size }) => {
                return focused ? (
                  <Image
                    source={require("../src/staticResources/icons/appointment-focused.png")}
                    style={{ height: 28, width: 30 }}
                    resizeMode="stretch"
                  />
                ) : (
                  <Image
                    source={require("../src/staticResources/icons/appointment.png")}
                    style={{ height: 28, width: 30 }}
                    resizeMode="stretch"
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Message"
            component={MessageStack}
            options={{
              tabBarLabel: "Message",
              fontWeight: "bold",
              tabBarIcon: ({ focused, color, size }) => {
                return focused ? (
                  <Image
                    source={require("../src/staticResources/icons/message-focused.png")}
                    style={{ height: 28, width: 30 }}
                    resizeMode="stretch"
                  />
                ) : (
                  <Image
                    source={require("../src/staticResources/icons/message.png")}
                    style={{ height: 28, width: 30 }}
                    resizeMode="stretch"
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStack}
            options={{
              tabBarLabel: "Profile",
              fontWeight: "bold",
              tabBarIcon: ({ focused, color, size }) => {
                return focused ? (
                  <Image
                    source={require("../src/staticResources/icons/profile.png")}
                    style={{
                      height: 30,
                      width: 30,
                      borderWidth: 3,
                      borderColor: activeColor,
                      borderRadius: 30,
                    }}
                    resizeMode="stretch"
                  />
                ) : (
                  <Image
                    source={require("../src/staticResources/icons/profile.png")}
                    style={{
                      height: 30,
                      width: 30,
                      borderWidth: 3,
                      borderColor: inactiveColor,
                      borderRadius: 30,
                    }}
                    resizeMode="stretch"
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
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
        <Stack.Screen name="SignIn" options={{ title: "Sign In" }}>
          {(props) => (
            <SignInScreen {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen name="SignUpExtra" options={{ title: "Sign Up Extra" }}>
          {(props) => (
            <SignUpExtraScreen
              {...props}
              setIsAuthenticated={setIsAuthenticated}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const WrappedApp = () => {
  return (
    <ApolloProvider client={Client}>
      <App></App>
    </ApolloProvider>
  );
};

export default WrappedApp;
