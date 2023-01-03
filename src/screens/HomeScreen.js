import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import TopMenuItem from "../components/TopMenuItem";
import {
  CalendarDaysIcon,
  ChartBarSquareIcon,
  UsersIcon,
  BuildingOfficeIcon,
  DocumentIcon,
  DocumentDuplicateIcon,
  ChartPieIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import TaskItem from "../components/TaskItem";
import ReportItem from "../components/ReportItem";
import FooterList from "../components/FooterList";
export default function HomeScreen({ navigation }) {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      type: "active",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      type: "nonactive",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      type: "active",
    },
  ];

  const renderItem = ({ item }) => {
    if (item.type === "active") {
      return (
        <TaskItem
          Icon={CalendarDaysIcon}
          color="#FF9D9D"
          title="TAAK"
          subtitle={`Bellen met Jan${"\n"}over Auto's`}
          btnText="Gisteren"
        />
      );
    } else {
      return (
        <TaskItem
          Icon={CalendarDaysIcon}
          color="#C5FBFF"
          title="TAAK"
          subtitle={`Bellen met Jan${"\n"}over Auto's`}
          btnText="Morgen"
        />
      );
    }
  };

  return (
    <View style={styles.container}>
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

        <View>
          <FlatList
            contentContainerStyle={{
              marginLeft: RFValue(10),
              paddingRight: RFValue(20),
            }}
            horizontal
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
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
          <FooterList
            Icon={DocumentDuplicateIcon}
            onpress={() => navigation.navigate("ReportsScreen")}
            title="Rapporten"
            subtitle="Bekijk alle rapporten."
            color="#6D6D6D"
            fillcolor="#000000"
          />

          <FooterList
            Icon={ChartPieIcon}
            onpress={() => navigation.navigate("TargetsScreen")}
            title="Targets"
            subtitle="Bekijk uw 5 targets."
            color="#6D6D6D"
            fillcolor="#000000"
          />

          <FooterList
            Icon={AdjustmentsVerticalIcon}
            onpress={() => navigation.navigate("SettingsScreen")}
            title="Instellingen"
            subtitle="Pas uw instellingen hier aan."
            color="#6D6D6D"
            fillcolor="#6D6D6D"
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
  taskThisWeekContainer: {},
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
