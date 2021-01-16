import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// TODO: Uncomment after AppointmentScreen impl
import { AppointmentListScreen } from "../../pages";

const Stack = createStackNavigator();

const AppointmentStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Appointment"
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
        name="Appointment" component={AppointmentListScreen}
        options={{ title: "Appointment" }}
      />
    </Stack.Navigator>
  );
};

export default AppointmentStack;
