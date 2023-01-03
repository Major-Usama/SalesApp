import { Pressable, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import React from "react";
import {
  ChevronLeftIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";

import { useNavigation } from "@react-navigation/native";
export default function Header(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Pressable
      style={styles.backButton}
      onPress={() => navigation.goBack()}>
        <ChevronLeftIcon color="#fff" fill="black" size={32} />
      </Pressable>

      <View
      
      style={{ ...styles.backButton,display: props.showplus }}>
        <PlusCircleIcon color="#fff" fill="black" size={32} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: RFValue(12),
    marginTop: RFValue(50),
  },
  backButton: {
    width: 60,
    height: 60,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    // marginTop: RFValue(40),
    // marginLeft: RFValue(35),
  },
});
