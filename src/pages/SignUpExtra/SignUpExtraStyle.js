import { StyleSheet } from "react-native";
export default SignUpStyle = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    flex: 1,
  },
  image: {
    width: 310,
    alignSelf: "center",
    height: 140,
  },
  card: {
    padding: 25,
    flexGrow: 9,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  title: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "700",
  },
  subtitle: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "400",
  },
  form: {},
  input: {
    marginVertical: 7,
  },
  firstNameInput: {
    marginVertical: 7,
    flexGrow: 1,
  },
  lastNameInput: {
    marginVertical: 7,
    flexGrow: 1,
  },
  button: {
    backgroundColor: "rgba(136, 114, 173, 0.8)",
    alignSelf: "center",
    margin: 50,
    paddingHorizontal: 40,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "600",
  },
});
