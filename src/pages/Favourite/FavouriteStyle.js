import { StyleSheet } from "react-native";
const FavouriteStyle = StyleSheet.create ({
    toolbar:{
      top: "5%",

    },
    container:{
      flex:1,
      width: "100%",
      height: "100%", 
      top: "10%",
      borderRadius: 40,
      backgroundColor: "#FFFFFF",
    },

    linearlayout:{
      top: 118,
      width: "100%",
      height: "100%", 
      backgroundColor: "#FFFFFF",
    },

    title: {
        left: 20,
        fontFamily: "Arial",
        fontStyle: "normal",
        fontWeight:"normal",
        fontSize: 18,
        color: "#000000",
    }, 

    content:{
        left: 20,
        fontFamily: "Arial",
        fontStyle: "normal",
        fontWeight:"normal",
        fontSize: 16,
        lineHeight: 20,
        color: "#C4C4C4",
    }
});
export default FavouriteStyle;