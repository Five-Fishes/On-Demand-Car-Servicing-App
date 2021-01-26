import { StyleSheet, Dimensions } from "react-native";

const AppointmentModalStyle = StyleSheet.create({
  popup: {
    padding: 30,
    minHeight: 400,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    alignSelf: "center",
  },
  container: {
    alignSelf: "center",
    width: "100%",
    padding: 20,
    flexDirection: "column",
  },
  title: {
    fontSize: 20,
    margin: 5,
    textDecorationLine: "underline",
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "stretch",
  },
  subTitle: {
    fontSize: 15,
  },
});

export default AppointmentModalStyle;
