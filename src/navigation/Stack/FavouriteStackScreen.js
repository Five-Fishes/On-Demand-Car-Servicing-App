import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// TODO: Uncomment after FavouriteScreen impl
import { FavouriteScreen } from "../../pages";

const Stack = createStackNavigator();

const FavouriteStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Favourite"
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
        name="Favourite"
        component={FavouriteScreen}
        options={{ title: "Favourite" }}
      />
    </Stack.Navigator>
  );
};

export default FavouriteStack;
