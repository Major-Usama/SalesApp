import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import { RFValue } from "react-native-responsive-fontsize";
import TargetItem from "../components/TargetItem";

export default function TargetsScreen() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  const renderItem = ({ item }) => <TargetItem />;

  return (
    <SafeAreaView style={styles.container}>
      <Header showplus="none" />
      <ScrollView
        contentContainerStyle={{ paddingBottom: RFValue(100) }}
        showsVerticalScrollIndicator={false}
      >
        {/* Screen Title */}
        <View>
          <Text style={styles.screenTitle}>Targets</Text>
          <Text style={styles.screenSubtitle}>
            Er zijn
            <Text style={{ ...styles.screenSubtitle, color: "#fff" }}> 3 </Text>
            targets gekoppeld.
          </Text>
        </View>

        <View>
          <FlatList
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  screenTitle: {
    fontSize: RFValue(30),
    fontFamily: "Medium",
    color: "#fff",
    marginHorizontal: RFValue(10),
    marginTop: RFValue(28),
  },
  screenSubtitle: {
    fontSize: RFValue(15),
    fontFamily: "Regular",
    color: "#6D6D6D",
    marginHorizontal: RFValue(10),
    marginTop: 2,
  },
  searchInputMainContainer: {
    marginTop: RFValue(18),
  },
  taskthisweekText: {
    fontFamily: "Medium",
    fontSize: RFValue(18),
    color: "#fff",
    marginTop: RFValue(20),
    marginHorizontal: 10,
    marginBottom: RFValue(20),
  },
  taskThisWeekContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  listContainer: {
    marginTop: RFValue(25),
  },
});
