import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Header from "../components/Header";
import { RFValue } from "react-native-responsive-fontsize";

import {
  BuildingOfficeIcon,
  UserPlusIcon,
  UserIcon,
  PencilIcon,
  TrashIcon,
} from "react-native-heroicons/solid";
import DetailMenuItem from "../components/DetailMenuItem";
import DetailDescription from "../components/DetailDescription";
import DetailFooter from "../components/DetailFooter";

export default function ProjectDetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <Header
          onpress={() => navigation.navigate("SingleChoiceScreen")}
          showplus="flex"
        />

        <View>
          <Text style={styles.screenTitle}>Containers</Text>
          <Text style={styles.screenSubtitle}>1 week geleden</Text>
        </View>

        <View style={styles.homeScreenTopMenu}>
          <DetailMenuItem
            // onpress={() => navigation.navigate("TasksScreen")}
            Icon={UserIcon}
          />
          <DetailMenuItem
            // onpress={() => navigation.navigate("ProjectsScreen")}
            Icon={BuildingOfficeIcon}
          />
          <DetailMenuItem
            // onpress={() => navigation.navigate("ContactsScreen")}
            Icon={PencilIcon}
          />
          <DetailMenuItem
            // onpress={() => navigation.navigate("CompaniesScreen")}
            Icon={TrashIcon}
          />
        </View>

        <View style={styles.detailMainContainer}>
          <DetailDescription />
        </View>
        <View>
          <DetailFooter />
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
    marginTop: RFValue(18),
    textAlign: "center",
  },
  screenSubtitle: {
    fontSize: RFValue(15),
    fontFamily: "Regular",
    color: "#6D6D6D",
    marginHorizontal: RFValue(10),
    marginTop: 2,
    textAlign: "center",
  },
  homeScreenTopMenu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: RFValue(30),
  },
  detailMainContainer: {
    marginTop: RFValue(50),
  },
});
