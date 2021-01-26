import {
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import { Background, BranchDetailsModal } from "../../components/shared";
import HomeStyle from "./HomeStyle";
import { Item, Input, Icon, Button } from "native-base";
import { useState } from "react";

const CarTowing = require("../../staticResources/images/CarTowing.png");
const Diagnostic = require("../../staticResources/images/Diagnostic.png");
const TyreReplacement = require("../../staticResources/images/TyreReplacement.png");
const BatteryReplacement = require("../../staticResources/images/BatteryReplacement.png");
const Repair = require("../../staticResources/images/Repair.png");
const Others = require("../../staticResources/images/Others.png");

const Home = ({ navigation }) => {
  const [isBranchVisible, setIsBranchVisible] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(
    "12317239178932717jkahsdjk"
  );
  const [selectedService, setSelectedService] = useState(
    "12317239178932717jkahsdjk"
  );
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (txt) => {
    setSearchText(txt);
  };

  return (
    <Background>
      <BranchDetailsModal
        modalVisible={isBranchVisible}
        setModalVisible={setIsBranchVisible}
        id={selectedBranch}
        serviceId={selectedService}
      />
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
            <Item rounded style={HomeStyle.searchbar}>
              <Input
                placeholder="Search Services"
                value={searchText}
                onChangeText={handleSearchTextChange}
                textAlign="center"
                style={{ fontSize: 14 }}
              />
            </Item>
            <Button
              transparent
              style={{ alignSelf: "center" }}
              small
              onPress={() => {
                navigation.navigate("SearchResult", {
                  filter: JSON.stringify(
                    searchText.trim().length === 0
                      ? {}
                      : { branchAddr: searchText }
                  ),
                  searchText:
                    searchText.trim().length === 0 ? "All" : searchText,
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
                      services: "600aadb65f88c01a8fc4fd94",
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
                      services: "60102f314638da7a325727dc",
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
                      services: "60102bb51dabeb797760cc16",
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
                      services: "60102eef4638da7a325727da",
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
                      services: "60102efe4638da7a325727db",
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
                    filter: JSON.stringify({}),
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
                  onPress={() => {
                    setIsBranchVisible(true);
                    setSelectedBranch("600c04ca83b24376b31b1e14");
                    setSelectedService(
                      JSON.stringify({ services: "600aadb65f88c01a8fc4fd94" })
                    );
                  }}
                >
                  <Image
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMFLNlhbkuwX-_g3U_EGSk3rp75Xj8pA2Vg&usqp=CAU",
                    }}
                    style={HomeStyle.recommendedImage}
                  ></Image>
                </TouchableOpacity>

                <TouchableOpacity
                  style={HomeStyle.recommendedContainer}
                  onPress={() => {
                    setIsBranchVisible(true);
                    setSelectedBranch("600c04ca83b24376b31b1e14");
                    setSelectedService(
                      JSON.stringify({ services: "600aadb65f88c01a8fc4fd94" })
                    );
                  }}
                >
                  <Image
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLtEz6QEHhPnU8xOQoJspDL2U9f0UBh8LJLg&usqp=CAU",
                    }}
                    style={HomeStyle.recommendedImage}
                  ></Image>
                </TouchableOpacity>

                <TouchableOpacity
                  style={HomeStyle.recommendedContainer}
                  onPress={() => {
                    setIsBranchVisible(true);
                    setSelectedBranch("600c04ca83b24376b31b1e14");
                    setSelectedService(
                      JSON.stringify({ services: "600aadb65f88c01a8fc4fd94" })
                    );
                  }}
                >
                  <Image
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvkZdHe3SvCV9eq_ciCv843r4ObubXkA_Tw&usqp=CAU",
                    }}
                    style={HomeStyle.recommendedImage}
                  ></Image>
                </TouchableOpacity>

                <TouchableOpacity
                  style={HomeStyle.recommendedContainer}
                  onPress={() => {
                    setIsBranchVisible(true);
                    setSelectedBranch("600c04ca83b24376b31b1e14");
                    setSelectedService(
                      JSON.stringify({ services: "600aadb65f88c01a8fc4fd94" })
                    );
                  }}
                >
                  <Image
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVvpAnjJyR-NNPYKut8xuBiXAcLiBGR93Gg&usqp=CAU",
                    }}
                    style={HomeStyle.recommendedImage}
                  ></Image>
                </TouchableOpacity>

                <TouchableOpacity
                  style={HomeStyle.recommendedContainer}
                  onPress={() => {
                    setIsBranchVisible(true);
                    setSelectedBranch("600c04ca83b24376b31b1e14");
                    setSelectedService(
                      JSON.stringify({ services: "600aadb65f88c01a8fc4fd94" })
                    );
                  }}
                >
                  <Image
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMFLNlhbkuwX-_g3U_EGSk3rp75Xj8pA2Vg&usqp=CAU",
                    }}
                    style={HomeStyle.recommendedImage}
                  ></Image>
                </TouchableOpacity>
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
                  onPress={() => {
                    setIsBranchVisible(true);
                    setSelectedBranch("600c04ca83b24376b31b1e14");
                    setSelectedService(
                      JSON.stringify({ services: "600aadb65f88c01a8fc4fd94" })
                    );
                  }}
                >
                  <Image
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMFLNlhbkuwX-_g3U_EGSk3rp75Xj8pA2Vg&usqp=CAU",
                    }}
                    style={HomeStyle.recommendedImage}
                  ></Image>
                </TouchableOpacity>

                <TouchableOpacity
                  style={HomeStyle.recommendedContainer}
                  onPress={() => {
                    setIsBranchVisible(true);
                    setSelectedBranch("600c04ca83b24376b31b1e14");
                    setSelectedService(
                      JSON.stringify({ services: "600aadb65f88c01a8fc4fd94" })
                    );
                  }}
                >
                  <Image
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMFLNlhbkuwX-_g3U_EGSk3rp75Xj8pA2Vg&usqp=CAU",
                    }}
                    style={HomeStyle.recommendedImage}
                  ></Image>
                </TouchableOpacity>

                <TouchableOpacity
                  style={HomeStyle.recommendedContainer}
                  onPress={() => {
                    setIsBranchVisible(true);
                    setSelectedBranch("600c04ca83b24376b31b1e14");
                    setSelectedService(
                      JSON.stringify({ services: "600aadb65f88c01a8fc4fd94" })
                    );
                  }}
                >
                  <Image
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMFLNlhbkuwX-_g3U_EGSk3rp75Xj8pA2Vg&usqp=CAU",
                    }}
                    style={HomeStyle.recommendedImage}
                  ></Image>
                </TouchableOpacity>

                <TouchableOpacity
                  style={HomeStyle.recommendedContainer}
                  onPress={() => {
                    setIsBranchVisible(true);
                    setSelectedBranch("600c04ca83b24376b31b1e14");
                    setSelectedService(
                      JSON.stringify({ services: "600aadb65f88c01a8fc4fd94" })
                    );
                  }}
                >
                  <Image
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMFLNlhbkuwX-_g3U_EGSk3rp75Xj8pA2Vg&usqp=CAU",
                    }}
                    style={HomeStyle.recommendedImage}
                  ></Image>
                </TouchableOpacity>

                <TouchableOpacity
                  style={HomeStyle.recommendedContainer}
                  onPress={() => {
                    setIsBranchVisible(true);
                    setSelectedBranch("600c04ca83b24376b31b1e14");
                    setSelectedService(
                      JSON.stringify({ services: "600aadb65f88c01a8fc4fd94" })
                    );
                  }}
                >
                  <Image
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMFLNlhbkuwX-_g3U_EGSk3rp75Xj8pA2Vg&usqp=CAU",
                    }}
                    style={HomeStyle.recommendedImage}
                  ></Image>
                </TouchableOpacity>
              </ScrollView>
            </SafeAreaView>
          </View>
        </ScrollView>
      </View>
    </Background>
  );
};
export default Home;
