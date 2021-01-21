import { StyleSheet } from "react-native";
const AppointmentStyle = StyleSheet.create ({

    toolbar:{
      top: "5%",
    },

    button:{
      padding: 7,
      width: "110%",
      height: 37,
      marginTop: 31,
      backgroundColor: "#F9FBFF",
      shadowOffset:{  width: 2,  height: 2,  },
      shadowColor: "black",
      shadowOpacity: 0.25,
      borderRadius: 20,   
    },

    buttonText:{
      textAlign:'center',
      color:"#686060", 
      fontSize:16,
      fontFamily:"Arial",
      fontStyle:"normal",
      fontWeight:"600",  
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
      flex:1,
      top: 20,
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
export default AppointmentStyle;