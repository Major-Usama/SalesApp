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
import SettingItem from "../components/SettingItem";
import {
  PaperAirplaneIcon,
  LockClosedIcon,
  KeyIcon,
  EnvelopeIcon,
  ArrowRightOnRectangleIcon,
} from "react-native-heroicons/outline";
import FooterList from "../components/FooterList";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header showplus="none" />
      <ScrollView
        contentContainerStyle={{ paddingBottom: RFValue(100) }}
        showsVerticalScrollIndicator={false}
      >
        {/* Screen Title */}
        <View>
          <Text style={styles.screenTitle}>John Doe</Text>
          <Text style={styles.screenSubtitle}>john.doe@waltersinc.com</Text>
        </View>

        <View style={styles.itemContainer}>
          <View style={styles.itemFirstRow}>
            <SettingItem
              title={`Push${"\n"}notifications`}
              subtitle="AAN"
              Icon={PaperAirplaneIcon}
              showswitch={"flex"}
            />

            <SettingItem
              title={`Two-factor${"\n"}Authentication`}
              subtitle="AAN"
              Icon={LockClosedIcon}
              showswitch={"none"}
            />
          </View>

          <View style={styles.itemFirstRow}>
            <SettingItem
              title={`Dagelijkse${"\n"}herinneringen`}
              subtitle="AAN"
              Icon={PaperAirplaneIcon}
              showswitch={"flex"}
            />

            <SettingItem
              title={`Wekelijkse${"\n"}herinneringen`}
              subtitle="AAN"
              Icon={LockClosedIcon}
              showswitch={"flex"}
            />
          </View>
        </View>

        <View style={styles.footerListContainer}>
          <FooterList
            Icon={KeyIcon}
            //  onpress={()=>navigation.navigate('SettingsScreen')}
            title="Wachtwoord aanpassen"
            subtitle="Pas hier jouw wachtwoord aan."
            color="#6D6D6D"
            fillcolor="#6D6D6D"
          />

          <FooterList
            Icon={EnvelopeIcon}
            // onpress={()=>navigation.navigate('SettingsScreen')}
            title="Email aanpassen"
            subtitle="Pas hier jouw e-mail aan."
            color="#6D6D6D"
            fillcolor="#000"
          />

          <FooterList
            Icon={ArrowRightOnRectangleIcon}
            // onpress={()=>navigation.navigate('SettingsScreen')}
            title="Uitloggen"
            subtitle="Klik hier om uiteloggen."
            color="#000"
            fillcolor="#6D6D6D"
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

  itemFirstRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: RFValue(15),
  },
  itemContainer: {
    marginTop: RFValue(25),
  },
  footerListContainer: {
    marginTop: RFValue(32),
  },
});
