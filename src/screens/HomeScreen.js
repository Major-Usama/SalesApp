import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import TopMenuItem from "../components/TopMenuItem";
import {
  CalendarDaysIcon,
  ChartBarSquareIcon,
  UsersIcon,
  BuildingOfficeIcon,
  DocumentIcon,
} from "react-native-heroicons/outline";
import TaskItem from "../components/TaskItem";
import ReportItem from "../components/ReportItem";
import FooterList from "../components/FooterList";
export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrolview}
      >
        {/* Screen Title */}
        <View>
          <Text style={styles.screenTitle}>Good morning,</Text>
        </View>

        <View style={styles.homeScreenTopMenu}>
          <TopMenuItem
            onpress={() => navigation.navigate("TasksScreen")}
            Icon={CalendarDaysIcon}
          />
          <TopMenuItem
            onpress={() => navigation.navigate("ProjectsScreen")}
            Icon={ChartBarSquareIcon}
          />
          <TopMenuItem
            onpress={() => navigation.navigate("ContactsScreen")}
            Icon={UsersIcon}
          />
          <TopMenuItem
            onpress={() => navigation.navigate("CompaniesScreen")}
            Icon={BuildingOfficeIcon}
          />
        </View>

        {/* Task this container */}
        <Text style={styles.taskthisweekText}>Taken deze week</Text>
        <View style={styles.taskThisWeekContainer}>
          <TaskItem
            Icon={CalendarDaysIcon}
            color="#FF9D9D"
            title="TAAK"
            subtitle={`Bellen met Jan${"\n"}over Auto's`}
            btnText="Gisteren"
          />

          <TaskItem
            Icon={CalendarDaysIcon}
            color="#C5FBFF"
            title="TAAK"
            subtitle={`Bellen met Jan${"\n"}over Auto's`}
            btnText="Morgen"
          />
        </View>

        {/* ReportItemContainer */}
        <View style={styles.reportItemContainer}>
          <ReportItem
            Icon={DocumentIcon}
            color="#FF9D9D"
            title="OPENSTAAND RAPPORT"
            subtitle={`John Doe`}
            btnText="Gisteren"
          />
        </View>

        {/* FooterListContainer */}
        <View style={styles.footerListMainContainer}>
          <FooterList />
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
    marginTop: RFValue(40),
  },
  homeScreenTopMenu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: RFValue(30),
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
  reportItemContainer: {
    marginTop: RFValue(10),
  },
  footerListMainContainer: {
    marginTop: RFValue(10),
  },
  scrolview: {
    paddingBottom: RFValue(50),
  },
});
