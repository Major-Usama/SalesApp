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
  
  import { ChartBarSquareIcon } from "react-native-heroicons/outline";
import TaskItem from "../components/TaskItem";

  
  export default function ProjectsScreen({navigation}) {
    const [search, setSearch] = useState("");
    return (
      <View style={styles.container}>
         <ScrollView
          contentContainerStyle={{ paddingBottom: RFValue(50) }}
          showsVerticalScrollIndicator={false}
        >
        <Header showplus="none" />
       
          {/* Screen Title */}
          <View>
            <Text style={styles.screenTitle}>Projecten</Text>
            <Text style={styles.screenSubtitle}>
              Er zijn
              <Text style={{ ...styles.screenSubtitle, color: "#fff" }}> 9 </Text>
              projecten gevonden.
            </Text>
          </View>
  
          <View style={styles.searchInputMainContainer}>
            <SearchInput value={search} setValue={setSearch} />
          </View>

           
        <Text style={styles.taskthisweekText}>Prospect</Text>
        <View style={styles.taskThisWeekContainer}>
          <TaskItem
          onpress={()=>navigation.navigate('ProjectDetailScreen')}
            Icon={ChartBarSquareIcon}
            color="#FF9D9D"
            title="PROJECT"
            subtitle={`Bespreken van${"\n"}nieuwe contai...`}
            btnText="John Doe"
          />

          <TaskItem
           onpress={()=>navigation.navigate('ProjectDetailScreen')}
            Icon={ChartBarSquareIcon}
            color="#C5FBFF"
            title="TAAK"
            subtitle={`5 nieuwe${"\n"}containers van..`}
            btnText="Walters"
          />
        </View>

        {/* Opvolging */}
        <Text style={styles.taskthisweekText}>Opvolging</Text>
        <View style={styles.taskThisWeekContainer}>

        <TaskItem
         onpress={()=>navigation.navigate('ProjectDetailScreen')}
            Icon={ChartBarSquareIcon}
            color="#C5FBFF"
            title="TAAK"
            subtitle={`Bespreken van${"\n"}nieuwe contai...`}
            btnText="John Doe"
         
          />

          <TaskItem
           onpress={()=>navigation.navigate('ProjectDetailScreen')}
            Icon={ChartBarSquareIcon}
            color="#FF9D9D"
            title="PROJECT"
            subtitle={`5 nieuwe${"\n"}containers van..`}
            btnText="Walters"
            
          />

         
        </View>

        {/* Afspraak */}
           
        <Text style={styles.taskthisweekText}>Afspraak</Text>
        <View style={styles.taskThisWeekContainer}>

        <TaskItem
         onpress={()=>navigation.navigate('ProjectDetailScreen')}
            Icon={ChartBarSquareIcon}
            color="#C5FBFF"
            title="TAAK"
            subtitle={`Bespreken van${"\n"}nieuwe contai...`}
            btnText="John Doe"
         
          />

          <TaskItem
           onpress={()=>navigation.navigate('ProjectDetailScreen')}
            Icon={ChartBarSquareIcon}
            color="#FF9D9D"
            title="PROJECT"
            subtitle={`5 nieuwe${"\n"}containers van..`}
            btnText="Walters"
            
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
  });
  