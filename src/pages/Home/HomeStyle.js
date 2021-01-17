import {StyleSheet, Dimensions} from "react-native";

const deviceWidth = Dimensions.get('screen').width;

const HomeStyle = StyleSheet.create({

        mainContainer:{
            flex:1,
            width: "100%",
            height: "100%", 
            top: "5%",
            borderRadius: 40,
            backgroundColor: "#FFFFFF",
            flexGrow:1,
        },

        categoryContainer:{ 
            marginLeft: 48,
            paddingRight: 20,  
            width: "80%",
            height: "100%",
            flex:1,
            flexDirection: 'row',  
            flexGrow: 1,
            flexWrap:"wrap",
            top: 15,
            alignContent:"stretch",
            justifyContent:'space-between',
        },

        searchbar:{
          //flex: 1,
          paddingLeft: 182,
          textAlign: "right",
          lineHeight: 14,
          fontSize: 14,
          color: "#FFFFFF",
        },

        scrollableLayout:{
          marginLeft: 46,
          top: 15,
          paddingRight: 20,
          flex:1,
          flexDirection: 'row',  
          flexGrow: 1,
          flexWrap: "nowrap",
          //width: deviceWidth,
          alignContent:"stretch",
          justifyContent:'space-between',
          height: "100%"
        },

        imageContainer:{
          marginBottom: 40,
          padding: 7,
          width: 80,
          height: 80,
          backgroundColor: "#FFFFFF",
          shadowOffset:{  width: 2,  height: 2,  },
          shadowColor: "black",
          shadowOpacity: 0.25,
          borderRadius: 40,  
          alignItems: "center"
        },

        img:{
          resizeMode: "contain",
          paddingTop: 65, 
          height: 50,
          width: 55
        },

        imgText:{
          marginTop:10,
          textAlign:"center", 
          fontSize:12,
          width: 80
        },

        recommendedContainer:{
          marginLeft: 2,
          marginRight: 20,
          padding: 7,
          width: 115,
          height: 139,
          borderRadius: 16,
          backgroundColor: "#FFFFFF",
          shadowOffset:{  width: 2,  height: 2,  },
          shadowColor: "black",
          shadowOpacity: 0.25,
        },

        title:{
          color:"#686060", 
          paddingLeft: 32,
          paddingTop: 37,
          fontSize:22,
          fontFamily:"Arial",
          fontStyle:"normal",
          fontWeight:"600",
        
        }


    });

    export default HomeStyle;