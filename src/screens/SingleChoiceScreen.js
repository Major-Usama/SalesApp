import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Platform,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import { RFValue } from "react-native-responsive-fontsize";

const WIDTH = Dimensions.get("window").width;
const DATA = [
  {
    id: "1",
    title: "Monday",
  },
  {
    id: "2",
    title: "Tuesday",
  },
  {
    id: "3",
    title: "Wednesday",
  },
  {
    id: "4",
    title: "Thursday",
  },
];
export default function SingleChoiceScreen({ navigation }) {
  const [selectedItem, setSelectedItem] = React.useState("3");
  const renderItem = ({ item }) => {
    const onPressItem = () => {
      setSelectedItem(item.id);
    };
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPressItem}
        style={{
          ...styles.dayItem,
          backgroundColor: selectedItem === item.id ? "#fff" : "#111111",
        }}
      >
        <Text
          style={{
            ...styles.title,
            color: selectedItem === item.id ? "#000" : "#fff",
          }}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: Platform.OS === "android" ? 50 : 200,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon color="#fff" fill="black" size={24} />
        </Pressable>

        <View style={styles.inputsContentContainer}>
          <Text style={styles.enterEmailText}>What day is it?</Text>

          <Text style={styles.sentCodeText}>
            This is the description of a question, make{"\n"}sure this scales
            properly as it’s per user.
          </Text>
        </View>

        <View>
          <FlatList
            contentContainerStyle={{ marginTop: RFValue(20) }}
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
      <View style={styles.footerButtonsContainer}>
        <Pressable
          style={styles.footerButton}
          // onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon color="#fff" fill="black" size={24} />
        </Pressable>

        <Pressable
          style={styles.footerButton}
          // onPress={() => navigation.goBack()}
        >
          <ChevronRightIcon color="#fff" fill="black" size={24} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  backButton: {
    width: 60,
    height: 60,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: RFValue(40),
    marginLeft: RFValue(35),
  },
  enterEmailText: {
    fontSize: RFValue(30),
    color: "#fff",
    fontFamily: "Medium",
    marginLeft: RFValue(28),
  },
  sentCodeText: {
    color: "#6D6D6D",
    fontSize: RFValue(15),
    fontFamily: "Regular",
    marginTop: 5,
    marginLeft: RFValue(28),
  },
  searchInputMainContainer: {
    marginTop: RFValue(18),
    alignSelf: "center",
  },
  inputsContentContainer: {
    marginTop: RFValue(28),
  },
  button: {
    width: RFValue(170),
    height: RFValue(55),
    backgroundColor: "#111111",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: Dimensions.get("window").height / 10,
  },
  btnText: {
    color: "#fff",
    fontFamily: "Bold",
    fontSize: RFValue(15),
  },
  dayItem: {
    width: WIDTH - 50,
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#111111",
    marginBottom: 20,
  },
  title: {
    color: "#fff",
    fontSize: RFValue(16),
    fontFamily: "SemiBold",
  },
  footerButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  footerButton: {
    width: 50,
    height: 50,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginLeft: 30,
    bottom: RFValue(50),
  },
});
