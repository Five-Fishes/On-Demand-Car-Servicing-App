import { StyleSheet, Dimensions } from "react-native";

const BranchDetailsModalStyle = StyleSheet.create({
  appbar: {
    maxHeight: 240,
  },
  title: {
    fontSize: 30,
    margin: 40,
    height: 240,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  },
  card: {
    minHeight: 600,
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#FFFFFF",
  },
  section: {
    marginVertical: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default BranchDetailsModalStyle;
