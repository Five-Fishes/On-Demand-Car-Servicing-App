import { StyleSheet, Dimensions } from "react-native";

const SearchResultStyle = StyleSheet.create({
  appbar: {
    maxHeight: 125,
  },
  title: {
    fontSize: 30,
    margin: 40,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  },
  card: {
    minHeight: 600,
    paddingVertical: 30,
    paddingHorizontal: 15,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#FFFFFF",
  },
  image: {
    borderRadius: 16,
    width: 100,
    height: 100,
  },
  imageContainer: {
    flex: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8.35,

    elevation: 15,
  },
});

export default SearchResultStyle;
