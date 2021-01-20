import { StyleSheet } from "react-native";

const profileImgSize = 150;

export default ProfileStyle = StyleSheet.create({
  profileImg: {
    borderRadius: profileImgSize / 2,
    width: profileImgSize,
    height: profileImgSize,
    backgroundColor: "white",
    marginTop: "10%",
    zIndex: 10,
    alignSelf: "center"
  },
  userInfoContainer: {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    marginTop: "-5%",
    width: "100%",
    height: "75%",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  username: {
    textAlign: "center",
    fontSize: 20,
    paddingBottom: 25,
  },
  listEleContainer: {
    marginLeft: "2%",
    padding: 3,
  },
  listElement: {
    width: "90%",
  },
});
