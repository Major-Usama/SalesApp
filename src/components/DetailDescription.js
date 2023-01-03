import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

const WIDTH = Dimensions.get("window").width;
export default function DetailDescription() {
  return (
    <View style={styles.detailDescriptionContainer}>
      <Text style={styles.title}>BESCHRIJVING</Text>

      <Text style={styles.description}>
        Corrupti perferendis debitis voluptas veritatis{"\n"}expedita magni,
        erferendis debitis voluptas{"\n"}veritatis expedita magni perferendis
        debitis.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailDescriptionContainer: {
    width: WIDTH - RFValue(10),
    backgroundColor: "#111111",
    borderRadius: 15,
    paddingVertical: RFValue(15),
    paddingLeft: RFValue(17),
    alignSelf: "center",
  },
  title: {
    color: "#9C9C9C",
    fontFamily: "Bold",
    fontSize: RFValue(9),
  },
  description: {
    color: "#C3C3C3",
    fontSize: RFValue(15),
    fontFamily: "Medium",
    marginTop: RFValue(9),
  },
});
