import { StyleSheet, Dimensions } from "react-native";

const HomeStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexGrow: 1,
    flexWrap: "nowrap",
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#FFFFFF",
  },

  categoryContainer: {
    flex: 1,
    flexDirection: "row",
    flexGrow: 1,
    flexWrap: "wrap",
    marginLeft: 48,
    paddingRight: 20,
    width: "80%",
    top: 15,
    alignContent: "stretch",
    justifyContent: "space-between",
  },

  searchbar: {
    backgroundColor: "#FFFFFF",
    flexGrow: 1,
    height: 30,
  },

  scrollableLayout: {
    flex: 1,
    marginLeft: 0,
    paddingRight: 0,
    flexDirection: "row",
    flexGrow: 1,
    flexWrap: "nowrap",
    alignContent: "stretch",
    justifyContent: "space-between",
    height: "100%",
  },

  imageContainer: {
    marginBottom: 40,
    padding: 7,
    width: 80,
    height: 80,
    backgroundColor: "#FFFFFF",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    borderRadius: 40,
    elevation: 5,
    alignItems: "center",
  },

  img: {
    resizeMode: "contain",
    paddingTop: 65,
    height: 50,
    width: 55,
  },

  imgText: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 12,
    width: 80,
  },

  recommendedContainer: {
    margin: 13,
    width: 115,
    height: 139,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    elevation: 5,
    shadowOpacity: 0.25,
  },

  recommendedImage: {
    width: 115,
    height: 139,
    borderRadius: 16,
  },

  title: {
    color: "#686060",
    paddingLeft: 32,
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "600",
  },
});

export default HomeStyle;
