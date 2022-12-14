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
import SearchInput from "../components/SearchInput";

import { CalendarDaysIcon, CalendarIcon } from "react-native-heroicons/outline";
import ReportItem from "../components/ReportItem";
const DATA = [
  {
    id: "1",
    title: "First Item",
    type: "active",
  },
  {
    id: "2",
    title: "Second Item",
    type: "nonactive",
  },
  {
    id: "3",
    title: "Third Item",
    type: "nonactive",
  },
];

export default function TasksScreen() {
  const [search, setSearch] = useState("");
  const renderItem = ({ item }) => {
    if (item.type === "active") {
      return (
        <View style={styles.reportItemContainer}>
          <ReportItem
            Icon={CalendarDaysIcon}
            color="#FF9D9D"
            title="TAAK"
            subtitle={`Bellen met klant o...`}
            btnText="John Doe"
            latestcontact="OVER"
            weekagotext="GISteren"
          />
        </View>
      );
    } else {
      return (
        <View style={styles.reportItemContainer}>
          <ReportItem
            Icon={CalendarDaysIcon}
            color="#C4FBFF"
            title="TAAK"
            subtitle={`Bellen met klant o...`}
            btnText="John Doe"
            latestcontact="OVER"
            weekagotext="2 weken"
          />
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header showplus="none" />
      <ScrollView
        contentContainerStyle={{ paddingBottom: RFValue(100) }}
        showsVerticalScrollIndicator={false}
      >
        {/* Screen Title */}
        <View>
          <Text style={styles.screenTitle}>Taken</Text>
          <Text style={styles.screenSubtitle}>
            Er zijn
            <Text style={{ ...styles.screenSubtitle, color: "#fff" }}> 3 </Text>
            taken gevonden.
          </Text>
        </View>

        <View style={styles.searchInputMainContainer}>
          <SearchInput value={search} setValue={setSearch} />
        </View>

        <View>
          <FlatList
            contentContainerStyle={{ marginTop: RFValue(18) }}
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
});
