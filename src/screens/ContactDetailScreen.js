import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { RFValue } from 'react-native-responsive-fontsize'
import TopMenuItem from '../components/TopMenuItem'

import {
  MapPinIcon,
  PhoneArrowUpRightIcon,
  EnvelopeIcon,
  BuildingOfficeIcon
  } from "react-native-heroicons/solid";
import DetailMenuItem from '../components/DetailMenuItem'
import DetailDescription from '../components/DetailDescription'

export default function ContactDetailScreen() {
  return (
    <View style={styles.container}>
      <Header showplus="flex" />

      <View>
          <Text style={styles.screenTitle}>John Doe</Text>
          <Text style={styles.screenSubtitle}>
          1 week geleden
          </Text>
        </View>

        <View style={styles.homeScreenTopMenu}>
          <DetailMenuItem
            // onpress={() => navigation.navigate("TasksScreen")}
            Icon={MapPinIcon}
          />
          <DetailMenuItem
            // onpress={() => navigation.navigate("ProjectsScreen")}
            Icon={PhoneArrowUpRightIcon}
          />
          <DetailMenuItem
            // onpress={() => navigation.navigate("ContactsScreen")}
            Icon={EnvelopeIcon}
          />
          <DetailMenuItem
            // onpress={() => navigation.navigate("CompaniesScreen")}
            Icon={BuildingOfficeIcon}
          />
        </View>


        <View style={styles.detailMainContainer}>

        <DetailDescription />

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
container:
{
    flex:1,
    backgroundColor:'#000'
},
screenTitle: {
    fontSize: RFValue(30),
    fontFamily: "Medium",
    color: "#fff",
    marginHorizontal: RFValue(10),
    marginTop: RFValue(18),
    textAlign:'center'
  },
  screenSubtitle: {
    fontSize: RFValue(15),
    fontFamily: "Regular",
    color: "#6D6D6D",
    marginHorizontal: RFValue(10),
    marginTop: 2,
    textAlign:'center'
  },
  homeScreenTopMenu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: RFValue(30),
  },
  detailMainContainer:
  {
    marginTop:RFValue(50)
  }
    
})