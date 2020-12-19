import * as React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const PageBackground = (props) => {
  const { style } = props;
  return (
    <View
      style={
        style
          ? style
          : {
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#8872AD",
            }
      }
    >
      <LinearGradient
        colors={["#1C4687", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />
      {props.children}
    </View>
  );
};

export default PageBackground;
