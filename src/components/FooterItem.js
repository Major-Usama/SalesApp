import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
const WIDTH = Dimensions.get("window").width;
import { ChevronRightIcon } from "react-native-heroicons/outline";

export default function FooterItem(props) {
  return (
    <TouchableOpacity 
    onPress={props.onpress}
    style={styles.itemContainer}>
      <View style={styles.itemLeftContainer}>
        <props.Icon
          color={props.fillcolor}
          fill={props.color}
          size={RFValue(24)}
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>{props.title}</Text>

          <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
      </View>

      <ChevronRightIcon color={"#6D6D6D"} fill="black" size={16} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: WIDTH - RFValue(19),
    height: RFValue(44),
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: RFValue(9),
    marginBottom: RFValue(15),
    // paddingHorizontal:9,
  },
  itemLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "Regular",
    fontSize: RFValue(15),
    color: "#fff",
  },
  subtitle: {
    color: "#9C9C9C",
    fontFamily: "Regular",
    fontSize: RFValue(13),
  },

  textContainer: {
    marginLeft: RFValue(20),
  },
});
