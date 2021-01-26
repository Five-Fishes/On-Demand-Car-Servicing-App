import {
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import { Background } from "../../components/shared";
import HomeStyle from "./HomeStyle";
import { Header, Item, Input, Icon, Button, Content } from "native-base";

const CarTowing = require("../../staticResources/images/CarTowing.png");
const Diagnostic = require("../../staticResources/images/Diagnostic.png");
const TyreReplacement = require("../../staticResources/images/TyreReplacement.png");
const BatteryReplacement = require("../../staticResources/images/BatteryReplacement.png");
const Repair = require("../../staticResources/images/Repair.png");
const Others = require("../../staticResources/images/Others.png");

const Home = ({ navigation }) => {
  return (
    <Background>
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 30,
              paddingTop: 50,
              margin: 0,
              paddingBottom: 30,
              maxHeight: 125,
            }}
          >
            <Content>
              <Item rounded style={HomeStyle.searchbar}>
                <Input
                  placeholder="Search Services"
                  textAlign="center"
                  style={{ fontSize: 14 }}
                />
              </Item>
            </Content>
            <Button
              transparent
              style={{ alignSelf: "center" }}
              small
              onPress={() => {
                navigation.navigate("SearchResult", {
                  filter: JSON.stringify({ branchNm: "ABC Towing" }),
                  searchText: "ABC Towing",
                });
              }}
            >
              <Icon name="search" style={{ color: "#FFFFFF" }}></Icon>
            </Button>
          </View>

          <View style={[HomeStyle.mainContainer]}>
            <Text
              style={{
                color: "#686060",
                paddingLeft: 32,
                paddingTop: 18,
                fontSize: 22,
                fontStyle: "normal",
                fontWeight: "600",
              }}
            >
              Categories
            </Text>

            <View style={[HomeStyle.categoryContainer]}>
              <TouchableOpacity
                style={HomeStyle.imageContainer}
                onPress={() => {
                  navigation.navigate("SearchResult", {
                    filter: JSON.stringify({
                      services: "car towing service ID",
                    }),
                    searchText: "Car Towing",
                  });
                }}
              >
                <Image source={CarTowing} style={HomeStyle.img} />
                <Text style={HomeStyle.imgText}>Car Towing</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={HomeStyle.imageContainer}
                onPress={() => {
                  navigation.navigate("SearchResult", {
                    filter: JSON.stringify({
                      services: "car towing service ID",
                    }),
                    searchText: "Diagnostic",
                  });
                }}
              >
                <Image source={Diagnostic} style={HomeStyle.img} />
                <Text style={HomeStyle.imgText}>Diagnostic</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={HomeStyle.imageContainer}
                onPress={() => {
                  navigation.navigate("SearchResult", {
                    filter: JSON.stringify({
                      services: "car towing service ID",
                    }),
                    searchText: "Tyre Replacement",
                  });
                }}
              >
                <Image source={TyreReplacement} style={HomeStyle.img} />
                <Text style={HomeStyle.imgText}>Tyre Replacement</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={HomeStyle.imageContainer}
                onPress={() => {
                  navigation.navigate("SearchResult", {
                    filter: JSON.stringify({
                      services: "car towing service ID",
                    }),
                    searchText: "Battery Replacement",
                  });
                }}
              >
                <Image source={BatteryReplacement} style={HomeStyle.img} />
                <Text style={HomeStyle.imgText}>Battery Replacement</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={HomeStyle.imageContainer}
                onPress={() => {
                  navigation.navigate("SearchResult", {
                    filter: JSON.stringify({
                      services: "car towing service ID",
                    }),
                    searchText: "Repair",
                  });
                }}
              >
                <Image source={Repair} style={HomeStyle.img} />
                <Text style={HomeStyle.imgText}>Repair</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={HomeStyle.imageContainer}
                onPress={() => {
                  navigation.navigate("SearchResult", {
                    filter: JSON.stringify({
                      services: "car towing service ID",
                    }),
                    searchText: "Others",
                  });
                }}
              >
                <Image source={Others} style={HomeStyle.img} />
                <Text style={HomeStyle.imgText}>Others</Text>
              </TouchableOpacity>
            </View>

            <Text style={[HomeStyle.title, { paddingTop: 47 }]}>
              Top Recommended Services
            </Text>

            <SafeAreaView style={[HomeStyle.scrollableLayout]}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ paddingBottom: 37 }}
              >
                <View style={{ width: 20 }} />
                <TouchableOpacity
                  style={HomeStyle.recommendedContainer}
                ></TouchableOpacity>

                <TouchableOpacity
                  style={HomeStyle.recommendedContainer}
                ></TouchableOpacity>

                <TouchableOpacity
                  style={HomeStyle.recommendedContainer}
                ></TouchableOpacity>

                <TouchableOpacity
                  style={HomeStyle.recommendedContainer}
                ></TouchableOpacity>

                <TouchableOpacity
                  style={HomeStyle.recommendedContainer}
                ></TouchableOpacity>
              </ScrollView>
            </SafeAreaView>

            <Text style={HomeStyle.title}>Top Rated Services</Text>

            <SafeAreaView style={[HomeStyle.scrollableLayout]}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ paddingBottom: 59 }}
              >
                <View style={{ width: 20 }} />
                <TouchableOpacity
                  style={HomeStyle.recommendedContainer}
                ></TouchableOpacity>

                <TouchableOpacity
                  style={HomeStyle.recommendedContainer}
                ></TouchableOpacity>

                <TouchableOpacity
                  style={HomeStyle.recommendedContainer}
                ></TouchableOpacity>

                <TouchableOpacity
                  style={HomeStyle.recommendedContainer}
                ></TouchableOpacity>

                <TouchableOpacity
                  style={HomeStyle.recommendedContainer}
                ></TouchableOpacity>
              </ScrollView>
            </SafeAreaView>
          </View>
        </ScrollView>
      </View>
    </Background>
  );
};
export default Home;
