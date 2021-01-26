import { StyleSheet } from "react-native";
const MessageStyle = StyleSheet.create({
  appbar: {
    height: 100,
    flexDirection: "column",
    backgroundColor: "#1C4687",
    alignContent: "center",
  },
  title: {
    fontSize: 30,
    marginTop: 40,
    marginBottom: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
  },
  name: {
    fontSize: 14,
  },
  message: {
    color: "#A39696",
  },
  time: {
    fontSize: 12,
    color: "#A39696",
  },
});
export default MessageStyle;
