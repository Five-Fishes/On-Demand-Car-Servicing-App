import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, SignUpScreen, ProfileScreen } from "./pages";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{title: "Profile"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
