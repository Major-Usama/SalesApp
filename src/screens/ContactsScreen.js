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

import { UserIcon, } from "react-native-heroicons/outline";
import ReportItem from "../components/ReportItem";
const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "4",
    title: "Third Item",
  },
  {
    id: "5",
    title: "Third Item",
  },
];

export default function ContactsScreen({navigation}) {
  const [search, setSearch] = useState("");
  const renderItem = ({ item }) => (
    <View style={styles.reportItemContainer}>
      <ReportItem
       onpress={()=>navigation.navigate('ContactDetailScreen')}
        Icon={UserIcon}
        color="#C4FBFF"
        title="OPENSTAAND RAPPORT"
        subtitle={`John Doe`}
        btnText="Gisteren"
        latestcontact="LAATSTE CONTACT"
        weekagotext="1 week geleden"
      />
    </View>
  );
  return (
    <View style={styles.container}>
       <ScrollView
        contentContainerStyle={{ paddingBottom: RFValue(50) }}
        showsVerticalScrollIndicator={false}
      >
      <Header 
      onpress={()=>navigation.navigate('AddContactScreen')}
     
     showplus="flex" />
     
        {/* Screen Title */}
        <View>
          <Text style={styles.screenTitle}>Contacten</Text>
          <Text style={styles.screenSubtitle}>
            Er zijn
            <Text style={{ ...styles.screenSubtitle, color: "#fff" }}>
              {" "}
              238{" "}
            </Text>
            contacten gevonden.
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
    </View>
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
